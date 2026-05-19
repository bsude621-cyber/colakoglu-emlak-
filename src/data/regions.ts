// Muğla ilçeleri — Çolakoğlu Emlak operasyon alanı
// Genel coğrafi/sektörel bilgi (kamu kaynağı). İlçe spesifik portföy/fiyat bilgisi
// [[BİLGİ GEREK]] olarak işaretli, Çolakoğlu onayı ile doldurulacak.

export type Region = {
  slug: string;
  name: string;
  fullName: string;
  geo: { lat: number; lng: number };
  intro: string;
  highlights: string[];
  segments: string[];
};

export const regions: Region[] = [
  {
    slug: "bodrum",
    name: "Bodrum",
    fullName: "Bodrum gayrimenkul",
    geo: { lat: 37.0344, lng: 27.4305 },
    intro:
      "Bodrum, Ege kıyısında uluslararası tanınırlığı yüksek bir turizm ve yaşam merkezi. Marina ekosistemi, lüks villa pazarı ve yabancı yatırımcı talebi bölgenin gayrimenkul profilini belirliyor.",
    highlights: [
      "Yalıkavak, Türkbükü, Gümüşlük ve Bitez gibi mahallelerde lüks villa pazarı",
      "Marina ve liman çevresinde ticari gayrimenkul yoğun",
      "Yabancı yatırımcı (özellikle AB ülkeleri) talebi yüksek",
      "Yaz sezonu kiralama pazarı ayrı bir gelir kalemi",
    ],
    segments: ["Lüks villa", "Marina daire", "Yazlık ev", "Arsa", "Ticari"],
  },
  {
    slug: "marmaris",
    name: "Marmaris",
    fullName: "Marmaris gayrimenkul",
    geo: { lat: 36.8551, lng: 28.2733 },
    intro:
      "Marmaris, yat turizmi ve uluslararası bağlantısıyla tatil amaçlı gayrimenkul talebinin yoğun olduğu bir ilçe. İçmeler, Armutalan ve merkez farklı segmentlere hizmet veriyor.",
    highlights: [
      "İçmeler, Armutalan ve merkez konut bölgeleri",
      "Yat limanı çevresinde ticari ve kısa dönem kiralama pazarı",
      "Doğa odaklı sakin yerleşim talebi (Selimiye, Bozburun) artıyor",
    ],
    segments: ["Tatil dairesi", "Villa", "Ticari", "Yazlık"],
  },
  {
    slug: "fethiye",
    name: "Fethiye",
    fullName: "Fethiye gayrimenkul",
    geo: { lat: 36.6212, lng: 29.1163 },
    intro:
      "Fethiye, Ölüdeniz, paragliding ve doğa turizmiyle uluslararası tanınırlığı yüksek bir ilçe. Çalış, Hisarönü, Ovacık ve merkez farklı yaşam profillerine uygun konut sunuyor.",
    highlights: [
      "Çalış, Hisarönü ve Ovacık yabancı yatırımcı yoğun bölgeler",
      "Merkez ve Karagözler uzun dönem yerleşim için tercih ediliyor",
      "Doğa odaklı villa ve müstakil ev pazarı güçlü",
    ],
    segments: ["Daire", "Villa", "Arsa", "Tatil evi", "Ticari"],
  },
  {
    slug: "milas",
    name: "Milas",
    fullName: "Milas gayrimenkul",
    geo: { lat: 37.3144, lng: 27.7831 },
    intro:
      "Milas, Bodrum-Milas Havalimanı'na yakınlığı ve zeytin üretim geleneğiyle hem tarımsal hem yerleşim yatırımına uygun bir ilçe. Güllük ve Ören kıyı, merkez yerleşim odaklı.",
    highlights: [
      "Havalimanı yakınlığı ulaşım avantajı sağlıyor",
      "Güllük ve Ören kıyı yerleşimleri turizm pazarı",
      "Tarım arazisi ve zeytinlik yatırımı için aktif pazar",
    ],
    segments: ["Konut", "Arsa", "Tarım arazisi", "Zeytinlik", "Ticari"],
  },
  {
    slug: "datca",
    name: "Datça",
    fullName: "Datça gayrimenkul",
    geo: { lat: 36.7325, lng: 27.6845 },
    intro:
      "Datça yarımadası, korunmuş doğası ve sınırlı imar yapısıyla premium konut talebine uygun bir bölge. Eski Datça, Reşadiye ve Karaköy farklı yaşam tarzlarına hitap ediyor.",
    highlights: [
      "Sınırlı imar düzenlemesi nedeniyle premium fiyat segmenti",
      "Eski Datça karakter ve tarihi doku korunuyor",
      "Knidos antik kenti çevresinde özel arsa pazarı",
    ],
    segments: ["Villa", "Müstakil ev", "Arsa", "Tarım arazisi"],
  },
  {
    slug: "koycegiz",
    name: "Köyceğiz",
    fullName: "Köyceğiz gayrimenkul",
    geo: { lat: 36.9683, lng: 28.6911 },
    intro:
      "Köyceğiz, gölü ve Sultaniye kaplıcalarıyla sakin yaşam arayanların tercihi. Merkez ve Toparlar bölgesi konut, çevre köyler tarım arazisi pazarı sunuyor.",
    highlights: [
      "Köyceğiz Gölü manzaralı konut talebi sürdürülebilir",
      "Sultaniye kaplıcaları çevresinde turizm yatırım fırsatları",
      "Tarım arazisi ve narenciye bahçesi pazarı aktif",
    ],
    segments: ["Konut", "Tarım arazisi", "Narenciye bahçesi", "Arsa"],
  },
  {
    slug: "ortaca",
    name: "Ortaca",
    fullName: "Ortaca gayrimenkul",
    geo: { lat: 36.8366, lng: 28.7639 },
    intro:
      "Ortaca, Dalaman Havalimanı'na yakınlığı ve tarım potansiyeliyle yerleşim ve yatırım dengesini kuran bir ilçe. Sarıgerme kıyı turizmi ayrı bir segment.",
    highlights: [
      "Dalaman Havalimanı'na 15 dk mesafe ulaşım avantajı",
      "Sarıgerme kıyı turizmi ve tatil köyü yatırım pazarı",
      "Tarım arazisi ve sera yatırımı için aktif bölge",
    ],
    segments: ["Konut", "Arsa", "Tarım arazisi", "Sera", "Tatil dairesi"],
  },
  {
    slug: "dalaman",
    name: "Dalaman",
    fullName: "Dalaman gayrimenkul",
    geo: { lat: 36.7706, lng: 28.7956 },
    intro:
      "Dalaman, uluslararası havalimanı ve tarımsal üretimiyle bölgenin ulaşım merkezi. Konut, ticari ve tarım arazisi pazarı havalimanı çevresinde yoğunlaşıyor.",
    highlights: [
      "Dalaman Havalimanı bölgenin uluslararası giriş kapısı",
      "Havalimanı çevresinde ticari ve lojistik gayrimenkul talebi",
      "Tarım arazisi (turunçgil, sera) yatırımı için aktif",
    ],
    segments: ["Konut", "Ticari", "Tarım arazisi", "Arsa"],
  },
];

export const regionSlugs = regions.map((r) => r.slug);
