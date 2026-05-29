const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const MEDIA_DIR = path.join(__dirname, '..', 'public', 'media');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'media', 'optimized');

// Image size configurations (Higher quality for photography portfolio)
const SIZES = {
  thumbnail: { width: 400, quality: 85 },
  medium: { width: 1024, quality: 92 },
  large: { width: 1920, quality: 95 }
};

// Folders to process (all your gallery categories)
const FOLDERS = [
  'pre_wedding',
  'wedding',
  'reception',
  'haldi',
  'sangeeth',
  'engagement',
  'pre_birthday',
  'birthday',
  'event',
  'government',
  'portfolio',
  'marketMedia',
  'realestate',
  'maternity',
  'cradle',
  'drone'
];

// Ensure output directory exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Check if optimized version already exists
function optimizedExists(outputPath) {
  return fs.existsSync(outputPath);
}

// Process a single image
async function processImage(inputPath, outputDir, filename) {
  const ext = path.extname(filename).toLowerCase();
  const name = path.basename(filename, ext);

  // Skip if not an image file
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    return;
  }

  console.log(`Processing: ${filename}`);

  try {
    // Generate all size variants
    for (const [sizeName, config] of Object.entries(SIZES)) {
      const webpOutput = path.join(outputDir, `${name}-${sizeName}.webp`);
      const jpegOutput = path.join(outputDir, `${name}-${sizeName}.jpg`);

      // Skip if already exists
      if (optimizedExists(webpOutput) && optimizedExists(jpegOutput)) {
        console.log(`  ↳ ${sizeName}: Already exists, skipping`);
        continue;
      }

      // Generate WebP version
      await sharp(inputPath)
        .resize(config.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: config.quality })
        .toFile(webpOutput);

      // Generate JPEG version
      await sharp(inputPath)
        .resize(config.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ quality: config.quality, progressive: true })
        .toFile(jpegOutput);

      console.log(`  ✓ ${sizeName}: Created WebP & JPEG`);
    }

    // Generate tiny blur placeholder (base64)
    const blurBuffer = await sharp(inputPath)
      .resize(20, null, { fit: 'inside' })
      .blur(10)
      .webp({ quality: 20 })
      .toBuffer();

    const blurBase64 = `data:image/webp;base64,${blurBuffer.toString('base64')}`;
    const metadataPath = path.join(outputDir, `${name}-blur.txt`);
    fs.writeFileSync(metadataPath, blurBase64);
    console.log(`  ✓ blur placeholder: Created`);

  } catch (error) {
    console.error(`  ✗ Error processing ${filename}:`, error.message);
  }
}

// Process all images in a folder
async function processFolder(folderName) {
  const inputDir = path.join(MEDIA_DIR, folderName);
  const outputDir = path.join(OUTPUT_DIR, folderName);

  // Check if input folder exists
  if (!fs.existsSync(inputDir)) {
    console.warn(`⚠ Folder not found: ${folderName}, skipping`);
    return;
  }

  // Ensure output directory exists
  ensureDir(outputDir);

  console.log(`\n📁 Processing folder: ${folderName}`);

  // Get all files in the directory
  const files = fs.readdirSync(inputDir);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png'].includes(ext);
  });

  console.log(`   Found ${imageFiles.length} images`);

  // Process each image
  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    await processImage(inputPath, outputDir, file);
  }

  console.log(`✓ Completed: ${folderName}\n`);
}

// Main execution
async function main() {
  console.log('🖼️  Image Optimization Script Starting...\n');
  console.log('This will generate optimized versions of all gallery images:');
  console.log('  - Thumbnail (400px) - for grid cards');
  console.log('  - Medium (1024px) - for mobile lightbox');
  console.log('  - Large (1920px) - for desktop lightbox');
  console.log('  - WebP + JPEG formats for all sizes');
  console.log('  - Blur placeholders for progressive loading\n');

  // Ensure main output directory exists
  ensureDir(OUTPUT_DIR);

  // Process all folders
  for (const folder of FOLDERS) {
    await processFolder(folder);
  }

  // Also process root media files (logo, backgrounds, etc.)
  console.log('📁 Processing root media files');
  const rootFiles = fs.readdirSync(MEDIA_DIR);
  const rootImages = rootFiles.filter(file => {
    const ext = path.extname(file).toLowerCase();
    const isImage = ['.jpg', '.jpeg', '.png'].includes(ext);
    const isFile = fs.statSync(path.join(MEDIA_DIR, file)).isFile();
    return isImage && isFile;
  });

  const rootOutputDir = path.join(OUTPUT_DIR, 'root');
  ensureDir(rootOutputDir);

  for (const file of rootImages) {
    const inputPath = path.join(MEDIA_DIR, file);
    await processImage(inputPath, rootOutputDir, file);
  }

  console.log('\n✅ Image optimization complete!');
  console.log(`📊 Processed ${FOLDERS.length} folders + root images`);
  console.log('💡 Optimized images saved to: public/media/optimized/\n');
}

// Run the script
main().catch(error => {
  console.error('❌ Script failed:', error);
  process.exit(1);
});
