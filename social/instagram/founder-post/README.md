# Çolakoğlu Emlak — IG 2. Post (Kurucu: Ziya Ercan)

5 slaytlık otorite postu. İlk post (manifesto) markayı tanıttı, bu post **kurucuyu** ve sektörel meslek temsilini sahneye koyar. Çolakoğlu IG'sinin **authority handshake**'i.

## Üretim

```bash
node export.mjs
```

→ `out/01.png ... 05.png` (1080×1350, IG portrait optimal)

## Önizleme

`slides.html` dosyasını tarayıcıda aç — 5 slaytı dikey scroll ile gör.
Tek slaytı izole görmek için `slides.html?slide=3` gibi parametre ekle.

## Slayt mimarisi

1. **Kapak** — portre + "Ziya Ercan / Kurucu / 1994'ten beri"
2. **Üç Mesleki Konum** — Esnaf Odası Başkanı + Müşavirler Derneği Başkanı + TEMFED Genel Başkan Yardımcısı
3. **32 Yıl + İlk Ofis** — dev "32" + "Muğla'nın ilk emlak ofisi" + 13 ilçe
4. **Çalışma İlkesi** — site About bölümündeki tam alıntı (Ziya'nın sözü)
5. **İletişim** — handle + WhatsApp + ofis + web + slogan

## Caption (Türkçe — yayında kullanılacak)

```
Muğla'da bir adres, bir imza, bir miras.

Çolakoğlu Emlak'ın kurucusu Ziya Ercan, 1994'ten bu yana
Muğla'nın ilk emlak ofisini yönetiyor.

— Muğla Emlak Danışmanları Esnaf Odası Başkanı
— Muğla Emlak Müşavirleri Derneği Başkanı
— TEMFED (Tüm Emlak Müşavirleri Federasyonu) Genel Başkan Yardımcısı

32 yıl. 13 ilçe. Bir tek ilke:
emlakçılıkta güven esastır.

Bodrum villasından Datça arsasına, Marmaris konutundan
Milas zeytinliğine — Muğla'nın her köşesinde danışmanlık.

📍 Menteşe / Muğla
📞 0252 212 50 15
💬 WhatsApp 0532 316 82 30
🔗 Bio'da → colakogluemlak48.com
```

## Hashtag — ilk yoruma yapıştır (caption temiz kalsın)

**Lokal (10):** #muglaemlak #bodrumemlak #fethiyeemlak #marmarisemlak #milasemlak #datcaemlak #ortacaemlak #dalamanemlak #koycegizemlak #menteseemlak

**Niş + yatırım (6):** #muglayatırım #egeemlak #tatilevi #yazlıkmülk #yabancıyayatirim #emlakdanismanlik

**Marka + otorite (4):** #çolakoğluemlak #1994tenberi #emlakçılıktagüven #temfed

> Toplam 20 hashtag. İlk post ile **3 hashtag farkı** bilinçli (algoritma çeşitlilik sever).

## Alt-text (erişilebilirlik — IG her slayta ayrı yazılır)

1. Ziya Ercan portresi, ahşap çerçeve içinde, yanında "Çolakoğlu Emlak'ın kurucusu / 1994'ten beri" yazısı.
2. Beyaz kartlar üzerinde üç mesleki unvan: Esnaf Odası Başkanı, Müşavirler Derneği Başkanı, TEMFED Genel Başkan Yardımcısı.
3. Büyük "32" rakamı turuncu, sağında "Muğla'nın ilk emlak ofisi" başlığı ve 13 ilçede saha derinliği vurgusu.
4. Çalışma ilkesi alıntısı serif tipografi: "Bir emlakçı sadece konut göstermez, ailenin yıllarca yaşayacağı kararı şekillendirir."
5. İletişim bilgileri: @colakogluemlak48 handle, WhatsApp, ofis tel, web, Menteşe adresi.

## Yayın zamanı

**Çarşamba veya Perşembe 19:00-21:00** (Muğla yerel kitle peak — ilk post analiz ettiyse engagement saatini ona göre kaydır).

İlk post ile **arası min. 3 gün** olsun — back-to-back authority postu okuyucuyu yorar.

## Yayın sonrası

- **İlk 60 dk:** Sude + Beyza + Ziya çevresi like + comment (algoritma boost).
- **"Hakkımızda" highlight'ına** kapak slaytı (s1) ekle.
- **Bio metni** — Ziya Ercan'ın 3 unvanı + 32 yıl, kısa formda bio'ya eklenebilir.

## ⚠ Yayın ÖNCESİ onay listesi

1. **Ziya'nın yüzü + 3 unvanı + isim soyad** sosyal medyada bu ölçekte 2. kez. Yayın öncesi onaylı görsel (hangi portre fotoğrafı?) — yeni profesyonel çekim varsa `public/images/ziya-ercan-portre.jpg` güncellenip tekrar export.
2. **Alıntı kontrolü** — slayt 4'teki çalışma ilkesi cümlesi sitede yayında (About.astro), ama Ziya'nın **kendi söylediği orijinal söz mü** yoksa **ajans yazımı mı**? Ziya'ya bir kez sorulup teyitlenmeli — "Bu sizin sözünüz olarak yayınlansa olur mu?"
3. **Üç unvan teyidi** — Esnaf Odası Başkanlığı + Müşavirler Derneği Başkanlığı + TEMFED Gen. Bşk. Yrd. **aktif görevde mi?** (Görev süresi dolmuş olabilir — sitede statik bilgi, sosyal medyada yayınlamadan önce güncel teyit.)
4. **Kaynak iddiaları temiz** — "Muğla'nın ilk emlak ofisi" iddiası sitede yayınlı, About.astro'da `config.ts → site.description` kaynaklı. Bu **Çolakoğlu/Ziya teyitli** içerik (uydurma yasak ✓).

## Portre fotoğrafı notu

Mevcut `ziya-ercan-portre.jpg` **402×604 piksel** — IG 1080×1350 slayta full-bleed konursa pikselleşir. Mevcut tasarım **460×690 çerçeveli** yerleştirme yapıyor (~1.15× scale, pikselleşme limit içinde). Yine de **daha yüksek çözünürlüklü, daha yeni bir portre çekimi** önerilir — özellikle bu post profilin "Hakkımızda" highlight'ına da gidecekse.
