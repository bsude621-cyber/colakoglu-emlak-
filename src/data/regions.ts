// Muğla ilçeleri — Çolakoğlu Emlak operasyon alanı
// Genel coğrafi/sektörel bilgi (kamu kaynağı). İlçe spesifik portföy/fiyat bilgisi
// [[BİLGİ GEREK]] olarak işaretli, Çolakoğlu onayı ile doldurulacak.

export type Region = {
  slug: string;
  name: string;
  fullName: string;
  geo: { lat: number; lng: number };
  intro: string;
  tldr: string; // AI Overview pattern — kısa, izole anlamlı, citation-friendly
  detail: string; // Yerel piyasa karakteri — mahalle/segment derinlik, mevzuat işaretleri
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
    tldr:
      "Bodrum yarımadasında gayrimenkul, kıyı odaklı lüks villa segmenti ile merkez ve iç mahallelerdeki konut/arsa pazarı olmak üzere iki katmanlıdır. Yalıkavak, Türkbükü, Gümüşlük ve Bitez yüksek talep gören kıyı noktalarıdır; yat marinası çevresi ticari gayrimenkulün yoğunlaştığı alandır.",
    detail:
      "Bodrum yarımadasının mahalleleri, gayrimenkul açısından üç ayrı karakter taşır: kuzey kıyısı (Yalıkavak, Türkbükü, Gündoğan) lüks villa ve butik konut pazarı; batı uç (Gümüşlük, Turgutreis) restorasyonlu taş ev ve sakin koylar; doğu (Bitez, Ortakent, Konacık) yerleşik konut ve karma kullanım. Bodrum merkez ile Yalıkavak marinası çevresinde ticari ve kısa dönem kiralama pazarı yıl boyu canlıdır. Kıyıya yakın parsellerde 1/1000 ölçekli imar planı, SİT statüsü (özellikle Gümüşlük arkeolojik SİT) ve sahil kenarı çizgisi (kıyı kanunu kapsamında) satın alma öncesi mutlaka kontrol edilir. Yabancı uyruklu alıcılar için askeri yasak bölge sorgulaması ve değerleme raporu zorunlu adımlardır.",
    highlights: [
      "Yalıkavak, Türkbükü, Gümüşlük ve Bitez gibi mahallelerde lüks villa pazarı",
      "Marina ve liman çevresinde ticari gayrimenkul yoğun",
      "Yabancı yatırımcı (özellikle AB ülkeleri) talebi yüksek",
      "Yaz sezonu kiralama pazarı ayrı bir gelir kalemi",
      "Gümüşlük arkeolojik SİT alanı çevresinde özel kısıtlar geçerli",
      "Bodrum-Milas Havalimanı üzerinden uluslararası ulaşım kolaylığı",
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
      {
        q: "Bodrum'da hangi mahalleler lüks villa pazarında öne çıkıyor?",
        a: "Yalıkavak, Türkbükü ve Gündoğan kuzey kıyısının lüks villa odaklı mahalleleridir. Bitez ve Ortakent ise karma kullanım — daha geniş aile konutu ve yazlık seçenekleri sunan bölgelerdir.",
      },
      {
        q: "Bodrum'da yabancı uyruklu alıcı için süreç nasıl işliyor?",
        a: "Yabancı uyruklu alıcılarda askeri yasak bölge sorgulaması, taşınmaz değerleme raporu ve vergi numarası adımları sürece dahildir. Tapu Müdürlüğü randevusu öncesinde belge kontrolleri tamamlanır.",
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
    tldr:
      "Marmaris gayrimenkul piyasası üç katmanlıdır: yat limanı ve merkez (ticari + tatil dairesi yoğun), İçmeler ve Armutalan (yazlık ve yerleşik konut), Selimiye ve Bozburun (doğa odaklı, sakin yerleşim, sınırlı imar). Yıl boyu kıyı turizmi kısa dönem kiralama getirisini destekler.",
    detail:
      "Marmaris ilçesi, yat marinası ve merkez ile İçmeler-Armutalan-Beldibi gibi turistik kıyı mahallelerini, ayrıca Selimiye, Bozburun, Hisarönü, Söğüt gibi yarımada köylerini kapsar. Merkez ve İçmeler tatil dairesi ile kısa dönem kiralama pazarına; Armutalan görece daha sakin yerleşik konuta; Selimiye ve Bozburun ise doğa korumalı, sınırlı imarlı premium segmente hitap eder. Marmaris yat limanı çevresinde ticari gayrimenkul ve butik otel yatırımı belirgindir. SİT alanları, koruma amaçlı imar planları ve kıyı kanunu kısıtları satın alma öncesi titizlikle incelenmesi gereken kalemlerdir. Bozburun ve Selimiye'de yeni yapılaşma için cephe-yükseklik-malzeme kısıtları geçerlidir.",
    highlights: [
      "İçmeler, Armutalan ve merkez konut bölgeleri",
      "Yat limanı çevresinde ticari ve kısa dönem kiralama pazarı",
      "Doğa odaklı sakin yerleşim talebi (Selimiye, Bozburun) artıyor",
      "Yarımada köylerinde sınırlı imar — premium fiyat segmenti",
      "Dalaman Havalimanı bağlantısı, uluslararası ulaşım kolaylığı",
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
      {
        q: "Selimiye ve Bozburun'da yapılaşma kuralları neden farklı?",
        a: "Selimiye ve Bozburun, koruma amaçlı imar planları kapsamında olup cephe, kat yüksekliği ve dış malzeme kuralları daha sıkıdır. Bu kısıtlar bölgenin karakterini koruyup gayrimenkulü uzun vadeli değer saklayan bir kategoriye taşır.",
      },
      {
        q: "Marmaris merkez ile İçmeler arasında yatırım farkı nedir?",
        a: "Merkez ve yat limanı çevresi ticari ve yıl boyu kullanılan tatil dairesi pazarına; İçmeler ise sezonluk yoğunluğu yüksek, daha tatil odaklı yazlık segmentine yöneliktir. İki bölge farklı kiralama dinamiklerine sahiptir.",
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
    tldr:
      "Fethiye gayrimenkul pazarı, merkez ve Karagözler'in uzun dönem yerleşim talebi ile Çalış, Hisarönü, Ovacık, Ölüdeniz'in yabancı yatırımcı yoğun villa-tatil evi talebi arasında bölünür. Likya Yolu, paragliding ve Ölüdeniz uluslararası tanınırlığı bölgenin değer çıpasıdır.",
    detail:
      "Fethiye, Çalış sahili, Karagözler, Foça mahallesi gibi merkez yerleşimlerini ve Hisarönü, Ovacık, Ölüdeniz, Kayaköy gibi turistik dış mahalleleri kapsar. Merkez ve Karagözler uzun dönem yerleşik konut pazarı için tercih edilirken; Hisarönü ve Ovacık yerleşik yabancı topluluğunun yoğunlaştığı villa ve müstakil ev bölgeleridir. Ölüdeniz çevresinde imar kısıtları (mavi lagün koruma alanı) sıkıdır ve yapılaşma sınırları net olarak belirlenmiştir. Kayaköy gibi tescilli alanlar koruma kurulu kararlarına tabi olduğundan restorasyon süreçleri özel uzmanlık gerektirir. Likya Yolu güzergahındaki parseller, doğa koruma statüsüne bağlı olarak ek kontroller içerir.",
    highlights: [
      "Çalış, Hisarönü ve Ovacık yabancı yatırımcı yoğun bölgeler",
      "Merkez ve Karagözler uzun dönem yerleşim için tercih ediliyor",
      "Doğa odaklı villa ve müstakil ev pazarı güçlü",
      "Ölüdeniz çevresinde sıkı imar ve koruma kısıtları",
      "Kayaköy tescilli alanında restorasyon odaklı butik pazar",
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
      {
        q: "Ölüdeniz çevresinde yapılaşma neden sınırlı?",
        a: "Ölüdeniz ve Belcekız plajı çevresi koruma alanı statüsündedir; mavi lagün ve çam ormanı koruması nedeniyle yeni yapılaşma sıkı kurallara tabidir. Bu sınırlama mevcut yapıların değer açısından korunmasını sağlar.",
      },
      {
        q: "Kayaköy'de tescilli yapı alırken süreç nasıl ilerler?",
        a: "Kayaköy gibi tescilli alanlarda koruma kurulu kararları geçerlidir; restorasyon projeleri kurul onayına tabidir. Tapu kaydındaki yapı tescil notu satın almadan önce mutlaka incelenmelidir.",
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
    tldr:
      "Milas, Bodrum-Milas Havalimanı'na yakın konumu ile lojistik ve yerleşim avantajı sunar. Güllük ve Ören kıyı turizmine, merkez yerleşik konuta, kuzey-batı kırsalı (Beçin, Selimiye köyü) ise tarım ve zeytinlik segmentine hizmet eder.",
    detail:
      "Milas, Beçin Kalesi'nin bulunduğu antik kent dokusundan Güllük ve Ören kıyı yerleşimlerine, oradan da iç kesimdeki Selimiye köyü ve zeytinlik vadilerine uzanan geniş bir coğrafyaya sahiptir. Merkez ve çevresi yerleşik konut talebine; Güllük ve Ören kıyı turizmine; iç kesim ise tarım arazisi ve zeytinlik yatırımına yöneliktir. 3573 sayılı Zeytinciliğin Islahı ve Yabanilerinin Aşılattırılması Hakkında Kanun kapsamında zeytinlik vasıflı taşınmazlarda yapılaşma kısıtlıdır — bu kısıt yatırım hedefini (tarımsal getiri mi, yerleşim mi) baştan netleştirmeyi gerektirir. Bodrum-Milas Havalimanı'na yakın konumu nedeniyle merkez ve kuzey mahalleleri lojistik-ticari yatırımcı için de cazip bir kategori oluşturur.",
    highlights: [
      "Havalimanı yakınlığı ulaşım avantajı sağlıyor",
      "Güllük ve Ören kıyı yerleşimleri turizm pazarı",
      "Tarım arazisi ve zeytinlik yatırımı için aktif pazar",
      "Beçin Kalesi ve antik kent dokusu çevresinde özel parsel pazarı",
      "3573 sayılı Zeytinlik Kanunu kapsamında yapılaşma kısıtları geçerli",
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
      {
        q: "Güllük ve Ören kıyı yatırımı için nasıl bir bölge?",
        a: "Güllük ve Ören, Milas'ın kıyı yerleşimleri olup yat ve tatil amaçlı konut talebine yöneliktir. Marina çevresi ve kıyıya yakın parseller turizm pazarı içinde değerlendirilir.",
      },
      {
        q: "Milas merkez ve havalimanı çevresi yatırım açısından nasıl?",
        a: "Bodrum-Milas Havalimanı'na yakın konumdaki Milas merkez ve kuzey mahalleleri, lojistik ve ticari yatırımcı için cazip bir bölgedir. Havalimanı çevresi ulaşım kolaylığı yatırım değerini desteklemektedir.",
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
    tldr:
      "Datça yarımadasının arz tarafı sınırlıdır — koruma alanları ve sıkı imar düzenlemesi nedeniyle yeni yapılaşma kısıtlıdır. Bu yapı bölgeyi premium fiyat segmentinde tutar ve gayrimenkulü uzun vadeli değer saklayan kategoriye taşır.",
    detail:
      "Datça yarımadası, Eski Datça'nın tarihi karakterinden Reşadiye'nin yerleşik konut yapısına, Karaköy ve Mesudiye'nin sakin koylarına ve Knidos antik kentinin bulunduğu yarımada ucuna kadar farklı dokular barındırır. Yarımadanın genelinde sıkı imar düzenlemesi ve doğa koruma statüsü nedeniyle yeni yapılaşma sınırlıdır; bu durum mevcut gayrimenkulün değer korumasını destekler. Eski Datça'da karakter ve doku koruma kuralları, Reşadiye-Karaköy hattında konut + butik yapı pazarı, Knidos çevresinde ise arkeolojik SİT statüsü nedeniyle özel kısıtlar geçerlidir. Datça'da yatırım kararı çoğunlukla kısa vadeli getiriden çok uzun vadeli değer saklama önceliğiyle alınır.",
    highlights: [
      "Sınırlı imar düzenlemesi nedeniyle premium fiyat segmenti",
      "Eski Datça karakter ve tarihi doku korunuyor",
      "Knidos antik kenti çevresinde özel arsa pazarı",
      "Reşadiye ve Karaköy yerleşik konut + butik yapı dokusu",
      "Doğa koruma statüsü gayrimenkul değerini uzun vadede destekler",
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
      {
        q: "Knidos antik kenti çevresinde yatırım yapılabilir mi?",
        a: "Knidos antik kentinin bulunduğu yarımada ucu arkeolojik SİT alanı statüsündedir; bu bölgedeki parsellerde Kültür ve Tabiat Varlıklarını Koruma Kurulu kararları geçerlidir. Yatırım öncesi tapu kaydındaki SİT notu mutlaka kontrol edilmelidir.",
      },
      {
        q: "Eski Datça'da restorasyon süreci nasıl ilerler?",
        a: "Eski Datça'daki tescilli ve karakter koruma alanı içindeki yapılarda restorasyon projeleri ilgili koruma kurulu onayına tabidir. Cephe, malzeme ve kat yüksekliği gibi unsurlar koruma kararları çerçevesinde belirlenir.",
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
    tldr:
      "Köyceğiz gayrimenkul pazarı, göl manzaralı konut talebi ile Toparlar ve çevre köylerdeki tarım arazisi-narenciye bahçesi pazarı olmak üzere iki ana hatta sahiptir. Sultaniye kaplıcaları çevresinde turizm odaklı yatırım fırsatları mevcuttur.",
    detail:
      "Köyceğiz, ismini aldığı gölün etrafındaki merkez yerleşim, Toparlar (kuzey), Hamitköy ve Beyobası gibi tarım odaklı köyleri ile Sultaniye kaplıcaları çevresini kapsar. Göl çevresi sakin yerleşim ve göl manzaralı konut talebinin yoğun olduğu alanken, Toparlar ve Hamitköy tarım arazisi-narenciye bahçesi pazarına; Sultaniye ise sağlık-turizm odaklı yatırıma yöneliktir. Köyceğiz-Dalyan Özel Çevre Koruma Bölgesi göl ve çevresindeki yapılaşmayı düzenler; bu kapsamdaki parsellerde imar kısıtları ve koruma kuralları geçerlidir. Caretta caretta kaplumbağasının yumurtladığı İztuzu plajı (Ortaca sınırlarında olsa da göl ekosisteminin parçası) bölgenin ekolojik değerini ve dolaylı olarak gayrimenkul kalitesini destekler.",
    highlights: [
      "Köyceğiz Gölü manzaralı konut talebi sürdürülebilir",
      "Sultaniye kaplıcaları çevresinde turizm yatırım fırsatları",
      "Tarım arazisi ve narenciye bahçesi pazarı aktif",
      "Köyceğiz-Dalyan Özel Çevre Koruma Bölgesi statüsü değer korur",
      "Toparlar ve çevre köylerde sakin kırsal yerleşim",
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
      {
        q: "Özel Çevre Koruma Bölgesi statüsü ne anlama gelir?",
        a: "Köyceğiz-Dalyan Özel Çevre Koruma Bölgesi içindeki parsellerde yapılaşma, çevre koruma planlarına tabidir. Bu kısıtlar bölgenin ekolojik değerini ve dolaylı olarak gayrimenkul fiyat istikrarını destekler.",
      },
      {
        q: "Sultaniye kaplıcaları çevresinde yatırım yapılabilir mi?",
        a: "Sultaniye kaplıcaları çevresi sağlık-turizm odaklı yatırım fırsatları sunar. Termal su kaynağı çevresindeki parsellerde işletme ruhsatı ve sağlık turizmi mevzuatı satın alma öncesi değerlendirilmelidir.",
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
    tldr:
      "Ortaca, Dalaman Havalimanı'na yakın konumu, Sarıgerme kıyı turizmi ve İztuzu plajı çevresindeki Dalyan turizm bölgesiyle çok katmanlı bir gayrimenkul pazarına sahiptir. Sera ve tarım yatırımı için elverişli ovaları bölgenin diğer önemli segmentini oluşturur.",
    detail:
      "Ortaca, Dalaman Havalimanı'nın güney komşusu olarak ulaşım açısından stratejik bir konumdadır. İlçe merkezi yerleşik konut talebine; Sarıgerme kıyısı tatil köyü ve uluslararası tatil amaçlı konut talebine; Dalyan ise caretta caretta kaplumbağasının yumurtladığı İztuzu plajı ve Kaunos antik kenti ile ekoturizm odaklı premium pazara hizmet eder. Ovaların verimli toprakları sera ve narenciye yatırımı için elverişlidir; bu kategoride 5403 sayılı Toprak Koruma ve Arazi Kullanımı Kanunu kapsamında tarım arazisinin bölünmesi kuralları geçerlidir. Dalyan delta bölgesi koruma statüsü altındadır ve yapılaşma kuralları sıkıdır — bu kısıtlar mevcut gayrimenkulün uzun vadeli değer artışını destekler.",
    highlights: [
      "Dalaman Havalimanı'na yakın konum — ulaşım avantajı",
      "Sarıgerme kıyı turizmi ve tatil köyü yatırım pazarı",
      "Tarım arazisi ve sera yatırımı için aktif bölge",
      "Dalyan İztuzu ekoturizm ve premium konut segmenti",
      "Kaunos antik kenti çevresinde özel parsel dokusu",
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
      {
        q: "Dalyan'da yatırım için süreç nasıl ilerler?",
        a: "Dalyan ve İztuzu plajı çevresi, caretta caretta koruma alanı ve Köyceğiz-Dalyan Özel Çevre Koruma Bölgesi statüsü altındadır. Bu bölgelerdeki parsellerde yapılaşma kuralları sıkıdır ve yatırım öncesi koruma planları mutlaka incelenmelidir.",
      },
      {
        q: "Tarım arazisi bölünme kuralları yatırımı nasıl etkiler?",
        a: "5403 sayılı Toprak Koruma ve Arazi Kullanımı Kanunu, tarım arazisinin minimum büyüklüğün altına bölünmesini sınırlar. Bu kural yatırım öncesi parselin tapu büyüklüğü ve gelecek bölünme planları açısından değerlendirilmelidir.",
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
    tldr:
      "Dalaman, uluslararası havalimanının ev sahibi olarak bölgenin ulaşım giriş kapısıdır. Gayrimenkul pazarı havalimanı çevresindeki ticari-lojistik talep, Sarsala-Akköprü çevresindeki turizm ve doğa odaklı premium yatırım ile turunçgil-sera tarımı arasında çeşitlenir.",
    detail:
      "Dalaman, Muğla'nın uluslararası havalimanına ev sahipliği yapan ilçesidir ve bu konum gayrimenkul pazarının karakterini belirler. İlçe merkezi yerleşik konut ve ticari talebe; havalimanı çevresi otelcilik, lojistik ve uzun süreli kiralama pazarına; Sarsala koyu ve Akköprü Barajı çevresi doğa odaklı premium yatırım talebine; Dalaman çayı vadisi ise verimli tarım arazisi (turunçgil, sera) yatırımına yöneliktir. Sarsala koyu, deniz ile çam ormanının iç içe geçtiği özel bir mikro-iklim sunar ve butik turizm yatırımı için ilgi çeker. Tarım arazisinde 5403 sayılı kanun kapsamında bölünme kısıtları ve sera yatırımında sulama-altyapı gereklilikleri satın alma öncesi değerlendirilmesi gereken kalemlerdir.",
    highlights: [
      "Dalaman Havalimanı bölgenin uluslararası giriş kapısı",
      "Havalimanı çevresinde ticari ve lojistik gayrimenkul talebi",
      "Tarım arazisi (turunçgil, sera) yatırımı için aktif",
      "Sarsala koyu ve Akköprü Barajı çevresinde premium yatırım",
      "Dalaman çayı vadisinde verimli tarım toprağı",
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
      {
        q: "Sarsala koyu ve Akköprü çevresi yatırım açısından nasıl?",
        a: "Sarsala koyu ve Akköprü Barajı çevresi, deniz-orman geçişi ile doğa odaklı premium konut ve butik turizm yatırımına uygundur. Bu bölgelerde imar planları ve koruma statüleri parsel bazında incelenmelidir.",
      },
      {
        q: "Sera yatırımı için Dalaman uygun mu?",
        a: "Dalaman çayı vadisi sera yatırımı için elverişli toprak ve sulama altyapısına sahiptir. Sera projesi öncesi su kaynağı izinleri, parsel bölünme kuralları ve elektrik altyapısı birlikte değerlendirilmelidir.",
      },
    ],
  },
  {
    slug: "mentese",
    name: "Menteşe",
    fullName: "Menteşe gayrimenkul",
    geo: { lat: 37.2153, lng: 28.3636 },
    intro:
      "Menteşe, Muğla'nın merkez ilçesi ve idari kalbidir. Üniversite, kamu kurumları ve tarihi Saburhane mahallesiyle hem yerleşik konut hem öğrenci kiralama pazarı canlı seyreder.",
    tldr:
      "Menteşe, Muğla'nın il merkezi olarak idari kurumlar, Muğla Sıtkı Koçman Üniversitesi ve tarihi Saburhane mahallesini barındırır. Gayrimenkul pazarı; yerleşik konut, üniversite çevresi öğrenci kiralaması ve tescilli tarihi yapı segmentleri arasında çeşitlenir.",
    detail:
      "Menteşe, Muğla'nın il merkezi olarak idari kurumların, Muğla Sıtkı Koçman Üniversitesi'nin ana kampüsünün ve tarihi Saburhane mahallesinin bulunduğu ilçedir. Üniversite çevresi (Kötekli, Orhaniye) yıl boyu süren öğrenci kiralaması talebine; Emirbeyazıt, Karşıyaka ve şehir merkezi yerleşik konut talebine; Saburhane ve tescilli tarihi doku ise karakter koruma alanı kapsamında butik restorasyon pazarına hizmet eder. Saburhane'deki karakteristik Muğla evleri (taş zemin, ahşap üst kat, kilim damga süslemeli pencere kepenkleri) Kültür Varlıklarını Koruma Kurulu kararlarına tabidir. Üniversite kaynaklı binlerce öğrenci nüfusu, Kötekli ve çevre mahallelerindeki kiralama pazarını istikrarlı bir gelir kalemi olarak sürdürür.",
    highlights: [
      "Muğla şehir merkezi — idari kurumlar ve üniversite çevresi",
      "Tarihi Saburhane mahallesi ve karakteristik Muğla evleri pazarı",
      "Üniversite kaynaklı yıl boyu süren öğrenci kiralama talebi",
      "Merkez konum nedeniyle istikrarlı uzun dönem yerleşim talebi",
      "Kötekli ve Orhaniye üniversite çevresi karma kullanım pazarı",
    ],
    segments: ["Konut", "Daire", "Öğrenci konutu", "Ticari", "Arsa"],
    faq: [
      {
        q: "Menteşe konut yatırımı için neden istikrarlı bir bölge?",
        a: "Menteşe, Muğla'nın merkez ilçesi olarak idari kurumları ve üniversiteyi barındırır. Bu yapı hem uzun dönem yerleşim hem öğrenci kiralama talebini istikrarlı tutar.",
      },
      {
        q: "Menteşe'de tarihi Muğla evi alırken nelere dikkat edilmeli?",
        a: "Saburhane ve çevresindeki tescilli yapılarda koruma kurulu kararları ve restorasyon kısıtları geçerlidir. Tapu kaydı ile yapı tescil durumu satın almadan önce incelenmelidir.",
      },
      {
        q: "Menteşe'de öğrenci konutu yatırımı mantıklı mı?",
        a: "Üniversite çevresinde kiralama talebi yıl boyu süreklidir. Konumun kampüse ulaşımı ve daire tipi, getiri beklentisiyle birlikte değerlendirilmelidir.",
      },
      {
        q: "Kötekli ve Orhaniye yatırım açısından farklı mı?",
        a: "Kötekli, üniversite kampüsüne en yakın mahalle olarak öğrenci kiralama pazarının yoğunlaştığı bölgedir. Orhaniye ise karma kullanım — hem öğrenci hem aile odaklı yerleşim pazarı sunar.",
      },
      {
        q: "Saburhane'de restorasyon süreci nasıl ilerler?",
        a: "Saburhane mahallesindeki tescilli yapıların restorasyonu Kültür Varlıklarını Koruma Bölge Kurulu onayına tabidir. Cephe, kepenk, ahşap üst kat gibi karakteristik unsurların korunması zorunludur.",
      },
    ],
  },
  {
    slug: "ula",
    name: "Ula",
    fullName: "Ula gayrimenkul",
    geo: { lat: 37.1058, lng: 28.4156 },
    intro:
      "Ula, Muğla merkeze yakın, geleneksel Ula evleri ve sakin kırsal dokusuyla tanınan bir ilçe. Akyaka'nın Gökova kıyısı ayrı bir yazlık ve turizm segmenti oluşturur.",
    tldr:
      "Ula, merkez ve çevre köylerdeki sakin kırsal yerleşim ile Akyaka'nın Gökova kıyısındaki Cittaslow yazlık-turizm pazarını bir arada barındırır. Geleneksel Ula evleri, kırsal yaşam ve doğa odaklı premium yatırım talebine hizmet eder.",
    detail:
      "Ula ilçesi, merkez ile çevre köylerin sakin kırsal yerleşim dokusunu ve Akyaka'nın Gökova körfezindeki Cittaslow statüsünü bir arada barındırır. Akyaka, yavaş şehirler (Cittaslow) ağına üye olması nedeniyle mimari koruma kuralları sıkı uygulanır — Gökova mimari dokusu, ahşap balkon, beyaz cephe ve kiremit çatı zorunluluğu yeni yapılaşmayı kısıtlar. Bu kısıt mevcut gayrimenkulün karakterini ve değerini korur. Ula merkezi ve çevre köyler (Karaböğürtlen, Akyaka, Gökova) geleneksel Ula evleri ve müstakil ev pazarına; çevre tarım arazileri narenciye ve zeytin yatırımına yöneliktir. Akyaka'nın Azmak deresi ve sazlık koyu özel ekosistem koruma alanı kapsamındadır.",
    highlights: [
      "Muğla merkeze yakınlık sakin yerleşim talebini destekliyor",
      "Akyaka — Gökova kıyısında yazlık ve Cittaslow turizm pazarı",
      "Geleneksel Ula evleri ve müstakil ev pazarı",
      "Tarım arazisi ve bahçe yatırımı için aktif kırsal bölge",
      "Akyaka Cittaslow statüsü mimari koruma değer çıpasıdır",
    ],
    segments: ["Müstakil ev", "Yazlık", "Arsa", "Tarım arazisi", "Konut"],
    faq: [
      {
        q: "Ula gayrimenkul açısından hangi iki karakteri taşır?",
        a: "Ula, merkeze yakın sakin kırsal yerleşim ile Akyaka'nın Gökova kıyısındaki yazlık-turizm pazarını bir arada barındırır. İki segment farklı bütçe ve kullanım profiline hitap eder.",
      },
      {
        q: "Akyaka'da gayrimenkul alırken nelere dikkat edilmeli?",
        a: "Akyaka'da Gökova mimari dokusu ve koruma statüsü yapılaşmayı belirler; imar ve mimari kurallar titizlikle incelenmelidir. Kıyıya yakın parsellerde ek kısıtlar bulunabilir.",
      },
      {
        q: "Ula'da tarım arazisi yatırımı nasıl değerlendirilmeli?",
        a: "Toprak vasfı, sulama imkânı ve imar durumu birlikte ele alınmalıdır. Çolakoğlu Emlak süreci saha incelemesiyle yürütür.",
      },
      {
        q: "Cittaslow statüsü Akyaka'da yatırımı nasıl etkiler?",
        a: "Akyaka, yavaş şehirler (Cittaslow) ağına üye olması nedeniyle mimari koruma kuralları sıkıdır. Bu kısıt yeni yapılaşmayı sınırlar ve mevcut karakteristik yapıların değerini uzun vadede korur.",
      },
      {
        q: "Geleneksel Ula evi alırken hangi unsurlar değerlendirilir?",
        a: "Geleneksel Ula evlerinde taş zemin, ahşap üst kat ve karakteristik mimari unsurlar koruma kapsamında değerlendirilir. Tescilli yapılarda restorasyon ilgili koruma kurulu kararlarına tabidir.",
      },
    ],
  },
  {
    slug: "yatagan",
    name: "Yatağan",
    fullName: "Yatağan gayrimenkul",
    geo: { lat: 37.3389, lng: 28.1408 },
    intro:
      "Yatağan, Muğla'nın iç kesiminde tarım, madencilik ve enerji üretiminin öne çıktığı bir ilçe. Stratonikeia antik kenti ve görece uygun fiyatlı arsa pazarı bölgenin öne çıkan değerleridir.",
    tldr:
      "Yatağan, Muğla'nın iç kesimindeki tarım-sanayi ağırlıklı ilçesi olarak görece uygun fiyatlı arsa ve konut pazarı sunar. Stratonikeia (Eskihisar) antik kenti çevresinde özel arsa dokusu, Muğla-Aydın aksındaki konumu ulaşım avantajı sağlar.",
    detail:
      "Yatağan, Muğla'nın iç kesimindeki tarım-sanayi ağırlıklı ilçesidir. Termik santral, madencilik faaliyetleri ve verimli tarım toprakları bölgenin ekonomik karakterini belirler. Gayrimenkul pazarı; merkez ve çevre köylerdeki yerleşik nüfusa dayalı istikrarlı konut talebine, Muğla-Aydın aksındaki konumun sağladığı ulaşım avantajıyla destekli arsa pazarına ve Eskihisar köyünde bulunan Stratonikeia antik kenti çevresindeki özel parsel dokusuna hizmet eder. Stratonikeia, Helenistik döneme ait kalıntılarıyla arkeolojik SİT alanı statüsündedir; bu bölgedeki parsellerde Kültür Varlıklarını Koruma Kurulu kararları geçerlidir. İlçenin görece uygun fiyatlı arsa pazarı, bütçe odaklı uzun vadeli yatırımcıyı çeker.",
    highlights: [
      "Muğla-Aydın aksında ulaşım açısından konumlu",
      "Tarım arazisi ve görece uygun fiyatlı arsa pazarı aktif",
      "Stratonikeia (Eskihisar) antik kenti çevresinde özel arsa dokusu",
      "Yerleşik nüfusa dayalı istikrarlı konut talebi",
      "Termik santral ve madencilik kaynaklı yerel ekonomi",
    ],
    segments: ["Konut", "Arsa", "Tarım arazisi", "Ticari"],
    faq: [
      {
        q: "Yatağan yatırım için neden görece uygun fiyatlı bir bölge?",
        a: "Yatağan, iç kesimde yer alması ve tarım-sanayi ağırlıklı ekonomisiyle kıyı ilçelerine göre daha uygun fiyatlı arsa ve konut sunar. Bütçe odaklı, uzun vadeli yatırımcıya hitap eder.",
      },
      {
        q: "Yatağan'da arsa veya tarım arazisi alırken nelere dikkat edilmeli?",
        a: "İmar durumu, parsel sınırları ve tarım arazisinde bölünme kuralları kontrol edilmelidir. Tapu vasfı satın almadan önce doğrulanmalıdır.",
      },
      {
        q: "Yatağan'da konut talebini ne belirler?",
        a: "Yerleşik nüfus ve yerel ekonomi konut talebini belirler. Konum, ulaşım ve imar durumu birlikte değerlendirilmelidir.",
      },
      {
        q: "Stratonikeia antik kenti çevresinde yatırım yapılabilir mi?",
        a: "Stratonikeia çevresi arkeolojik SİT alanı statüsündedir. Bu kapsamdaki parsellerde Kültür Varlıklarını Koruma Bölge Kurulu kararları ve yapılaşma kısıtları geçerlidir; yatırım öncesi tapu kaydındaki SİT notu mutlaka incelenmelidir.",
      },
      {
        q: "Muğla-Aydın aksı Yatağan yatırımını nasıl etkiler?",
        a: "Yatağan, Muğla-Aydın karayolu üzerinde yer alması nedeniyle bölgeler arası ulaşım açısından stratejik bir konumdadır. Bu durum ticari ve lojistik gayrimenkul talebini destekleyen bir avantaj sağlar.",
      },
    ],
  },
  {
    slug: "kavaklidere",
    name: "Kavaklıdere",
    fullName: "Kavaklıdere gayrimenkul",
    geo: { lat: 37.4456, lng: 28.3739 },
    intro:
      "Kavaklıdere, Muğla'nın kuzeydoğusunda bağcılık, ormancılık ve tarımla öne çıkan sakin bir kırsal ilçe. Bağ ve bahçe arazileri bölgenin temel gayrimenkul segmentidir.",
    tldr:
      "Kavaklıdere, çam ormanlarıyla çevrili sakin kırsal yapısı ve bağcılık geleneğiyle bağ-bahçe arazisi, müstakil ev ve görece uygun fiyatlı arsa pazarına ev sahipliği yapar. Doğa odaklı, şehirden uzak yaşam talebine uygun bir ilçedir.",
    detail:
      "Kavaklıdere, Muğla'nın kuzeydoğusunda çam ormanları, bağcılık ve tarım geleneğiyle öne çıkan sakin bir kırsal ilçedir. İlçe merkezi ve Göktepe gibi köyler bağ-bahçe arazisi, müstakil ev ve görece uygun fiyatlı arsa pazarına hizmet eder. Şehirden uzak, doğa odaklı yaşam arayan yatırımcı profilini çeker. Bağcılık geleneği nedeniyle bağ arazileri pazarda ayrı bir kategori oluşturur ve bu parsellerde toprak vasfı, sulama imkânı ve hasat dönemi koşulları satın alma öncesi değerlendirilir. Çam ormanlarıyla çevrili konumu nedeniyle 6831 sayılı Orman Kanunu kapsamındaki sınırlamalar bazı parsellerde geçerli olabilir; bu durum tapu kaydı kontrolünde netleşir. Görece uygun fiyatlı müstakil ev ve arsa seçenekleri uzun vadeli ve sakin yaşam önceliğindeki alıcılara hitap eder.",
    highlights: [
      "Bağcılık geleneğiyle bağ ve bahçe arazisi pazarı aktif",
      "Çam ormanlarıyla çevrili sakin kırsal yerleşim",
      "Görece uygun fiyatlı müstakil ev ve arsa seçenekleri",
      "Doğa odaklı, şehirden uzak yaşam talebine uygun",
      "Göktepe ve çevre köylerde geleneksel kırsal doku",
    ],
    segments: ["Tarım arazisi", "Bağ & bahçe", "Müstakil ev", "Arsa"],
    faq: [
      {
        q: "Kavaklıdere hangi yatırımcı profiline uygun?",
        a: "Kavaklıdere, bağ-bahçe arazisi ve sakin kırsal yaşam arayanlara uygundur. Doğa odaklı, uzun vadeli kullanım önceliğindeki yatırımcıya hitap eder.",
      },
      {
        q: "Kavaklıdere'de tarım veya bağ arazisi alırken nelere dikkat edilmeli?",
        a: "Toprak vasfı, sulama imkânı ve imar durumu incelenmelidir. Tarım arazisinde bölünme kuralları ve tapu vasfı satın almadan önce doğrulanmalıdır.",
      },
      {
        q: "Kavaklıdere'de müstakil ev pazarı nasıl?",
        a: "Görece uygun fiyatlı müstakil ev ve arsa seçenekleri bulunur. Konum, altyapı ve imar durumu birlikte değerlendirilmelidir.",
      },
      {
        q: "Orman alanı sınırındaki parsellerde özel kurallar geçerli mi?",
        a: "6831 sayılı Orman Kanunu kapsamındaki parseller veya orman vasfı içeren arazilerde özel sınırlamalar geçerlidir. Tapu kaydındaki vasıf notu ve orman sınır tespit belgesi satın alma öncesi incelenmelidir.",
      },
      {
        q: "Bağ arazisi yatırımı uzun vadede nasıl değerlendirilir?",
        a: "Bağ arazisi, bağcılık geleneği ve yerel iklim koşullarına bağlı tarımsal getiri sunar. Hasat dönemi koşulları, sulama altyapısı ve yıllık bakım ihtiyaçları yatırım kararında değerlendirilmelidir.",
      },
    ],
  },
  {
    slug: "seydikemer",
    name: "Seydikemer",
    fullName: "Seydikemer gayrimenkul",
    geo: { lat: 36.6347, lng: 29.3119 },
    intro:
      "Seydikemer, Fethiye'nin iç kesiminde tarım üretimi güçlü, dağ ve yayla dokusuna sahip bir ilçe. Sera tarımı, Tlos antik kenti ve Saklıkent çevresi bölgenin öne çıkan değerleridir.",
    tldr:
      "Seydikemer, Eşen Çayı vadisindeki verimli tarım toprakları ve sera tarımıyla bölgenin tarım merkezidir. Tlos antik kenti, Saklıkent Kanyonu ve dağ-yayla dokusu doğa turizmi odaklı yatırım fırsatları sunar; Fethiye'ye yakınlığı hizmet erişimini kolaylaştırır.",
    detail:
      "Seydikemer, Fethiye'nin iç kesiminde 2012'de ayrılan ilçe olarak Eşen Çayı vadisinin verimli tarım topraklarını, Tlos antik kentini, Saklıkent Kanyonu çevresini ve yayla dokusunu kapsar. İlçenin Eşen vadisi sera tarımı için elverişli iklim ve sulama altyapısı sunar; bu bölgede sera ve tarım arazisi yatırımı belirgindir. Tlos antik kenti çevresindeki parseller arkeolojik SİT alanı statüsündedir. Saklıkent Kanyonu çevresi doğa turizmi odaklı premium parsel ve butik konaklama yatırımına hizmet eder. Fethiye'ye yakın konumu hizmet erişimini kolaylaştırırken, görece uygun fiyatlı arsa ve müstakil ev pazarı bütçe odaklı yatırımcıyı çeker. 5403 sayılı kanun kapsamındaki tarım arazisi bölünme kuralları ve sera projelerinde su kaynağı izinleri yatırım öncesi değerlendirilmesi gereken kalemlerdir.",
    highlights: [
      "Eşen Çayı vadisinde verimli tarım ve sera arazisi pazarı",
      "Fethiye'ye yakınlık ulaşım ve hizmet avantajı sağlıyor",
      "Tlos antik kenti ve Saklıkent çevresinde doğa turizmi",
      "Görece uygun fiyatlı arsa ve müstakil ev seçenekleri",
      "Yayla dokusu ve dağ köylerinde sakin yerleşim",
    ],
    segments: ["Tarım arazisi", "Sera", "Konut", "Müstakil ev", "Arsa"],
    faq: [
      {
        q: "Seydikemer tarım yatırımı için neden öne çıkıyor?",
        a: "Seydikemer, Eşen Çayı vadisinin verimli toprakları ve sera tarımına elverişli iklimiyle tarım yatırımına uygundur. Arazi vasfı ve sulama altyapısı belirleyici unsurlardır.",
      },
      {
        q: "Seydikemer'de arsa alırken nelere dikkat edilmeli?",
        a: "İmar durumu, parsel sınırları ve tarım arazisinde bölünme kuralları kontrol edilmelidir. Tapu vasfı satın almadan önce doğrulanmalıdır.",
      },
      {
        q: "Seydikemer konut açısından nasıl bir bölge?",
        a: "Fethiye'ye yakınlığı hizmet erişimini kolaylaştırır; görece uygun fiyatlı müstakil ev ve arsa seçenekleri bulunur. Konum ve imar durumu birlikte değerlendirilmelidir.",
      },
      {
        q: "Tlos antik kenti çevresinde yatırım yapılabilir mi?",
        a: "Tlos antik kenti çevresi arkeolojik SİT alanı statüsündedir; Kültür Varlıklarını Koruma Bölge Kurulu kararları geçerlidir. Yatırım öncesi tapu kaydındaki SİT notu mutlaka kontrol edilmelidir.",
      },
      {
        q: "Saklıkent çevresinde doğa turizmi yatırımı nasıl?",
        a: "Saklıkent Kanyonu çevresi doğa turizmi odaklı premium parsel ve butik konaklama yatırımına hizmet eder. Kanyon yakınındaki parsellerde koruma planları ve turizm tesis yönetmeliği değerlendirilmelidir.",
      },
    ],
  },
];

export const regionSlugs = regions.map((r) => r.slug);
