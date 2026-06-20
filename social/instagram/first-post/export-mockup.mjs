// Mockup tek slayt PNG export
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR  = resolve(__dirname, 'out');
const HTML_URL = 'file:///' + resolve(__dirname, 'mockup-light.html').replace(/\\/g, '/');
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const chrome = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
].find(existsSync);

const out = resolve(OUT_DIR, 'mockup-light-s1.png');
const proc = spawn(chrome, [
  '--headless=new', '--disable-gpu', '--hide-scrollbars',
  '--no-sandbox', '--force-device-scale-factor=1',
  '--virtual-time-budget=4000',
  `--screenshot=${out}`, '--window-size=1080,1350',
  `${HTML_URL}?slide=1`,
], { stdio: ['ignore', 'pipe', 'pipe'] });

proc.on('close', () => {
  console.log(existsSync(out) ? `✓ ${out}` : '✗ başarısız');
});
