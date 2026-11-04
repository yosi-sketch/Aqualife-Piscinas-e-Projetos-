const fs = require('fs');

const files = [
  'app/page.tsx',
  'app/layout.tsx',
  'app/globals.css',
  'app/components/GlowingButton.tsx',
  'package.json'
];

const forbidden = [
  'solepiscina',
  'sol e piscina',
  'josé cândido',
  'cidade nova',
  'benedito',
  'robson'
];

let foundAny = false;

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8').toLowerCase();
  forbidden.forEach(term => {
    if (content.includes(term)) {
      console.log(`Found "${term}" in ${f}!`);
      foundAny = true;
    }
  });
});

if (!foundAny) {
  console.log('CLEAN! Zero traces of previous client found in app files.');
}
