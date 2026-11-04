const https = require('https');
const fs = require('fs');

const downloads = [
  {
    // Aspirational pool leisure area with crystal clear water and sun deck (perfect for "Sobre")
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/sobre-lazer-pool.jpg'
  },
  {
    // High-end pool showroom / modern pool project (perfect for "Loja/Showroom")
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/loja-showroom-pool.jpg'
  },
  {
    // Overwrite the ugly solar roof boiler with a gorgeous pool leisure image
    url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/sol-piscina-bg.jpg'
  }
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
        console.log(`Saved: ${dest} (${fs.statSync(dest).size} bytes)`);
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
  console.log('Finished updating pool images!');
})();
