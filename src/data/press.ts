// Çolakoğlu Emlak — basın yansımaları ("Basında Biz")
// KURAL: yalnızca GERÇEK, doğrulanmış haberler. Haber metni siteye
// kopyalanmaz (telif) — sadece başlık + yayın organı + tarih + orijinale
// dış link. excerpt yalnızca içeriği doğrulanmış haberlerde 1-2 cümle.
// Tüm maddeler 2026-05-21'de kaynaktan doğrulandı (URL + başlık + tarih).
// Yeni madde eklemeden önce link/başlık/tarih kontrol edilir.

export interface PressItem {
  /** Haberin gerçek başlığı (yayın organındaki haliyle) */
  title: string;
  /** Yayın organı adı */
  outlet: string;
  /** Schema datePublished — ISO tarih; yalnızca yıl biliniyorsa "YYYY" */
  date: string;
  /** Sayfada görünen tarih etiketi */
  dateLabel: string;
  /** Orijinal habere dış link */
  url: string;
  /** 1-2 cümle — yalnızca içeriği doğrulanmış haberlerde */
  excerpt?: string;
}

// Yeniden eskiye doğru sıralı.
export const press: PressItem[] = [
  {
    title: "Ziya Ercan Güven Tazeledi",
    outlet: "Muğla Gazetesi",
    date: "2026-01-14",
    dateLabel: "14 Ocak 2026",
    url: "https://www.muglagazetesi.com.tr/mugla-haberleri/ziya-ercan-guven-tazeledi-1-205873h",
    excerpt:
      "Muğla Emlak Danışmanları Esnaf Odası'nın 3. Olağan Genel Kurulu'nda Ziya Ercan güven tazeledi; görev döneminde oda üye sayısı 531'den 1.188'e ulaştı.",
  },
  {
    title:
      "Muğla Emlak Danışmanları Esnaf Odası Başkanı Ercan: “Sabit Harç Düzenlemesi Geri Çekilmeli”",
    outlet: "Muğla Yenigün Gazetesi",
    date: "2026-01-04",
    dateLabel: "4 Ocak 2026",
    url: "https://www.muglayenigun.com/mugla-emlak-danismanlari-esnaf-odasi-baskani-ercan-sabit-harc-duzenlemesi-geri-cekilmeli/",
    excerpt:
      "Oda Başkanı Ziya Ercan, torba yasayla emlak işletmelerine getirilen yıllık sabit harcın (büyükşehirde 40.000 TL) geri çekilmesini talep etti.",
  },
  {
    title: "TEDB ve EMFED Heyeti, Muğla'da Kurumsal Ziyaretlerde Bulundu",
    outlet: "Muğla Gazetesi",
    date: "2025-11-03",
    dateLabel: "3 Kasım 2025",
    url: "https://www.muglagazetesi.com.tr/mugla-haberleri/tedb-ve-emfed-heyeti-muglada-kurumsal-ziyaretlerde-bulundu-200269h",
    excerpt:
      "Gayrimenkul danışmanları birliği ve federasyonunun heyeti, Muğla Emlak Danışmanları Odası Başkanı Ziya Ercan tarafından karşılandı; görüşmede emlak sektörünün gündemi değerlendirildi.",
  },
  {
    title: "Ziya Ercan: Muğla'da Kiralarda Artış Yok",
    outlet: "Muğla Yenigün Gazetesi",
    date: "2025-04-24",
    dateLabel: "24 Nisan 2025",
    url: "https://www.muglayenigun.com/ziya-ercan-muglada-kiralarda-artis-yok/",
    excerpt:
      "Oda Başkanı Ziya Ercan, sezon dışı dönemde Muğla'da konut kira fiyatlarında artış yaşanmadığını değerlendirdi.",
  },
  {
    title: "Muğla Emlak Danışmanları Meslek Odası Kuruldu",
    outlet: "Habertürk",
    date: "2018-08-14",
    dateLabel: "14 Ağustos 2018",
    url: "https://www.haberturk.com/mugla-haberleri/62767069-mugla-emlak-danismanlari-meslek-odasi-kuruldu2-agustosta-kurulan-mugla-emlak-danismanlari",
    excerpt:
      "2 Ağustos 2018'de kurulan Muğla Emlak Danışmanları Meslek Odası'nın kuruluş açıklaması Menteşe'de yapıldı; Ziya Ercan o dönem Muğla Emlak Müşavirleri Derneği Başkanıydı.",
  },
  {
    title: "MEKOD, Taşınmaz Ticareti Yönetmeliğini Konuştu",
    outlet: "Muğla Ticaret ve Sanayi Odası",
    date: "2018",
    dateLabel: "2018",
    url: "https://www.mutso.org.tr/haberler/mekod-tasinmaz-ticareti-yonetmeligini-konustu/",
    excerpt:
      "Muğla Emlak Müşavirleri Derneği Başkanı Ziya Ercan, Taşınmaz Ticareti Yönetmeliği'ni ve mesleğin örgütlenmesinin önemini değerlendirdi.",
  },
];
