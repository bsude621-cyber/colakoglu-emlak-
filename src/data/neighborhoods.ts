// Mahalle bazlı hyperlocal gayrimenkul sayfaları
// Top high-value mahalleler — Muğla genelinde uzun-tail SEO hedefi
// ("[mahalle] villa", "[mahalle] satılık", "[mahalle] emlakçı" gibi anahtarlar)
// Genel karakter + coğrafi gerçek + mevzuat — uydurma fiyat/sayı YOK

export type Neighborhood = {
  slug: string;
  parent: string; // ilçe slug
  parentName: string;
  name: string;
  fullName: string;
  geo: { lat: number; lng: number };
  intro: string;
  tldr: string;
  detail: string;
  segments: string[];
  faq: { q: string; a: string }[];
};

export const neighborhoods: Neighborhood[] = [
  {
    slug: "yalikavak",
    parent: "bodrum",
    parentName: "Bodrum",
    name: "Yalıkavak",
    fullName: "Yalıkavak gayrimenkul",
    geo: { lat: 37.1056, lng: 27.2858 },
    intro:
      "Yalıkavak, Bodrum yarımadasının kuzey kıyısında yer alan, lüks villa pazarı ve uluslararası marinasıyla tanınan mahallesidir. Premium yat ekosistemi, butik restoran ve mağazalarla yıl boyu canlıdır.",
    tldr:
      "Yalıkavak, Bodrum'un kuzey kıyısında lüks villa pazarının ve uluslararası yat marinasının yoğunlaştığı mahalledir. Yabancı yatırımcı talebi, butik turizm ve marina ekosistemi bölgenin gayrimenkul karakterini belirler.",
    detail:
      "Yalıkavak, Palmarina Yalıkavak'ın bölgeye kazandırdığı uluslararası yat trafiği ve butik perakende ekosistemi sayesinde Bodrum yarımadasının en premium mahallesi konumundadır. Pazar; kıyıya yakın lüks villa, marina çevresi konut ve butik ticari gayrimenkul olmak üzere üç katmanlıdır. Sahil çizgisindeki yapılaşmada kıyı kanunu kapsamındaki kısıtlar ve 1/1000 ölçekli imar planları geçerlidir. Yamaç parsellerde manzara hakkı ve cephe genişliği fiyat belirleyici faktörlerdir. Yabancı uyruklu alıcılar için 2644 sayılı Tapu Kanunu kapsamındaki askeri yasak bölge sorgusu ve değerleme raporu süreci satın alma öncesi tamamlanır.",
    segments: ["Lüks villa", "Marina daire", "Yazlık ev", "Butik ticari"],
    faq: [
      {
        q: "Yalıkavak'ta villa alırken nelere dikkat edilmeli?",
        a: "İmar durumu, manzara hakkı, kıyı kanunu kapsamındaki kısıtlar ve 1/1000 ölçekli imar planı önemli kontrollerdir. Sahil çizgisi yakını parsellerde ek izinler ve değerlendirmeler süreçte değerlendirilir.",
      },
      {
        q: "Yalıkavak Palmarina çevresi gayrimenkul açısından nasıl?",
        a: "Palmarina çevresi butik ticari ve premium konut talebinin en yoğun olduğu bölgedir. Yat ekosistemi yıl boyu canlılığı destekler; ticari kiralama getirisi de bu bölgede yüksek olarak değerlendirilir.",
      },
      {
        q: "Yabancı uyruklu alıcı için Yalıkavak süreci nasıl işliyor?",
        a: "Yabancı edinimlerinde 2644 sayılı Tapu Kanunu kapsamındaki askeri yasak bölge sorgusu, taşınmaz değerleme raporu ve vergi numarası adımları sürece dahildir. Çolakoğlu Emlak yetkili kurum koordinasyonunu sağlar.",
      },
    ],
  },
  {
    slug: "turkbuku",
    parent: "bodrum",
    parentName: "Bodrum",
    name: "Türkbükü",
    fullName: "Türkbükü gayrimenkul",
    geo: { lat: 37.1175, lng: 27.3939 },
    intro:
      "Türkbükü, Bodrum yarımadasının kuzey kıyısında sosyete tatil noktalarından biridir. Beach club ekosistemi, butik konaklama ve villa pazarı bölgenin gayrimenkul kimliğini belirler.",
    tldr:
      "Türkbükü, Bodrum'un sosyete kıyısı olarak tanınır. Beach club ekosistemi, butik konaklama ve premium villa pazarı yoğundur; yaz sezonu kısa dönem kiralama getirisi belirleyici bir gelir kalemidir.",
    detail:
      "Türkbükü, beach club geleneği ve butik konaklama ekosistemiyle Bodrum yarımadasının özel mahallelerinden biridir. Pazar; sahil ve yamaç villa, butik otel ve sezon odaklı kısa dönem kiralama segmentine yöneliktir. Sahile yakın parsellerde kıyı kanunu kısıtları ve mimari koruma kuralları geçerlidir; yamaç parsellerde manzara hakkı ve cephe yönü yatırım kararında belirleyicidir. Yaz sezonu (Haziran-Eylül) yoğunluğu kısa dönem kiralama getirisinin temelini oluşturur; sezon dışı kullanım talebi görece düşüktür ve bu yatırım hedefiyle birlikte değerlendirilmelidir.",
    segments: ["Lüks villa", "Yamaç villa", "Yazlık", "Butik konaklama"],
    faq: [
      {
        q: "Türkbükü yatırım için hangi profile uygundur?",
        a: "Türkbükü, sezon odaklı yüksek getirili kısa dönem kiralama veya premium yazlık kullanım hedefindeki yatırımcı profiline uygundur. Yıl boyu yerleşik kullanım önceliği farklı bölgelerle daha iyi eşleşir.",
      },
      {
        q: "Türkbükü'nde villa alırken nelere dikkat edilmeli?",
        a: "Manzara hakkı, sahil mesafesi, imar durumu ve site içi yapılarda yönetim planı kontrol edilmelidir. Beach club çevresindeki gürültü ve trafik yoğunluğu mevsime göre değişir; bu da yatırım kararında değerlendirilmelidir.",
      },
      {
        q: "Sezon dışı dönemde Türkbükü gayrimenkulü nasıl değerlendirilir?",
        a: "Sezon dışı dönemde uzun dönem kiralama talebi sınırlıdır. Yatırımın kısa dönem (yaz) kiralama getirisine veya uzun vadeli sermaye artışına dayanması beklenir; karma kullanım için bütçe planlaması gerekir.",
      },
    ],
  },
  {
    slug: "gumusluk",
    parent: "bodrum",
    parentName: "Bodrum",
    name: "Gümüşlük",
    fullName: "Gümüşlük gayrimenkul",
    geo: { lat: 37.0533, lng: 27.2289 },
    intro:
      "Gümüşlük, Bodrum yarımadasının batı ucunda, antik Myndos kalıntıları üzerinde kurulu sakin balıkçı köyü karakterini koruyan mahallesidir. Arkeolojik SİT statüsü yapılaşmayı sıkı düzenler.",
    tldr:
      "Gümüşlük, antik Myndos şehrinin üzerine kurulu balıkçı köyü karakterinde bir mahalle. Arkeolojik SİT statüsü nedeniyle yapılaşma sıkı düzenlenir; bu kısıt mevcut taş ev pazarını değer saklayan kategoriye taşır.",
    detail:
      "Gümüşlük, antik Myndos kentinin üzerinde kurulması nedeniyle arkeolojik SİT alanı statüsündedir. Bu statü, Kültür Varlıklarını Koruma Bölge Kurulu kararlarına tabidir ve yeni yapılaşmayı, restorasyonu ve cephe değişikliklerini kontrol altında tutar. Pazar; restore edilmiş taş evler, sahile yakın butik konaklama yapıları ve sınırlı sayıda yeni konut etrafında şekillenir. Balıkçı limanı çevresinde restoran ve butik ticari yapı talebi yoğundur. Tavşan Adası ve günbatımı manzarası bölgenin değer çıpalarındandır. Satın alma öncesi tapu kaydındaki SİT notu, restorasyon kısıtları ve koruma kurulu kararları mutlaka incelenmelidir.",
    segments: ["Taş ev", "Restorasyon", "Butik konaklama", "Arsa (sınırlı)"],
    faq: [
      {
        q: "Gümüşlük'te ev alırken arkeolojik SİT statüsü ne anlama gelir?",
        a: "Gümüşlük arkeolojik SİT alanı kapsamındadır; bu, Kültür Varlıklarını Koruma Bölge Kurulu kararlarının geçerli olduğu ve yapılaşma-restorasyon süreçlerinin kurul onayına tabi olduğu anlamına gelir. Mevcut yapıların değeri bu kısıtlar nedeniyle uzun vadede korunur.",
      },
      {
        q: "Gümüşlük'te restorasyon süreci nasıl ilerler?",
        a: "Tescilli yapılarda restorasyon projeleri ilgili koruma kurulunun onayına tabidir. Cephe, malzeme, kat yüksekliği ve karakteristik unsurlar koruma kararları çerçevesinde belirlenir; uzman mimar ve restorasyon ekibiyle çalışmak gerekir.",
      },
      {
        q: "Gümüşlük yatırım için uzun vadeli bir tercih mi?",
        a: "Evet. Sınırlı arz, koruma statüsü ve karakteristik dokusu Gümüşlük'ü uzun vadeli ve değerini koruyan bir bölge yapar. Kısa vadeli getiriden çok değer saklama önceliğindeki yatırımcıya uygundur.",
      },
    ],
  },
  {
    slug: "bitez",
    parent: "bodrum",
    parentName: "Bodrum",
    name: "Bitez",
    fullName: "Bitez gayrimenkul",
    geo: { lat: 37.0461, lng: 27.3711 },
    intro:
      "Bitez, Bodrum'a yakın, yerleşik konut ve karma kullanım pazarı dengelenen mahallelerden biridir. Manderine bahçeleri, sakin sahil ve aile odaklı yerleşim karakteri öne çıkar.",
    tldr:
      "Bitez, Bodrum merkeze yakın yerleşik konut ve karma kullanım pazarına sahiptir. Sakin sahil, mandarin bahçeleri ve aile odaklı yerleşim karakteriyle yıl boyu kullanım ve sezon odaklı kiralama dengesini sunar.",
    detail:
      "Bitez, Bodrum'un kuzey ile güney aksında yerleşik konut, daire ve site yapısı yoğunluğunun belirgin olduğu mahallelerinden biridir. Pazar; sahile yakın yazlık daire, iç kesimde geleneksel müstakil ev ve site içi yeni yapı seçenekleri arasında çeşitlenir. Mandarin bahçeleri ve çam ormanları bölgenin doğal karakteridir. Bodrum merkeze yakınlığı (5-7 km) yıl boyu erişimi kolaylaştırır; bu yapı hem sezon odaklı kısa dönem kiralama hem uzun dönem yerleşik kullanım için uygundur. Sahil parsellerinde kıyı kanunu kısıtları ve mevcut site yönetim planları satın alma öncesi değerlendirilir.",
    segments: ["Daire", "Müstakil ev", "Yazlık", "Arsa", "Site içi konut"],
    faq: [
      {
        q: "Bitez'de aile odaklı konut için hangi alanlar öne çıkıyor?",
        a: "Sahile yakın site yapıları, iç kesimde geleneksel müstakil ev ve site içi yeni yapı seçenekleri aile odaklı yerleşim için uygundur. Bodrum merkeze yakınlığı (5-7 km) okul, sağlık ve alışveriş erişimini kolaylaştırır.",
      },
      {
        q: "Bitez yatırım için sezonluk mu yerleşik mi daha uygun?",
        a: "Bitez, Bodrum merkeze yakınlığı sayesinde hem yıl boyu yerleşik kullanım hem sezon odaklı kısa dönem kiralama için uygundur. Yatırım hedefi bölge içindeki spesifik konum seçimini belirler.",
      },
      {
        q: "Bitez'de site içi konut alırken nelere dikkat edilmeli?",
        a: "Site yönetim planı, ortak alan giderleri, kat mülkiyeti durumu ve site içi kullanım kuralları incelenmelidir. Site içi konutlarda yıllık aidat ve ortak gider bütçesi yatırım hesabında değerlendirilir.",
      },
    ],
  },
  {
    slug: "icmeler",
    parent: "marmaris",
    parentName: "Marmaris",
    name: "İçmeler",
    fullName: "İçmeler gayrimenkul",
    geo: { lat: 36.8189, lng: 28.2225 },
    intro:
      "İçmeler, Marmaris'in 8 km batısında, tatil amaçlı konut ve kısa dönem kiralama pazarının yoğun olduğu sahil mahallesidir. Çam ormanları ve berrak koyuyla tatil bölgesi karakteri taşır.",
    tldr:
      "İçmeler, Marmaris'in batı kıyısında tatil amaçlı konut, daire ve kısa dönem kiralama pazarının yoğunlaştığı sahil mahallesi. Çam ormanları ve sakin koyu uluslararası tatil talebine hizmet eder.",
    detail:
      "İçmeler, Marmaris'in batı yönündeki sahil yerleşimidir ve sezon odaklı kısa dönem kiralama pazarının en güçlü olduğu bölgelerden biridir. Pazar; sahile yakın yazlık daire, site içi konut ve sınırlı sayıda villa segmentine yöneliktir. Yaz sezonu (Mayıs-Ekim) yüksek doluluk, sezon dışı sakin yerleşim karakteri sunar. Çam ormanları ve berrak sahil mikro-iklim avantajıdır. Kıyıya yakın parsellerde kıyı kanunu kısıtları ve mevcut site yönetim planları geçerlidir. Marmaris merkeze yakınlığı (8-10 km) hizmet erişimini kolaylaştırır; bu yapı yatırımı yıl boyu kullanılabilir kılar.",
    segments: ["Tatil dairesi", "Yazlık", "Site içi konut", "Villa"],
    faq: [
      {
        q: "İçmeler'de tatil dairesi yatırımı mantıklı mı?",
        a: "İçmeler, yaz sezonu yüksek doluluğu ve uluslararası tatil talebiyle kısa dönem kiralama getirisi sunar. Sezon dışı kullanım sınırlıdır; yatırım hedefi yıllık doluluk projeksiyonuyla birlikte değerlendirilmelidir.",
      },
      {
        q: "İçmeler'de konut alırken nelere dikkat edilmeli?",
        a: "Site yönetim planı, ortak alan giderleri, kıyı kanunu kapsamındaki kısıtlar ve site içi kullanım kuralları kontrol edilmelidir. Sezon yoğunluğu sırasında trafik ve hizmet baskısı yatırım kararında değerlendirilir.",
      },
      {
        q: "İçmeler Marmaris merkez ile karşılaştırıldığında nasıl?",
        a: "Marmaris merkez yat limanı ve ticari yoğunlukla yıl boyu canlı bir bölgedir; İçmeler ise daha tatil odaklı ve sezonluk yoğunluğu yüksek bir sahil mahallesidir. İki bölge farklı kullanım profiline hizmet eder.",
      },
    ],
  },
  {
    slug: "selimiye",
    parent: "marmaris",
    parentName: "Marmaris",
    name: "Selimiye",
    fullName: "Selimiye gayrimenkul",
    geo: { lat: 36.7156, lng: 28.0556 },
    intro:
      "Selimiye, Marmaris'in Bozburun yarımadasındaki sakin koy yerleşimidir. Doğa koruma statüsü ve sıkı imar kuralları yapılaşmayı sınırlar; mevcut gayrimenkul premium değer saklayan kategoridedir.",
    tldr:
      "Selimiye, Marmaris-Bozburun yarımadasında doğa koruma statüsü altında, sıkı imar kurallarıyla yapılaşması sınırlı bir koy yerleşimi. Arz kısıtlı ve premium fiyat segmentinde değer saklayan bir bölgedir.",
    detail:
      "Selimiye, Bozburun yarımadasında deniz ile çam ormanının iç içe geçtiği özel bir mikro-iklim sunar. Koy yerleşim koruma amaçlı imar planı kapsamındadır; cephe, kat yüksekliği ve dış malzeme kuralları yeni yapılaşmayı sınırlar. Pazar; restore edilmiş taş ev, mütevazı koy konutu ve sınırlı sayıda butik konaklama yapısı etrafında şekillenir. Yat turizmi koy'a günlük canlılık katar ancak alt yapı (kanalizasyon, ulaşım) görece sınırlıdır ve bu yatırım kararında değerlendirilmelidir. Arz kısıtı + doğa değeri kombinasyonu Selimiye'yi uzun vadeli ve değerini koruyan bir bölge yapar.",
    segments: ["Taş ev", "Koy konutu", "Butik konaklama", "Arsa (sınırlı)"],
    faq: [
      {
        q: "Selimiye'de yapılaşma neden bu kadar sınırlı?",
        a: "Selimiye koruma amaçlı imar planı kapsamındadır; doğa koruma statüsü, koy karakterinin sürdürülmesi ve mimari uyum nedeniyle yeni yapılaşma sıkı kurallara tabidir. Bu sınırlama mevcut gayrimenkulün değerini destekler.",
      },
      {
        q: "Selimiye'de altyapı durumu nasıl?",
        a: "Selimiye'de altyapı (kanalizasyon, ulaşım, hizmet erişimi) merkezi bölgelerle kıyaslandığında görece sınırlıdır. Bu durum sakin yaşam isteyen yatırımcıya uygun olmakla birlikte yıl boyu yerleşik kullanım planlanırken değerlendirilmelidir.",
      },
      {
        q: "Selimiye yatırım için hangi profile uygun?",
        a: "Selimiye, doğa odaklı, uzun vadeli değer saklama önceliğindeki yatırımcıya uygundur. Yat turizmi sezonunda canlı, sezon dışı çok sakin bir yerleşimdir. Kısa vadeli yüksek getiri beklentisi yerine bölgeyle uyumlu uzun kullanım planlamak doğru tercihtir.",
      },
    ],
  },
  {
    slug: "calis",
    parent: "fethiye",
    parentName: "Fethiye",
    name: "Çalış",
    fullName: "Çalış gayrimenkul",
    geo: { lat: 36.6481, lng: 29.1133 },
    intro:
      "Çalış, Fethiye'nin batı sahili boyunca uzanan, yabancı yatırımcı yoğun ve yıl boyu canlı bir konut-tatil bölgesidir. Uzun sahil yürüyüş yolu ve günbatımı manzarası karakter çıpasıdır.",
    tldr:
      "Çalış, Fethiye'nin batı sahilinde yabancı yatırımcı yoğun konut ve tatil bölgesi. Yerleşik yabancı topluluk, uzun sahil yürüyüş yolu ve günbatımı manzarası bölgenin değer karakterini belirler.",
    detail:
      "Çalış sahili, Fethiye'nin batısında uzun sahil şeridi ve yıl boyu sakin yerleşim karakterine sahip bir mahalle. Pazar; sahile yakın site içi daire, müstakil ev, villa ve tatil amaçlı kullanım için kısa dönem kiralama segmentine yöneliktir. Bölgede yerleşik yabancı topluluk önemli bir alıcı ve kullanıcı kitlesidir; bu yapı yıl boyu hizmet ekonomisini canlı tutar (restoran, market, sağlık hizmetleri). Sahile yakın parsellerde kıyı kanunu kısıtları ve site yönetim planları geçerlidir. Fethiye merkezine 5 km mesafe hizmet erişimini kolaylaştırır. Yabancı uyruklu alıcılar için 2644 sayılı Tapu Kanunu kapsamındaki adımlar (askeri yasak bölge sorgusu, değerleme raporu) sürece dahildir.",
    segments: ["Daire", "Müstakil ev", "Villa", "Yazlık", "Site içi konut"],
    faq: [
      {
        q: "Çalış'ta yabancı yatırımcı için süreç nasıl ilerler?",
        a: "Yabancı uyruklu alıcılarda 2644 sayılı Tapu Kanunu kapsamındaki askeri yasak bölge sorgusu, taşınmaz değerleme raporu ve vergi numarası adımları süreçte değerlendirilir. Çalış bölgesinde yabancı edinim deneyimi yaygındır.",
      },
      {
        q: "Çalış yıl boyu yerleşim için uygun mu?",
        a: "Evet. Yerleşik yabancı topluluk sayesinde Çalış'ta yıl boyu hizmet ekonomisi (restoran, market, sağlık) canlıdır. Fethiye merkezine yakınlığı (5 km) ek hizmet erişimi sağlar.",
      },
      {
        q: "Çalış'ta konut alırken nelere dikkat edilmeli?",
        a: "Site yönetim planı, kıyı kanunu kısıtları, site içi kullanım kuralları ve sahile mesafe değerlendirilir. Yabancı alıcılarda 2644 sayılı kanun kapsamındaki edinim adımları sürece dahildir.",
      },
    ],
  },
  {
    slug: "ovacik",
    parent: "fethiye",
    parentName: "Fethiye",
    name: "Ovacık",
    fullName: "Ovacık gayrimenkul",
    geo: { lat: 36.5469, lng: 29.1217 },
    intro:
      "Ovacık, Fethiye'nin Ölüdeniz yolu üzerinde, dağ etekleri ile sahil arasında konumlanan yerleşik yabancı topluluğu yoğun bir mahalledir. Doğa odaklı villa ve müstakil ev pazarı belirgindir.",
    tldr:
      "Ovacık, Fethiye-Ölüdeniz aksında dağ etekleri ile sahil arasında yerleşik yabancı topluluğu yoğun bir mahalle. Doğa odaklı villa, müstakil ev ve kısmen tatil amaçlı kullanım segmentine hizmet eder.",
    detail:
      "Ovacık, Fethiye'nin güney aksında Hisarönü ve Ölüdeniz hattı üzerinde, dağ etekleri ile sahil arasında yer alan yerleşim alanıdır. Pazar; villa, müstakil ev ve site içi konut etrafında şekillenir. Yerleşik yabancı topluluk (özellikle Birleşik Krallık vatandaşları) önemli bir alıcı kitlesidir; bu yapı yerel hizmet ekonomisini yıl boyu canlı tutar. Ölüdeniz mavi lagününe yakınlık (~5 km) tatil amaçlı kullanım için cazip kılar. Yabancı uyruklu alıcılar için 2644 sayılı Tapu Kanunu kapsamındaki edinim adımları sürece dahildir. Dağ etekleri parsellerinde eğim ve erişilebilirlik yapılaşma kararında değerlendirilir.",
    segments: ["Villa", "Müstakil ev", "Site içi konut", "Yazlık"],
    faq: [
      {
        q: "Ovacık'ta villa pazarı neden öne çıkıyor?",
        a: "Ovacık'ın dağ etekleri konumu manzara ve sakin yerleşim önceliğindeki villa pazarına uygundur. Yerleşik yabancı topluluk talebi villa standartlarını ve yatırım istikrarını destekler.",
      },
      {
        q: "Ovacık ile Çalış arasında yatırım açısından fark nedir?",
        a: "Çalış sahil boyu yerleşim ve daire pazarına; Ovacık dağ etekleri villa ve müstakil ev pazarına hizmet eder. İki bölge farklı bütçe ve kullanım profiline uygundur — Çalış sahil yürüyüşü, Ovacık doğa-manzara önceliği taşır.",
      },
      {
        q: "Ovacık'ta arsa alırken nelere dikkat edilmeli?",
        a: "Eğim, yol erişimi, altyapı (su, elektrik, atık), imar durumu ve manzara hakkı kontrol edilmelidir. Dağ etekleri parsellerde yapılaşma maliyeti düz parsellere göre daha yüksek olabilir.",
      },
    ],
  },
  {
    slug: "saburhane",
    parent: "mentese",
    parentName: "Menteşe",
    name: "Saburhane",
    fullName: "Saburhane gayrimenkul",
    geo: { lat: 37.2147, lng: 28.3611 },
    intro:
      "Saburhane, Menteşe'nin tarihi mahallesi olarak karakteristik Muğla evleri ve tescilli yapı dokusuyla tanınır. Koruma kurulu kararlarına tabi olan bölge, restorasyon odaklı butik gayrimenkul pazarı sunar.",
    tldr:
      "Saburhane, Menteşe'nin tarihi mahallesi. Karakteristik Muğla evleri (taş zemin, ahşap üst kat, kepenkli pencereler) ve tescilli yapı dokusu nedeniyle pazar restorasyon odaklı butik segmentte gelişir.",
    detail:
      "Saburhane mahallesi, Muğla'nın tarihi merkezinde geleneksel Muğla evlerinin yoğunlaştığı bölgedir. Yapıların büyük çoğunluğu Kültür Varlıklarını Koruma Bölge Kurulu kararları kapsamında koruma altındadır. Karakteristik Muğla evi mimarisi; taş zemin, ahşap üst kat, kilim damga süslemeli pencere kepenkleri ve avlulu yapı plan şemasıyla tanınır. Pazar; restore edilmiş tarihi ev, restorasyon projesi sürecindeki yapı ve sınırlı sayıda butik konaklama segmentine yöneliktir. Tescilli yapılarda yeni yapılaşma ve cephe değişiklikleri kurul onayına tabidir. Saburhane butik kafe ve sanat galerisi ekosistemiyle Muğla merkezinin kültürel kalbidir. Yatırım kararı uzun vadeli değer saklama ve karakter yaşam önceliğine uygundur.",
    segments: ["Tescilli Muğla evi", "Restorasyon projesi", "Butik konaklama"],
    faq: [
      {
        q: "Saburhane'de tescilli yapı alırken nelere dikkat edilmeli?",
        a: "Tapu kaydındaki yapı tescil notu, koruma kurulu tarafından belirlenen müdahale sınırları ve restorasyon kuralları satın almadan önce mutlaka incelenmelidir. Cephe, malzeme ve kat değişiklikleri kurul onayına tabidir.",
      },
      {
        q: "Karakteristik Muğla evi restorasyonu nasıl ilerler?",
        a: "Restorasyon projesi koruma uzmanı mimar tarafından hazırlanır ve Kültür Varlıklarını Koruma Bölge Kurulu'na sunulur. Onay sonrası özgün malzeme ve teknik kullanılarak restorasyon uygulanır; süreç uzman ekip gerektirir ve maliyet standart yapıya göre yüksektir.",
      },
      {
        q: "Saburhane butik konaklama yatırımı için uygun mu?",
        a: "Evet. Saburhane karakteri ve merkez konumu butik konaklama (otel, pansiyon) yatırımı için uygun bir bölgedir. İşletme ruhsatı ve turizm tesisi yönetmeliği koşulları yatırım planında değerlendirilmelidir.",
      },
    ],
  },
  {
    slug: "kotekli",
    parent: "mentese",
    parentName: "Menteşe",
    name: "Kötekli",
    fullName: "Kötekli gayrimenkul",
    geo: { lat: 37.1719, lng: 28.3669 },
    intro:
      "Kötekli, Muğla Sıtkı Koçman Üniversitesi'nin ana kampüsüne en yakın yerleşim bölgesi olarak öğrenci kiralama pazarının yıl boyu canlı olduğu mahalledir. Daire ve site içi konut pazarı belirgindir.",
    tldr:
      "Kötekli, Muğla Sıtkı Koçman Üniversitesi kampüsüne en yakın mahalle olarak öğrenci kiralama pazarının yoğunlaştığı bölgedir. Yıl boyu süren öğrenci nüfusu istikrarlı kira getirisi sunar; daire ve site içi konut pazarı belirgindir.",
    detail:
      "Kötekli, Muğla Sıtkı Koçman Üniversitesi'nin ana kampüsünün hemen yanında bulunan yerleşim alanıdır ve üniversite kaynaklı öğrenci nüfusu sayesinde yıl boyu kiralama talebi sürekliliğini korur. Pazar; öğrenci kiralamasına uygun 1+1 ve 2+1 daire, site içi konut, yatakhane formatı konut ve yerleşik aile odaklı daire segmentlerini içerir. Üniversiteye yürüyüş veya dolmuş mesafesi yatırım kararının ana belirleyicisidir. Site yönetim planı, ortak alan giderleri ve kullanım kuralları satın alma öncesi kontrol edilir. Akademik takvim (Eylül-Haziran) talep dinamiğini belirler; yaz döneminde geçici düşüş olağandır ancak yıllık ortalama yüksek doluluk seyreder.",
    segments: ["Öğrenci dairesi (1+1, 2+1)", "Site içi konut", "Aile dairesi"],
    faq: [
      {
        q: "Kötekli'de öğrenci dairesi yatırımı neden istikrarlı?",
        a: "Muğla Sıtkı Koçman Üniversitesi'nin binlerce öğrencisi Kötekli'deki kiralama talebini yıl boyu sürdürür. Akademik takvim talep dinamiğini belirlemekle birlikte yıllık ortalama doluluk yüksek seyreder.",
      },
      {
        q: "Kötekli'de hangi daire tipi öğrenci kiralamasına en uygun?",
        a: "1+1 ve 2+1 daireler öğrenci kiralamasına en uygun tiplerdir. Daire içi eşya bütünlüğü, ortak kullanım alanları ve kampüse ulaşım yatırım kararında değerlendirilir.",
      },
      {
        q: "Yaz döneminde Kötekli'de kira talebi nasıl seyreder?",
        a: "Yaz döneminde (Haziran-Ağustos) öğrenci kiralamasında geçici düşüş olağandır. Bu dönemde turistik veya aile odaklı kısa dönem kiralama alternatif olarak değerlendirilebilir; yıllık ortalama getiri yaz dışı dönemin yüksek doluluğuyla dengelenir.",
      },
    ],
  },
];

export const neighborhoodSlugs = neighborhoods.map(
  (n) => `${n.parent}/${n.slug}`,
);
