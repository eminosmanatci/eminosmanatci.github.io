/* =========================
   TRANSLATIONS
========================= */

const translations = {

  tr: {

    pageTitle:
      "Emin Osman Atcı | Bilgisayar Mühendisi",

    navAbout:
      "Hakkımda",

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
      "Python backend geliştirme, yapay zekâ, bilgisayarlı görü ve veri odaklı sistemler üzerine çalışan yeni mezun bir Bilgisayar Mühendisiyim. Teknik fikirleri gerçek uygulamalara dönüştürmekten ve sürdürülebilir yazılım sistemleri geliştirmekten keyif alıyorum.",

    projectsButton:
      "Projelerimi İncele",

    aiTag:
      "Yapay Zekâ"

  },


  en: {

    pageTitle:
      "Emin Osman Atcı | Computer Engineer",

    navAbout:
      "About",

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
      "I'm a Computer Engineering graduate focused on Python backend development, artificial intelligence, computer vision and data-driven systems. I enjoy turning technical ideas into real applications and building reliable software systems.",

    projectsButton:
      "View My Projects",

    aiTag:
      "Artificial Intelligence"

  }

};


/* =========================
   DOM ELEMENTS
========================= */

const languageButtons =
  document.querySelectorAll(".lang-btn");

const translatedElements =
  document.querySelectorAll("[data-i18n]");


/* =========================
   LANGUAGE FUNCTION
========================= */

function changeLanguage(language) {

  if (!translations[language]) {
    return;
  }


  translatedElements.forEach((element) => {

    const translationKey =
      element.getAttribute("data-i18n");


    const translatedText =
      translations[language][translationKey];


    if (translatedText) {

      element.textContent =
        translatedText;

    }

  });


  /* UPDATE ACTIVE BUTTON */

  languageButtons.forEach((button) => {

    button.classList.remove("active");


    if (button.dataset.lang === language) {

      button.classList.add("active");

    }

  });


  /* UPDATE HTML LANGUAGE */

  document.documentElement.lang =
    language;


  /* UPDATE PAGE TITLE */

  document.title =
    translations[language].pageTitle;


  /* SAVE USER PREFERENCE */

  localStorage.setItem(
    "portfolio-language",
    language
  );

}


/* =========================
   LANGUAGE BUTTON EVENTS
========================= */

languageButtons.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      const selectedLanguage =
        button.dataset.lang;


      changeLanguage(
        selectedLanguage
      );

    }
  );

});


/* =========================
   LOAD SAVED LANGUAGE
========================= */

const savedLanguage =
  localStorage.getItem(
    "portfolio-language"
  );


const defaultLanguage =
  savedLanguage || "tr";


changeLanguage(
  defaultLanguage
);