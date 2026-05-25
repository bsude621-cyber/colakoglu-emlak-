// 13 ilçe webp'lerine EXIF geo-tag (lat/long) ekle — hyperlocal image leverage.
// Google Image Search "yerel görsel" sinyali için EXIF GPS coordinates.
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

// regions.ts'den manuel kopya (build-time import gerekmesin)
const regions = [
  { slug: "bodrum", lat: 37.0344, lng: 27.4305 },
  { slug: "marmaris", lat: 36.8551, lng: 28.2733 },
  { slug: "fethiye", lat: 36.6212, lng: 29.1163 },
  { slug: "milas", lat: 37.3144, lng: 27.7831 },
  { slug: "datca", lat: 36.7325, lng: 27.6845 },
  { slug: "koycegiz", lat: 36.9683, lng: 28.6911 },
  { slug: "ortaca", lat: 36.8366, lng: 28.7639 },
  { slug: "dalaman", lat: 36.7706, lng: 28.7956 },
  { slug: "mentese", lat: 37.2153, lng: 28.3636 },
  { slug: "ula", lat: 37.1058, lng: 28.4156 },
  { slug: "yatagan", lat: 37.3389, lng: 28.1408 },
  { slug: "kavaklidere", lat: 37.4456, lng: 28.3739 },
  { slug: "seydikemer", lat: 36.6347, lng: 29.3119 },
];

// EXIF GPS coordinates: degree-minute-second rational format
function toRational(decimal) {
  const abs = Math.abs(decimal);
  const deg = Math.floor(abs);
  const minFloat = (abs - deg) * 60;
  const min = Math.floor(minFloat);
  const sec = Math.round((minFloat - min) * 60 * 100); // 2 decimal precision
  return [
    [deg, 1],
    [min, 1],
    [sec, 100],
  ];
}

for (const r of regions) {
  const file = resolve("public/images", `ilce-${r.slug}.webp`);
  try {
    const input = await readFile(file);
    const out = await sharp(input)
      .withExif({
        IFD0: {
          Copyright: "Çolakoğlu Emlak — kaynak: Wikimedia Commons",
          ImageDescription: `${r.slug} — Muğla / Türkiye`,
        },
        GPS: {
          GPSLatitudeRef: r.lat >= 0 ? "N" : "S",
          GPSLatitude: toRational(r.lat),
          GPSLongitudeRef: r.lng >= 0 ? "E" : "W",
          GPSLongitude: toRational(r.lng),
        },
      })
      .webp({ quality: 85, effort: 5 })
      .toBuffer();

    await writeFile(file, out);
    const before = input.length;
    const after = out.length;
    console.log(
      `✓ ${r.slug} (lat ${r.lat}, lng ${r.lng}) → ${(after / 1024).toFixed(0)}KB (önce ${(before / 1024).toFixed(0)}KB)`,
    );
  } catch (err) {
    console.error(`✗ ${r.slug}: ${err.message}`);
  }
}

console.log("\nEXIF geo-tag tamam. Hyperlocal image SEO leverage aktif.");
