'use client'

import { useEffect, useRef, type RefObject } from 'react'
import * as THREE from 'three'

/**
 * Embudo de partículas: cada partícula es una aparición en Google que cae
 * por el embudo. La probabilidad de pasar a la siguiente etapa sale de los
 * datos reales (clics / apariciones, formularios / clics, envíos / formularios),
 * así que lo que se ve en pantalla respeta la proporción del trimestre.
 */

type Props = {
  /** Valores de las etapas, de arriba abajo */
  stages: readonly number[]
  /** Etapa resaltada (0..n-1) o -1 para ninguna */
  active: number
  className?: string
  /** Etiquetas DOM que se colocan junto a cada anillo (proyectado a pantalla) */
  labels?: RefObject<(HTMLElement | null)[]>
  /** Espacio a la derecha reservado para las etiquetas, en unidades de escena */
  labelRoom?: number
}

const COUNT = 6000
const TOP_Y = 3.0
const BOTTOM_Y = -3.0
const TOP_R = 2.45
const BOTTOM_R = 0.32

function radiusAt(y: number) {
  const t = (TOP_Y - y) / (TOP_Y - BOTTOM_Y) // 0 arriba, 1 abajo
  // Curva de embudo: se cierra rápido y luego baja estrecho
  return BOTTOM_R + (TOP_R - BOTTOM_R) * Math.pow(1 - t, 2.2)
}

export default function FunnelScene({ stages, active, className, labels, labelRoom = 1.6 }: Props) {
  const mountRef = useRef<HTMLDivElement>(null)
  const activeRef = useRef(active)
  activeRef.current = active

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const levels = stages.length
    const levelY = (i: number) => TOP_Y - (i / (levels - 1)) * (TOP_Y - BOTTOM_Y)

    // Probabilidad de pasar de la etapa i a la i+1
    const pass = stages.slice(1).map((v, i) => Math.min(1, v / stages[i]))

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)
    renderer.domElement.setAttribute('aria-hidden', 'true')

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100)
    camera.position.set(0, 0.8, 11)

    const group = new THREE.Group()
    group.rotation.x = 0.32
    // Desplazado a la izquierda para dejar sitio a las etiquetas
    group.position.x = -labelRoom / 2
    scene.add(group)

    // ── Anillos de etapa ────────────────────────────────────────────
    const rings: THREE.LineLoop[] = []
    for (let i = 0; i < levels; i++) {
      const y = levelY(i)
      const r = radiusAt(y)
      const pts: THREE.Vector3[] = []
      for (let a = 0; a < 128; a++) {
        const ang = (a / 128) * Math.PI * 2
        pts.push(new THREE.Vector3(Math.cos(ang) * r, y, Math.sin(ang) * r))
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts)
      const mat = new THREE.LineBasicMaterial({ color: 0x0e9acd, transparent: true, opacity: 0.22 })
      const ring = new THREE.LineLoop(geo, mat)
      rings.push(ring)
      group.add(ring)
    }

    // ── Partículas ─────────────────────────────────────────────────
    const pos = new Float32Array(COUNT * 3)
    const alpha = new Float32Array(COUNT)
    const size = new Float32Array(COUNT)
    const depth = new Float32Array(COUNT) // 0..levels-1 (continuo)
    const angle = new Float32Array(COUNT)
    const speed = new Float32Array(COUNT)
    const spin = new Float32Array(COUNT)
    const limit = new Uint8Array(COUNT) // etapa máxima a la que llega
    const jitter = new Float32Array(COUNT)

    const pickLimit = () => {
      let l = 0
      while (l < pass.length && Math.random() < pass[l]) l++
      return l
    }

    const spawn = (i: number, initial: boolean) => {
      limit[i] = pickLimit()
      // Al inicio repartimos las partículas por todo su recorrido para que
      // el embudo se vea poblado desde el primer frame
      depth[i] = initial ? Math.random() * (limit[i] + 0.9) : -0.15 - Math.random() * 0.4
      angle[i] = Math.random() * Math.PI * 2
      speed[i] = 0.06 + Math.random() * 0.08
      spin[i] = (0.25 + Math.random() * 0.5) * (Math.random() < 0.5 ? -1 : 1)
      jitter[i] = 0.82 + Math.random() * 0.22
      size[i] = limit[i] >= levels - 1 ? 4.2 : limit[i] >= 1 ? 2.8 : 1.5
    }
    for (let i = 0; i < COUNT; i++) spawn(i, true)

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(alpha, 1))
    geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1))

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uPixel: { value: renderer.getPixelRatio() },
        uCyan: { value: new THREE.Color(0x0e9acd) },
        uWhite: { value: new THREE.Color(0xe6f7ff) },
      },
      vertexShader: /* glsl */ `
        attribute float aAlpha;
        attribute float aSize;
        uniform float uPixel;
        varying float vAlpha;
        varying float vHot;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = aSize * uPixel * (34.0 / -mv.z);
          vAlpha = aAlpha;
          vHot = step(3.0, aSize);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uCyan;
        uniform vec3 uWhite;
        varying float vAlpha;
        varying float vHot;
        void main() {
          vec2 c = gl_PointCoord - 0.5;
          float d = length(c);
          if (d > 0.5) discard;
          float soft = smoothstep(0.5, 0.0, d);
          vec3 col = mix(uCyan, uWhite, vHot * 0.85);
          gl_FragColor = vec4(col, soft * vAlpha);
        }
      `,
    })
    const points = new THREE.Points(geo, mat)
    group.add(points)

    const place = (i: number, dt: number) => {
      const d = depth[i]
      const segment = Math.max(0, Math.min(levels - 1, d))
      const y = TOP_Y - (segment / (levels - 1)) * (TOP_Y - BOTTOM_Y) - Math.max(0, -d) * -0.9
      const r = radiusAt(Math.min(TOP_Y, y)) * jitter[i]
      angle[i] += spin[i] * dt * (1 + segment * 0.6)
      pos[i * 3] = Math.cos(angle[i]) * r
      pos[i * 3 + 1] = Math.min(TOP_Y + 0.5, y)
      pos[i * 3 + 2] = Math.sin(angle[i]) * r

      // Desvanecer al llegar a su etapa límite
      const over = d - limit[i]
      let a = d < 0 ? Math.max(0, 1 + d * 3) : 1
      if (over > 0) a *= Math.max(0, 1 - over / 0.55)
      const base = limit[i] >= 1 ? 1.0 : 0.5
      alpha[i] = a * base
    }

    // ── Tamaño ─────────────────────────────────────────────────────
    const resize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      if (!w || !h) return
      renderer.setSize(w, h, false)
      renderer.domElement.style.width = '100%'
      renderer.domElement.style.height = '100%'
      camera.aspect = w / h
      // En pantallas estrechas alejamos la cámara para que quepa el embudo
      // Distancia mínima para que el embudo entero (y sus etiquetas) quepa
      // siempre en el lienzo, sea cual sea su proporción
      const t = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))
      const halfW = TOP_R + labelRoom / 2 + 0.3
      const halfH = (TOP_Y - BOTTOM_Y) / 2 + 0.5
      camera.position.z = Math.max(halfH / t, halfW / (t * camera.aspect))
      camera.updateProjectionMatrix()
      renderer.render(scene, camera)
      placeLabels()
    }

    // ── Bucle ──────────────────────────────────────────────────────
    let raf = 0
    let running = false
    let last = performance.now()
    let camY = 0.8

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now

      for (let i = 0; i < COUNT; i++) {
        depth[i] += speed[i] * dt * (depth[i] < 0.6 ? 1 : 0.7)
        if (depth[i] - limit[i] > 0.6) spawn(i, false)
        place(i, dt)
      }
      geo.attributes.position.needsUpdate = true
      geo.attributes.aAlpha.needsUpdate = true
      geo.attributes.aSize.needsUpdate = true

      const act = activeRef.current
      rings.forEach((ring, i) => {
        const m = ring.material as THREE.LineBasicMaterial
        const target = i === act ? 0.95 : 0.18
        m.opacity += (target - m.opacity) * Math.min(1, dt * 6)
      })

      // La cámara baja hacia la etapa activa
      // El embudo queda fijo y centrado; la etapa activa se marca con su anillo
      const targetY = 0.8
      camY += (targetY - camY) * Math.min(1, dt * 2.5)
      camera.position.y = camY
      camera.lookAt(0, (camY - 0.8) * 0.9, 0)

      group.rotation.y += dt * 0.06
      renderer.render(scene, camera)
      placeLabels()
      if (running) raf = requestAnimationFrame(frame)
    }

    const start = () => {
      if (running || reduced) return
      running = true
      last = performance.now()
      raf = requestAnimationFrame(frame)
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    // Coloca cada etiqueta a la derecha de su anillo, en coordenadas de pantalla
    const tmp = new THREE.Vector3()
    const tilt = new THREE.Matrix4().makeRotationX(group.rotation.x)
    const placeLabels = () => {
      const els = labels?.current
      if (!els) return
      const w = mount.clientWidth
      const h = mount.clientHeight
      for (let i = 0; i < levels; i++) {
        const el = els[i]
        if (!el) continue
        const y = levelY(i)
        tmp.set(radiusAt(y) + 0.35, y, 0).applyMatrix4(tilt).add(group.position).project(camera)
        // Nunca dejar que la etiqueta se salga por la derecha de la columna
        const x = Math.min((tmp.x * 0.5 + 0.5) * w, w - el.offsetWidth - 8)
        const yy = (-tmp.y * 0.5 + 0.5) * h
        el.style.transform = `translate3d(${x.toFixed(1)}px, ${yy.toFixed(1)}px, 0) translateY(-50%)`
      }
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(mount)

    // Primer frame estático (también es el estado con movimiento reducido)
    for (let i = 0; i < COUNT; i++) place(i, 0)
    geo.attributes.position.needsUpdate = true
    geo.attributes.aAlpha.needsUpdate = true
    camera.lookAt(0, (camY - 0.8) * 0.9, 0)
    renderer.render(scene, camera)
    placeLabels()

    // Con movimiento reducido re-renderizamos solo cuando cambia la etapa
    let lastActive = activeRef.current
    const reducedTick = window.setInterval(() => {
      if (!reduced || activeRef.current === lastActive) return
      lastActive = activeRef.current
      rings.forEach((ring, i) => {
        ;(ring.material as THREE.LineBasicMaterial).opacity = i === lastActive ? 0.95 : 0.18
      })
      renderer.render(scene, camera)
      placeLabels()
    }, 200)

    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()), { threshold: 0 })
    io.observe(mount)
    const onVis = () => (document.hidden ? stop() : start())
    document.addEventListener('visibilitychange', onVis)

    return () => {
      stop()
      window.clearInterval(reducedTick)
      io.disconnect()
      ro.disconnect()
      document.removeEventListener('visibilitychange', onVis)
      geo.dispose()
      mat.dispose()
      rings.forEach((r) => {
        r.geometry.dispose()
        ;(r.material as THREE.Material).dispose()
      })
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [stages])

  return <div ref={mountRef} className={className} />
}
