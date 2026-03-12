#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuración
const PUBLIC_DIR = path.join(__dirname, '../public');
const SRC_DIRS = [
  path.join(__dirname, '../app'),
  path.join(__dirname, '../components'),
];

// Extensiones de imagen soportadas
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.gif'];

/**
 * Instala sharp si no está disponible
 */
function ensureSharpInstalled() {
  try {
    require('sharp');
    console.log('✅ Sharp ya está instalado');
  } catch (error) {
    console.log('📦 Instalando Sharp...');
    try {
      execSync('npm install sharp', { stdio: 'inherit' });
      console.log('✅ Sharp instalado correctamente');
    } catch (installError) {
      console.error('❌ Error instalando Sharp:', installError.message);
      process.exit(1);
    }
  }
}

/**
 * Encuentra todas las imágenes en un directorio recursivamente
 */
function findImages(dir, imageList = []) {
  if (!fs.existsSync(dir)) {
    return imageList;
  }

  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findImages(filePath, imageList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (IMAGE_EXTENSIONS.includes(ext)) {
        imageList.push(filePath);
      }
    }
  });
  
  return imageList;
}

/**
 * Convierte una imagen a WebP
 */
async function convertToWebP(imagePath) {
  const sharp = require('sharp');
  
  const ext = path.extname(imagePath);
  const webpPath = imagePath.replace(ext, '.webp');
  
  try {
    await sharp(imagePath)
      .webp({ quality: 85, effort: 6 })
      .toFile(webpPath);
    
    console.log(`✅ Convertido: ${path.basename(imagePath)} → ${path.basename(webpPath)}`);
    return { original: imagePath, webp: webpPath };
  } catch (error) {
    console.error(`❌ Error convirtiendo ${imagePath}:`, error.message);
    return null;
  }
}

/**
 * Encuentra todas las referencias a imágenes en archivos de código
 */
function findImageReferences(dir, references = []) {
  if (!fs.existsSync(dir)) {
    return references;
  }

  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findImageReferences(filePath, references);
    } else if (file.match(/\.(tsx?|jsx?|js|ts)$/)) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        
                 // Buscar referencias a imágenes en el código
         IMAGE_EXTENSIONS.forEach(ext => {
           const regex = new RegExp(`(['"\`])([^'"\`]*${ext.replace('.', '\\.')})\\1`, 'gi');
          let match;
          
          while ((match = regex.exec(content)) !== null) {
            const imagePath = match[2];
            references.push({
              file: filePath,
              imagePath: imagePath,
              fullMatch: match[0],
              quote: match[1]
            });
          }
        });
      } catch (error) {
        console.error(`❌ Error leyendo ${filePath}:`, error.message);
      }
    }
  });
  
  return references;
}

/**
 * Actualiza las referencias en los archivos de código
 */
function updateReferences(conversions) {
  // Crear mapa de conversiones
  const conversionMap = new Map();
  conversions.forEach(conv => {
    if (conv) {
      const relativePath = path.relative(PUBLIC_DIR, conv.original);
      const webpRelativePath = path.relative(PUBLIC_DIR, conv.webp);
      conversionMap.set(relativePath, webpRelativePath);
    }
  });

  // Buscar todas las referencias
  let allReferences = [];
  SRC_DIRS.forEach(dir => {
    allReferences = allReferences.concat(findImageReferences(dir));
  });

  // Agrupar referencias por archivo
  const fileChanges = new Map();
  
  allReferences.forEach(ref => {
    // Normalizar la ruta de la imagen
    let imagePath = ref.imagePath;
    if (imagePath.startsWith('/')) {
      imagePath = imagePath.substring(1);
    }
    
    // Buscar si existe una conversión para esta imagen
    for (let [original, webp] of conversionMap) {
      if (original.includes(path.basename(imagePath)) || imagePath.includes(original)) {
        if (!fileChanges.has(ref.file)) {
          fileChanges.set(ref.file, []);
        }
        
        fileChanges.get(ref.file).push({
          oldPath: ref.imagePath,
          newPath: ref.imagePath.replace(path.extname(ref.imagePath), '.webp'),
          fullMatch: ref.fullMatch,
          quote: ref.quote
        });
        break;
      }
    }
  });

  // Aplicar cambios
  let updatedFiles = 0;
  let totalReplacements = 0;

  for (let [filePath, changes] of fileChanges) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      changes.forEach(change => {
        const oldRef = `${change.quote}${change.oldPath}${change.quote}`;
        const newRef = `${change.quote}${change.newPath}${change.quote}`;
        
        if (content.includes(oldRef)) {
          content = content.replace(new RegExp(escapeRegExp(oldRef), 'g'), newRef);
          modified = true;
          totalReplacements++;
          console.log(`🔄 ${path.basename(filePath)}: ${change.oldPath} → ${change.newPath}`);
        }
      });
      
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        updatedFiles++;
      }
    } catch (error) {
      console.error(`❌ Error actualizando ${filePath}:`, error.message);
    }
  }

  return { updatedFiles, totalReplacements };
}

/**
 * Escapa caracteres especiales para RegExp
 */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Elimina las imágenes originales (opcional)
 */
function deleteOriginalImages(conversions, deleteOriginals = false) {
  if (!deleteOriginals) {
    console.log('\n🗂️  Imágenes originales conservadas');
    return;
  }

  let deletedCount = 0;
  conversions.forEach(conv => {
    if (conv) {
      try {
        fs.unlinkSync(conv.original);
        deletedCount++;
        console.log(`🗑️  Eliminado: ${path.basename(conv.original)}`);
      } catch (error) {
        console.error(`❌ Error eliminando ${conv.original}:`, error.message);
      }
    }
  });
  
  console.log(`\n🗑️  Eliminadas ${deletedCount} imágenes originales`);
}

/**
 * Función principal
 */
async function main() {
  console.log('🚀 Iniciando conversión a WebP...\n');
  
  // Verificar e instalar Sharp
  ensureSharpInstalled();
  
  // Encontrar todas las imágenes
  console.log('📁 Buscando imágenes...');
  const images = findImages(PUBLIC_DIR);
  console.log(`📸 Encontradas ${images.length} imágenes\n`);
  
  if (images.length === 0) {
    console.log('❌ No se encontraron imágenes para convertir');
    return;
  }

  // Convertir imágenes
  console.log('🔄 Convirtiendo imágenes...');
  const conversions = [];
  
  for (const imagePath of images) {
    const conversion = await convertToWebP(imagePath);
    conversions.push(conversion);
  }
  
  const successfulConversions = conversions.filter(conv => conv !== null);
  console.log(`\n✅ Convertidas ${successfulConversions.length}/${images.length} imágenes`);
  
  // Actualizar referencias en el código
  console.log('\n🔄 Actualizando referencias en el código...');
  const { updatedFiles, totalReplacements } = updateReferences(successfulConversions);
  console.log(`\n✅ Actualizados ${updatedFiles} archivos con ${totalReplacements} cambios`);
  
  // Preguntar si eliminar originales
  const deleteOriginals = process.argv.includes('--delete-originals');
  deleteOriginalImages(successfulConversions, deleteOriginals);
  
  console.log('\n🎉 Conversión completada!');
  console.log('\n📋 Resumen:');
  console.log(`   • Imágenes convertidas: ${successfulConversions.length}`);
  console.log(`   • Archivos actualizados: ${updatedFiles}`);
  console.log(`   • Referencias cambiadas: ${totalReplacements}`);
  
  if (!deleteOriginals) {
    console.log('\n💡 Tip: Usa --delete-originals para eliminar las imágenes originales');
  }
}

// Ejecutar script
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { main }; 