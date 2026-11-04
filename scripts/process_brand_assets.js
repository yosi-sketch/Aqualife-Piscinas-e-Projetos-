const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcLogo = 'C:/Users/matheus/.gemini/antigravity/brain/4c545337-78dd-4bb1-8172-93d94d0e134c/.user_uploaded/media_1793817775877_b8f81c50.png';

async function run() {
  console.log('Processing logo and generating favicons/brand assets...');

  // 1. Trim the logo to eliminate transparent padding
  const trimmedLogoBuffer = await sharp(srcLogo)
    .trim()
    .png()
    .toBuffer();

  const trimmedMeta = await sharp(trimmedLogoBuffer).metadata();
  console.log('Trimmed logo size:', trimmedMeta.width, 'x', trimmedMeta.height);

  // Save primary logo in public
  fs.writeFileSync('public/logo.png', trimmedLogoBuffer);
  fs.writeFileSync('public/logo-solepiscina.png', trimmedLogoBuffer);

  // Also create a high-res crisp logo with a bit of breathing room for headers
  const paddedLogo = await sharp(trimmedLogoBuffer)
    .extend({
      top: 15,
      bottom: 15,
      left: 15,
      right: 15,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();
  fs.writeFileSync('public/logo-clean.png', paddedLogo);

  // 2. Extract the radiant sun icon (which is the core brand emblem) for favicon and app icons
  // In the raw logo, the sun extends from roughly x=605 to 1005 and y=104 to 512
  // Let's create an iconic emblem: A square badge with the radiant sun or circular badge
  // Let's also extract the sun graphic precisely
  const rawData = await sharp(srcLogo).raw().toBuffer({ resolveWithObject: true });
  const { data, info } = rawData;
  let minX = info.width, maxX = 0, minY = info.height, maxY = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * 4;
      // Orange sun pixels
      if (data[idx+3] > 80 && data[idx] > 200 && data[idx+2] < 50) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  // Add 10px margin around sun
  const sunLeft = Math.max(0, minX - 10);
  const sunTop = Math.max(0, minY - 10);
  const sunWidth = Math.min(info.width - sunLeft, (maxX - minX) + 20);
  const sunHeight = Math.min(info.height - sunTop, (maxY - minY) + 20);

  const sunBuffer = await sharp(srcLogo)
    .extract({ left: sunLeft, top: sunTop, width: sunWidth, height: sunHeight })
    .png()
    .toBuffer();

  fs.writeFileSync('public/brand-sun.png', sunBuffer);

  // 3. Create 512x512 app icon
  // An elegant square with subtle rounded feel or crisp transparent containing the radiant sun and wave
  // For favicon tabs, a circular deep navy circle (#00206D) with the radiant orange sun inside pops brilliantly against both light and dark browser tabs!
  const iconNavyCircle = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#002b82" />
          <stop offset="100%" stop-color="#00184e" />
        </linearGradient>
      </defs>
      <circle cx="256" cy="256" r="248" fill="url(#bgGrad)" />
      <circle cx="256" cy="256" r="246" stroke="#FE7600" stroke-width="6" fill="none" opacity="0.6"/>
    </svg>
  `);

  const sunForIcon = await sharp(sunBuffer)
    .resize(360, 360, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const icon512 = await sharp(iconNavyCircle)
    .composite([
      { input: sunForIcon, gravity: 'center' }
    ])
    .png()
    .toBuffer();

  fs.writeFileSync('public/icon-512x512.png', icon512);
  fs.writeFileSync('public/icon.png', icon512);
  fs.writeFileSync('app/icon.png', icon512);

  // 192x192
  const icon192 = await sharp(icon512).resize(192, 192).png().toBuffer();
  fs.writeFileSync('public/icon-192x192.png', icon192);

  // Apple touch icon 180x180 (Apple devices look best with rounded navy square badge)
  const appleSvg = Buffer.from(`
    <svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="appleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#002b82" />
          <stop offset="100%" stop-color="#001a52" />
        </linearGradient>
      </defs>
      <rect width="180" height="180" rx="36" fill="url(#appleGrad)" />
      <rect x="2" y="2" width="176" height="176" rx="34" stroke="#FE7600" stroke-width="3" fill="none" opacity="0.5"/>
    </svg>
  `);
  const sunForApple = await sharp(sunBuffer)
    .resize(130, 130, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();
  const appleIcon = await sharp(appleSvg)
    .composite([{ input: sunForApple, gravity: 'center' }])
    .png()
    .toBuffer();
  fs.writeFileSync('public/apple-icon.png', appleIcon);
  fs.writeFileSync('app/apple-icon.png', appleIcon);

  // Favicon sizes: 48, 32, 16
  const icon48 = await sharp(icon512).resize(48, 48).png().toBuffer();
  fs.writeFileSync('public/icon-48x48.png', icon48);

  const icon32 = await sharp(icon512).resize(32, 32).png().toBuffer();
  fs.writeFileSync('public/icon-32x32.png', icon32);
  fs.writeFileSync('public/favicon.ico', icon32);
  fs.writeFileSync('app/favicon.ico', icon32);

  const icon16 = await sharp(icon512).resize(16, 16).png().toBuffer();
  fs.writeFileSync('public/icon-16x16.png', icon16);

  // 4. Generate Open Graph Image 1200x630
  const ogSvg = Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ogBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#001847" />
          <stop offset="40%" stop-color="#00206D" />
          <stop offset="100%" stop-color="#001133" />
        </linearGradient>
        <radialGradient id="sunGlow" cx="80%" cy="30%" r="50%">
          <stop offset="0%" stop-color="#FE7600" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#FE7600" stop-opacity="0" />
        </radialGradient>
      </defs>
      
      <rect width="1200" height="630" fill="url(#ogBg)" />
      <rect width="1200" height="630" fill="url(#sunGlow)" />
      
      <!-- Subtle wave line at bottom -->
      <path d="M0,580 Q300,550 600,580 T1200,580 L1200,630 L0,630 Z" fill="#0284c7" opacity="0.3" />
      <path d="M0,595 Q300,570 600,595 T1200,595 L1200,630 L0,630 Z" fill="#FE7600" opacity="0.4" />
      
      <!-- Top badge -->
      <g transform="translate(80, 80)">
        <rect width="360" height="38" rx="19" fill="#032766" stroke="#FE7600" stroke-width="1.5" />
        <text x="180" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#FE7600" text-anchor="middle" letter-spacing="2">
          ★ MAIS DE 30 ANOS EM BELO HORIZONTE
        </text>
      </g>
      
      <!-- Big Headline -->
      <text x="80" y="280" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="900" fill="#FFFFFF" letter-spacing="-0.5">
        SOL E PISCINA
      </text>
      <text x="80" y="340" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="#FE7600">
        Piscinas, Spas, Saunas &amp; Aquecimento Solar
      </text>
      <text x="80" y="390" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="400" fill="#E2E8F0">
        Construção em Vinil, Fibra e Alvenaria · Reformas · Equipamentos
      </text>
      
      <!-- Footer Details -->
      <g transform="translate(80, 480)">
        <text x="0" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="600" fill="#93C5FD">
          📍 Av. José Cândido da Silveira, 297 - Cidade Nova, BH
        </text>
        <text x="0" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="600" fill="#38BDF8">
          📱 WhatsApp: (31) 98642-1424 · Fixo: (31) 3517-3669
        </text>
        <text x="0" y="64" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="#FE7600">
          🌐 www.solepiscina.com.br · @solepiscinabh
        </text>
      </g>
    </svg>
  `);

  const logoForOg = await sharp(trimmedLogoBuffer)
    .resize(380, 240, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const ogImage = await sharp(ogSvg)
    .composite([
      { input: logoForOg, left: 740, top: 120 }
    ])
    .jpeg({ quality: 90 })
    .toBuffer();

  fs.writeFileSync('public/og-image.jpg', ogImage);

  console.log('All brand assets, icons and OG image successfully generated!');
}

run().catch(console.error);
