// Türkçe ek yardımcıları — meta metinleri veri üzerinden kurulurken kullanılır.
//
// NEDEN: Bölge adı + sabit ek ("Bodrum'de") yazım hatası üretir ve SERP'te
// doğrudan görünür. Ek, ünlü uyumu ve sondaki ünsüzün sertliğine göre seçilir.

const BACK_VOWELS = "aıou";
const FRONT_VOWELS = "eiöü";
const VOICELESS = "fstkçşhp";

/** Sondaki ünlüye ve ünsüze göre bulunma hâli eki: da / de / ta / te */
export function locativeSuffix(word) {
  const lower = word.toLocaleLowerCase("tr");
  let lastVowel = "";
  for (const ch of lower) {
    if (BACK_VOWELS.includes(ch) || FRONT_VOWELS.includes(ch)) lastVowel = ch;
  }
  const back = BACK_VOWELS.includes(lastVowel);
  const hard = VOICELESS.includes(lower[lower.length - 1]);
  if (back) return hard ? "ta" : "da";
  return hard ? "te" : "de";
}

/** Özel ad + kesme işareti + bulunma eki: "Bodrum'da", "Milas'ta" */
export function inPlace(name) {
  return `${name}'${locativeSuffix(name)}`;
}
