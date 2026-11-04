const https = require('https');
const fs = require('fs');

https.get('https://solepiscina.com.br/', { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    fs.writeFileSync('scripts/solepiscina_home.html', html);
    const regex = /<img[^>]+src=["']([^"']+)["']/gi;
    let m;
    const images = [];
    while ((m = regex.exec(html)) !== null) {
      images.push(m[1]);
    }
    console.log('Total images found:', images.length);
    console.log('Images:\n' + images.slice(0, 25).join('\n'));
    
    // Extract title, h1, h2, paragraphs
    const titles = [...html.matchAll(/<h[1-3][^>]*>(.*?)<\/h[1-3]>/gis)].map(x => x[1].replace(/<[^>]+>/g, '').trim());
    console.log('\nHeadings:\n' + titles.slice(0, 20).join('\n'));
  });
}).on('error', err => console.log('Error:', err.message));
