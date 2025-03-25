import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const CONFIG_DIR = 'configs';
const OUTPUT_DIR = 'optimized-images';

// Image sizes
const ICON_SIZES = [16, 32, 64, 128, 256];
const COVER_SIZES = [768, 1024, 1440];

// Ensure output directory exists
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// Process each project in configs directory
async function processProjects() {
  const projects = fs.readdirSync(CONFIG_DIR).filter(dir => 
    fs.statSync(path.join(CONFIG_DIR, dir)).isDirectory()
  );

  for (const project of projects) {
    const projectDir = path.join(CONFIG_DIR, project);
    // Place optimized images directly in the same project directory structure as originals
    const projectOutputDir = path.join(OUTPUT_DIR, project);
    
    fs.mkdirSync(projectOutputDir, { recursive: true });
    
    await processProjectImages(project, projectDir, projectOutputDir);
  }
}

async function processProjectImages(project: string, inputDir: string, outputDir: string) {
  console.log(`Processing ${project} images...`);
  
  // Process icon.png
  const iconPath = path.join(inputDir, 'icon.png');
  if (fs.existsSync(iconPath)) {
    const iconFilename = 'icon.png';
    const iconBasename = path.parse(iconFilename).name;
    const iconExt = path.parse(iconFilename).ext;
    
    for (const size of ICON_SIZES) {
      // WebP version
      await resizeAndOptimize(
        iconPath,
        path.join(outputDir, `${iconBasename}@${size}${iconExt}`),
        size,
        size,
        { compressionLevel: 9 }
      );
      
      await resizeAndOptimize(
        iconPath,
        path.join(outputDir, `${iconBasename}@${size}.webp`),
        size,
        size,
        { quality: 85 }
      );
    }
  }
  
  // Process cover.png
  const coverPath = path.join(inputDir, 'cover.png');
  if (fs.existsSync(coverPath)) {
    const coverFilename = 'cover.png';
    const coverBasename = path.parse(coverFilename).name;
    const coverExt = path.parse(coverFilename).ext;
    
    // Get original dimensions to maintain aspect ratio
    const metadata = await sharp(coverPath).metadata();
    const aspectRatio = metadata.width && metadata.height ? metadata.width / metadata.height : 16/9;
    
    for (const width of COVER_SIZES) {
      const height = Math.round(width / aspectRatio);
      
      // Original format
      await resizeAndOptimize(
        coverPath,
        path.join(outputDir, `${coverBasename}@${width}${coverExt}`),
        width,
        height,
        { compressionLevel: 9 }
      );
      
      // WebP version
      await resizeAndOptimize(
        coverPath,
        path.join(outputDir, `${coverBasename}@${width}.webp`),
        width,
        height,
        { quality: 85 }
      );
      
      // JPEG version
      await resizeAndOptimize(
        coverPath,
        path.join(outputDir, `${coverBasename}@${width}.jpg`),
        width,
        height,
        { quality: 85 }
      );
    }
  }
}

async function resizeAndOptimize(
  inputPath: string,
  outputPath: string,
  width: number,
  height: number,
  options: any
) {
  try {
    const image = sharp(inputPath).resize(width, height);
    
    // Format based on output file extension
    if (outputPath.endsWith('.webp')) {
      await image.webp(options).toFile(outputPath);
    } else if (outputPath.endsWith('.jpg') || outputPath.endsWith('.jpeg')) {
      await image.jpeg(options).toFile(outputPath);
    } else if (outputPath.endsWith('.png')) {
      await image.png(options).toFile(outputPath);
    }
    
    console.log(`Created ${outputPath}`);
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error);
  }
}

// Run the process
processProjects()
  .then(() => console.log('Image optimization complete!'))
  .catch(err => console.error('Error during image optimization:', err)); 