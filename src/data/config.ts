// Çolakoğlu Emlak — site konfigürasyonu
// [[BİLGİ GEREK]] işaretli alanlar canlıya çıkmadan önce Çolakoğlu onayı ile doldurulacak.

export const site = {
  name: "Çolakoğlu Emlak",
  legalName: "Çolakoğlu Emlak",
  tagline: "Emlakçılıkta Güven Esastır",
  subtitle: "Muğla Gayrimenkul Danışmanlığı",
  url: "https://colakogluemlak.com",
  alternateDomain: "https://emlakmugla.com",
  experienceYears: 32,
  foundingYear: 1994,
  description:
    "Çolakoğlu Emlak — 1994'te kurulan, Muğla'nın ilk emlak ofisi. Ziya Ercan liderliğinde 32 yıllık tecrübeyle gayrimenkul danışmanlığı; Muğla Emlak Danışmanları Esnaf Odası ve Müşavirleri Derneği Başkanı, TEMFED Genel Başkan Yardımcısı.",
  locale: "tr_TR",
  region: "Muğla",
  country: "TR",
  contact: {
    phone: "+90-252-212-50-15",
    phoneDisplay: "0252 212 50 15",
    mobile: "+90-532-316-82-30",
    mobileDisplay: "0532 316 82 30",
    email: "nilercan@gmail.com",
    whatsapp: "905323168230",
  },
  address: {
    street: "Emirbeyazıt Mah. Recai Güreli Cad. Bakkaloğlu Pasajı No: 26",
    locality: "Menteşe",
    region: "Muğla",
    postalCode: "48000",
    country: "TR",
  },
  geo: {
    // Menteşe / Muğla yaklaşık koordinat (Emirbeyazıt Mah civarı)
    // [[ileride: ofisin tam GPS noktası ile değiştirilecek]]
    latitude: 37.2153,
    longitude: 28.3636,
  },
  social: {
    instagram: "", // [[BİLGİ GEREK]]
    facebook: "",
    linkedin: "",
  },
  owner: {
    name: "Ziya Ercan",
    jobTitle: "Kurucu & Genel Müdür",
    titles: [
      "Muğla Emlak Danışmanları Esnaf Odası Başkanı",
      "Muğla Emlak Müşavirleri Derneği Başkanı",
      "TEMFED (Türkiye Tüm Emlak Müşavirleri Federasyonu) Genel Başkan Yardımcısı",
    ],
  },
  memberships: [
    {
      name: "Muğla Emlak Danışmanları Esnaf Odası",
      role: "Başkan",
      url: "", // [[BİLGİ GEREK: oda web sitesi varsa]]
    },
    {
      name: "Muğla Emlak Müşavirleri Derneği",
      role: "Başkan",
      url: "",
    },
    {
      name: "TEMFED — Türkiye Tüm Emlak Müşavirleri Federasyonu",
      role: "Genel Başkan Yardımcısı",
      url: "https://temfed.org.tr",
    },
  ],
};

export const services = [
  {
    slug: "satis-kiralama",
    name: "Satış & kiralama",
    icon: "◇",
    description:
      "Konut, villa, arsa ve ticari gayrimenkulde profesyonel pazarlama ve hedef kitleye ulaşım.",
  },
  {
    slug: "yatirim-danismanligi",
    name: "Yatırım danışmanlığı",
    icon: "◎",
    description:
      "Bölgesel trendler, getiri analizi ve portföy çeşitlendirmesi ile bilinçli karar desteği.",
  },
  {
    slug: "degerleme-raporlama",
    name: "Değerleme & raporlama",
    icon: "▫",
    description:
      "Piyasa karşılaştırmalı fiyatlama ve şeffaf bilgilendirme; süreç boyunca düzenli güncelleme.",
  },
  {
    slug: "hukuki-eslik",
    name: "Hukuki eşlik",
    icon: "◈",
    description:
      "Tapu, imar ve sözleşme aşamalarında güvenilir iş ortaklarımızla koordineli ilerleme.",
  },
];
