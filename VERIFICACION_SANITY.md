# ✅ Verificación de Sanity - Configuración Actualizada

## 🔧 Cambios realizados

He actualizado toda la configuración de Sanity a las últimas versiones y mejores prácticas:

### 1. **Esquema actualizado** (`sanity/schemas/blogPost.ts`)
   - ✅ Usa `defineType` y `defineField` (Sanity v4)
   - ✅ Tipos adecuados (sin `any`)
   - ✅ Validaciones correctas

### 2. **API Version corregida**
   - ✅ Cambiada de `2025-02-19` a `2024-11-06` (fecha válida)
   - Actualizada en:
     - `sanity.config.ts`
     - `sanity/config.ts`
     - `lib/sanity.ts`

### 3. **CDN desactivado para desarrollo**
   - ✅ `useCdn: false` en todos los clientes
   - Esto asegura que veas los documentos inmediatamente

---

## 🚀 Cómo verificar que funciona

### Paso 1: Asegúrate de tener el `.env.local` configurado

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=tu-project-id-real
NEXT_PUBLIC_SANITY_DATASET=production
```

### Paso 2: Reinicia el servidor completamente

```bash
# Detén el servidor (Ctrl+C)
# Luego reinicia:
npm run dev
```

### Paso 3: Accede al Studio

```
http://localhost:3000/studio
```

### Paso 4: Crea un post de prueba

1. Click en **"Blog Post"** en el menú lateral
2. Verifica que veas la lista de posts (si ya tienes documentos)
3. Click en **"+"** o **"Create"** para crear uno nuevo
4. Completa los campos:
   - **Título**: Post de Prueba
   - **Slug**: Click en "Generate"
   - **Extracto**: Descripción de prueba
   - **Categoría**: Selecciona "Tecnología"
   - **Fecha de Publicación**: Hoy
   - **Tiempo de Lectura**: 5 min
   - **Contenido**: Escribe algo de texto
5. Click en **"Publish"**

### Paso 5: Verifica que aparece

1. Ve a la lista de "Blog Post" en el Studio
2. Deberías ver tu post inmediatamente
3. Prueba editarlo y guardar cambios
4. Los cambios deben reflejarse instantáneamente

---

## 🔍 Troubleshooting

### ❌ No veo el tipo "Blog Post" en el Studio

**Solución:**
1. Verifica que `sanity/schemas/index.ts` esté exportando el esquema:
   ```typescript
   import blogPost from './blogPost'
   export const schemaTypes = [blogPost]
   ```
2. Reinicia el servidor completamente

### ❌ Veo "Tool not found: studio"

**Solución:**
1. Verifica que `.env.local` existe y tiene tu Project ID correcto
2. Reinicia el servidor

### ❌ Puedo crear documentos pero no los veo en la lista

**Solución:**
1. Verifica que el dataset sea el correcto ("production")
2. En el Studio, ve a Vision (⚡ en el menú)
3. Ejecuta esta query:
   ```groq
   *[_type == "blogPost"] {
     _id,
     title,
     slug
   }
   ```
4. Deberías ver todos tus documentos

### ❌ Error de permisos

**Solución:**
1. Ve a https://www.sanity.io/manage
2. Click en tu proyecto
3. Ve a **API** → **Tokens**
4. Verifica que el dataset "production" existe
5. Si no existe, créalo

---

## 🎯 Dataset correcto

Asegúrate de estar usando el dataset correcto:

1. **En el Studio**: Ve a la parte superior, verás el nombre del dataset (debería ser "production")
2. **En Sanity.io**: Ve a tu proyecto → Settings → Datasets
3. Verifica que "production" existe y tiene permisos de lectura/escritura

---

## 📝 Comandos útiles

```bash
# Verificar variables de entorno
echo $NEXT_PUBLIC_SANITY_PROJECT_ID

# Ver logs completos
npm run dev

# Limpiar caché (si hay problemas)
rm -rf .next
npm run dev
```

---

## ✅ Checklist de verificación

- [ ] `.env.local` existe con Project ID correcto
- [ ] Servidor reiniciado después de cambios
- [ ] Studio accesible en `/studio`
- [ ] Tipo "Blog Post" visible en el menú
- [ ] Puedo crear un post nuevo
- [ ] El post aparece en la lista inmediatamente
- [ ] Puedo editar el post
- [ ] Los cambios se guardan correctamente
- [ ] No hay errores en la consola del navegador
- [ ] No hay errores en el terminal

---

## 🎉 Si todo funciona

Deberías poder:
1. ✅ Ver "Blog Post" en el menú del Studio
2. ✅ Ver la lista de posts existentes
3. ✅ Crear nuevos posts
4. ✅ Editar posts existentes
5. ✅ Ver cambios en tiempo real
6. ✅ Publicar y despublicar
7. ✅ Subir imágenes
8. ✅ Usar el editor de contenido rico

---

## 🔗 Enlaces útiles

- **Tu Studio local**: http://localhost:3000/studio
- **Sanity Manage**: https://www.sanity.io/manage
- **Documentación**: https://www.sanity.io/docs
- **Vision (Query Tool)**: http://localhost:3000/studio/vision

---

**Última actualización**: 6 de noviembre de 2024
**Versión de Sanity**: 4.14.0
**Estado**: ✅ Todo configurado correctamente


