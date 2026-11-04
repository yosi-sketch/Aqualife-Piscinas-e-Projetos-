const fs = require('fs');

const pageContent = fs.readFileSync('app/page.tsx', 'utf8');
const imageMatches = [...pageContent.matchAll(/["'](\/[a-zA-Z0-9_\-.]+\.(?:jpg|jpeg|png|webp|svg))["']/g)].map(m => m[1]);
const uniqueImages = [...new Set(imageMatches)];

console.log(`Checking ${uniqueImages.length} images referenced in page.tsx:`);

let allOk = true;
uniqueImages.forEach(img => {
  const filePath = 'public' + img;
  if (!fs.existsSync(filePath)) {
    console.error(`MISSING IMAGE: ${filePath}`);
    allOk = false;
  } else {
    const size = fs.statSync(filePath).size;
    console.log(`OK: ${img} (${size} bytes)`);
  }
});

if (allOk) {
  console.log('ALL images referenced in page.tsx exist and have valid file sizes!');
}
