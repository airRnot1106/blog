const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

async function downloadFont() {
  const fontUrl =
    'https://cloud.ich1q.one/s/YiAfAKScqFgMDHj/download/ich1Q-hand-Regular.ttf';
  const fontPath = path.resolve('public/fonts/ich1Q-hand-Regular.ttf');

  const response = await fetch(fontUrl);
  if (!response.ok) throw new Error('Failed to fetch font');

  const buffer = await response.buffer();
  fs.mkdirSync(path.dirname(fontPath), { recursive: true });
  fs.writeFileSync(fontPath, buffer);
}

downloadFont().catch(console.error);
