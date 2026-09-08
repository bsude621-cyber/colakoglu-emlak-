// Meta description kurucu — hedef 130-158 karakter.
//
// NEDEN: Bölge açıklamaları segment listesinden kuruluyor ve segment sayısı
// bölgeye göre değişiyor. Sabit "ilk 3 segment" kuralı Ula, Fethiye gibi kısa
// adlı bölgelerde 111-119 karakterlik açıklama üretiyordu; Google böyle kısa
// açıklamaları çoğu zaman kendi kestiği metinle değiştirir. Burada segment
// sayısı, açıklama hedef aralığa girene kadar artırılır.

const MIN = 130;
const MAX = 158;

/**
 * @param {string[]} segments  bölgenin gayrimenkul segmentleri
 * @param {(picked: string) => string} build  seçilen segment metniyle açıklamayı kuran fonksiyon
 * @returns {string} hedef aralıkta (mümkünse) meta description
 */
export function describeWithSegments(segments, build) {
  let out = "";
  for (let n = Math.min(3, segments.length); n <= segments.length; n++) {
    out = build(segments.slice(0, n).join(", ").toLocaleLowerCase("tr"));
    if (out.length >= MIN) break;
  }
  return out.length > MAX ? out.slice(0, MAX).replace(/[\s,]+\S*$/, "") : out;
}
