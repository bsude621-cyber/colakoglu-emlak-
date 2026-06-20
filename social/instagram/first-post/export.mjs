// Chrome headless ile 8 slayt PNG export
// Kullanım: node export.mjs   →  ./out/01.png ... 08.png
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR  = resolve(__dirname, 'out');
const HTML_URL = 'file:///' + resolve(__dirname, 'slides.html').replace(/\\/g, '/');

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const CHROME_CANDIDATES = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
];
const chrome = CHROME_CANDIDATES.find(existsSync);
if (!chrome) {
  console.error('Chrome/Edge bulunamadı. Aranan yollar:');
  CHROME_CANDIDATES.forEach(p => console.error('  ' + p));
  process.exit(1);
}
console.log('Tarayıcı:', chrome);

function shoot(idx) {
  const url = `${HTML_URL}?slide=${idx}`;
  const out = resolve(OUT_DIR, String(idx).padStart(2, '0') + '.png');
  return new Promise((res, rej) => {
    const proc = spawn(chrome, [
      '--headless=new',
      '--disable-gpu',
      '--hide-scrollbars',
      '--no-sandbox',
      '--force-device-scale-factor=1',
      '--virtual-time-budget=4000', // fontlar yüklensin
      `--screenshot=${out}`,
      '--window-size=1080,1350',
      url,
    ], { stdio: ['ignore', 'pipe', 'pipe'] });
    let err = '';
    proc.stderr.on('data', d => (err += d.toString()));
    proc.on('close', code => {
      if (existsSync(out)) {
        console.log(`  ✓ ${String(idx).padStart(2,'0')}.png`);
        res();
      } else {
        rej(new Error(`Slayt ${idx} başarısız (kod ${code}): ${err.slice(0, 300)}`));
      }
    });
  });
}

console.log(`\n8 slayt PNG export → ${OUT_DIR}\n`);
for (let i = 1; i <= 8; i++) await shoot(i);
console.log('\n✓ Tamamlandı. IG\'ye 01→08 sırayla yükle.');
