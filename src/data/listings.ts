// Çolakoğlu Emlak — portföy / ilanlar
// ⚠️ UYDURMA YASAK: Hiçbir ilan alanı (fiyat, m², oda, konum, özellik, foto)
//    Çolakoğlu/Ziya onayı olmadan yazılmaz. Veri gelince doldurulur.
// FİYAT (2026-06-18 Sude/Çolakoğlu onayı): ilanlarda fiyat gösteriliyor.
//   price alanı YOKSA o ilan "Fiyat için arayın" gösterir (uydurma yapılmaz).
//   ⚠️ Reklam Kurulu / Taşınmaz Ticareti Yönetmeliği: gösterilen fiyat GÜNCEL
//   ve gerçek olmak zorunda — değişince burada güncellenir.
//
// Yeni ilan eklemek için:
//   1) Bu diziye bir nesne ekle (aşağıdaki örnek şablonu kopyala)
//   2) Fotoğrafları public/images/ilanlar/<slug>/01.webp, 02.webp ... olarak koy
//   3) npm run build → /ilanlar/ ve /ilanlar/<slug>/ otomatik üretilir + sitemap'e girer

export type Listing = {
  slug: string; // URL: /ilanlar/<slug>/  — kebab-case, Türkçe karaktersiz
  title: string; // "Yalıkavak'ta Deniz Manzaralı 4+1 Villa"
  status: "satilik" | "kiralik";
  category:
    | "villa"
    | "daire"
    | "mustakil-ev"
    | "arsa"
    | "isyeri"
    | "turistik-tesis";
  categoryLabel: string; // ekranda görünen etiket: "Villa", "Arsa", "İşyeri" ...
  ilce: string; // regions.ts'teki ilçe adıyla eşleşmeli: "Bodrum", "Marmaris" ...
  mahalle?: string; // "Yalıkavak"
  summary: string; // kartta görünen 1 cümlelik özet
  description: string; // detay sayfasındaki tam açıklama (paragraf)
  features: string[]; // öne çıkanlar (deniz manzara, havuz, kapalı otopark ...)
  // Esnek özellik tablosu — konut/arsa/işyeri için farklı alanlar:
  // konut örn: {label:"Brüt m²",value:"180"}, {label:"Oda",value:"4+1"}, {label:"Bina Yaşı",value:"3"}
  // arsa örn:  {label:"m²",value:"1.200"}, {label:"İmar",value:"Konut"}, {label:"Ada/Parsel",value:"..."}
  specs: { label: string; value: string }[];
  images: string[]; // ["/images/ilanlar/<slug>/01.webp", ...] — ilk görsel kapak
  coverAlt: string; // kapak görseli alt metni (SEO + erişilebilirlik)
  refNo?: string; // ilan no (varsa)
  price?: number; // TL. kiralık = aylık kira, satılık = toplam satış bedeli. Yoksa "Fiyat için arayın"
  priceNote?: string; // ek koşul, örn "+ KDV · 1 yıl peşin"
  featured?: boolean; // ana sayfada/listede öne çıkarılsın mı
  // Schema için opsiyonel yapısal alanlar (varsa doldur — RealEstateListing zenginleşir):
  sizeM2?: number; // kapalı/yapı alanı m²
  landM2?: number; // arsa/parsel m²
  geo?: { lat: number; lng: number }; // ilanın yaklaşık konumu (opsiyonel)
};

export const listings: Listing[] = [
  {
    slug: "emirbeyazit-esyali-1-1-kiralik-daire",
    title: "Emirbeyazıt'ta Eşyalı 1+1 Kiralık Daire",
    status: "kiralik",
    category: "daire",
    categoryLabel: "Daire",
    ilce: "Menteşe",
    mahalle: "Emirbeyazıt",
    summary:
      "Menteşe Emirbeyazıt'ta; eşyalı, doğalgaz kombili 1+1 zemin kat kiralık daire.",
    description: `Menteşe Emirbeyazıt Mahallesi'ndeki bu 1+1 daire zemin katta yer alır ve eşyalı olarak kiraya verilmektedir. Yaklaşık 60 m² kullanım alanında salon, yatak odası, ayrı mutfak ve duşakabinli banyo bulunur.

Mutfak ankastre fırın ve ocakla; banyo çamaşır makinesiyle hazırdır. Isıtma doğalgaz kombi ile sağlanır. Daire, gerekli mobilya ve beyaz eşyayla birlikte taşınmaya hazır şekilde teslim edilir.

Daireyi yerinde görmek ve güncel bilgi almak için Çolakoğlu Emlak'ı arayabilirsiniz.`,
    features: [
      "Eşyalı (mobilya + beyaz eşya dahil)",
      "Doğalgaz kombi ile ısıtma",
      "Ankastre mutfak (fırın + ocak)",
      "Duşakabinli banyo",
      "Zemin kat",
    ],
    specs: [
      { label: "Oda", value: "1+1" },
      { label: "Brüt m²", value: "60" },
      { label: "Bulunduğu Kat", value: "Zemin kat" },
      { label: "Isıtma", value: "Doğalgaz kombi" },
      { label: "Eşya Durumu", value: "Eşyalı" },
      { label: "Kullanım Durumu", value: "Boş / taşınmaya hazır" },
    ],
    images: [
      "/images/ilanlar/emirbeyazit-esyali-1-1-kiralik-daire/01.webp",
      "/images/ilanlar/emirbeyazit-esyali-1-1-kiralik-daire/02.webp",
      "/images/ilanlar/emirbeyazit-esyali-1-1-kiralik-daire/03.webp",
      "/images/ilanlar/emirbeyazit-esyali-1-1-kiralik-daire/04.webp",
      "/images/ilanlar/emirbeyazit-esyali-1-1-kiralik-daire/05.webp",
      "/images/ilanlar/emirbeyazit-esyali-1-1-kiralik-daire/06.webp",
      "/images/ilanlar/emirbeyazit-esyali-1-1-kiralik-daire/07.webp",
      "/images/ilanlar/emirbeyazit-esyali-1-1-kiralik-daire/08.webp",
      "/images/ilanlar/emirbeyazit-esyali-1-1-kiralik-daire/09.webp",
      "/images/ilanlar/emirbeyazit-esyali-1-1-kiralik-daire/10.webp",
      "/images/ilanlar/emirbeyazit-esyali-1-1-kiralik-daire/11.webp",
      "/images/ilanlar/emirbeyazit-esyali-1-1-kiralik-daire/12.webp",
      "/images/ilanlar/emirbeyazit-esyali-1-1-kiralik-daire/13.webp",
      "/images/ilanlar/emirbeyazit-esyali-1-1-kiralik-daire/14.webp",
    ],
    coverAlt: "Emirbeyazıt'ta eşyalı 1+1 kiralık dairenin aydınlık salonu",
    featured: true,
    sizeM2: 60,
    price: 35000,
  },
  {
    slug: "emirbeyazit-hasan-ercan-kiralik-dukkan",
    title: "Emirbeyazıt'ta Cadde Üzeri 250 m² Kiralık Dükkan",
    status: "kiralik",
    category: "isyeri",
    categoryLabel: "Dükkan / İşyeri",
    ilce: "Menteşe",
    mahalle: "Emirbeyazıt",
    summary:
      "Menteşe Emirbeyazıt'ta, Hasan Ercan Caddesi üzerinde; geniş vitrinli, 125+125 m² iki katlı (toplam 250 m²) kiralık dükkan / işyeri.",
    description: `Menteşe Emirbeyazıt Mahallesi, Hasan Ercan Caddesi üzerindeki bu dükkan; cadde cepheli geniş vitrini ve yüksek görünürlüğüyle ticari kullanıma elverişlidir. Zemin ve alt kat olmak üzere 125'er m²den toplam 250 m² kullanım alanı sunar; katlar iç merdivenle birbirine bağlıdır.

Kolonlu, ferah ve açık plan yapısı; mağaza, showroom, market, ofis veya şube gibi farklı işletme türlerine uygundur. İçinde çay ocağı ve tuvalet bulunur. Kiralama 1 yıllık peşin ödeme ile yapılmaktadır.

Kiralama koşulları ve dükkanı yerinde görme randevusu için Çolakoğlu Emlak'ı arayabilirsiniz.`,
    features: [
      "Cadde üzeri geniş vitrin",
      "125 + 125 = 250 m² iki kat",
      "Katlar iç merdivenle bağlı",
      "Kolonlu, ferah açık plan",
      "Çay ocağı ve tuvalet",
      "Mağaza / ofis / şube kullanımına uygun",
    ],
    specs: [
      { label: "Toplam m²", value: "250 (125 + 125)" },
      { label: "Kat", value: "Zemin + alt kat" },
      { label: "Cephe", value: "Cadde üzeri, vitrinli" },
      { label: "Kullanım", value: "Mağaza / ofis / şube" },
      { label: "Ödeme", value: "1 yıl peşin" },
      { label: "Durum", value: "Boş / hazır" },
    ],
    images: [
      "/images/ilanlar/emirbeyazit-hasan-ercan-kiralik-dukkan/01.webp",
      "/images/ilanlar/emirbeyazit-hasan-ercan-kiralik-dukkan/02.webp",
      "/images/ilanlar/emirbeyazit-hasan-ercan-kiralik-dukkan/03.webp",
      "/images/ilanlar/emirbeyazit-hasan-ercan-kiralik-dukkan/04.webp",
      "/images/ilanlar/emirbeyazit-hasan-ercan-kiralik-dukkan/05.webp",
      "/images/ilanlar/emirbeyazit-hasan-ercan-kiralik-dukkan/06.webp",
      "/images/ilanlar/emirbeyazit-hasan-ercan-kiralik-dukkan/07.webp",
      "/images/ilanlar/emirbeyazit-hasan-ercan-kiralik-dukkan/08.webp",
      "/images/ilanlar/emirbeyazit-hasan-ercan-kiralik-dukkan/09.webp",
    ],
    coverAlt:
      "Emirbeyazıt Hasan Ercan Caddesi üzeri geniş vitrinli kiralık dükkanın iç görünümü",
    featured: true,
    sizeM2: 250,
    price: 180000,
    priceNote: "+ KDV · 1 yıl peşin",
  },
  {
    slug: "emirbeyazit-recai-gureli-kiralik-buro",
    title: "Emirbeyazıt'ta 2. Kat 2 Odalı 50 m² Kiralık Büro",
    status: "kiralik",
    category: "isyeri",
    categoryLabel: "Büro / Ofis",
    ilce: "Menteşe",
    mahalle: "Emirbeyazıt",
    summary:
      "Menteşe Emirbeyazıt'ta, Recai Güreli Caddesi'ndeki Osman Ercan İş Merkezi'nde; 2 odalı, 2. kat, 50 m², mutfak ve tuvaletli kiralık büro.",
    description: `Menteşe Emirbeyazıt Mahallesi, Recai Güreli Caddesi'ndeki Osman Ercan İş Merkezi'nde, Hamdibey Karakolu yanında yer alan bu büro 2. kattadır. Yaklaşık 50 m² kullanım alanında 2 oda, mutfak ve tuvalet bulunur. Isıtma klima ile sağlanır.

Laminat parke zeminli büro, avukatlık, muhasebe, danışmanlık gibi ofis kullanımlarına uygundur.

Bilgi almak ve büroyu yerinde görmek için Çolakoğlu Emlak'ı arayabilirsiniz.`,
    features: [
      "2 oda",
      "Mutfak ve tuvalet",
      "2. kat",
      "Klima ile ısıtma",
      "Laminat parke zemin",
      "Osman Ercan İş Merkezi içinde",
    ],
    specs: [
      { label: "Oda", value: "2 oda" },
      { label: "Brüt m²", value: "50" },
      { label: "Bulunduğu Kat", value: "2. kat" },
      { label: "Isıtma", value: "Klima" },
      { label: "Mutfak / WC", value: "Var" },
      { label: "Konum", value: "Recai Güreli Cad. — Osman Ercan İş Merkezi" },
    ],
    images: [
      "/images/ilanlar/emirbeyazit-recai-gureli-kiralik-buro/01.webp",
      "/images/ilanlar/emirbeyazit-recai-gureli-kiralik-buro/02.webp",
      "/images/ilanlar/emirbeyazit-recai-gureli-kiralik-buro/03.webp",
      "/images/ilanlar/emirbeyazit-recai-gureli-kiralik-buro/04.webp",
      "/images/ilanlar/emirbeyazit-recai-gureli-kiralik-buro/05.webp",
      "/images/ilanlar/emirbeyazit-recai-gureli-kiralik-buro/06.webp",
      "/images/ilanlar/emirbeyazit-recai-gureli-kiralik-buro/07.webp",
      "/images/ilanlar/emirbeyazit-recai-gureli-kiralik-buro/08.webp",
      "/images/ilanlar/emirbeyazit-recai-gureli-kiralik-buro/09.webp",
      "/images/ilanlar/emirbeyazit-recai-gureli-kiralik-buro/10.webp",
      "/images/ilanlar/emirbeyazit-recai-gureli-kiralik-buro/11.webp",
      "/images/ilanlar/emirbeyazit-recai-gureli-kiralik-buro/12.webp",
      "/images/ilanlar/emirbeyazit-recai-gureli-kiralik-buro/13.webp",
      "/images/ilanlar/emirbeyazit-recai-gureli-kiralik-buro/14.webp",
    ],
    coverAlt:
      "Emirbeyazıt Recai Güreli Caddesi Osman Ercan İş Merkezi'nde 2. kat kiralık büronun aydınlık odası",
    featured: true,
    sizeM2: 50,
  },
  {
    slug: "emirbeyazit-kazim-caglar-satilik-3-1-daire",
    title: "Emirbeyazıt'ta 3+1 Satılık Daire (170 m², 2. Kat)",
    status: "satilik",
    category: "daire",
    categoryLabel: "Daire",
    ilce: "Menteşe",
    mahalle: "Emirbeyazıt",
    summary:
      "Menteşe Emirbeyazıt'ta, Hasan Ercan Caddesi Şht. Kazım Çağlar Sokak'ta; 3+1, 2. kat, brüt 170 / net 140 m², doğalgazlı, 2005 yapımı satılık daire.",
    description: `Menteşe Emirbeyazıt Mahallesi, Hasan Ercan Caddesi Şehit Kazım Çağlar Sokak'taki Kardeşler Apartmanı'nda yer alan bu 3+1 daire 2. kattadır. Brüt 170 m² (net 140 m²) kullanım alanında geniş salon, 3 oda, mutfak ve banyo bulunur. 2005 yapımı binada ısıtma doğalgaz (radyatör) ile sağlanır.

Laminat parke zeminli, aydınlık ve ferah dairenin balkonlarından yeşil alan ve tepe manzarası görülür. Odalarda gömme dolap, mutfakta granit tezgâh bulunur; banyo ve ayrı tuvalet kullanıma hazırdır.

Daireyi yerinde görmek ve bilgi almak için Çolakoğlu Emlak'ı arayabilirsiniz.`,
    features: [
      "3+1, geniş salon",
      "Brüt 170 m² / net 140 m²",
      "2. kat",
      "Doğalgaz ısıtma (radyatör)",
      "Laminat parke zemin",
      "Odalarda gömme dolap",
      "Granit tezgâhlı mutfak",
      "Balkondan yeşil alan / tepe manzarası",
      "2005 yapımı",
    ],
    specs: [
      { label: "Oda", value: "3+1" },
      { label: "Brüt m²", value: "170" },
      { label: "Net m²", value: "140" },
      { label: "Bulunduğu Kat", value: "2. kat" },
      { label: "Yapım Yılı", value: "2005" },
      { label: "Isıtma", value: "Doğalgaz" },
      { label: "Banyo", value: "1 banyo + 1 WC" },
    ],
    images: [
      "/images/ilanlar/emirbeyazit-kazim-caglar-satilik-3-1-daire/01.webp",
      "/images/ilanlar/emirbeyazit-kazim-caglar-satilik-3-1-daire/02.webp",
      "/images/ilanlar/emirbeyazit-kazim-caglar-satilik-3-1-daire/03.webp",
      "/images/ilanlar/emirbeyazit-kazim-caglar-satilik-3-1-daire/04.webp",
      "/images/ilanlar/emirbeyazit-kazim-caglar-satilik-3-1-daire/05.webp",
      "/images/ilanlar/emirbeyazit-kazim-caglar-satilik-3-1-daire/06.webp",
      "/images/ilanlar/emirbeyazit-kazim-caglar-satilik-3-1-daire/07.webp",
      "/images/ilanlar/emirbeyazit-kazim-caglar-satilik-3-1-daire/08.webp",
      "/images/ilanlar/emirbeyazit-kazim-caglar-satilik-3-1-daire/09.webp",
      "/images/ilanlar/emirbeyazit-kazim-caglar-satilik-3-1-daire/10.webp",
      "/images/ilanlar/emirbeyazit-kazim-caglar-satilik-3-1-daire/11.webp",
      "/images/ilanlar/emirbeyazit-kazim-caglar-satilik-3-1-daire/12.webp",
      "/images/ilanlar/emirbeyazit-kazim-caglar-satilik-3-1-daire/13.webp",
      "/images/ilanlar/emirbeyazit-kazim-caglar-satilik-3-1-daire/14.webp",
      "/images/ilanlar/emirbeyazit-kazim-caglar-satilik-3-1-daire/15.webp",
      "/images/ilanlar/emirbeyazit-kazim-caglar-satilik-3-1-daire/16.webp",
      "/images/ilanlar/emirbeyazit-kazim-caglar-satilik-3-1-daire/17.webp",
      "/images/ilanlar/emirbeyazit-kazim-caglar-satilik-3-1-daire/18.webp",
      "/images/ilanlar/emirbeyazit-kazim-caglar-satilik-3-1-daire/19.webp",
      "/images/ilanlar/emirbeyazit-kazim-caglar-satilik-3-1-daire/20.webp",
      "/images/ilanlar/emirbeyazit-kazim-caglar-satilik-3-1-daire/21.webp",
    ],
    coverAlt:
      "Emirbeyazıt Kazım Çağlar Sokak'ta 3+1 satılık dairenin aydınlık geniş salonu",
    featured: true,
    sizeM2: 170,
    price: 12500000,
  },
  {
    slug: "emirbeyazit-kurkutcu-satilik-2-1-daire",
    title: "Emirbeyazıt'ta 2+1 Satılık Daire (80 m², 1. Kat)",
    status: "satilik",
    category: "daire",
    categoryLabel: "Daire",
    ilce: "Menteşe",
    mahalle: "Emirbeyazıt",
    summary:
      "Menteşe Emirbeyazıt'ta, Kürkütçü Sokak'ta; 2+1, 1. kat, 80 m², doğalgaz (kombi) ısıtmalı, kapalı balkonlu satılık daire.",
    description: `Menteşe Emirbeyazıt Mahallesi, Kürkütçü Sokak'taki Safa Apartmanı'nda (No: 4) yer alan bu 2+1 daire 1. kattadır. 80 m² kullanım alanında salon, 2 oda, mutfak, banyo ve ayrı tuvalet bulunur; ayrıca kapalı balkonu vardır.

35 yıllık binadaki daire laminat parke ve seramik zeminlidir; odalarda gömme dolap bulunur, ısıtma doğalgaz kombi ile sağlanır.

Daireyi yerinde görmek ve bilgi almak için Çolakoğlu Emlak'ı arayabilirsiniz.`,
    features: [
      "2+1, kapalı balkon",
      "80 m²",
      "1. kat",
      "Doğalgaz kombi ısıtma",
      "Laminat parke + seramik zemin",
      "Odalarda gömme dolap",
      "Banyo + ayrı tuvalet",
      "35 yıllık bina",
    ],
    specs: [
      { label: "Oda", value: "2+1" },
      { label: "Brüt m²", value: "80" },
      { label: "Bulunduğu Kat", value: "1. kat" },
      { label: "Bina Yaşı", value: "35 yıllık" },
      { label: "Isıtma", value: "Doğalgaz (kombi)" },
      { label: "Banyo", value: "Banyo + WC" },
      { label: "Balkon", value: "Kapalı balkon" },
    ],
    images: [
      "/images/ilanlar/emirbeyazit-kurkutcu-satilik-2-1-daire/01.webp",
      "/images/ilanlar/emirbeyazit-kurkutcu-satilik-2-1-daire/02.webp",
      "/images/ilanlar/emirbeyazit-kurkutcu-satilik-2-1-daire/03.webp",
      "/images/ilanlar/emirbeyazit-kurkutcu-satilik-2-1-daire/04.webp",
      "/images/ilanlar/emirbeyazit-kurkutcu-satilik-2-1-daire/05.webp",
      "/images/ilanlar/emirbeyazit-kurkutcu-satilik-2-1-daire/06.webp",
      "/images/ilanlar/emirbeyazit-kurkutcu-satilik-2-1-daire/07.webp",
      "/images/ilanlar/emirbeyazit-kurkutcu-satilik-2-1-daire/08.webp",
      "/images/ilanlar/emirbeyazit-kurkutcu-satilik-2-1-daire/09.webp",
      "/images/ilanlar/emirbeyazit-kurkutcu-satilik-2-1-daire/10.webp",
      "/images/ilanlar/emirbeyazit-kurkutcu-satilik-2-1-daire/11.webp",
      "/images/ilanlar/emirbeyazit-kurkutcu-satilik-2-1-daire/12.webp",
      "/images/ilanlar/emirbeyazit-kurkutcu-satilik-2-1-daire/13.webp",
      "/images/ilanlar/emirbeyazit-kurkutcu-satilik-2-1-daire/14.webp",
      "/images/ilanlar/emirbeyazit-kurkutcu-satilik-2-1-daire/15.webp",
      "/images/ilanlar/emirbeyazit-kurkutcu-satilik-2-1-daire/16.webp",
    ],
    coverAlt:
      "Emirbeyazıt Kürkütçü Sokak'ta 2+1 satılık dairenin aydınlık salonu",
    featured: true,
    sizeM2: 80,
    price: 7000000,
  },
  {
    slug: "emirbeyazit-bakkaloglu-pasaji-satilik-buro",
    title: "Emirbeyazıt'ta 2 Odalı 52 m² Satılık Büro",
    status: "satilik",
    category: "isyeri",
    categoryLabel: "Büro / Ofis",
    ilce: "Menteşe",
    mahalle: "Emirbeyazıt",
    summary:
      "Menteşe Emirbeyazıt'ta, Recai Güreli Caddesi Bakkaloğlu Pasajı'nda; 2 odalı, 1. kat, 52 m², doğalgaz ısıtmalı satılık büro.",
    description: `Menteşe Emirbeyazıt Mahallesi, Recai Güreli Caddesi Bakkaloğlu Pasajı'nda yer alan bu büro 1. kattadır. 52 m² kullanım alanında 2 oda bulunur; çarşı içinde, merkezi bir konumdadır. 35 yıllık binada ısıtma doğalgaz kombi ile sağlanır.

Hâlihazırda ofis olarak kullanılan mekan; emlak, muhasebe, danışmanlık veya avukatlık gibi çeşitli işyeri kullanımlarına uygundur.

Bilgi almak ve büroyu yerinde görmek için Çolakoğlu Emlak'ı arayabilirsiniz.`,
    features: [
      "2 oda",
      "52 m²",
      "1. kat",
      "Doğalgaz kombi ısıtma",
      "Bakkaloğlu Pasajı — çarşı merkezi",
      "35 yıllık bina",
    ],
    specs: [
      { label: "Oda", value: "2 oda" },
      { label: "Brüt m²", value: "52" },
      { label: "Bulunduğu Kat", value: "1. kat" },
      { label: "Bina Yaşı", value: "35 yıllık" },
      { label: "Isıtma", value: "Doğalgaz (kombi)" },
      { label: "Konum", value: "Recai Güreli Cad. — Bakkaloğlu Pasajı" },
    ],
    images: [
      "/images/ilanlar/emirbeyazit-bakkaloglu-pasaji-satilik-buro/01.webp",
      "/images/ilanlar/emirbeyazit-bakkaloglu-pasaji-satilik-buro/02.webp",
      "/images/ilanlar/emirbeyazit-bakkaloglu-pasaji-satilik-buro/03.webp",
      "/images/ilanlar/emirbeyazit-bakkaloglu-pasaji-satilik-buro/04.webp",
    ],
    coverAlt:
      "Emirbeyazıt Bakkaloğlu Pasajı'nda 2 odalı satılık büronun iç görünümü",
    featured: true,
    sizeM2: 52,
    price: 3750000,
  },
  {
    slug: "orhaniye-ismet-catak-kiralik-buro",
    title: "Orhaniye'de Cadde Üzeri 2+1 60 m² Kiralık Büro",
    status: "kiralik",
    category: "isyeri",
    categoryLabel: "Büro / Ofis",
    ilce: "Menteşe",
    mahalle: "Orhaniye",
    summary:
      "Menteşe Orhaniye'de, İsmet Çatak Caddesi üzerinde (DenizBank üstü); 2+1, 60 m², mutfaklı, tuvaletli, klimalı, cadde cepheli kiralık büro.",
    description: `Menteşe Orhaniye Mahallesi, İsmet Çatak Caddesi üzerinde, DenizBank'ın üst katında yer alan bu büro 2+1 planlı ve yaklaşık 60 m² kullanım alanına sahiptir. Geniş ana bölümün yanında iki ayrı oda, mutfak köşesi ve tuvalet bulunur; odalar laminat parke zeminlidir.

Cadde cepheli geniş pencerelerden bol gün ışığı alan büro, radyatör ve klima ile iklimlendirilir. Bir bölümde gömme dolap, bir odada balkon/teras çıkışı vardır. Merkezi konumu sayesinde avukatlık, muhasebe, danışmanlık, emlak gibi ofis kullanımlarına uygundur.

Büroyu yerinde görmek ve güncel bilgi almak için Çolakoğlu Emlak'ı arayabilirsiniz.`,
    features: [
      "2+1, ayrı odalar + geniş bölüm",
      "Cadde cepheli geniş pencereler, bol ışık",
      "Mutfak köşesi ve tuvalet",
      "Radyatör + klima",
      "Laminat parke zemin",
      "Gömme dolap + balkon/teras çıkışı",
      "DenizBank üstü — merkezi konum",
    ],
    specs: [
      { label: "Oda", value: "2+1" },
      { label: "Brüt m²", value: "60" },
      { label: "Isıtma", value: "Radyatör + klima" },
      { label: "Mutfak / WC", value: "Var" },
      { label: "Kullanım", value: "Ofis / büro" },
      { label: "Konum", value: "İsmet Çatak Cad. — DenizBank üstü" },
    ],
    images: [
      "/images/ilanlar/orhaniye-ismet-catak-kiralik-buro/01.webp",
      "/images/ilanlar/orhaniye-ismet-catak-kiralik-buro/02.webp",
      "/images/ilanlar/orhaniye-ismet-catak-kiralik-buro/03.webp",
      "/images/ilanlar/orhaniye-ismet-catak-kiralik-buro/04.webp",
      "/images/ilanlar/orhaniye-ismet-catak-kiralik-buro/05.webp",
      "/images/ilanlar/orhaniye-ismet-catak-kiralik-buro/06.webp",
      "/images/ilanlar/orhaniye-ismet-catak-kiralik-buro/07.webp",
      "/images/ilanlar/orhaniye-ismet-catak-kiralik-buro/08.webp",
      "/images/ilanlar/orhaniye-ismet-catak-kiralik-buro/09.webp",
      "/images/ilanlar/orhaniye-ismet-catak-kiralik-buro/10.webp",
      "/images/ilanlar/orhaniye-ismet-catak-kiralik-buro/11.webp",
    ],
    coverAlt:
      "Orhaniye İsmet Çatak Caddesi'nde cadde cepheli 2+1 kiralık büronun aydınlık ana bölümü",
    featured: true,
    sizeM2: 60,
    price: 35000,
  },
  {
    slug: "karamehmet-avlulu-eski-mugla-evi",
    title: "Karamehmet'te Avlulu 4 Odalı Eski Muğla Evi (145 m²)",
    status: "satilik",
    category: "mustakil-ev",
    categoryLabel: "Müstakil Ev",
    ilce: "Menteşe",
    mahalle: "Karamehmet",
    summary:
      "Menteşe'nin tarihi Karamehmet Mahallesi'nde; kemerli ahşap hayatı, asmalı taş avlusu ve Muğla bacalarıyla geleneksel mimarisini koruyan, 4 odalı, ev + avlu toplam 145 m² müstakil eski Muğla evi.",
    description: `Menteşe'nin köklü mahallelerinden Karamehmet'te, Kara Mehmet Sokak'ta yer alan bu müstakil ev, geleneksel Muğla mimarisinin tüm karakterini taşır. İki katlı evin kemerli ahşap hayatı (sundurması), camekânlı çift kanat giriş kapısı, ahşap tavanları ve cumbası özgün haliyle korunmuştur. Üst kattaki kemerli teras, Muğla şehir dokusu ve karşı tepelerin manzarasına bakar.

Ev, asma çardaklı ve taş fırınlı bir avluya sahiptir; ev ile avlu toplam 145 m² kullanım alanı sunar. İçeride 4 oda, mutfak ve ıslak hacimler bulunur. Çatı kiremitli, duvarlar kârgir ve ahşap dokuludur; bacalar geleneksel Muğla bacası formundadır.

70 yılın üzerinde bir geçmişe sahip olan ev, özgün dokusunu koruyarak yenileme ile bir bütün olarak değer kazanmaya çok uygundur — yaşanacak otantik bir konut ya da butik bir restorasyon projesi olarak değerlendirilebilir.

Evi yerinde görmek ve güncel bilgi almak için Çolakoğlu Emlak'ı arayabilirsiniz.`,
    features: [
      "Geleneksel iki katlı eski Muğla evi (70+ yıl)",
      "Kemerli ahşap hayat (sundurma) + cumba",
      "Asma çardaklı, taş fırınlı avlu",
      "Şehir ve tepe manzaralı üst teras",
      "Ahşap tavanlar + kârgir taş duvar",
      "Geleneksel Muğla bacaları",
      "4 oda + mutfak",
      "Müstakil — komşu duvarı paylaşımı dışında bağımsız",
      "Restorasyon / yenileme potansiyeli yüksek",
    ],
    specs: [
      { label: "Oda", value: "4 oda" },
      { label: "Toplam Alan", value: "145 m² (ev + avlu)" },
      { label: "Kat", value: "2 katlı" },
      { label: "Bina Yaşı", value: "70 yıl ve üzeri" },
      { label: "Yapı Tipi", value: "Müstakil eski Muğla evi (kârgir + ahşap)" },
      { label: "Avlu", value: "Var (asma çardak + taş fırın)" },
      { label: "Konum", value: "Karamehmet Mah. — Kara Mehmet Sk." },
    ],
    images: [
      "/images/ilanlar/karamehmet-avlulu-eski-mugla-evi/01.webp",
      "/images/ilanlar/karamehmet-avlulu-eski-mugla-evi/02.webp",
      "/images/ilanlar/karamehmet-avlulu-eski-mugla-evi/03.webp",
      "/images/ilanlar/karamehmet-avlulu-eski-mugla-evi/04.webp",
      "/images/ilanlar/karamehmet-avlulu-eski-mugla-evi/05.webp",
      "/images/ilanlar/karamehmet-avlulu-eski-mugla-evi/06.webp",
      "/images/ilanlar/karamehmet-avlulu-eski-mugla-evi/07.webp",
      "/images/ilanlar/karamehmet-avlulu-eski-mugla-evi/08.webp",
      "/images/ilanlar/karamehmet-avlulu-eski-mugla-evi/09.webp",
      "/images/ilanlar/karamehmet-avlulu-eski-mugla-evi/10.webp",
      "/images/ilanlar/karamehmet-avlulu-eski-mugla-evi/11.webp",
      "/images/ilanlar/karamehmet-avlulu-eski-mugla-evi/12.webp",
      "/images/ilanlar/karamehmet-avlulu-eski-mugla-evi/13.webp",
      "/images/ilanlar/karamehmet-avlulu-eski-mugla-evi/14.webp",
      "/images/ilanlar/karamehmet-avlulu-eski-mugla-evi/15.webp",
      "/images/ilanlar/karamehmet-avlulu-eski-mugla-evi/16.webp",
    ],
    coverAlt:
      "Karamehmet'te kemerli ahşap hayatı ve camekânlı giriş kapısıyla geleneksel eski Muğla evi",
    featured: true,
    sizeM2: 145,
    price: 6000000,
  },
];

// ── Yardımcılar ──
export const statusLabel = (s: Listing["status"]): string =>
  s === "satilik" ? "Satılık" : "Kiralık";

// Fiyat görünümü: "12.500.000 ₺" / kiralıkta "35.000 ₺/ay". Fiyat yoksa null.
export const priceDisplay = (l: Listing): string | null => {
  if (l.price == null) return null;
  const num = new Intl.NumberFormat("tr-TR").format(l.price) + " ₺";
  return l.status === "kiralik" ? `${num}/ay` : num;
};

export const hasListings = listings.length > 0;
