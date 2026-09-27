document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       TRANSLATIONS
       ========================================================= */

    const translations = {

        en: {

            /* NAVIGATION */
            "nav.work": "Work",
            "nav.experience": "Experience",
            "nav.recognition": "Recognition",
            "nav.contact": "Contact",
            "nav.cv": "CV",

            /* HERO */
            "hero.label": "INTRO",
            "hero.role": "COMPUTER ENGINEER",
            "hero.title":
                "I build backend systems, data products and AI-powered applications.",
            "hero.description":
                "I build software products for real-world problems using Python, modern backend architectures, data systems and AI integrations.",

            /* WORK */
            "work.label": "SELECTED WORK",
            "work.title":
                "Systems built to solve real problems.",

            /* COMMON */
            "common.architecture": "ARCHITECTURE",
            "common.engineering": "ENGINEERING",
            "common.stack": "STACK",
            "common.quality": "QUALITY",
            "common.focus": "FOCUS",
            "common.technologies": "TECHNOLOGIES",
            "common.role": "ROLE",
            "common.ai": "AI",
            "common.status": "STATUS",

            /* INSIGHTFLOW */
            "projects.insightflow.status": "COMPLETED",

            "projects.insightflow.summary":
                "Enterprise analytics platform that transforms CSV sales data into interactive dashboards and AI-generated executive insights.",

            "projects.insightflow.engineering":
                "Multi-tenant architecture with organization-scoped data isolation, asynchronous processing and a structured dataset lifecycle.",

            "projects.insightflow.quality":
                "62 backend tests with approximately 95% test coverage, duplicate dataset detection, validation and cleanup.",

            /* AGROBYTE */
            "projects.agrobyte.status":
                "TEKNOFEST 2025 FINALIST",

            "projects.agrobyte.summary":
                "Computer vision system for agricultural monitoring, animal tracking and automated anomaly detection.",

            "projects.agrobyte.focus":
                "Cow identification and tracking, behavior analysis, anomaly detection, hay-bale counting and smoke/fire detection.",

            "projects.agrobyte.role":
                "AI Unit Responsible",

            /* SENTINELVISION */
            "projects.sentinel.status":
                "IN DEVELOPMENT",

            "projects.sentinel.summary":
                "AI-powered security video analytics platform with retrieval-augmented querying over detected events.",

            "projects.sentinel.placeholder":
                "CURRENTLY IN DEVELOPMENT",

            "projects.sentinel.statusText":
                "Active development",

            /* OTHER PROJECTS */
            "other.label":
                "OTHER PROJECTS",

            "projects.task.summary":
                "Full-stack task management platform built around Clean Architecture.",

            "projects.fire.summary":
                "Real-time fire and smoke detection with cloud-based event logging.",

            "projects.kitapla.summary":
                "Android application for discovering, organizing and tracking books.",

            "projects.kitapla.type":
                "MOBILE",

            /* EXPERIENCE */
            "experience.label":
                "EXPERIENCE",

            "experience.title":
                "Engineering experience across AI and data.",

            "experience.arvis.role":
                "AI R&D Intern",

            "experience.arvis.description":
                "Worked on computer vision and AI-based video analytics using Python, OpenCV and YOLO.",

            "experience.medas.role":
                "Business Intelligence & Data Analytics Intern",

            "experience.medas.description":
                "Worked with Oracle and SQL for data analysis, reporting and business intelligence workflows, with exposure to Power BI, data warehouses and real-time data systems.",

            /* RECOGNITION */
            "recognition.label":
                "RECOGNITION",

            "recognition.title":
                "Selected programs, competitions and achievements.",

            "recognition.teknofest2025":
                "Finalist in the Agricultural Technologies category with an AI-powered computer vision project.",

            "recognition.teknofest2026":
                "Finalist with a new AI-focused project.",

            "recognition.google":
                "Selected for an eight-month program covering AI applications development, web application development and entrepreneurship.",

            /* EDUCATION */
            "education.label":
                "EDUCATION",

            "education.title":
                "Computer Engineering foundation.",

            "education.degree":
                "B.Sc. COMPUTER ENGINEERING",

            "education.description":
                "English-medium Computer Engineering program.",

            "education.coursework":
                "RELEVANT COURSEWORK",

            "courses.ml":
                "Machine Learning",

            "courses.deep":
                "Deep Learning",

            "courses.se":
                "Software Engineering",

            "courses.modern":
                "Modern Programming Languages",

            "courses.distributed":
                "Distributed Systems",

            "courses.algorithms":
                "Algorithms",

            "courses.oop":
                "Object-Oriented Programming",

            "courses.mobile":
                "Mobile Programming",

            /* CERTIFICATIONS */
            "certifications.label":
                "SELECTED CERTIFICATIONS",

            "certifications.title":
                "Continued learning beyond university.",

            "certifications.datathon":
                "Datathon 2026",

            "certifications.cloud":
                "Cloud Computing Fundamentals",

            "certifications.pm":
                "Google Project Management",

            "certifications.web":
                "Web Application Development Training",

            "certifications.data":
                "Foundations of Data Science",

            "certifications.ai":
                "AI Summer Camp",

            "certifications.python":
                "Python Programming for Data Science",

            "certifications.emerging":
                "Explore Emerging Tech",

            /* CONTACT */
            "contact.label":
                "CONTACT",

            "contact.title":
                "Let's build something useful.",

            "contact.description":
                "I am open to software engineering, backend, data and AI opportunities.",

            "contact.cv":
                "Download CV ↗",

            /* FOOTER */
            "footer.role":
                "Computer Engineer",

            "footer.top":
                "Back to top ↑"
        },


        /* =====================================================
           TURKISH
           ===================================================== */

        tr: {

            /* NAVIGATION */
            "nav.work": "Projeler",
            "nav.experience": "Deneyim",
            "nav.recognition": "Başarılar",
            "nav.contact": "İletişim",
            "nav.cv": "CV",

            /* HERO */
            "hero.label": "GİRİŞ",
            "hero.role": "BİLGİSAYAR MÜHENDİSİ",

            "hero.title":
                "Backend sistemleri, veri ürünleri ve yapay zekâ destekli uygulamalar geliştiriyorum.",

            "hero.description":
                "Python, modern backend mimarileri, veri sistemleri ve yapay zekâ entegrasyonlarıyla gerçek problemlere yönelik yazılım ürünleri geliştiriyorum.",

            /* WORK */
            "work.label":
                "SEÇİLMİŞ PROJELER",

            "work.title":
                "Gerçek problemlere çözüm üretmek için geliştirilmiş sistemler.",

            /* COMMON */
            "common.architecture": "MİMARİ",
            "common.engineering": "MÜHENDİSLİK",
            "common.stack": "TEKNOLOJİLER",
            "common.quality": "KALİTE",
            "common.focus": "ODAK",
            "common.technologies": "TEKNOLOJİLER",
            "common.role": "ROL",
            "common.ai": "YAPAY ZEKÂ",
            "common.status": "DURUM",

            /* INSIGHTFLOW */
            "projects.insightflow.status":
                "TAMAMLANDI",

            "projects.insightflow.summary":
                "CSV satış verilerini etkileşimli panolara ve yapay zekâ tarafından oluşturulan yönetici içgörülerine dönüştüren kurumsal analiz platformu.",

            "projects.insightflow.engineering":
                "Organizasyon bazlı veri izolasyonu, asenkron veri işleme ve yapılandırılmış veri seti yaşam döngüsü sunan multi-tenant mimari.",

            "projects.insightflow.quality":
                "Yaklaşık %95 test kapsamına sahip 62 backend testi, yinelenen veri seti tespiti, doğrulama ve temizleme süreçleri.",

            /* AGROBYTE */
            "projects.agrobyte.status":
                "TEKNOFEST 2025 FİNALİSTİ",

            "projects.agrobyte.summary":
                "Tarımsal izleme, hayvan takibi ve otomatik anomali tespiti için geliştirilen bilgisayarlı görü sistemi.",

            "projects.agrobyte.focus":
                "Büyükbaş hayvanların benzersiz kimliklerle (ID) sisteme tanımlanması, gün boyunca elde edilen görsel verilerle davranış kalıplarının analiz edilmesi ve anomalilerin tespit edilmesi.",

            "projects.agrobyte.role":
                "Yapay Zekâ Birim Sorumlusu",

            /* SENTINELVISION */
            "projects.sentinel.status":
                "GELİŞTİRİLİYOR",

            "projects.sentinel.summary":
                "Tespit edilen olaylar üzerinde RAG tabanlı sorgulama sağlayan yapay zekâ destekli güvenlik video analiz platformu.",

            "projects.sentinel.placeholder":
                "GELİŞTİRME AŞAMASINDA",

            "projects.sentinel.statusText":
                "Aktif geliştirme",

            /* OTHER PROJECTS */
            "other.label":
                "DİĞER PROJELER",

            "projects.task.summary":
                "Clean Architecture yaklaşımıyla geliştirilen full-stack görev yönetim platformu.",

            "projects.fire.summary":
                "Bulut tabanlı olay kaydıyla gerçek zamanlı yangın ve duman tespit sistemi.",

            "projects.kitapla.summary":
                "Kitap keşfetme, düzenleme ve takip özelliklerine sahip Android uygulaması.",

            "projects.kitapla.type":
                "MOBİL",

            /* EXPERIENCE */
            "experience.label":
                "DENEYİM",

            "experience.title":
                "Yapay zekâ ve veri alanlarında mühendislik deneyimi.",

            "experience.arvis.role":
                "Yapay Zekâ Ar-Ge Stajyeri",

            "experience.arvis.description":
                "Python, OpenCV ve YOLO kullanarak bilgisayarlı görü ve yapay zekâ tabanlı video analiz çalışmaları gerçekleştirdim.",

            "experience.medas.role":
                "İş Zekâsı ve Veri Analitiği Stajyeri",

            "experience.medas.description":
                "Kurumsal veri ambarı altyapısı üzerinde SQL ile veri analizi ve raporlama süreçlerini yürüttüm; Power BI ve gerçek zamanlı veri sistemleri kullanarak iş zekâsı uygulamaları geliştirdim.",

            /* RECOGNITION */
            "recognition.label":
                "BAŞARILAR",

            "recognition.title":
                "Seçili programlar, yarışmalar ve başarılar.",

            "recognition.teknofest2026":
                "Yapay Zekâ ve Model Optimizasyon sorumlusu olarak görev aldığım akıllı balık kafesi izleme projesiyle TEKNOFEST 2026 Tarım Teknolojileri kategorisinde finalist olduk.",

            "recognition.teknofest2025":
                "Yapay Zekâ Birim Sorumlusu olarak görev aldığım akıllı çiftlik projesiyle Tarım Teknolojileri kategorisinde finalist olduk.",

            "recognition.google":
                "Yapay zekâ uygulama geliştirme, web uygulama geliştirme ve girişimcilik alanlarını kapsayan sekiz aylık eğitim aldım.",

            /* EDUCATION */
            "education.label":
                "EĞİTİM",

            "education.title":
                "Bilgisayar mühendisliği temeli.",

            "education.degree":
                "BİLGİSAYAR MÜHENDİSLİĞİ LİSANS",

            "education.description":
                "İngilizce eğitim veren Bilgisayar Mühendisliği programı.",

            "education.coursework":
                "İLGİLİ DERSLER",

            "courses.ml":
                "Makine Öğrenmesi",

            "courses.deep":
                "Derin Öğrenme",

            "courses.se":
                "Yazılım Mühendisliği",

            "courses.modern":
                "Modern Programlama Dilleri",

            "courses.distributed":
                "Dağıtık Sistemler",

            "courses.algorithms":
                "Algoritmalar",

            "courses.oop":
                "Nesne Yönelimli Programlama",

            "courses.mobile":
                "Mobil Programlama",

            /* CERTIFICATIONS */
            "certifications.label":
                "SEÇİLİ SERTİFİKALAR",

            "certifications.title":
                "Üniversite eğitiminin ötesinde sürekli öğrenme.",

            "certifications.datathon":
                "Datathon 2026",

            "certifications.cloud":
                "Cloud Computing Fundamentals",

            "certifications.pm":
                "Google Project Management",

            "certifications.web":
                "Web Uygulama Geliştirme Eğitimi",

            "certifications.data":
                "Foundations of Data Science",

            "certifications.ai":
                "Yapay Zekâ Yaz Kampı",

            "certifications.python":
                "Python Programming for Data Science",

            "certifications.emerging":
                "Explore Emerging Tech",

            /* CONTACT */
            "contact.label":
                "İLETİŞİM",

            "contact.title":
                "Birlikte faydalı bir şey geliştirelim.",

            "contact.description":
                "Yazılım mühendisliği, backend, veri ve yapay zekâ alanlarındaki fırsatlara açığım.",

            "contact.cv":
                "CV'yi İndir ↗",

            /* FOOTER */
            "footer.role":
                "Bilgisayar Mühendisi",

            "footer.top":
                "Başa dön ↑"
        }
    };


    /* =========================================================
       LANGUAGE
       ========================================================= */

    const languageToggle =
        document.getElementById("languageToggle");

    let currentLanguage =
        localStorage.getItem("portfolioLanguage") || "tr";


    function updateLanguage(language) {

        if (!translations[language]) {
            return;
        }

        currentLanguage = language;

        localStorage.setItem(
            "portfolioLanguage",
            currentLanguage
        );

        document.documentElement.lang =
            currentLanguage;


        document
            .querySelectorAll("[data-i18n]")
            .forEach((element) => {

                const key =
                    element.getAttribute("data-i18n");

                const translatedText =
                    translations[currentLanguage][key];

                if (translatedText) {
                    element.textContent =
                        translatedText;
                }
            });


        if (languageToggle) {

            languageToggle.textContent =
                currentLanguage === "en"
                    ? "TR"
                    : "EN";

            languageToggle.setAttribute(
                "aria-label",
                currentLanguage === "en"
                    ? "Türkçeye geç"
                    : "Switch to English"
            );
        }


        updateMetadata();
    }


    /* =========================================================
       PAGE METADATA
       ========================================================= */

    function updateMetadata() {

        document.title =
            currentLanguage === "tr"
                ? "Emin Osman Atcı — Bilgisayar Mühendisi"
                : "Emin Osman Atcı — Computer Engineer";


        const description =
            document.querySelector(
                'meta[name="description"]'
            );

        if (!description) {
            return;
        }


        description.setAttribute(
            "content",
            currentLanguage === "tr"
                ? "Emin Osman Atcı — Backend sistemleri, veri ürünleri ve yapay zekâ destekli uygulamalar geliştiren Bilgisayar Mühendisi."
                : "Emin Osman Atcı — Computer Engineer building backend systems, data products and AI-powered applications."
        );
    }


    /* =========================================================
       LANGUAGE TOGGLE
       ========================================================= */

    if (languageToggle) {

        languageToggle.addEventListener(
            "click",
            () => {

                updateLanguage(
                    currentLanguage === "en"
                        ? "tr"
                        : "en"
                );

            }
        );
    }


    /* =========================================================
       SMOOTH SCROLL
       ========================================================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

                    const targetId =
                        link.getAttribute("href");

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }

                    const target =
                        document.querySelector(targetId);

                    if (!target) {
                        return;
                    }

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });


    /* =========================================================
       EXTERNAL LINKS
       ========================================================= */

    document
        .querySelectorAll('a[target="_blank"]')
        .forEach((link) => {

            link.setAttribute(
                "rel",
                "noopener noreferrer"
            );

        });


    /* =========================================================
       MOBILE NAVIGATION
       ========================================================= */

    const navToggle = document.getElementById("navToggle");
    const mobileNav = document.getElementById("mobileNav");

    function closeMobileNav() {
        if (!navToggle || !mobileNav) return;
        navToggle.setAttribute("aria-expanded", "false");
        mobileNav.classList.remove("is-open");
    }

    if (navToggle && mobileNav) {

        navToggle.addEventListener("click", () => {
            const isOpen = mobileNav.classList.toggle("is-open");
            navToggle.setAttribute("aria-expanded", String(isOpen));
        });

        mobileNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMobileNav);
        });

        window.addEventListener("keydown", (event) => {
            if (event.key === "Escape") closeMobileNav();
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 980) closeMobileNav();
        });

    }


    /* =========================================================
       ACTIVE NAVIGATION
       ========================================================= */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".main-nav a"
        );


    function updateActiveNavigation() {

        let currentSection = "";

        const scrollPosition =
            window.scrollY + 180;


        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop;

            const sectionBottom =
                sectionTop +
                section.offsetHeight;


            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionBottom
            ) {
                currentSection =
                    section.getAttribute("id");
            }

        });


        navLinks.forEach((link) => {

            const href =
                link.getAttribute("href");

            link.classList.toggle(
                "is-active",
                href === `#${currentSection}`
            );

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );


    /* =========================================================
       HEADER SCROLL
       ========================================================= */

    const header =
        document.querySelector(".site-header");


    function updateHeader() {

        if (!header) {
            return;
        }

        header.classList.toggle(
            "is-scrolled",
            window.scrollY > 20
        );

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    /* =========================================================
       REVEAL ANIMATION
       ========================================================= */

    const revealElements =
        document.querySelectorAll(
            ".section-heading, " +
            ".hero-content, " +
            ".other-projects, " +
            ".education-layout, " +
            ".contact-content"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach((entry) => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }

                        entry.target.classList.add(
                            "is-visible"
                        );

                        observerInstance.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin:
                        "0px 0px -40px 0px"
                }
            );


        revealElements.forEach((element) => {

            element.classList.add(
                "reveal-on-scroll"
            );

            observer.observe(element);

        });

    } else {

        revealElements.forEach((element) => {

            element.classList.add(
                "is-visible"
            );

        });

    }


    /* =========================================================
       IMAGE FALLBACK
       ========================================================= */

    document
        .querySelectorAll(
            ".project-visual img"
        )
        .forEach((image) => {

            image.addEventListener(
                "error",
                () => {

                    image.style.display =
                        "none";

                    const parent =
                        image.closest(
                            ".project-visual"
                        );

                    if (parent) {

                        parent.classList.add(
                            "image-missing"
                        );

                    }

                }
            );

        });


    /* =========================================================
       CURRENT YEAR
       ========================================================= */

    const year =
        document.getElementById(
            "currentYear"
        );

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =========================================================
       INITIALIZE
       ========================================================= */

    updateLanguage(
        currentLanguage
    );

    updateActiveNavigation();

    updateHeader();

});