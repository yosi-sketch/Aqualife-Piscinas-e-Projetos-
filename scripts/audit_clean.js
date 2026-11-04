const fs = require('fs');

const files = [
  'app/page.tsx',
  'app/layout.tsx',
  'app/globals.css',
  'app/components/GlowingButton.tsx',
  'PRODUCT.md',
  'README.md',
  'package.json'
];

const badWords = [
  'agua viva',
  'água viva',
  'aguaviva',
  'av. portugal',
  'santa amélia',
  'santa amelia',
  '98988',
  '3491-7955',
  'camila',
  'batista'
];

let totalHits = 0;
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8').toLowerCase();
  for (const word of badWords) {
    if (content.includes(word)) {
      console.log(`Trace found: "${word}" in ${file}`);
      totalHits++;
    }
  }
}

if (totalHits === 0) {
  console.log('CLEAN AUDIT PASSED: 0 traces of previous client found in app files!');
} else {
  console.log(`WARNING: Found ${totalHits} occurrences of old client traces.`);
}
