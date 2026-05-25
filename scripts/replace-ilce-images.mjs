// 4 ilçe görseli Wikimedia'dan indir + WebP'e convert + replace.
// Bodrum/Köyceğiz/Milas/Dalaman görselleri ilçeyi temsil etmiyordu — değiştirilir.
import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const targets = [
  {
    slug: "bodrum",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Bodrum_Harbour%2C_T%C3%BCrkiye.jpg",
    credit: "Bodrum Harbour — Mustang Joe (Joe deSousa), CC0 / Public Domain, via Wikimedia Commons",
  },
  {
    slug: "koycegiz",
    url: "https://upload.wikimedia.org/wikipedia/commons/b/b4/G%C3%B6lde_Gezinti.jpg",
    credit: "Köyceğiz Gölü — Gölde Gezinti, CC BY-SA, via Wikimedia Commons",
  },
  {
    slug: "milas",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Becin_Kalesi_20_05_2016_Becken_von_Milas.jpg",
    credit: "Beçin Kalesi & Milas ovası, CC BY-SA, via Wikimedia Commons",
  },
  {
    slug: "dalaman",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Dalaman_-_panoramio.jpg",
    credit: "Dalaman — Panoramio, CC BY-SA, via Wikimedia Commons",
  },
];

const outDir = resolve("public/images");

for (const t of targets) {
  process.stdout.write(`→ ${t.slug}: indir... `);
  const res = await fetch(t.url, {
    headers: { "User-Agent": "ColakogluEmlakSite/1.0 (bsude621@gmail.com)" },
  });
  if (!res.ok) {
    console.error(`HATA ${res.status} ${res.statusText}`);
    process.exitCode = 1;
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  process.stdout.write(`${(buf.length / 1024).toFixed(0)}KB · convert... `);

  // 4:5 aspect, 1200x1500 hedef boyut — kart oranıyla uyumlu, mobile + retina yeterli.
  const out = await sharp(buf)
    .rotate()
    .resize(1200, 1500, { fit: "cover", position: "attention" })
    .webp({ quality: 82, effort: 5 })
    .toBuffer();

  const outPath = resolve(outDir, `ilce-${t.slug}.webp`);
  await writeFile(outPath, out);
  console.log(`✓ ${(out.length / 1024).toFixed(0)}KB → ${outPath}`);
}

console.log("\nBitti. Krediler footer'a/regions sayfasına eklenmesi gereken kaynaklar:");
for (const t of targets) console.log(`  · ${t.credit}`);
