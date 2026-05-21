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
  faq: { q: string; a: string }[];
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
    faq: [
      {
        q: "Bodrum'da gayrimenkul yatırımında hangi segment öne çıkar?",
        a: "Bodrum'da lüks villa, marina çevresi konut ve yaz sezonu kiralık daire en hareketli segmentlerdir. Yalıkavak ve Türkbükü gibi bölgelerde yabancı yatırımcı talebi fiyat seviyesini belirler.",
      },
      {
        q: "Bodrum'da villa veya arsa alırken nelere dikkat edilmeli?",
        a: "İmar durumu, tapu kaydındaki kısıtlar ve kıyıya yakın parsellerde SİT statüsü mutlaka kontrol edilmelidir. Yabancı alıcılarda değerleme raporu ve bölge izinleri sürece eklenir.",
      },
      {
        q: "Bodrum'da emlak danışmanlığı süreci nasıl ilerler?",
        a: "İhtiyaç görüşmesinin ardından bölgeye uygun seçenekler filtrelenir, tapu ve imar kontrolleri yapılır ve süreç teslime kadar eşlik edilerek tamamlanır.",
      },
    ],
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
    faq: [
      {
        q: "Marmaris tatil amaçlı gayrimenkul yatırımı için uygun mu?",
        a: "Marmaris, yat turizmi ve yoğun tatil talebiyle kısa dönem kiralama getirisi sunar. İçmeler, Armutalan ve merkez farklı bütçelere uygun seçenekler içerir.",
      },
      {
        q: "Marmaris'te konut alırken nelere dikkat edilmeli?",
        a: "Tapu kaydı, kat mülkiyeti durumu ve sezonluk kullanım yoğunluğu değerlendirilmelidir. Selimiye ve Bozburun gibi doğa odaklı bölgelerde imar kısıtları öne çıkar.",
      },
      {
        q: "Marmaris'te yatırımlık gayrimenkul nasıl seçilir?",
        a: "Lokasyonun sezon dışı erişilebilirliği, kiralama potansiyeli ve imar durumu birlikte değerlendirilmelidir. Çolakoğlu Emlak bu kalemleri saha incelemesiyle netleştirir.",
      },
    ],
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
    faq: [
      {
        q: "Fethiye yabancı yatırımcı için neden tercih ediliyor?",
        a: "Fethiye; Ölüdeniz, doğa turizmi ve yerleşik yabancı topluluğuyla uluslararası talebi yüksek bir ilçedir. Çalış, Hisarönü ve Ovacık bu talebin yoğunlaştığı bölgelerdir.",
      },
      {
        q: "Fethiye'de ev alırken nelere dikkat edilmeli?",
        a: "İmar durumu, tapu kaydı ve villa bölgelerinde altyapı kontrolü önemlidir. Yabancı alımlarında değerleme raporu ve gerekli izinler sürece dahildir.",
      },
      {
        q: "Fethiye'de hangi gayrimenkul tipleri yatırıma uygundur?",
        a: "Merkez ve Karagözler uzun dönem yerleşime, Çalış ve Ovacık tatil amaçlı kullanıma uygundur. Müstakil ev ve villa pazarı bölgede güçlüdür.",
      },
    ],
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
    faq: [
      {
        q: "Milas gayrimenkul yatırımı için neden öne çıkıyor?",
        a: "Milas, Bodrum-Milas Havalimanı'na yakınlığı ve gelişen yerleşim yapısıyla görece uygun fiyatlı yatırım imkânı sunar. Güllük ve Ören kıyı turizmi ayrı bir segmenttir.",
      },
      {
        q: "Milas'ta arsa veya tarım arazisi alırken nelere dikkat edilmeli?",
        a: "Zeytinlik vasıflı taşınmazlarda yapılaşma kısıtı bulunur; tapu vasfı mutlaka kontrol edilmelidir. İmar durumu ve parsel sınırları satın almadan önce doğrulanmalıdır.",
      },
      {
        q: "Milas'ta zeytinlik yatırımı mantıklı mı?",
        a: "Zeytinlik, tarımsal getiri açısından değerli olsa da yapılaşma açısından kısıtlıdır. Yatırım amacının tarım mı yoksa yerleşim mi olduğu baştan netleştirilmelidir.",
      },
    ],
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
    faq: [
      {
        q: "Datça'da gayrimenkul neden premium segmentte yer alıyor?",
        a: "Datça yarımadası, korunmuş doğası ve sınırlı imar düzenlemesiyle arz kısıtlı bir bölgedir. Bu yapı, fiyatların premium segmentte oluşmasına yol açar.",
      },
      {
        q: "Datça'da arsa alırken nelere dikkat edilmeli?",
        a: "Sınırlı imar nedeniyle yapılaşma hakkı parselden parsele değişir; imar durumu titizlikle incelenmelidir. Eski Datça çevresinde karakter ve doku koruma kuralları geçerlidir.",
      },
      {
        q: "Datça yatırım için uzun vadeli bir tercih mi?",
        a: "Arz kısıtı ve doğa değeri, Datça'yı uzun vadeli ve değerini koruyan bir bölge yapar. Kısa vadeli getiriden çok değer saklama önceliğindeki yatırımcıya uygundur.",
      },
    ],
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
    faq: [
      {
        q: "Köyceğiz sakin yaşam yatırımı için uygun mu?",
        a: "Köyceğiz; gölü, doğası ve Sultaniye kaplıcalarıyla sakin yaşam arayanların tercihidir. Göl manzaralı konut talebi istikrarlı seyreder.",
      },
      {
        q: "Köyceğiz'de tarım arazisi yatırımı nasıl değerlendirilmeli?",
        a: "Narenciye bahçesi ve tarım arazisi pazarı bölgede aktiftir. Toprak vasfı, sulama imkânı ve imar durumu birlikte incelenmelidir.",
      },
      {
        q: "Köyceğiz'de gayrimenkul alırken nelere dikkat edilmeli?",
        a: "Tapu kaydı, parsel sınırları ve göl çevresindeki kullanım kısıtları kontrol edilmelidir. Çolakoğlu Emlak süreci saha incelemesiyle yürütür.",
      },
    ],
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
    faq: [
      {
        q: "Ortaca gayrimenkul yatırımı için neden avantajlı?",
        a: "Ortaca, Dalaman Havalimanı'na yakınlığı ve tarım potansiyeliyle yerleşim ve yatırımı dengeler. Sarıgerme kıyı turizmi ayrı bir segment oluşturur.",
      },
      {
        q: "Ortaca'da sera veya tarım arazisi yatırımı mantıklı mı?",
        a: "Ortaca, sera ve tarım yatırımı için elverişli bir bölgedir. Arazi vasfı, sulama altyapısı ve imar durumu satın almadan önce doğrulanmalıdır.",
      },
      {
        q: "Ortaca'da konut alırken nelere dikkat edilmeli?",
        a: "İmar durumu, tapu kaydı ve havalimanına yakın bölgelerde gelişim planları değerlendirilmelidir. Sarıgerme tarafında turizm odaklı kullanım öne çıkar.",
      },
    ],
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
    faq: [
      {
        q: "Dalaman gayrimenkul yatırımı için neden öne çıkıyor?",
        a: "Dalaman, uluslararası havalimanıyla bölgenin ulaşım merkezidir. Havalimanı çevresinde ticari ve lojistik gayrimenkul talebi belirgindir.",
      },
      {
        q: "Dalaman'da arsa veya tarım arazisi alırken nelere dikkat edilmeli?",
        a: "İmar durumu, parsel sınırları ve turunçgil ile sera tarımına uygunluk kontrol edilmelidir. Tarım arazisinde bölünme kuralları geçerlidir.",
      },
      {
        q: "Dalaman'da yatırım için hangi segment uygundur?",
        a: "Konut ve ticari gayrimenkulün yanı sıra tarım arazisi aktif bir segmenttir. Yatırım hedefi, havalimanı yakınlığının sağladığı avantajla birlikte değerlendirilmelidir.",
      },
    ],
  },
];

export const regionSlugs = regions.map((r) => r.slug);
