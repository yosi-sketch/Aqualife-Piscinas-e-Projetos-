const sharp = require('sharp');
const path = 'C:/Users/matheus/.gemini/antigravity/brain/01a87552-7e63-4ea7-b93e-796ed92f9c82/.user_uploaded/media_1793826963017_9ca4a7f7.png';

async function main() {
  const { data, info } = await sharp(path).raw().toBuffer({ resolveWithObject: true });
  function getPixel(x, y) {
    const idx = (y * info.width + x) * 4;
    return {
      hex: '#' + [data[idx], data[idx+1], data[idx+2]].map(v => v.toString(16).padStart(2, '0')).join(''),
      alpha: data[idx+3],
      r: data[idx], g: data[idx+1], b: data[idx+2]
    };
  }

  console.log('Center of aqua (200, 180):', getPixel(200, 180));
  console.log('Center of life (700, 200):', getPixel(700, 200));
  console.log('Sun center (760, 60):', getPixel(760, 60));
  console.log('Sun ray (780, 45):', getPixel(780, 45));
  console.log('Blue wave (350, 310):', getPixel(350, 310));
  console.log('Yellow wave (350, 340):', getPixel(350, 340));

  // Let's also find all non-white/black color clusters
  const clusters = {
    deepBlue: [],
    cyanAqua: [],
    sunYellow: []
  };

  for (let y = 0; y < info.height; y += 4) {
    for (let x = 0; x < info.width; x += 4) {
      const idx = (y * info.width + x) * 4;
      const r = data[idx], g = data[idx+1], b = data[idx+2], a = data[idx+3];
      if (a < 150) continue;
      // Skip pure white borders or black outlines
      if (r > 240 && g > 240 && b > 240) continue;
      if (r < 20 && g < 20 && b < 20) continue;

      if (r > 180 && g > 150 && b < 50) {
        clusters.sunYellow.push({ r, g, b });
      } else if (b > 180 && g > 120 && r < 50) {
        clusters.cyanAqua.push({ r, g, b });
      } else if (b > 120 && r < 50 && g < 100) {
        clusters.deepBlue.push({ r, g, b });
      }
    }
  }

  function avg(arr) {
    if (!arr.length) return null;
    const r = Math.round(arr.reduce((s, c) => s + c.r, 0) / arr.length);
    const g = Math.round(arr.reduce((s, c) => s + c.g, 0) / arr.length);
    const b = Math.round(arr.reduce((s, c) => s + c.b, 0) / arr.length);
    return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
  }

  console.log('Average deepBlue (aqua):', avg(clusters.deepBlue), `(${clusters.deepBlue.length} samples)`);
  console.log('Average cyanAqua (life):', avg(clusters.cyanAqua), `(${clusters.cyanAqua.length} samples)`);
  console.log('Average sunYellow (sol & onda):', avg(clusters.sunYellow), `(${clusters.sunYellow.length} samples)`);
}

main().catch(console.error);
