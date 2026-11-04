const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadedLogoPath = 'C:/Users/matheus/.gemini/antigravity/brain/01a87552-7e63-4ea7-b93e-796ed92f9c82/.user_uploaded/media_1793826963017_9ca4a7f7.png';

async function processLogoAndIcons() {
  console.log('Processing logo from:', uploadedLogoPath);

  // Read uploaded logo and trim transparent edges
  const trimmedLogoBuffer = await sharp(uploadedLogoPath)
    .trim()
    .toBuffer();

  const logoMeta = await sharp(trimmedLogoBuffer).metadata();
  console.log('Trimmed logo size:', logoMeta.width, 'x', logoMeta.height);

  // Save official logo files in public
  await sharp(trimmedLogoBuffer).png({ quality: 100, compressionLevel: 9 }).toFile('public/logo-aqualife.png');
  await sharp(trimmedLogoBuffer).png({ quality: 100, compressionLevel: 9 }).toFile('public/logo.png');
  await sharp(trimmedLogoBuffer).png({ quality: 100, compressionLevel: 9 }).toFile('public/logo-clean.png');
  await sharp(trimmedLogoBuffer).png({ quality: 100, compressionLevel: 9 }).toFile('public/logo-oficial.png');
  await sharp(trimmedLogoBuffer).png({ quality: 100, compressionLevel: 9 }).toFile('public/logo-white.png');

  // Extract the sun icon
  // In the original 1024x392 logo, the sun is around x: 670..850, y: 0..140
  // Let's crop the sun accurately from the untrimmed image
  const sunCrop = await sharp(uploadedLogoPath)
    .extract({ left: 690, top: 0, width: 160, height: 160 })
    .trim()
    .toBuffer();

  await sharp(sunCrop).toFile('public/brand-sun.png');
  console.log('Sun icon extracted and saved to public/brand-sun.png');

  // Create favicon icon with sun centered in a square canvas
  const sunMeta = await sharp(sunCrop).metadata();
  const maxDim = Math.max(sunMeta.width, sunMeta.height);
  const padSize = Math.round(maxDim * 1.25);

  // App icon (512x512)
  const icon512 = await sharp(sunCrop)
    .resize(420, 420, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 46,
      bottom: 46,
      left: 46,
      right: 46,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  await sharp(icon512).toFile('public/icon-512x512.png');
  await sharp(icon512).toFile('public/icon.png');
  await sharp(icon512).toFile('app/icon.png');

  // 192x192
  await sharp(icon512).resize(192, 192).png().toFile('public/icon-192x192.png');

  // Apple Touch Icon (180x180) with clean background
  const appleIcon = await sharp(sunCrop)
    .resize(130, 130, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 25,
      bottom: 25,
      left: 25,
      right: 25,
      background: { r: 255, g: 255, b: 255, alpha: 1 } // crisp solid white background for iOS
    })
    .png()
    .toFile('public/apple-icon.png');
  fs.copyFileSync('public/apple-icon.png', 'app/apple-icon.png');

  // 48x48, 32x32, 16x16
  await sharp(icon512).resize(48, 48).png().toFile('public/icon-48x48.png');
  await sharp(icon512).resize(32, 32).png().toFile('public/icon-32x32.png');
  await sharp(icon512).resize(16, 16).png().toFile('public/icon-16x16.png');

  // Favicon.ico (standard 32x32 png format works in modern browsers and next.js)
  const favicon32 = await sharp(icon512).resize(32, 32).png().toBuffer();
  fs.writeFileSync('public/favicon.ico', favicon32);
  fs.writeFileSync('app/favicon.ico', favicon32);
  console.log('Favicons and app icons generated successfully!');

  // Generate og-image.jpg (1200 x 630)
  const logoForOg = await sharp(trimmedLogoBuffer)
    .resize(600, 240, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const svgBanner = Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#051C73"/>
          <stop offset="50%" stop-color="#024395"/>
          <stop offset="100%" stop-color="#05B6FB"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)"/>
      <circle cx="1100" cy="100" r="300" fill="#FCCF04" opacity="0.15"/>
      <circle cx="100" cy="550" r="250" fill="#00B4D8" opacity="0.2"/>
      
      <rect x="80" y="80" width="1040" height="470" rx="24" fill="#ffffff" fill-opacity="0.95" />
      
      <text x="600" y="380" font-family="Montserrat, Arial, sans-serif" font-size="34" font-weight="800" text-anchor="middle" fill="#051C73">
        PISCINAS, SPAS, SAUNAS &amp; AQUECIMENTO
      </text>
      
      <text x="600" y="430" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#475569">
        Projetos, Venda de Equipamentos e Execução · Mais de 20 Anos de Excelência
      </text>
      
      <text x="600" y="480" font-family="Arial, sans-serif" font-size="20" font-weight="700" text-anchor="middle" fill="#024395">
        ★ 4.9 no Google (40+ Avaliações) · Contagem e Grande BH · (31) 2564-5327
      </text>
    </svg>
  `);

  await sharp(svgBanner)
    .composite([
      { input: logoForOg, top: 120, left: 300 }
    ])
    .jpeg({ quality: 90 })
    .toFile('public/og-image.jpg');

  console.log('OG Image generated at public/og-image.jpg');

  // Optimize large images in public
  const largeFiles = [
    'public/aqualife-lolita-6-6-1.jpg',
    'public/aqualife-olga-2-4-1.jpg',
    'public/aqualife-vilagio-4-6-1.jpg',
    'public/aqualife-vilagio-5-6-1.jpg',
    'public/aqualife-eduardo-14-14-1.jpg'
  ];

  for (const f of largeFiles) {
    if (fs.existsSync(f)) {
      const origSize = fs.statSync(f).size;
      const buf = await sharp(f)
        .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 85, mozjpeg: true })
        .toBuffer();
      fs.writeFileSync(f, buf);
      console.log(`Optimized ${f}: ${origSize} -> ${buf.length} bytes`);
    }
  }
}

processLogoAndIcons().catch(console.error);
