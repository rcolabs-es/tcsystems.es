# 🚀 Inicio Rápido - Sanity CMS para TCSystems Blog

## ✅ ¿Qué se ha implementado?

La integración de Sanity CMS está completa. Los posts del blog ahora se gestionan desde Sanity en lugar de archivos estáticos.

### Cambios realizados:

1. ✅ **Dependencias instaladas**:
   - `@sanity/client`
   - `@sanity/image-url`
   - `@sanity/vision`
   - `next-sanity`
   - `sanity`
   - `@portabletext/react`

2. ✅ **Estructura de Sanity configurada**:
   - Esquema de blog posts (`/sanity/schemas/blogPost.ts`)
   - Cliente de Sanity (`/lib/sanity.ts`)
   - Configuración de Sanity Studio (`/sanity.config.ts`)
   - Componentes para renderizar contenido rico (`/components/PortableTextComponents.tsx`)

3. ✅ **Páginas actualizadas**:
   - Página principal del blog (`/app/blog/page.tsx`)
   - Componente de contenido del blog (`/app/blog/BlogContent.tsx`)
   - Página dinámica de posts individuales (`/app/blog/[slug]/page.tsx`)
   - Componente de contenido de post (`/app/blog/[slug]/PostContent.tsx`)

4. ✅ **Directorios antiguos eliminados**:
   - `/app/blog/beneficios-kioscos-autoservicio`
   - `/app/blog/guia-elegir-kiosco-autoservicio`
   - `/app/blog/mejorar-experiencia-cliente-kioscos`

5. ✅ **Scripts añadidos al package.json**:
   - `npm run sanity` - Iniciar Sanity Studio
   - `npm run sanity:deploy` - Desplegar Sanity Studio

## 📋 Pasos siguientes

### 1. Configurar Sanity (IMPORTANTE)

Necesitas crear un proyecto en Sanity y configurar las variables de entorno:

```bash
# 1. Ve a https://www.sanity.io/ y crea una cuenta
# 2. Crea un nuevo proyecto
# 3. Copia el Project ID que te proporcionan
```

### 2. Crear archivo .env.local

Crea un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=tu-project-id-aqui
NEXT_PUBLIC_SANITY_DATASET=production
```

**IMPORTANTE**: Reemplaza `tu-project-id-aqui` con tu Project ID real de Sanity.

### 3. Acceder a Sanity Studio

```bash
npm run dev
```

Luego abre tu navegador en:

```
http://localhost:3000/studio
```

¡Sanity Studio está integrado directamente en tu aplicación Next.js!

### 4. Migrar los posts existentes

Los 3 posts actuales necesitan ser migrados a Sanity. Tienes dos opciones:

#### Opción A: Manualmente (Recomendado para empezar)
- Consulta la guía completa en `/sanity/migration/README.md`
- Los datos estructurados están en `/sanity/migration/posts-data.json`

#### Opción B: Ver el contenido en detalle
- Lee `SANITY_SETUP.md` para instrucciones completas

### 5. Probar el sitio

```bash
# Iniciar el servidor de desarrollo
npm run dev

# Visitar http://localhost:3000/blog
```

## 🎨 Características mantenidas

Todo el diseño y estética actual se mantienen:

- ✅ Mismos colores y estilos
- ✅ Animaciones y transiciones
- ✅ Modo oscuro/claro
- ✅ Diseño responsive
- ✅ SEO optimizado
- ✅ Mismo layout y estructura

## 🔄 Flujo de trabajo nuevo

1. **Crear contenido**: Usa Sanity Studio (`npm run sanity`)
2. **Publicar**: Los cambios aparecen automáticamente en el sitio (con revalidación de 60s)
3. **Gestionar**: Todo el contenido se gestiona desde Sanity Studio

## 📦 Tipos de contenido disponibles

En Sanity Studio puedes usar:

- **Texto normal**: Párrafos
- **Encabezados**: H2, H3, H4
- **Imágenes**: Con alt text y caption
- **Cajas de resaltado**: En 5 colores diferentes
- **Links**: Internos y externos
- **Listas**: Con viñetas o numeradas
- **Formato**: Negrita, cursiva, código
- **Blockquotes**: Citas

## 🆘 Solución rápida de problemas

### Error: "Project ID not found"
→ Verifica que hayas creado el archivo `.env.local` con tu Project ID

### No se muestran posts en el blog
→ Asegúrate de haber creado y publicado posts en Sanity Studio

### Error al iniciar Sanity Studio
→ Verifica que todas las dependencias estén instaladas: `npm install`

### Las imágenes no se cargan
→ Las imágenes deben subirse a través de Sanity Studio, no desde `/public`

## 📚 Documentación adicional

- `SANITY_SETUP.md` - Guía completa de configuración
- `/sanity/migration/README.md` - Guía de migración de posts
- `/sanity/migration/posts-data.json` - Datos de posts existentes

## ✨ Ventajas de usar Sanity

1. **Gestión centralizada**: Todo el contenido en un solo lugar
2. **Sin código**: Crea posts sin tocar código
3. **Colaboración**: Múltiples editores pueden trabajar
4. **Versionado**: Historial de cambios automático
5. **Optimización de imágenes**: Sanity optimiza automáticamente
6. **API GraphQL/GROQ**: Flexibilidad total en consultas
7. **Preview en tiempo real**: Ve cambios antes de publicar

## 🎯 Siguiente paso inmediato

**ACCIÓN REQUERIDA**: Crea tu proyecto en Sanity y configura las variables de entorno en `.env.local`

1. Ve a https://www.sanity.io/
2. Crea una cuenta
3. Crea un proyecto nuevo
4. Copia el Project ID
5. Créa `.env.local` con tu Project ID
6. Ejecuta `npm run sanity`
7. ¡Empieza a crear contenido!

---

**¿Necesitas ayuda?** Consulta `SANITY_SETUP.md` para instrucciones detalladas.

