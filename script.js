/* =========================
   TRANSLATIONS
========================= */

const translations = {

  tr: {

    pageTitle:
      "Emin Osman Atcı | Bilgisayar Mühendisi",

    navAbout:
      "Hakkımda",

    navSkills:
      "Yetkinlikler",

    navProjects:
      "Projeler",

    navExperience:
      "Deneyim",

    navContact:
      "İletişim",

    status:
      "Yeni fırsatlara açığım",

    intro:
      "Merhaba, ben Emin Osman Atcı 👋",

    heroFirst:
      "Backend sistemleri ve",

    heroHighlight:
      "yapay zekâ uygulamaları",

    heroLast:
      "geliştiriyorum.",

    heroDescription:
      "Yeni mezun bir Bilgisayar Mühendisiyim. Python ile backend servisleri geliştiriyor, yapay zekâ ve bilgisayarlı görü çözümlerini gerçek uygulamalara entegre ediyorum.",

    projectsButton:
      "Projelerimi İncele",

    aiTag:
      "Yapay Zekâ",

    aboutLabel:
      "Hakkımda",

    aboutTitle:
      "Yazılım ve yapay zekânın kesişiminde ürünler geliştiriyorum.",

    aboutParagraph1:
      "Bilgisayar mühendisliği eğitimim boyunca yazılım geliştirme, yapay zekâ ve veri odaklı sistemler üzerine çalıştım. Özellikle Python backend geliştirme ile yapay zekâ uygulamalarının kesişimi ilgimi çekiyor.",

    aboutParagraph2:
      "Stajlarımda veri analitiği ve bilgisayarlı görü alanlarında deneyim kazanırken; projelerimde API tasarımından asenkron işlemeye, test otomasyonundan yapay zekâ entegrasyonlarına kadar farklı katmanlarda çalıştım.",

    aboutParagraph3:
      "Kariyerime, güçlü bir yazılım mühendisliği temeli üzerinde gerçek problemlere çözüm üretebileceğim ve sorumluluk alabileceğim bir teknoloji ekibinde başlamak istiyorum.",

    internshipStat:
      "Teknik staj deneyimi",

    projectStat:
      "Öne çıkan proje",

    coverageStat:
      "Projede test kapsamı",

    teknofestStat:
      "TEKNOFEST Finalisti",

    skillsLabel:
      "Teknik Yetkinlikler",

    skillsTitle:
      "Kullandığım teknolojiler.",

    skillsDescription:
      "Backend geliştirmeden yapay zekâ uygulamalarına, veri katmanından geliştirme araçlarına kadar projelerimde aktif olarak kullandığım teknolojiler.",

    backendTitle:
      "Backend Development",

    backendDescription:
      "API geliştirme, veri erişimi, kimlik doğrulama ve asenkron işlemler.",

    aiTitle:
      "AI & Computer Vision",

    aiDescription:
      "Görüntü analizi, nesne tespiti, takip sistemleri ve AI entegrasyonları.",

    dataTitle:
      "Data & Database",

    dataDescription:
      "Veri analizi, ilişkisel veritabanları ve raporlama süreçleri.",

    toolsTitle:
      "Tools & Development",

    toolsDescription:
      "Test, otomasyon, versiyon kontrolü ve modern geliştirme araçları."

  },


  en: {

    pageTitle:
      "Emin Osman Atcı | Computer Engineer",

    navAbout:
      "About",

    navSkills:
      "Skills",

    navProjects:
      "Projects",

    navExperience:
      "Experience",

    navContact:
      "Contact",

    status:
      "Open to opportunities",

    intro:
      "Hi, I'm Emin Osman Atcı 👋",

    heroFirst:
      "I build backend systems and",

    heroHighlight:
      "AI applications",

    heroLast:
      ".",

    heroDescription:
      "I'm a recent Computer Engineering graduate. I build Python backend services and integrate artificial intelligence and computer vision solutions into real-world applications.",

    projectsButton:
      "View My Projects",

    aiTag:
      "Artificial Intelligence",

    aboutLabel:
      "About Me",

    aboutTitle:
      "I build products at the intersection of software engineering and AI.",

    aboutParagraph1:
      "Throughout my Computer Engineering education, I focused on software development, artificial intelligence and data-driven systems. I'm especially interested in the intersection of Python backend engineering and AI applications.",

    aboutParagraph2:
      "My internships gave me hands-on experience in data analytics and computer vision, while my projects allowed me to work across different layers of software — from API design and asynchronous processing to test automation and AI integrations.",

    aboutParagraph3:
      "I'm looking to begin my career in a technology team where I can build on a strong software engineering foundation, take ownership and contribute to solutions for real-world problems.",

    internshipStat:
      "Technical internships",

    projectStat:
      "Featured projects",

    coverageStat:
      "Project test coverage",

    teknofestStat:
      "TEKNOFEST Finalist",

    skillsLabel:
      "Technical Skills",

    skillsTitle:
      "Technologies I work with.",

    skillsDescription:
      "Technologies I actively use across backend development, AI applications, data systems and modern software development workflows.",

    backendTitle:
      "Backend Development",

    backendDescription:
      "API development, data access, authentication and asynchronous processing.",

    aiTitle:
      "AI & Computer Vision",

    aiDescription:
      "Image analysis, object detection, tracking systems and AI integrations.",

    dataTitle:
      "Data & Database",

    dataDescription:
      "Data analysis, relational databases and reporting workflows.",

    toolsTitle:
      "Tools & Development",

    toolsDescription:
      "Testing, automation, version control and modern development tooling."

  }

};


/* =========================
   DOM
========================= */

const languageButtons =
  document.querySelectorAll(".lang-btn");

const translatedElements =
  document.querySelectorAll("[data-i18n]");


/* =========================
   CHANGE LANGUAGE
========================= */

function changeLanguage(language) {

  if (!translations[language]) {
    return;
  }

  translatedElements.forEach((element) => {

    const key =
      element.getAttribute("data-i18n");

    const text =
      translations[language][key];

    if (text) {
      element.textContent = text;
    }

  });


  languageButtons.forEach((button) => {

    button.classList.remove("active");

    if (button.dataset.lang === language) {
      button.classList.add("active");
    }

  });


  document.documentElement.lang =
    language;

  document.title =
    translations[language].pageTitle;

  localStorage.setItem(
    "portfolio-language",
    language
  );

}


/* =========================
   EVENTS
========================= */

languageButtons.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      changeLanguage(
        button.dataset.lang
      );

    }
  );

});


/* =========================
   INITIAL LANGUAGE
========================= */

const savedLanguage =
  localStorage.getItem(
    "portfolio-language"
  );

changeLanguage(
  savedLanguage || "tr"
);