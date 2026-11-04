const fs = require('fs');
const path = require('path');

const candidates = [
  // Banners & Showroom / Quem Somos
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/banners-1.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/banners-2.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/banners-3-1.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/projeto.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/instalacao.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/instalacao-2.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/0001_piscinas.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/08/sauna.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/0003_aquecimento.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/0002_iluminacao.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/0000_acessorios.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/08/quadro-de-comando.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/limpeza.jpg',
  // Real completed projects gallery
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/Francisco-5-11-1.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/Juliana-5-5-1.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/Lolita-6-6-1.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/Olga-2-4-1.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/Spa-6-1.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/Vilagio-4-6-1.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/Vilagio-5-6-1.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/Adilson-5-6-1.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/Adilson-6-6-1.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/Alvaro-Cunha-9-11-1.jpeg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/Edgar-2-4-1.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/Eduardo-11-14-1.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/Eduardo-12-14-1.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/Eduardo-14-14-1.jpg',
  'https://aqualifepiscinas.com.br/wp-content/uploads/2019/09/foto-piscina-1-1.jpeg'
];

async function download(url, filename) {
  const dest = path.join('public', filename);
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) {
      console.log(`HTTP ${res.status} for ${url}`);
      return false;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 5000) {
      console.log(`Too small (${buf.length} bytes): ${url}`);
      return false;
    }
    fs.writeFileSync(dest, buf);
    console.log(`Saved: ${dest} (${buf.length} bytes)`);
    return true;
  } catch (err) {
    console.error(`Failed ${url}: ${err.message}`);
    return false;
  }
}

async function main() {
  console.log('Downloading Aqualife assets...');
  for (const url of candidates) {
    const filename = 'aqualife-' + path.basename(url).toLowerCase();
    await download(url, filename);
  }
  console.log('Done downloading Aqualife assets!');
}

main().catch(console.error);
