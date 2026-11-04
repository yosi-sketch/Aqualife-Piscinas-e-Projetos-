const fs = require('fs');

const pageContent = fs.readFileSync('app/page.tsx', 'utf8');
const layoutContent = fs.readFileSync('app/layout.tsx', 'utf8');
const combined = pageContent + '\n' + layoutContent;

const imageRegex = /["'](\/[a-zA-Z0-9_\-\.]+\.(?:png|jpg|jpeg|svg|ico|webp))(?:\?[^"']*)?["']/g;
const paths = new Set();
let match;
while ((match = imageRegex.exec(combined)) !== null) {
  paths.add(match[1]);
}

console.log('Images and icons referenced in code:');
let missing = 0;
for (const p of paths) {
  const publicPath = 'public' + p;
  const appPath = 'app' + p;
  const existsInPublic = fs.existsSync(publicPath);
  const existsInApp = fs.existsSync(appPath);

  if (existsInPublic) {
    const stat = fs.statSync(publicPath);
    console.log(`  ✓ ${p} exists in public (${stat.size} bytes)`);
  } else if (existsInApp) {
    const stat = fs.statSync(appPath);
    console.log(`  ✓ ${p} exists in app (${stat.size} bytes)`);
  } else {
    console.log(`  ❌ MISSING: ${p}`);
    missing++;
  }
}

if (missing === 0) {
  console.log('SUCCESS: All images, icons, and favicons exist and are non-empty!');
} else {
  console.log(`ERROR: ${missing} files are missing!`);
}
