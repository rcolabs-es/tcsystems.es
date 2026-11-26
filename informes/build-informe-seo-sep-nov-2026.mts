// Genera el informe A4 imprimible (HTML autocontenido) a partir de los mismos
// datos que la página /informes/noviembre.
//   node informes/build-informe-seo-sep-nov-2026.mts
// Después, para el PDF:
//   chrome --headless=new --no-pdf-header-footer --print-to-pdf=informes/informe-seo-sep-nov-2026.pdf informes/informe-seo-sep-nov-2026.html

import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  clics,
  contactos,
  embudo,
  oportunidades,
  periodo,
  plan,
  presupuestos,
  visibilidad,
  visitas,
} from '../lib/informes/seo-sep-nov-2026.ts'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const b64 = (p: string) => readFileSync(join(root, p)).toString('base64')
const logoTcs = `data:image/png;base64,${b64('informes/logo-tcsystems-sm.png')}`
const logoRco = `data:image/png;base64,${b64('public/informes/rco.png')}`

const nf = new Intl.NumberFormat('es-ES', { useGrouping: 'always' } as Intl.NumberFormatOptions)
const n = (v: number) => nf.format(v)
const d1 = (v: number) => v.toLocaleString('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function delta(ahora: number, antes: number) {
  if (!antes) return '<span class="d n">nuevo</span>'
  const p = Math.round(((ahora - antes) / antes) * 100)
  const cls = p > 0 ? 'up' : p < 0 ? 'dn' : 'n'
  return `<span class="d ${cls}">${p > 0 ? '▲ +' : p < 0 ? '▼ ' : '= '}${n(p)} %</span>`
}

function compare(caption: string, rows: { label: string; ahora: number; antes: number }[]) {
  const max = Math.max(...rows.flatMap((r) => [r.ahora, r.antes]))
  const w = (v: number) => `${(Math.max(0.6, (v / max) * 100) * 0.8).toFixed(1)}%`
  return `
  <figure class="chart">
    <figcaption><span>${esc(caption)}</span>
      <span class="legend"><i class="sw prev"></i>jun–ago <i class="sw now"></i>sep–nov</span></figcaption>
    <ul>${rows
      .map(
        (r) => `
      <li><span class="lbl">${esc(r.label)}</span>
        <span class="bars">
          <span class="row"><span class="bar prev" style="width:${w(r.antes)}"></span><span class="v vp">${n(r.antes)}</span></span>
          <span class="row"><span class="bar now" style="width:${w(r.ahora)}"></span><span class="v">${n(r.ahora)}</span></span>
        </span></li>`
      )
      .join('')}
    </ul>
  </figure>`
}

function rank(caption: string, rows: { label: string; value: number }[], highlight?: string) {
  const max = Math.max(...rows.map((r) => r.value))
  return `
  <figure class="chart">
    <figcaption><span>${esc(caption)}</span></figcaption>
    <ul class="rank">${rows
      .map(
        (r) => `
      <li class="${r.label === highlight ? 'hot' : ''}"><span class="lbl">${esc(r.label)}</span>
        <span class="row"><span class="bar ${r.label === highlight ? 'now' : 'dim'}" style="width:${((Math.max(0.8, (r.value / max) * 100)) * 0.78).toFixed(1)}%"></span><span class="v">${n(r.value)}</span></span></li>`
      )
      .join('')}
    </ul>
  </figure>`
}

function runningHead(stage: number | null, page: number) {
  const segs = embudo
    .map((e, i) => `<span class="seg ${stage !== null && i <= stage ? 'on' : ''}" title="${esc(e.etapa)}"></span>`)
    .join('')
  return `
  <header class="rh">
    <span class="rh-logos"><img src="${logoTcs}" alt="TCSystems" class="l-tcs"><span class="x">×</span><img src="${logoRco}" alt="RCO Labs" class="l-rco"></span>
    <span class="rh-title">Informe SEO · ${periodo.corto}</span>
    <span class="rh-stage">${stage !== null ? `<span class="segs">${segs}</span>` : ''}<span class="pg">${page}</span></span>
  </header>`
}

function stageOpen(i: number, statement: string) {
  const e = embudo[i]
  return `
  <div class="stage-head">
    <p class="kick">Etapa ${i + 1} de 4 · ${esc(e.etapa)}</p>
    <p class="big"><span class="num">${n(e.valor)}</span><span class="unit">${esc(e.unidad)}</span></p>
    ${e.antes !== null ? `<p class="before">Antes ${n(e.antes)} · ${delta(e.valor, e.antes)}</p>` : ''}
    <h2>${esc(statement)}</h2>
  </div>`
}

// Embudo de portada: bandas apiladas que se estrechan (ancho en escala logarítmica)
function coverFunnel() {
  const W = 520
  const minW = 70
  const lmax = Math.log10(embudo[0].valor)
  const lmin = Math.log10(embudo[embudo.length - 1].valor)
  const width = (v: number) => minW + ((Math.log10(v) - lmin) / (lmax - lmin)) * (W - minW)
  const bandH = 46
  const gap = 10
  let svg = ''
  embudo.forEach((e, i) => {
    const top = width(e.valor)
    const next = i < embudo.length - 1 ? width(embudo[i + 1].valor) : top * 0.82
    const y = i * (bandH + gap)
    const x0 = (W - top) / 2
    const x1 = (W - next) / 2
    const op = 1 - i * 0.12
    svg += `<path d="M${x0},${y} L${x0 + top},${y} L${x1 + next},${y + bandH} L${x1},${y + bandH} Z" fill="#ffffff" fill-opacity="${op.toFixed(2)}"/>`
  })
  return `<svg class="cf" viewBox="0 0 ${W} ${embudo.length * (bandH + gap) - gap}" aria-hidden="true">${svg}</svg>`
}

const css = /* css */ `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@page { size: A4; margin: 0; }
:root {
  --paper: #ffffff; --ink: #0b1218; --ink-2: #33444e; --muted: #5b6b74;
  --line: #e2e8eb; --cyan: #0e9acd; --cyan-text: #0a6f95; --cyan-deep: #075a7a;
  --prev: #c5d0d6; --dim: #7fc3df; --up: #0f7a55; --dn: #b4412f;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html { background: #d9e0e4; }
body { font-family: Inter, 'Helvetica Neue', Arial, sans-serif; color: var(--ink); font-feature-settings: 'tnum' 1, 'cv11' 1;
  -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.page { width: 210mm; height: 297mm; margin: 10mm auto; background: var(--paper); position: relative; overflow: hidden;
  padding: 14mm 16mm 14mm; display: flex; flex-direction: column; box-shadow: 0 4px 24px rgb(0 0 0 / .12); }
@media print { html { background: none; } .page { margin: 0; box-shadow: none; break-after: page; } }

.rh { display: flex; align-items: center; gap: 14px; padding-bottom: 5mm; border-bottom: 1px solid var(--line); font-size: 9pt; color: var(--muted); }
.rh-logos { display: inline-flex; align-items: center; gap: 7px; }
.l-tcs { height: 22px; } .l-rco { height: 11px; } .x { color: #9aa8b0; font-size: 9pt; }
.rh-title { font-weight: 500; }
.rh-stage { margin-left: auto; display: inline-flex; align-items: center; gap: 12px; }
.segs { display: inline-flex; gap: 3px; } .seg { width: 18px; height: 4px; border-radius: 2px; background: var(--line); } .seg.on { background: var(--cyan); }
.pg { font-weight: 600; color: var(--ink); }

/* Portada */
.cover { padding: 0; }
.cover-top { padding: 16mm 16mm 0; flex: 0 0 auto; }
.cover-logos { display: inline-flex; align-items: center; gap: 14px; }
.cover-logos .l-tcs { height: 46px; } .cover-logos .l-rco { height: 22px; } .cover-logos .x { font-size: 12pt; }
.cover h1 { margin-top: 18mm; font-size: 46pt; line-height: .98; letter-spacing: -0.04em; font-weight: 700; max-width: 11ch; }
.cover .lede { margin-top: 7mm; font-size: 12.5pt; line-height: 1.5; color: var(--ink-2); max-width: 46ch; }
.cover-keys { list-style: none; margin-top: 14mm; display: grid; grid-template-columns: repeat(3, 1fr); border-top: 2px solid var(--ink); }
.cover-keys li { padding: 4mm 5mm 0 0; }
.cover-keys b { display: block; font-size: 20pt; font-weight: 700; letter-spacing: -0.03em; }
.cover-keys span { font-size: 9.5pt; color: var(--ink-2); }
.cover-field { margin-top: auto; background: #0c7ba3; /* tono hover de la marca: texto blanco AA */ color: #fff; padding: 12mm 16mm 13mm; display: grid; grid-template-columns: 1fr 1fr; gap: 10mm; align-items: center; }
.cf { width: 100%; height: auto; }
.cover-stages { list-style: none; }
.cover-stages li { display: grid; grid-template-columns: 1fr auto; align-items: baseline; padding: 3.2mm 0; border-bottom: 1px solid rgb(255 255 255 / .28); }
.cover-stages li:last-child { border-bottom: 0; }
.cover-stages .s { font-size: 10pt; } .cover-stages .s b { font-weight: 600; display: block; font-size: 11pt; }
.cover-stages .v { font-size: 22pt; font-weight: 700; letter-spacing: -0.02em; }
.cover-meta { display: flex; justify-content: space-between; grid-column: 1 / -1; font-size: 8.5pt; color: #ffffff; padding-top: 4mm; border-top: 1px solid rgb(255 255 255 / .28); }

/* Etapas */
.stage-head { margin-top: 8mm; }
.kick { font-size: 9.5pt; font-weight: 600; color: var(--cyan-text); }
.big { margin-top: 3mm; display: flex; align-items: baseline; gap: 4mm; flex-wrap: wrap; }
.big .num { font-size: 48pt; font-weight: 700; letter-spacing: -0.045em; line-height: 1; }
.big .unit { font-size: 13pt; color: var(--ink-2); }
.before { margin-top: 2mm; font-size: 10pt; color: var(--muted); }
.d { font-weight: 600; } .d.up { color: var(--up); } .d.dn { color: var(--dn); } .d.n { color: var(--muted); font-weight: 500; }
h2 { margin-top: 5mm; font-size: 17pt; line-height: 1.22; letter-spacing: -0.02em; font-weight: 600; max-width: 34ch; }
.prose { margin-top: 5mm; font-size: 10.5pt; line-height: 1.6; color: var(--ink-2); max-width: 78ch; }
.prose strong { color: var(--ink); }
.prose + .prose { margin-top: 3mm; }

.chart { margin-top: 7mm; }
.chart figcaption { display: flex; justify-content: space-between; align-items: baseline; font-size: 10pt; font-weight: 600; }
.legend { font-size: 8.5pt; color: var(--muted); font-weight: 500; display: inline-flex; align-items: center; gap: 5px; }
.sw { display: inline-block; width: 14px; height: 6px; border-radius: 3px; } .sw.prev { background: var(--prev); } .sw.now { background: var(--cyan); margin-left: 8px; }
.chart ul { list-style: none; margin-top: 3.5mm; }
.chart li { display: grid; grid-template-columns: 44mm 1fr; align-items: center; gap: 4mm; padding: 0.9mm 0; }
.lbl { font-size: 9.5pt; color: var(--ink-2); }
.bars { display: flex; flex-direction: column; gap: 2px; }
.row { display: flex; align-items: center; gap: 5px; }
.bar { display: block; border-radius: 0 4px 4px 0; }
.bar.prev { height: 5px; background: var(--prev); } .bar.now { height: 9px; background: var(--cyan); } .bar.dim { height: 9px; background: var(--dim); }
.v { font-size: 9pt; font-weight: 600; } .vp { font-weight: 400; color: var(--muted); font-size: 8pt; }
.rank li.hot .lbl { color: var(--ink); font-weight: 600; }
.two { display: grid; grid-template-columns: 1fr 1fr; gap: 9mm; }
.two .chart li { grid-template-columns: 32mm 1fr; }

table { width: 100%; border-collapse: collapse; margin-top: 3.5mm; font-size: 9pt; }
th { text-align: left; font-weight: 500; color: var(--muted); font-size: 8pt; padding: 1.8mm 2mm 1.8mm 0; border-bottom: 1px solid var(--line); }
td { padding: 2mm 2mm 2mm 0; border-bottom: 1px solid var(--line); vertical-align: top; }
th.r, td.r { text-align: right; }
td small { display: block; color: var(--muted); font-size: 7.5pt; margin-top: .5mm; }
td .was { color: var(--muted); font-weight: 400; }

.lead-box { margin-top: 5mm; border: 1px solid var(--line); border-radius: 10px; padding: 6mm 7mm; display: grid; grid-template-columns: auto 1fr; gap: 2mm 6mm; align-items: center; }
.lead-box .k { font-size: 30pt; font-weight: 700; letter-spacing: -0.03em; line-height: 1; }
.lead-box .k.c { color: var(--cyan-text); }
.lead-box .t { font-size: 10.5pt; color: var(--ink-2); }
.track { grid-column: 1 / -1; height: 9px; border-radius: 5px; background: var(--prev); overflow: hidden; }
.track span { display: block; height: 100%; background: var(--cyan); border-radius: 5px; }

.plan { list-style: none; margin-top: 6mm; border-top: 1px solid var(--line); }
.plan li { display: grid; grid-template-columns: 10mm 1fr; gap: 3mm; padding: 4mm 0; border-bottom: 1px solid var(--line); }
.plan .no { font-size: 10pt; font-weight: 700; color: var(--cyan-text); }
.plan h3 { font-size: 11.5pt; font-weight: 600; letter-spacing: -0.01em; }
.plan p { margin-top: 1.5mm; font-size: 9.5pt; line-height: 1.5; color: var(--ink-2); }
.plan p.act { color: var(--ink); } .plan p.act b { color: var(--cyan-text); }
h2.sub { margin-top: 7mm; font-size: 14pt; line-height: 1.25; letter-spacing: -0.015em; font-weight: 600; max-width: 40ch; }
.pair { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: 10px; overflow: hidden; margin-top: 7mm; }
.pair > div { background: #fff; padding: 4mm 5mm; }
.pair b { display: block; font-size: 24pt; font-weight: 700; letter-spacing: -0.03em; line-height: 1; }
.pair span { font-size: 9pt; color: var(--ink-2); }
.sources { margin-top: auto; padding-top: 4mm; border-top: 1px solid var(--line); font-size: 7.8pt; line-height: 1.5; color: var(--muted); }
h2.sec { margin-top: 9mm; font-size: 24pt; letter-spacing: -0.035em; line-height: 1.05; font-weight: 700; max-width: 20ch; }
`

const pages: string[] = []

// 1 · Portada
pages.push(`
<section class="page cover">
  <div class="cover-top">
    <span class="cover-logos"><img src="${logoTcs}" alt="TCSystems" class="l-tcs"><span class="x">×</span><img src="${logoRco}" alt="RCO Labs" class="l-rco"></span>
    <h1>De Google al presupuesto</h1>
    <p class="lede">Informe SEO de ${periodo.titulo.toLowerCase()} para TCSystems: cuánta gente nos encuentra en Google, cuántos entran y cuántos acaban pidiendo presupuesto, ${periodo.comparado}.</p>
    <ul class="cover-keys">
      <li><b>${delta(visibilidad.impresiones.ahora, visibilidad.impresiones.antes).replace(/<[^>]+>/g, '').replace('▲ ', '')}</b><span>apariciones en Google</span></li>
      <li><b>${delta(clics.total.ahora, clics.total.antes).replace(/<[^>]+>/g, '').replace('▲ ', '')}</b><span>clics desde Google</span></li>
      <li><b>${d1(visibilidad.posicionMedia.antes)} → ${d1(visibilidad.posicionMedia.ahora)}</b><span>posición media (más bajo es mejor)</span></li>
    </ul>
  </div>
  <div class="cover-field">
    ${coverFunnel()}
    <ol class="cover-stages">
      ${embudo.map((e) => `<li><span class="s"><b>${esc(e.etapa)}</b>${esc(e.unidad)}</span><span class="v">${n(e.valor)}</span></li>`).join('')}
    </ol>
    <div class="cover-meta"><span>Preparado por RCO Labs · ${periodo.emitido}</span><span>Fuentes: Google Search Console y Google Analytics 4</span></div>
  </div>
</section>`)

// 2 · Nos ven
pages.push(`
<section class="page">
  ${runningHead(0, 2)}
  ${stageOpen(0, 'Google nos enseña un 63 % más y, sobre todo, más arriba: la posición media pasa del 18,9 al 13,4.')}
  <p class="prose">En el trimestre aparecimos en ${n(visibilidad.consultasConImpresiones.ahora)} búsquedas distintas, ${n(visibilidad.consultasNuevas)} de ellas nuevas. El cambio importante es de calidad: las búsquedas en las que salimos entre los tres primeros resultados se han duplicado con creces, de ${visibilidad.franjas[0].antes} a ${visibilidad.franjas[0].ahora}.</p>
  ${compare('Búsquedas según la posición en la que salimos', visibilidad.franjas.map((f) => ({ label: f.franja, ahora: f.ahora, antes: f.antes })))}
  ${compare('Apariciones en Google por sector', visibilidad.sectores.map((s) => ({ label: s.sector, ahora: s.ahora, antes: s.antes })))}
  <p class="prose"><strong>Lavanderías se multiplica por 11</strong> y ya es el sector en el que más nos ve Google. Gasolineras se cuadruplica. Parkings es el único que baja en apariciones, aunque su página sube de la posición 33 a la 23.</p>
</section>`)

// 3 · Nos eligen
pages.push(`
<section class="page">
  ${runningHead(1, 3)}
  ${stageOpen(1, 'Casi el doble de personas hace clic en TCSystems. El móvil, casi el triple.')}
  <p class="prose">De cada 100 veces que aparecemos, ${d1(clics.ctr.ahora)} acaban en clic (antes ${d1(clics.ctr.antes)}). Desde España, los clics pasan de ${clics.espana.antes} a ${clics.espana.ahora} y la posición media mejora del ${d1(clics.espana.posAntes)} al ${d1(clics.espana.posAhora)}.</p>
  ${compare('Clics desde Google por dispositivo', clics.dispositivos.slice(0, 2).map((d) => ({ label: d.dispositivo, ahora: d.ahora, antes: d.antes })))}
  <figure class="chart">
    <figcaption><span>Páginas que más clics reciben desde Google</span></figcaption>
    <table>
      <thead><tr><th>Página</th><th class="r">Clics</th><th class="r">Cambio</th><th class="r">Posición</th></tr></thead>
      <tbody>
      ${clics.paginas
        .map(
          (p) => `<tr><td>${esc(p.nombre)}<small>${esc(p.ruta)}</small></td><td class="r"><span class="was">${p.antes} →</span> <b>${p.ahora}</b></td><td class="r">${delta(p.ahora, p.antes)}</td><td class="r">${d1(p.posAntes)} → ${d1(p.posAhora)}</td></tr>`
        )
        .join('')}
      </tbody>
    </table>
  </figure>
  <p class="prose">La landing de <strong>lavanderías pasa de 3 a 45 clics</strong> y el artículo sobre su rentabilidad, de 11 a 52. La marca también crece: «tcsystems» sube de 40 a 52 clics y aparece una búsqueda nueva, «tcobro», con 8.</p>
</section>`)

// 4 · Recorren la web + Nos piden presupuesto
pages.push(`
<section class="page">
  ${runningHead(2, 4)}
  ${stageOpen(2, 'Los buscadores ya traen casi la mitad de las visitas, y los asistentes de IA empiezan a mandar clientes.')}
  <p class="prose">Entre septiembre y el 26 de noviembre la web recibió ${n(visitas.sesiones)} visitas de ${n(visitas.usuariosNuevos)} usuarios nuevos. Los buscadores aportaron ${n(visitas.canales[1].sesiones)}. Los asistentes de IA, como ChatGPT o Perplexity, trajeron ${visitas.canales[2].sesiones}: es el canal que se empezó a trabajar en julio con la optimización para IA de nueve landings.</p>
  <div class="two">
    ${rank('Visitas por canal de entrada', visitas.canales.map((c) => ({ label: c.canal, value: c.sesiones })), 'Buscadores (orgánico)')}
    ${rank('Páginas más vistas', visitas.paginasVistas.map((p) => ({ label: p.pagina, value: p.vistas })))}
  </div>
</section>`)

pages.push(`
<section class="page">
  ${runningHead(3, 5)}
  ${stageOpen(3, '21 solicitudes de presupuesto: casi 8 de cada 10 personas que empiezan el formulario lo terminan.')}
  <div class="lead-box">
    <span class="k">${presupuestos.formulariosEmpezados}</span><span class="t">empiezan un formulario</span>
    <span class="track"><span style="width:${presupuestos.tasaFinalizacion}%"></span></span>
    <span class="k c">${presupuestos.solicitudes}</span><span class="t">envían la solicitud (${presupuestos.tasaFinalizacion} %)</span>
  </div>
  <p class="prose">El formulario no frena: el reto está en llevar más gente hasta él. Ayuda que la página de Contacto ahora aparezca en la posición ${d1(presupuestos.contactoPosicion.ahora)} cuando alguien busca la empresa (antes, ${d1(presupuestos.contactoPosicion.antes)}).</p>
  <h2 class="sub">Detrás de esas 21 solicitudes hay ${contactos.formularios.empresas} empresas distintas, y un tercio son lavanderías.</h2>
  <p class="prose">Al revisar el panel de contactos, ${contactos.formularios.proveedores} de los formularios eran agencias y medios ofreciendo sus servicios, y ${contactos.formularios.repetidos} empresas escribieron dos veces. ${contactos.formularios.viaLandingAds} de las empresas llegaron por la landing de lavanderías de Google Ads; el resto, por la propia web.</p>
  <div class="two">
    ${rank('Empresas que pidieron presupuesto, por sector', contactos.formularios.sectores.map((x) => ({ label: x.sector, value: x.empresas })), 'Lavanderías')}
    <div>
      <div class="pair"><div><b>${contactos.whatsapp}</b><span>clics en WhatsApp</span></div><div><b>${contactos.llamadas}</b><span>clics en llamar</span></div></div>
      ${rank('Origen de esos clics (oct–nov, 12 clics)', contactos.origenClics.map((o) => ({ label: o.origen, value: o.clics })), 'Buscadores (Google, Ecosia)')}
    </div>
  </div>
  <p class="prose">Además de los formularios, ${contactos.whatsapp + contactos.llamadas} personas pulsaron para hablar con nosotros al momento. Desde octubre el panel guarda el origen de cada clic: la mitad llega desde buscadores, sobre todo desde la portada y la página de lavanderías, y ChatGPT ya aparece como origen de un contacto.</p>

</section>`)

// 5 · Plan
pages.push(`
<section class="page">
  ${runningHead(null, 6)}
  <p class="kick" style="margin-top:12mm">Diciembre – febrero</p>
  <h2 class="sec" style="margin-top:2mm">Dónde se nos escapan clientes y cómo lo vamos a tapar</h2>
  <ol class="plan">
    ${plan
      .map(
        (p, i) => `<li><span class="no">${String(i + 1).padStart(2, '0')}</span><div><h3>${esc(p.titulo)}</h3><p>${esc(p.porque)}</p><p class="act"><b>Acción:</b> ${esc(p.accion)}</p></div></li>`
      )
      .join('')}
  </ol>


</section>`)

// 7 · Oportunidades y fuentes
pages.push(`
<section class="page">
  ${runningHead(null, 7)}
  <p class="kick" style="margin-top:12mm">Dónde empezar</p>
  <h2 class="sec" style="margin-top:2mm">Búsquedas a un paso de la primera página</h2>
  <p class="prose">Ya salimos en ellas, pero sin clics o con muy pocos. Subirlas unas posiciones es la forma más barata de ganar visitas en los próximos meses.</p>
  <figure class="chart">
    <figcaption><span>Búsquedas a un paso de la primera página</span></figcaption>
    <table>
      <thead><tr><th>Búsqueda</th><th class="r">Apariciones</th><th class="r">Posición</th><th class="r">Clics</th></tr></thead>
      <tbody>${oportunidades
        .map((o) => `<tr><td>${esc(o.consulta)}</td><td class="r">${n(o.impresiones)}</td><td class="r">${d1(o.posicion)}</td><td class="r">${o.clics}</td></tr>`)
        .join('')}</tbody>
    </table>
  </figure>
  <p class="sources">Fuentes: Google Search Console (búsqueda web, últimos 3 meses frente a los 3 anteriores, exportado el 26/11/2026) y Google Analytics 4 (01/09/2026 – 26/11/2026). Las cifras por sector suman solo las búsquedas que Google muestra; las búsquedas anónimas no se pueden asignar. Preparado por RCO Labs para TCSystems el ${periodo.emitido}. Versión interactiva: tcsystems.es/informes/noviembre</p>
</section>`)

const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Informe SEO sep–nov 2026 · TCSystems × RCO Labs</title>
<style>${css}</style>
</head>
<body>
${pages.join('\n')}
</body>
</html>
`

writeFileSync(join(root, 'informes/informe-seo-sep-nov-2026.html'), html)
console.log('ok informes/informe-seo-sep-nov-2026.html')
