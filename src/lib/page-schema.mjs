// Sayfa düzeyi WebPage + speakable schema üreticisi.
//
// NEDEN WebPage: Sayfanın kendisi grafikte bir düğüm olmadan breadcrumb, tarih ve
// ana varlık (Place / Service / DefinedTermSet) birbirine bağlanmıyor; @id ile
// çapraz bağlı grafik hem Google hem LLM tarafında "bu sayfa neyi anlatıyor"
// sorusunu tek adımda yanıtlıyor.
//
// NEDEN speakable: cssSelector verilmezse sesli asistan sayfanın hangi parçasını
// okuyacağını kendi tahmin eder — kontrol bizde olmuyor. Açıkça işaretlenen
// seçiciler cevabın hangi cümleyle başlayacağını belirler.

/**
 * @param {object} o
 * @param {string} o.siteUrl                 site kök URL'i (sonda / yok)
 * @param {string} o.canonical               sayfanın kanonik URL'i
 * @param {string} o.name                    sayfa adı (genelde H1)
 * @param {string} o.description
 * @param {string} [o.datePublished]         ISO tarih
 * @param {string} [o.dateModified]          ISO tarih
 * @param {string} [o.image]                 birincil görsel (tam URL)
 * @param {string} [o.imageCaption]
 * @param {string} [o.mainEntityId]          sayfanın ana varlığının @id'si
 * @param {string} [o.lang="tr-TR"]
 * @param {string[]} [o.speakable]           okunacak bölümlerin CSS seçicileri
 * @returns {object} WebPage JSON-LD
 */
export function webPageSchema({
  siteUrl,
  canonical,
  name,
  description,
  datePublished,
  dateModified,
  image,
  imageCaption,
  mainEntityId,
  lang = "tr-TR",
  speakable = ["h1"],
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name,
    description,
    inLanguage: lang,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    breadcrumb: { "@id": `${canonical}#breadcrumb` },
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    ...(mainEntityId ? { mainEntity: { "@id": mainEntityId } } : {}),
    ...(image
      ? {
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: image,
            ...(imageCaption ? { caption: imageCaption } : {}),
          },
        }
      : {}),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: speakable,
    },
  };
}
