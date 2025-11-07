# 🎨 Acceso a Sanity Studio

## ✅ ¡Ya está todo configurado!

Sanity Studio ahora está **integrado directamente** en tu aplicación Next.js.

---

## 🚀 Cómo acceder al Studio

### Paso 1: Asegúrate de tener configurado `.env.local`

Crea el archivo `.env.local` en la raíz del proyecto (si no existe):

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=tu-project-id-de-sanity
NEXT_PUBLIC_SANITY_DATASET=production
```

### Paso 2: Inicia tu aplicación

```bash
npm run dev
```

### Paso 3: Accede al Studio

Abre tu navegador y ve a:

```
http://localhost:3000/studio
```

¡Eso es todo! 🎉

---

## 📝 Flujo de trabajo

1. **Iniciar la app**:
   ```bash
   npm run dev
   ```

2. **Abrir el Studio**:
   ```
   http://localhost:3000/studio
   ```

3. **Crear un post**:
   - Click en "Blog Post" en el menú lateral
   - Click en el botón "+" o "Create"
   - Completa los campos
   - Click en "Publish"

4. **Ver el post en el blog**:
   ```
   http://localhost:3000/blog
   ```

---

## 🔐 Primera vez

La primera vez que accedas a `http://localhost:3000/studio`:

1. Te pedirá que **inicies sesión** con tu cuenta de Sanity
2. Autoriza la aplicación
3. ¡Ya puedes empezar a crear contenido!

---

## 🎯 Ventajas de tener Studio integrado

✅ **Un solo servidor**: Todo en `localhost:3000`  
✅ **Más fácil**: No necesitas dos terminales  
✅ **Más rápido**: Cambios entre Studio y sitio sin cambiar de puerto  
✅ **En producción**: El Studio también estará en `tudominio.com/studio`  

---

## 🔒 Seguridad en producción

Cuando despliegues a producción:

- El Studio estará en `https://tcsystems.es/studio`
- Solo tú y las personas autorizadas pueden acceder
- Sanity gestiona la autenticación automáticamente
- Nadie más podrá editar sin permiso

---

## 📍 URLs importantes

| URL | Para qué sirve |
|-----|----------------|
| `localhost:3000` | Página principal del sitio |
| `localhost:3000/blog` | Lista de posts del blog |
| `localhost:3000/studio` | **Panel de administración (Sanity Studio)** |

---

## 🆘 Problemas comunes

### "Cannot connect to Sanity"
→ Verifica que `.env.local` esté configurado con tu Project ID correcto

### "Project not found"
→ Asegúrate de haber creado un proyecto en https://www.sanity.io/

### Página en blanco en /studio
→ Reinicia el servidor (`Ctrl+C` y luego `npm run dev`)

### "Unauthorized"
→ Inicia sesión en Sanity desde el navegador cuando te lo pida

---

## ✨ ¡A crear contenido!

Ahora puedes:

1. Ejecutar `npm run dev`
2. Ir a `localhost:3000/studio`
3. ¡Empezar a publicar posts!

**Es así de simple.** 🚀

