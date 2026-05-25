// Çolakoğlu Emlak — site konfigürasyonu
// [[BİLGİ GEREK]] işaretli alanlar canlıya çıkmadan önce Çolakoğlu onayı ile doldurulacak.

export const site = {
  name: "Çolakoğlu Emlak",
  legalName: "Çolakoğlu Emlak",
  tagline: "Emlakçılıkta Güven Esastır",
  subtitle: "Muğla Gayrimenkul Danışmanlığı",
  url: "https://colakogluemlak48.com",
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
    email: "",
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

export type Service = {
  slug: string;
  name: string;
  icon: string;
  description: string;
  tldr: string;
  detail: string;
  highlights: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "satis-kiralama",
    name: "Satış & kiralama",
    icon: "◇",
    description:
      "Konut, villa, arsa ve ticari gayrimenkulde çoklu kanal yayın, profesyonel fotoğraf ve hedef kitleye ulaşım.",
    tldr:
      "Konut, villa, arsa ve ticari gayrimenkulde alım, satım ve kiralama danışmanlığı. Bölgesel piyasa verisi, çoklu kanal yayın (sahibinden + ilan platformları + sosyal medya), profesyonel fotoğraf ve ön talep filtrelemesi. Süreç ihtiyaç görüşmesinden teslime kadar eşlikli yürütülür; tapu, imar ve kat mülkiyeti kontrolleri sürece dahildir.",
    detail:
      "Satış ve kiralama danışmanlığı; gayrimenkulün özelliğine ve bölgesine uygun pazarlama stratejisinin kurulması, hedef kitleye ulaşılması, görüntüleme süreçlerinin koordinasyonu ve müzakere desteğini kapsar. Satıcı tarafında; piyasa karşılaştırmalı değerleme, profesyonel fotoğraf ve metin üretimi, çoklu kanal yayın (sahibinden + ilan platformları + sosyal medya), ön talep filtrelemesi ve müzakere yönetimi yapılır. Alıcı tarafında; ihtiyaç-bütçe-bölge eşleştirmesi, saha incelemesi, tapu kaydı ve kat mülkiyeti kontrolü, hukuki süreç koordinasyonu sunulur. Kiralama tarafında ek olarak; sözleşme yönetimi, kefil/depozito düzenlemesi ve teslim sonrası danışmanlık desteği verilir. Her aşama yazılı bilgiyle belgelenir; danışan ne aşamada olduğunu her zaman bilir.",
    highlights: [
      "Konut, villa, arsa ve ticari gayrimenkul kapsamında uzman danışmanlık",
      "Piyasa karşılaştırmalı değerleme + profesyonel fotoğraf + çoklu kanal yayın",
      "Tapu, kat mülkiyeti ve imar kontrolleri sürece dahil",
      "Müzakere desteği ve ön talep filtrelemesi",
      "Kiralama tarafında sözleşme ve teslim sonrası destek",
    ],
    faq: [
      {
        q: "Satış danışmanlığı sürecinde neler yapılır?",
        a: "Piyasa karşılaştırmalı değerleme, profesyonel fotoğraf ve metin üretimi, çoklu kanal yayın (sahibinden + ilan platformları + sosyal medya), ön talep filtrelemesi ve müzakere yönetimi sürecin temel adımlarıdır. Tapu ve kat mülkiyeti kontrolleri satış öncesinde tamamlanır.",
      },
      {
        q: "Alıcı tarafında nasıl bir süreç uygulanır?",
        a: "İhtiyaç-bütçe-bölge eşleştirmesi yapılır, sahada inceleme eşlik edilir, tapu kaydı ve imar durumu kontrol edilir. Hukuki süreçte uzman koordinasyonuyla ilerlenir.",
      },
      {
        q: "Kiralama danışmanlığı satış danışmanlığından nasıl ayrılır?",
        a: "Kiralama danışmanlığında ek olarak sözleşme yönetimi, kefil ve depozito düzenlemesi, teslim tutanağı ve teslim sonrası danışmanlık desteği sürecin parçasıdır. Kira artış oranı ve sözleşme yenileme süreci de kapsam içindedir.",
      },
      {
        q: "Komisyon oranı nasıl belirlenir?",
        a: "Komisyon oranı, Türkiye Cumhuriyeti yasal düzenlemelerine uygun olarak alıcı ve satıcıdan ayrı ayrı alınmaktadır. Spesifik oran için telefonla iletişime geçilmesi önerilir.",
      },
      {
        q: "Yabancı uyruklu alıcılar için süreç farklı mı işliyor?",
        a: "Yabancı uyruklu alıcılarda askeri yasak bölge sorgulaması, taşınmaz değerleme raporu ve vergi numarası adımları sürece eklenir. Tapu Müdürlüğü randevusu öncesinde belge kontrolleri tamamlanır.",
      },
    ],
  },
  {
    slug: "yatirim-danismanligi",
    name: "Yatırım danışmanlığı",
    icon: "◎",
    description:
      "Bölgesel trendler, getiri analizi ve portföy çeşitlendirmesi ile bilinçli karar desteği.",
    tldr:
      "Gayrimenkul yatırım danışmanlığı; bölgesel piyasa analizi, kira getiri projeksiyonu, portföy çeşitlendirme ve risk değerlendirmesi üzerine kuruludur. Yatırım hedefi (sermaye değer artışı, kira getirisi, kısa dönem kiralama, tarımsal getiri) baştan netleştirilir.",
    detail:
      "Yatırım danışmanlığı, yatırımcının hedefine (sermaye değer artışı, kira getirisi, kısa dönem kiralama, tarımsal getiri) göre bölge ve segment önerisini kapsar. Süreç; risk profili görüşmesi, bütçe ve zaman ufku belirleme, bölge-segment eşleştirme, piyasa karşılaştırmalı veri sunumu ve final öneri ile ilerler. Muğla genelinde Bodrum lüks villa, Marmaris yat ekosistemi, Fethiye yabancı yatırımcı talebi, Datça arz kısıtlı premium pazar, Milas tarım+havalimanı avantajı gibi farklı yatırım karakteri ayrı değerlendirilir. Kira getirisi projeksiyonunda bölge ortalamaları, sezon dinamikleri ve doluluk oranları birlikte ele alınır. Hukuki ve vergisel boyut uzman koordinasyonuyla yürütülür.",
    highlights: [
      "Yatırım hedefi ve risk profili odaklı bölge-segment önerisi",
      "Kira getiri projeksiyonu ve sermaye değer artışı analizi",
      "Muğla'nın 13 ilçesinin farklı yatırım karakteri değerlendirmesi",
      "Hukuki ve vergisel boyut uzman koordinasyonuyla",
      "Yabancı yatırımcılara süreç eşlikli destek",
    ],
    faq: [
      {
        q: "Gayrimenkul yatırımı için Muğla'da hangi bölgeler öne çıkıyor?",
        a: "Bodrum lüks villa ve marina çevresi, Marmaris yat ekosistemi, Fethiye Çalış ve Ovacık yabancı yatırımcı talebi, Datça arz kısıtlı premium pazar, Milas tarım ve havalimanı avantajı farklı yatırım hedeflerine uygundur. Bölge seçimi yatırımcının hedefiyle eşleştirilir.",
      },
      {
        q: "Kısa dönem kiralama mı, uzun dönem mi daha karlı?",
        a: "Bölgeye ve segmente bağlı bir karardır. Bodrum Yalıkavak veya Marmaris merkez gibi yoğun turistik bölgelerde kısa dönem (Airbnb tarzı) kiralama getirisi sezonluk yüksektir; merkez şehirlerde ve üniversite çevresinde uzun dönem kiralama daha istikrarlıdır.",
      },
      {
        q: "Tarım arazisi yatırımı mantıklı mı?",
        a: "Milas, Köyceğiz, Ortaca, Seydikemer gibi ilçelerde tarım arazisi (zeytinlik, narenciye, sera) ve bağ-bahçe yatırımı tarımsal getiri sunar. Ancak 3573 sayılı Zeytinlik Kanunu ve 5403 sayılı Toprak Koruma Kanunu kapsamındaki kısıtlar yatırım öncesi mutlaka değerlendirilmelidir.",
      },
      {
        q: "Yabancı yatırımcılar için Muğla'da yatırım süreci nasıl işliyor?",
        a: "Yabancı uyrukluların Türkiye'de gayrimenkul edinmesi 2644 sayılı Tapu Kanunu'nun 35. maddesi kapsamında düzenlenir. Askeri yasak bölge sorgusu, değerleme raporu ve vatandaşlık başvurusu (varsa) süreçleri Çolakoğlu Emlak tarafından koordineli yürütülür.",
      },
      {
        q: "Yatırım kararı öncesi nasıl bir hazırlık önerirsiniz?",
        a: "Yatırım hedefinin (sermaye artışı, kira getirisi, tarımsal getiri, vatandaşlık) baştan netleştirilmesi, risk profilinin belirlenmesi ve zaman ufkunun kararlaştırılması ilk adımlardır. Bunlar netleştirildikten sonra bölge ve segment önerisi anlamlı olur.",
      },
    ],
  },
  {
    slug: "degerleme-raporlama",
    name: "Değerleme & raporlama",
    icon: "▫",
    description:
      "Piyasa karşılaştırmalı fiyatlama ve şeffaf bilgilendirme; süreç boyunca düzenli güncelleme.",
    tldr:
      "Gayrimenkul değerleme ve raporlama; bölgenin emsal işlemleri, gayrimenkulün fiziki özellikleri ve piyasa koşulları çerçevesinde gerçek piyasa değerini belgeler. Yabancı uyruklu alımlarda taşınmaz değerleme raporu yetkilendirilmiş kurum tarafından düzenlenir.",
    detail:
      "Değerleme süreci, gayrimenkulün konumu, fiziki özellikleri (m², kat, yön, manzara, yapı yaşı), imar durumu ve bölgenin son dönem emsal işlemleri çerçevesinde piyasa karşılaştırmalı analiz ile yürütülür. Çıktı; piyasa değer aralığı, kira değer aralığı, yatırım getiri tahmini ve karşılaştırma emsalleri içeren raporlamadır. Yabancı uyruklu alıcıların 2644 sayılı Tapu Kanunu kapsamındaki edinim süreçlerinde ve Türk vatandaşlığı başvurusuna esas alımlarda taşınmaz değerleme raporu Sermaye Piyasası Kurulu (SPK) tarafından yetkilendirilmiş değerleme kuruluşları aracılığıyla düzenlenir. Çolakoğlu Emlak bu süreçte yetkili kurum koordinasyonunu sağlar. Değerleme raporu satış, miras paylaşımı, ipotek tesisi, mahkeme süreçleri gibi farklı amaçlar için kullanılabilir.",
    highlights: [
      "Piyasa karşılaştırmalı emsal analizi ile gerçek değer tespiti",
      "Konum, fiziki özellik, imar durumu ve piyasa koşulları çerçevesi",
      "Piyasa değer aralığı + kira değer aralığı + getiri tahmini",
      "Yabancı alımlarında SPK yetkili kuruluş koordinasyonu",
      "Satış, miras, ipotek, mahkeme süreçleri için kullanılabilir",
    ],
    faq: [
      {
        q: "Değerleme raporu hangi amaçlar için gereklidir?",
        a: "Değerleme raporu; satış öncesi fiyat netleştirme, miras paylaşımı, ipotek tesisi, mahkeme süreçleri, kira tespiti ve yabancı uyruklu alımlarında zorunlu kullanılır. Türk vatandaşlığı başvurusuna esas alımlarda SPK yetkili kuruluşça düzenlenmesi zorunludur.",
      },
      {
        q: "Yabancı uyruklu alıcılar için değerleme süreci nasıl işler?",
        a: "2644 sayılı Tapu Kanunu'nun 35. maddesi kapsamındaki yabancı edinimlerinde taşınmaz değerleme raporu Sermaye Piyasası Kurulu (SPK) tarafından yetkilendirilmiş kuruluşlar tarafından düzenlenir. Çolakoğlu Emlak yetkili kuruluşla koordineli süreç sağlar.",
      },
      {
        q: "Değerleme yaparken hangi faktörler dikkate alınır?",
        a: "Gayrimenkulün konumu, m², kat, yön, manzara, yapı yaşı, imar durumu, bölgenin son dönem emsal işlemleri ve piyasa koşulları birlikte değerlendirilir. Eksik veya hatalı veri raporun değerini düşürür.",
      },
      {
        q: "Değerleme raporu ne kadar süre geçerlidir?",
        a: "Değerleme raporları genellikle düzenlendiği tarihten itibaren 3-6 ay geçerli kabul edilir; piyasa koşullarının hızlı değiştiği dönemlerde bu süre kısalabilir. Tapu işlemleri için raporun güncel olması gerekir.",
      },
      {
        q: "Kira tespiti için de değerleme yapılabilir mi?",
        a: "Evet. Kira tespiti, mevcut piyasa kira düzeyini ve gayrimenkulün özelliklerini birlikte değerlendiren ayrı bir analizdir. Mahkemeye sunulacak kira tespit raporları ayrı bir uzmanlık alanıdır.",
      },
    ],
  },
  {
    slug: "hukuki-eslik",
    name: "Hukuki eşlik",
    icon: "◈",
    description:
      "Tapu, imar ve sözleşme aşamalarında uzman koordinasyonuyla ilerleme.",
    tldr:
      "Tapu devri, imar durumu, kat mülkiyeti, sözleşme hazırlama ve yabancı uyruklu edinim süreçlerinde Çolakoğlu Emlak hukuk ve mali müşavir uzmanlarıyla koordineli ilerleme sağlar. Süreç adım adım belgelenir.",
    detail:
      "Hukuki eşlik; tapu devri (Web-Tapu randevusu, harçlar, döner sermaye), imar durumu kontrolü, kat mülkiyeti incelemesi, satış vaadi ve kira sözleşmesi hazırlama, miras paylaşımı koordinasyonu ile yabancı uyruklu edinim süreçlerinde özel ihtiyaçları kapsar. Çolakoğlu Emlak avukat veya mali müşavir olarak hizmet sunmaz; ancak Muğla'nın avukat ve mali müşavir uzmanlarıyla koordineli olarak danışana eşlikli bir süreç sunar. Tapu Müdürlüğü randevu süreci, gerekli belgeler, harç ödemeleri, taraf bilgileri ve teslim formaliteleri Çolakoğlu Emlak tarafından önceden hazırlanır. Yabancı uyruklu alımlarında 2644 sayılı Tapu Kanunu kapsamındaki askeri yasak bölge sorgusu, değerleme raporu ve vatandaşlık başvurusu (varsa) süreçleri ayrı uzmanlık alanlarıyla koordine edilir.",
    highlights: [
      "Tapu devri, harç ve döner sermaye süreç koordinasyonu",
      "İmar durumu, kat mülkiyeti, satış vaadi ve sözleşme hazırlama",
      "Muğla'nın avukat ve mali müşavir uzmanlarıyla koordineli",
      "Yabancı uyruklu edinim süreci (2644 sayılı kanun) eşliği",
      "Tapu Müdürlüğü randevu ve belge hazırlığı önceden tamamlanır",
    ],
    faq: [
      {
        q: "Çolakoğlu Emlak hukuk bürosu hizmeti veriyor mu?",
        a: "Hayır. Çolakoğlu Emlak avukat veya mali müşavir olarak hizmet sunmaz. Muğla'nın avukat ve mali müşavir uzmanlarıyla koordineli olarak danışana eşlikli bir süreç sunar.",
      },
      {
        q: "Tapu devir süreci nasıl ilerler?",
        a: "Tapu devri; Web-Tapu üzerinden randevu, gerekli belgelerin hazırlanması (kimlik, tapu fotokopisi, vergi borcu yoktur yazısı, deprem sigortası, vb.), tapu harcı ve döner sermaye bedellerinin ödenmesi ve Tapu Müdürlüğü'ndeki imza süreciyle tamamlanır. Süreç detayı 'Tapu Devir İşlemleri Adım Adım' rehberinde anlatılır.",
      },
      {
        q: "Satış vaadi sözleşmesi noterde mi yapılır?",
        a: "Evet. Satış vaadi sözleşmesi noterde resmî şekilde düzenlenir ve tapu kütüğüne şerh edilebilir. Bu şerh, gayrimenkulün üçüncü şahıslara devrini hukuken sınırlar.",
      },
      {
        q: "İmar durum belgesi nereden alınır?",
        a: "İmar durum belgesi, gayrimenkulün bağlı olduğu belediyenin İmar ve Şehircilik Müdürlüğü'nden temin edilir. Belge; parselin imar durumu, yapılaşma hakları, çekme mesafeleri ve kat yüksekliği gibi bilgileri içerir. Satın alma öncesi mutlaka incelenmelidir.",
      },
      {
        q: "Yabancı uyruklu alımında hukuki süreç nasıl koordine edilir?",
        a: "2644 sayılı Tapu Kanunu'nun 35. maddesi kapsamındaki yabancı edinimlerinde askeri yasak bölge sorgusu, taşınmaz değerleme raporu, vergi numarası ve (varsa) vatandaşlık başvurusu süreçleri yetkili kurum ve danışmanlık birimleriyle koordineli yürütülür.",
      },
    ],
  },
];
