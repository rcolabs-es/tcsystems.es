# 🚨 CONFIGURACIÓN REQUERIDA - Error "Tool not found: studio"

## ❌ El problema

El error **"Tool not found: studio"** ocurre porque falta el archivo `.env.local` con tu Project ID de Sanity.

---

## ✅ Solución (5 minutos)

### Paso 1: Crear proyecto en Sanity

1. **Abre tu navegador** y ve a: 
   ```
   https://www.sanity.io/manage
   ```

2. **Inicia sesión** (o crea una cuenta gratis)

3. **Click en "Create project"** (botón azul)

4. **Completa los datos**:
   - **Name**: `TCSystems Blog`
   - **Plan**: `Free` (seleccionado por defecto)
   - Click en **"Create project"**

5. **COPIA EL PROJECT ID** que aparece
   - Se ve algo así: `abc123xyz`
   - O lo encuentras en: Project Settings → Project ID

---

### Paso 2: Crear archivo `.env.local`

1. **Abre tu terminal** en la raíz del proyecto

2. **Crea el archivo**:
   ```bash
   touch .env.local
   ```

3. **Abre el archivo** `.env.local` con tu editor

4. **Pega este contenido**:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=tu-project-id-aqui
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

5. **REEMPLAZA** `tu-project-id-aqui` con el Project ID que copiaste

6. **Guarda el archivo**

---

### Paso 3: Reiniciar el servidor

1. **Detén el servidor** si está corriendo (Ctrl+C)

2. **Inicia de nuevo**:
   ```bash
   npm run dev
   ```

3. **Abre el navegador**:
   ```
   http://localhost:3000/studio
   ```

4. **Inicia sesión** cuando te lo pida

5. **¡Listo!** Ya puedes crear posts

---

## 📝 Ejemplo de `.env.local`

Si tu Project ID es `abc123xyz`, el archivo debe verse así:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
NEXT_PUBLIC_SANITY_DATASET=production
```

**⚠️ IMPORTANTE**: 
- NO pongas comillas alrededor del Project ID
- NO compartas este archivo (ya está en `.gitignore`)
- NO subas este archivo a Git

---

## 🔍 ¿Dónde encuentro mi Project ID?

Si ya tienes un proyecto en Sanity:

1. Ve a: https://www.sanity.io/manage
2. Click en tu proyecto
3. Ve a **Settings** (⚙️)
4. Encontrarás el **Project ID** ahí

---

## ✅ Verificación

Una vez configurado, deberías poder:

1. ✅ Acceder a `http://localhost:3000/studio`
2. ✅ Ver el panel de Sanity Studio
3. ✅ Crear posts en "Blog Post"
4. ✅ Ver los posts en `http://localhost:3000/blog`

---

## 🆘 ¿Sigues teniendo problemas?

### Error: "Project not found"
→ Verifica que copiaste bien el Project ID (sin espacios, sin comillas)

### Error: "Unauthorized"
→ Inicia sesión en Sanity cuando te lo pida en el navegador

### La página sigue en blanco
→ Reinicia el servidor completamente (Ctrl+C y `npm run dev`)

### Otros errores
→ Verifica que `.env.local` esté en la raíz del proyecto (mismo nivel que `package.json`)

---

## 📋 Checklist final

- [ ] Crear proyecto en Sanity.io
- [ ] Copiar el Project ID
- [ ] Crear archivo `.env.local` en la raíz
- [ ] Pegar el Project ID en el archivo
- [ ] Guardar el archivo
- [ ] Reiniciar servidor (`npm run dev`)
- [ ] Abrir `http://localhost:3000/studio`
- [ ] Iniciar sesión en Sanity
- [ ] ¡Crear tu primer post!

---

**¡Después de esto, todo funcionará perfectamente!** 🚀

