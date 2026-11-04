const https = require('https');
const fs = require('fs');

async function scrape() {
  const res = await fetch('https://aqualifepiscinas.com.br/');
  const html = await res.text();
  fs.writeFileSync('scripts/aqualife_raw.html', html, 'utf8');

  const imgMatches = [...html.matchAll(/src=["']([^"']+\.(jpg|jpeg|png|webp|svg)[^"']*)["']/gi)].map(m => m[1]);
  console.log('Images found:', [...new Set(imgMatches)].slice(0, 30));

  const waMatches = [...html.matchAll(/(https:\/\/(api\.whatsapp\.com|wa\.me)[^"'\s<>]*)/gi)].map(m => m[1]);
  console.log('WhatsApp links:', [...new Set(waMatches)]);

  const telMatches = [...html.matchAll(/tel:([^"'\s<>]+)/gi)].map(m => m[1]);
  console.log('Tel links:', [...new Set(telMatches)]);

  const mailMatches = [...html.matchAll(/mailto:([^"'\s<>]+)/gi)].map(m => m[1]);
  console.log('Emails:', [...new Set(mailMatches)]);
}

scrape().catch(console.error);
