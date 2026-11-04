const https = require('https');
const fs = require('fs');
const path = require('path');

const downloads = [
  { url: 'https://solepiscina.com.br/wp-content/uploads/2024/05/Galeria-Sol-e-Piscina-e1715629908869.jpg', dest: 'public/sol-piscina-obra-1.jpg' },
  { url: 'https://solepiscina.com.br/wp-content/uploads/2024/05/Galeria-Sol-e-Piscina2-1.jpg', dest: 'public/sol-piscina-obra-2.jpg' },
  { url: 'https://solepiscina.com.br/wp-content/uploads/2024/05/Galeria-Sol-e-Piscina2-2.jpg', dest: 'public/sol-piscina-obra-3.jpg' },
  { url: 'https://solepiscina.com.br/wp-content/uploads/2024/05/Galeria-Sol-e-Piscina2-3.jpg', dest: 'public/sol-piscina-obra-4.jpg' },
  { url: 'https://solepiscina.com.br/wp-content/uploads/2024/05/Galeria-Sol-e-Piscina2-4.jpg', dest: 'public/sol-piscina-obra-5.jpg' },
  { url: 'https://solepiscina.com.br/wp-content/uploads/2024/05/bg1.jpg', dest: 'public/sol-piscina-bg.jpg' },
  { url: 'https://solepiscina.com.br/wp-content/uploads/2024/05/WhatsApp-Image-2024-04-17-at-10.44.58_28bf86c8-e1715629751836.jpg', dest: 'public/sol-piscina-obra-6.jpg' },
  { url: 'https://solepiscina.com.br/wp-content/uploads/2024/05/WhatsApp-Image-2024-04-17-at-10.44.58_1f5951a4.jpg', dest: 'public/sol-piscina-obra-7.jpg' },
  // High quality Unsplash for hero, spa, sauna, solar heating
  { url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=85', dest: 'public/hero-pool.jpg' },
  { url: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1000&q=85', dest: 'public/aquecedores.jpg' },
  { url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85', dest: 'public/sauna-spa.jpg' },
  { url: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=1000&q=85', dest: 'public/tratamento-agua.jpg' },
  { url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85', dest: 'public/iluminacao-cascata.jpg' },
  { url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=85', dest: 'public/spa-relax.jpg' }
];

function download(url, dest) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve);
      }
      if (res.statusCode !== 200) {
        console.log(`Failed ${url}: ${res.statusCode}`);
        return resolve(false);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Saved: ${dest}`);
        resolve(true);
      });
    }).on('error', (err) => {
      console.log(`Error ${url}: ${err.message}`);
      resolve(false);
    });
  });
}

(async () => {
  for (const item of downloads) {
    await download(item.url, item.dest);
  }
  console.log('Download complete!');
})();
