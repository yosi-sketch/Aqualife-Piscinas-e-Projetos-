const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimizeImages() {
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
      const fileData = fs.readFileSync(f);
      const buf = await sharp(fileData)
        .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 85, mozjpeg: true })
        .toBuffer();
      fs.writeFileSync(f, buf);
      console.log(`Optimized ${f}: ${origSize} -> ${buf.length} bytes`);
    }
  }
}

optimizeImages().catch(console.error);
