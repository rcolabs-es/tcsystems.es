# Configuración de Sanity CMS para TCSystems Blog

## 🚀 Pasos de configuración

### 1. Crear cuenta en Sanity

1. Ve a [https://www.sanity.io/](https://www.sanity.io/)
2. Crea una cuenta o inicia sesión
3. Crea un nuevo proyecto

### 2. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=tu-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

Puedes obtener el `PROJECT_ID` desde el dashboard de Sanity.

### 3. Iniciar Sanity Studio

Para gestionar el contenido del blog, ejecuta:

```bash
npm run sanity
```

Esto iniciará Sanity Studio en `http://localhost:3333` (o el puerto que esté disponible).

### 4. Crear contenido

Una vez en Sanity Studio:

1. Ve a la sección "Blog Post"
2. Haz clic en "Create new"
3. Completa los campos:
   - **Título**: Título del artículo
   - **Slug**: Se generará automáticamente (puedes editarlo)
   - **Extracto**: Breve descripción
   - **Imagen Principal**: Sube una imagen
   - **Categoría**: Selecciona una categoría
   - **Etiquetas**: Añade tags relevantes
   - **Fecha de Publicación**: Fecha del post
   - **Tiempo de Lectura**: Ej: "8 min"
   - **Destacado**: Marca si es un post destacado
   - **Contenido**: El contenido completo del artículo en rich text
   - **SEO**: Información de metadata

### 5. Publicar contenido

- Haz clic en "Publish" para publicar el post
- Los cambios se reflejarán en el sitio web automáticamente (con revalidación de 60 segundos)

## 📦 Estructura del contenido

### Tipos de bloques disponibles en el contenido:

1. **Texto normal**: Párrafos de texto
2. **Encabezados**: H2, H3, H4
3. **Imágenes**: Con alt text y caption opcional
4. **Cajas de resaltado**: Con diferentes colores (azul, verde, púrpura, rojo, amarillo)
5. **Links**: Enlaces internos y externos
6. **Listas**: Con viñetas o numeradas
7. **Citas**: Blockquotes
8. **Formato**: Negrita, cursiva, código

### Categorías disponibles:

- Tecnología
- Casos de Éxito
- Guías
- Experiencia Cliente
- Sostenibilidad
- Seguridad

## 🎨 Mantener el estilo actual

El diseño y estética del blog se mantienen exactamente igual. Los componentes visuales están configurados para:

- Usar los mismos colores y estilos
- Mantener las animaciones y transiciones
- Preservar la estructura de layout
- Mantener la experiencia de usuario

## 🔄 Migrar posts existentes

Para migrar los 3 posts existentes a Sanity:

1. Abre Sanity Studio (`npm run sanity`)
2. Crea cada post manualmente copiando el contenido
3. O usa la API de Sanity para importarlos programáticamente

### Posts a migrar:

1. **Beneficios de los kioscos de autoservicio**
   - Categoría: Tecnología
   - Slug: beneficios-kioscos-autoservicio

2. **Guía para elegir el kiosco de autoservicio ideal**
   - Categoría: Guías
   - Slug: guia-elegir-kiosco-autoservicio

3. **Cómo mejorar la experiencia del cliente**
   - Categoría: Experiencia Cliente
   - Slug: mejorar-experiencia-cliente-kioscos

## 🛠️ Comandos útiles

```bash
# Iniciar el sitio web en desarrollo
npm run dev

# Iniciar Sanity Studio
npm run sanity

# Desplegar Sanity Studio
npm run sanity:deploy

# Build del sitio
npm run build
```

## 📝 Notas importantes

- El sitio usa **ISR (Incremental Static Regeneration)** con revalidación cada 60 segundos
- Las imágenes se optimizan automáticamente con Next.js Image
- El contenido se guarda como **Portable Text** (formato de Sanity)
- Los posts incluyen **Schema.org markup** para mejor SEO
- Soporte completo para modo oscuro/claro

## 🔐 Seguridad

- Las credenciales de Sanity deben mantenerse en `.env.local` (nunca en git)
- El `.env.local` está en `.gitignore`
- Usa el archivo `.env.local.example` como referencia

## 🆘 Solución de problemas

### Error: Project ID not found
- Verifica que `NEXT_PUBLIC_SANITY_PROJECT_ID` esté configurado en `.env.local`

### No se muestran los posts
- Asegúrate de que los posts estén publicados en Sanity Studio
- Verifica que la conexión con Sanity funcione correctamente

### Errores de imagen
- Las imágenes deben subirse a través de Sanity Studio
- Sanity optimiza y gestiona las imágenes automáticamente

