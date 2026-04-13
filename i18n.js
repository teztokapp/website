const translations = {
  en: {
    "nav-features": "Features",
    "nav-motivation": "Motivation",
    "nav-app": "App",
    "nav-sources": "Sources",
    "nav-cta-btn": "View on GitHub",
    "hero-title": "Academic Research,<br>Built for Browsing",
    "hero-subtitle": "A mobile-first interface for exploring academic theses and papers through short-form interaction patterns — applying familiar scroll-based UX to lower the entry barrier to research discovery.",
    "hero-github-btn": "View on GitHub",
    "hero-see-app-btn": "Open App",
    "sec-features-title": "Research discovery<br>for the mobile era",
    "sec-features-desc": "An app that aggregates open-access academic content and presents it through a vertical snap-scroll feed — optimised for passive discovery rather than active search.",
    "feat-feed-title": "Vertical swipe feed",
    "feat-feed-desc": "Snap-scroll through thesis cards. Each card surfaces title, authors, source, year, and a teaser of the abstract — full text one tap away.",
    "feat-save-title": "Save & revisit",
    "feat-save-desc": "Heart any thesis to save it to your Likes library. Persisted locally — your reading list is always there when you come back.",
    "feat-topics-title": "Browse by topic",
    "feat-topics-desc": "Filter by academic discipline — Engineering, Social Sciences, Medicine, CS, and more. Alphabetical jump bar makes switching fast.",
    "feat-sources-title": "Multi-source feed",
    "feat-sources-desc": "Pulls from YÖKTez, OpenAlex, Semantic Scholar, CORE, and Crossref in one unified experience. Switch your preferred source from Settings.",
    "sec-showcase-title": "Progressive disclosure<br>by design",
    "sec-showcase-desc": "Teaser first, abstract on demand, full paper one tap further. Depth is available without being required.",
    "tab-feed": "Feed",
    "tab-topics": "Topics",
    "tab-likes": "Likes",
    "tab-abstract": "Abstract",
    "tab-sources": "Sources",
    "panel-feed-title": "The vertical feed",
    "panel-feed-desc": "Each full-screen card shows a thesis title, authors, source, publication year, a teaser of the abstract, and keyword chips. Swipe up to advance, swipe down to revisit.",
    "panel-topics-title": "Browse by topic",
    "panel-topics-desc": "Tap \"All topics\" to open the topic picker. Filter by academic discipline with an A–Z jump bar for fast navigation.",
    "panel-likes-title": "Your library",
    "panel-likes-desc": "Every hearted paper lands in the Likes tab — title, authors, year, and source. Tap to remove or dive back in with a single press.",
    "panel-abstract-title": "Full abstracts &amp; papers",
    "panel-abstract-desc": "Tap \"Read abstract\" to reveal the full text in a bottom sheet. Tap the document icon to open the original paper in a browser.",
    "panel-sources-title": "Choose your source",
    "panel-sources-desc": "Switch between OpenAlex, Semantic Scholar, CORE, or Crossref from Settings. Each provider surfaces different research.",
    
    "panel-feed-l1": "Full-bleed contextual background image",
    "panel-feed-l2": "Snap-scroll with haptic feedback",
    "panel-feed-l3": "Open full paper in one tap",
    "panel-topics-l1": "Dozens of academic disciplines",
    "panel-topics-l2": "A–Z jump navigation",
    "panel-topics-l3": "Filter within topics",
    "panel-likes-l1": "Persisted in local storage",
    "panel-likes-l2": "One-tap remove",
    "panel-likes-l3": "Available without re-fetching",
    "panel-abstract-l1": "Full abstract in a bottom sheet",
    "panel-abstract-l2": "Open source PDF in browser",
    "panel-abstract-l3": "Author names always accessible",
    "panel-sources-l1": "5 open-access academic providers",
    "panel-sources-l2": "No account needed",
    "panel-sources-l3": "YÖKTez via backend for Turkish theses",
    
    "sec-sources-title": "Open-access APIs,<br>unified in one feed",
    "sec-sources-desc": "Rather than scraping a single database, TezTok integrates six open-access APIs — enabling cross-domain discovery across disciplines.",
    "src-yok-title": "YÖKTez",
    "src-yok-desc": "Turkish national thesis database",
    "src-yok-req": "Back-end scraper server needed",
    "src-oa-title": "OpenAlex",
    "src-oa-desc": "250M+ scholarly works, fully open and free",
    "src-ss-title": "Semantic Scholar",
    "src-ss-desc": "Academic search by the Allen Institute for AI",
    "src-ss-req": "API key needed",
    "src-core-title": "CORE",
    "src-core-desc": "Largest open-access research aggregator",
    "src-core-req": "API key needed",
    "src-cr-title": "Crossref",
    "src-cr-desc": "100M+ DOI-linked scholarly metadata records",

    "sec-why-title": "Why this matters",
    "sec-why-desc": "The problem is not access — it's discovery. Most academic databases are built for targeted search, not for passive exposure to new ideas.",
    "why-prob-title": "The problem",
    "why-prob-l1": "Academic databases (PubMed, JSTOR, Google Scholar) optimise for known-item search, not serendipitous discovery.",
    "why-prob-l2": "Casual exposure to research outside one's immediate field is structurally low for non-specialists.",
    "why-prob-l3": "Dense abstracts create a front-loaded cognitive barrier that discourages exploratory reading.",
    "why-hypo-title": "The hypothesis",
    "why-hypo-l1": "Short-form interaction patterns (vertical swipe, progressive disclosure) may reduce the perceived entry cost of engaging with academic content.",
    "why-hypo-l2": "Aggregating multiple open-access APIs into one feed may broaden cross-disciplinary exposure compared to single-source browsing.",
    "why-fram-title": "Research framing",
    "why-fram-l1": "<strong>Domain:</strong> Human–Computer Interaction, Information Systems, EdTech",
    "why-fram-l2": "<strong>Design pattern studied:</strong> Progressive disclosure + snap-scroll applied to long-form content",
    "why-fram-l3": "<strong>Key open question:</strong> Does interface familiarity (social-media-like UX) transfer to willingness to engage with unfamiliar academic domains?",

    "sec-explore-title": "Explore the project",
    "sec-explore-desc": "Free, open-source, and runs on any device. Clone the repo to run it locally.",
    "footer-tagline": "A mobile-first interface for academic research discovery.",
    "footer-note": "Research content is sourced from open-access academic APIs. Always verify claims against the original paper.",
    "download-github": "View on GitHub"
  },
  tr: {
    "nav-features": "Özellikler",
    "nav-motivation": "Motivasyon",
    "nav-app": "Uygulama",
    "nav-sources": "Kaynaklar",
    "nav-cta-btn": "GitHub'da Gör",
    "hero-title": "Akademik Araştırmalar,<br>Gezinmeye Hazır",
    "hero-subtitle": "Kısa formlu etkileşim kalıpları aracılığıyla akademik tezleri ve makaleleri keşfetmek için mobil öncelikli bir arayüz; araştırmalara giriş engelini düşürmek için tanıdık kaydırmaya dayalı deneyimi uyarlar.",
    "hero-github-btn": "GitHub'da Gör",
    "hero-see-app-btn": "Uygulamayı Aç",
    "sec-features-title": "Mobil çağ için<br>araştırma keşfi",
    "sec-features-desc": "Açık erişimli akademik içerikleri bir araya getiren ve dikey kaydırmalı bir akış halinde sunan bir uygulama; aktif arama yerine pasif keşif için optimize edilmiştir.",
    "feat-feed-title": "Dikey akış",
    "feat-feed-desc": "Tez kartları arasında kaydırarak gezinin. Her kart; başlık, yazar, kaynak, yıl ve kısa bir özet sunar. Tam metin sadece bir dokunuş uzağınızda.",
    "feat-save-title": "Kaydet ve tekrar bak",
    "feat-save-desc": "Beğeniler kütüphanenize kaydetmek için herhangi bir tezin kalp ikonuna dokunun. Yerel olarak saklanır; geri döndüğünüzde okuma listeniz sizi bekliyor olur.",
    "feat-topics-title": "Konuya göre gezin",
    "feat-topics-desc": "Mühendislik, Sosyal Bilimler, Tıp, Bilgisayar Bilimleri ve daha fazlası... Akademik disiplinlere göre filtreleyin. A-Z atlama çubuğu ile geçişler çok hızlı.",
    "feat-sources-title": "Çoklu kaynak akışı",
    "feat-sources-desc": "YÖKTez, OpenAlex, Semantic Scholar, CORE ve Crossref'i tek bir birleşik deneyimde sunar. Tercih ettiğiniz kaynağı Ayarlar'dan değiştirin.",
    "sec-showcase-title": "Tasarım gereği<br>aşamalı gösterim",
    "sec-showcase-desc": "Önce tadımlık bilgi, istenirse tam özet ve ardından tek bir dokunuşla tam makale. Detaylara inmek mümkündür ama zorunlu değildir.",
    "tab-feed": "Akış",
    "tab-topics": "Konular",
    "tab-likes": "Beğenilenler",
    "tab-abstract": "Özet",
    "tab-sources": "Kaynaklar",
    "panel-feed-title": "Dikey akış",
    "panel-feed-desc": "Tam ekran kaplayan her kart bir tezin başlığını, yazarlarını, kaynağını, yayın yılını, kısa özetini ve anahtar kelimelerini gösterir. İlerlemek için yukarı, tekrar bakmak için aşağı kaydırın.",
    "panel-topics-title": "Konulara göz atın",
    "panel-topics-desc": "Konu seçiciyi açmak için \"Tüm konular\" seçeneğine dokunun. Hızlı gezinme için A–Z atlama çubuğu ile belirli bir akademik disipline göre filtreleyin.",
    "panel-likes-title": "Okuma listeniz",
    "panel-likes-desc": "Kaydetmek için herhangi bir makaledeki kalbe dokunun. Beğenilenler sekmesi tüm seçtiğiniz makaleleri saklar.",
    "panel-abstract-title": "Özete hızlı erişim",
    "panel-abstract-desc": "Tam metni okumadan önce alt panelden makalenin özetini görüntülemek için \"Özeti oku\" seçeneğine dokunun.",
    "panel-sources-title": "Kaynakları yapılandırın",
    "panel-sources-desc": "Ayarlar menüsünden API'ler arasında geçiş yapın. Seçtiğiniz kaynak neyi destekliyorsa o özellikleri görebilirsiniz.",
    
    "panel-feed-l1": "Tam ekran kaplayan bağlamsal arka plan",
    "panel-feed-l2": "Haptik geri bildirimli pürüzsüz kaydırma",
    "panel-feed-l3": "Tek dokunuşla tam makaleyi açın",
    "panel-topics-l1": "Düzinelerce farklı akademik disiplin",
    "panel-topics-l2": "A–Z atlama menüsü",
    "panel-topics-l3": "Konular içinde detaylı filtreleme",
    "panel-likes-l1": "Yerel veritabanında saklanır",
    "panel-likes-l2": "Tek dokunuşla kolayca kaldırın",
    "panel-likes-l3": "Yeniden indirmeden anında erişin",
    "panel-abstract-l1": "Alt panelde kolay okunan tam özet",
    "panel-abstract-l2": "Orijinal PDF'i tarayıcıda açın",
    "panel-abstract-l3": "Yazar isimleri her zaman elinizin altında",
    "panel-sources-l1": "5 farklı açık erişimli platform",
    "panel-sources-l2": "Hesap veya üyelik gerektirmez",
    "panel-sources-l3": "Türkçe tezler için YÖKTez uyumluluğu",
    
    "sec-sources-title": "Açık erişimli API'ler,<br>tek bir akışta",
    "sec-sources-desc": "TezTok, tek bir veritabanını kazımak yerine altı farklı açık erişim API'sini bütünleştirerek çeşitli disiplinler arası keşiflere olanak tanır.",
    "src-yok-title": "YÖKTez",
    "src-yok-desc": "Türkiye ulusal tez merkezi veritabanı",
    "src-yok-req": "Arka uç scraping sunucusu gerekir",
    "src-oa-title": "OpenAlex",
    "src-oa-desc": "250 Milyon+ akademik makale, tamamen açık ve ücretsiz",
    "src-ss-title": "Semantic Scholar",
    "src-ss-desc": "Allen Institute for AI tarafından sağlanan akademik arama",
    "src-ss-req": "API anahtarı gerekir",
    "src-core-title": "CORE",
    "src-core-desc": "Dünyanın en büyük açık erişim araştırma toplayıcısı",
    "src-core-req": "API anahtarı gerekir",
    "src-cr-title": "Crossref",
    "src-cr-desc": "100 Milyon+ DOI bağlantılı akademik üstveri kaydı",

    "sec-why-title": "Neden önemli?",
    "sec-why-desc": "Problem erişim değil, keşfetmek. Çoğu akademik veritabanı hedef odaklı arama için yapılmıştır, yeni fikirlerle tesadüfen karşılaşmak için değil.",
    "why-prob-title": "Problem",
    "why-prob-l1": "Akademik veritabanları (PubMed, JSTOR, Google Scholar vb.) tesadüfî keşiflerden ziyade bilinen bir şeyi aramaya odaklanır.",
    "why-prob-l2": "Araştırmacıların kendi alanlarının dışındaki konulardaki çalışmalara maruz kalma ihtimali oldukça düşüktür.",
    "why-prob-l3": "Yoğun özetler, okuma ve keşfetme motivasyonunu kıran bir bilişsel yük yaratır.",
    "why-hypo-title": "Hipotez",
    "why-hypo-l1": "Kısa formlu etkileşim desenleri (dikey kaydırma, kademeli bilgi gösterimi vb.) akademik içeriğe odaklanmak için gereken başlangıç maliyetini hafifletebilir.",
    "why-hypo-l2": "Birden fazla açık erişimli API'yi tek bir akışta toplamak, tek kaynaklı platformlara kıyasla disiplinler arası keşif ihtimalini artırabilir.",
    "why-fram-title": "Araştırma Çerçevesi",
    "why-fram-l1": "<strong>Alan:</strong> İnsan-Bilgisayar Etkileşimi, Bilgi Sistemleri, Eğitim Teknolojileri",
    "why-fram-l2": "<strong>İncelenen tasarım deseni:</strong> Uzun okuma içeriğine uygulanan kademeli gösterim ve ekran kaydırma modeli",
    "why-fram-l3": "<strong>Temel açık soru:</strong> Tanıdık arayüzler (sosyal medya benzeri kullanım deneyimi), okuyucunun alışık olmadığı akademik alanlarla etkileşime girme isteğini artırabilir mi?",

    "sec-explore-title": "Projeyi keşfet",
    "sec-explore-desc": "Ücretsiz, açık kaynaklı ve her cihazda çalışır. Yerel bilgisayarında çalıştırmak için repoyu kopyalayabilirsin.",
    "footer-tagline": "Akademik araştırmaları keşfetmek için mobil öncelikli bir arayüz.",
    "footer-note": "Araştırma içerikleri açık erişimli akademik API'lerden derlenmiştir. İddiaları daima orijinal makaleden teyit ediniz.",
    "download-github": "GitHub'da Gör"
  }
};

const domMap = {
  "nav-features": () => document.querySelector('a[href="#features"]'),
  "nav-motivation": () => document.querySelector('a[href="#why"]'),
  "nav-app": () => document.querySelector('a[href="#screenshots"]'),
  "nav-sources": () => document.querySelector('a[href="#sources"]'),
  "nav-cta-btn": () => document.getElementById('nav-cta-btn'),
  "hero-title": () => document.querySelector('.hero-title'),
  "hero-subtitle": () => document.querySelector('.hero-subtitle'),
  "hero-github-btn": () => document.getElementById('hero-github-btn'),
  "hero-see-app-btn": () => document.getElementById('hero-see-app-btn'),
  "sec-features-title": () => document.querySelector('#features .section-title'),
  "sec-features-desc": () => document.querySelector('#features .section-desc'),
  "feat-feed-title": () => document.querySelector('#feature-feed .feature-title'),
  "feat-feed-desc": () => document.querySelector('#feature-feed .feature-desc'),
  "feat-save-title": () => document.querySelector('#feature-bookmarks .feature-title'),
  "feat-save-desc": () => document.querySelector('#feature-bookmarks .feature-desc'),
  "feat-topics-title": () => document.querySelector('#feature-topics .feature-title'),
  "feat-topics-desc": () => document.querySelector('#feature-topics .feature-desc'),
  "feat-sources-title": () => document.querySelector('#feature-sources .feature-title'),
  "feat-sources-desc": () => document.querySelector('#feature-sources .feature-desc'),
  "sec-showcase-title": () => document.querySelector('#screenshots .section-title'),
  "sec-showcase-desc": () => document.querySelector('#screenshots .section-desc'),
  "tab-feed": () => document.getElementById('tab-feed'),
  "tab-topics": () => document.getElementById('tab-topics'),
  "tab-likes": () => document.getElementById('tab-likes'),
  "tab-abstract": () => document.getElementById('tab-abstract'),
  "tab-sources": () => document.getElementById('tab-sources'),
  "panel-feed-title": () => document.querySelector('#panel-feed .panel-title'),
  "panel-feed-desc": () => document.querySelector('#panel-feed .panel-desc'),
  "panel-topics-title": () => document.querySelector('#panel-topics .panel-title'),
  "panel-topics-desc": () => document.querySelector('#panel-topics .panel-desc'),
  "panel-likes-title": () => document.querySelector('#panel-likes .panel-title'),
  "panel-likes-desc": () => document.querySelector('#panel-likes .panel-desc'),
  "panel-abstract-title": () => document.querySelector('#panel-abstract .panel-title'),
  "panel-abstract-desc": () => document.querySelector('#panel-abstract .panel-desc'),
  "panel-sources-title": () => document.querySelector('#panel-sources .panel-title'),
  "panel-sources-desc": () => document.querySelector('#panel-sources .panel-desc'),
  "panel-feed-l1": () => document.querySelectorAll('#panel-feed .panel-bullets li')[0],
  "panel-feed-l2": () => document.querySelectorAll('#panel-feed .panel-bullets li')[1],
  "panel-feed-l3": () => document.querySelectorAll('#panel-feed .panel-bullets li')[2],
  "panel-topics-l1": () => document.querySelectorAll('#panel-topics .panel-bullets li')[0],
  "panel-topics-l2": () => document.querySelectorAll('#panel-topics .panel-bullets li')[1],
  "panel-topics-l3": () => document.querySelectorAll('#panel-topics .panel-bullets li')[2],
  "panel-likes-l1": () => document.querySelectorAll('#panel-likes .panel-bullets li')[0],
  "panel-likes-l2": () => document.querySelectorAll('#panel-likes .panel-bullets li')[1],
  "panel-likes-l3": () => document.querySelectorAll('#panel-likes .panel-bullets li')[2],
  "panel-abstract-l1": () => document.querySelectorAll('#panel-abstract .panel-bullets li')[0],
  "panel-abstract-l2": () => document.querySelectorAll('#panel-abstract .panel-bullets li')[1],
  "panel-abstract-l3": () => document.querySelectorAll('#panel-abstract .panel-bullets li')[2],
  "panel-sources-l1": () => document.querySelectorAll('#panel-sources .panel-bullets li')[0],
  "panel-sources-l2": () => document.querySelectorAll('#panel-sources .panel-bullets li')[1],
  "panel-sources-l3": () => document.querySelectorAll('#panel-sources .panel-bullets li')[2],

  "sec-sources-title": () => document.querySelector('#sources .section-title'),
  "sec-sources-desc": () => document.querySelector('#sources .section-desc'),
  "src-yok-title": () => document.querySelector('#source-yoktez .source-name'),
  "src-yok-desc": () => document.querySelector('#source-yoktez .source-detail'),
  "src-yok-req": () => document.querySelector('#source-yoktez .source-req'),
  "src-oa-title": () => document.querySelector('#source-openalex .source-name'),
  "src-oa-desc": () => document.querySelector('#source-openalex .source-detail'),
  "src-ss-title": () => document.querySelector('#source-semantic .source-name'),
  "src-ss-desc": () => document.querySelector('#source-semantic .source-detail'),
  "src-ss-req": () => document.querySelector('#source-semantic .source-req'),
  "src-core-title": () => document.querySelector('#source-core .source-name'),
  "src-core-desc": () => document.querySelector('#source-core .source-detail'),
  "src-core-req": () => document.querySelector('#source-core .source-req'),
  "src-cr-title": () => document.querySelector('#source-crossref .source-name'),
  "src-cr-desc": () => document.querySelector('#source-crossref .source-detail'),

  "sec-why-title": () => document.querySelector('#why .section-title'),
  "sec-why-desc": () => document.querySelector('#why .section-desc'),
  "why-prob-title": () => document.querySelector('#why-problem .why-title'),
  "why-prob-l1": () => document.querySelectorAll('#why-problem .why-list li')[0],
  "why-prob-l2": () => document.querySelectorAll('#why-problem .why-list li')[1],
  "why-prob-l3": () => document.querySelectorAll('#why-problem .why-list li')[2],
  "why-hypo-title": () => document.querySelector('#why-hypothesis .why-title'),
  "why-hypo-l1": () => document.querySelectorAll('#why-hypothesis .why-list li')[0],
  "why-hypo-l2": () => document.querySelectorAll('#why-hypothesis .why-list li')[1],
  "why-fram-title": () => document.querySelector('#why-framing .why-title'),
  "why-fram-l1": () => document.querySelectorAll('#why-framing .why-list li')[0],
  "why-fram-l2": () => document.querySelectorAll('#why-framing .why-list li')[1],
  "why-fram-l3": () => document.querySelectorAll('#why-framing .why-list li')[2],

  "sec-explore-title": () => document.querySelector('.download-title'),
  "sec-explore-desc": () => document.querySelector('.download-desc'),
  "footer-tagline": () => document.querySelector('.footer-tagline'),
  "footer-note": () => document.querySelector('.footer-note')
};

function setLang(lang) {
  if (!translations[lang]) return;
  
  localStorage.setItem('teztok-lang', lang);
  document.documentElement.lang = lang;
  
  const selects = document.querySelectorAll('.lang-select');
  selects.forEach(select => {
    if (select.value !== lang) {
      select.value = lang;
    }
  });
  
  const strings = translations[lang];
  for (const key in domMap) {
    const el = domMap[key]();
    if (el && strings[key]) {
      if (key === 'nav-cta-btn' || key === 'hero-see-app-btn') {
        el.innerHTML = strings[key];
      } else if (key === 'hero-github-btn') {
        el.innerHTML = strings[key];
      } else {
        el.innerHTML = strings[key]; // preserves <br> tags
      }
    }
  }

  const downloadGithubBtn = document.getElementById('download-github-btn');
  if (downloadGithubBtn) {
    downloadGithubBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            ${strings["download-github"]}
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('teztok-lang');
  let lang = 'en';
  if (saved && translations[saved]) {
    lang = saved;
  } else {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.toLowerCase().startsWith('tr')) {
      lang = 'tr';
    }
  }
  setLang(lang);
});
