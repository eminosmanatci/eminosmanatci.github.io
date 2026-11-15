document.addEventListener("DOMContentLoaded", () => {

    /* ---------- English translations (Turkish lives in the HTML) ---------- */

    const en = {
        "skip": "Skip to content",
        "nav.projects": "Projects",
        "nav.experience": "Experience",
        "nav.skills": "Skills",
        "nav.contact": "Contact",
        "nav.cv": "Download CV",

        "hero.tag": "computer engineer",
        "hero.conf": "98%",
        "hero.lead": "I build web applications, backend services and computer vision systems. I enjoy taking a product from end to end — from the REST API and database design to authentication and object detection on camera footage.",
        "hero.cv": "Download CV (PDF)",
        "hero.mail": "Send an email",

        "facts.award.k": "TEKNOFEST 2026",
        "facts.award.v": "Finalist and TÜME Foundation ₺1,000,000 award",
        "facts.edu.k": "B.Sc., 2026",
        "facts.edu.v": "Computer Engineering, 100% English-medium",
        "facts.loc.k": "Location",
        "facts.loc.v": "Konya. Open to relocation and remote work",

        "projects.title": "Projects",
        "projects.intro": "Systems I built end to end to solve a real problem.",
        "projects.code": "View the code on GitHub",

        "projects.if.alt": "InsightFlow revenue and sales dashboard",
        "projects.if.kind": "Web-based analytics and reporting platform",
        "projects.if.desc": "A multi-user web application where companies upload sales data and get dashboards and automatic executive summaries. Each company only sees its own data.",
        "projects.if.p1": "REST API and PostgreSQL schema; JWT authentication and role-based access control",
        "projects.if.p2": "Validation layer that catches invalid and duplicate records before they reach the database",
        "projects.if.p3": "62 automated tests (~95% coverage), CI with GitHub Actions, Docker",

        "projects.sv.query": "“Who walked through the gate last night?”",
        "projects.sv.kind": "Security camera video analytics · in development",
        "projects.sv.desc": "Detects people and objects in camera footage with YOLOv8, stores the events and makes them searchable with plain-language questions.",
        "projects.sv.p1": "Long-running video analysis runs in a background queue, so the API stays fast",
        "projects.sv.p2": "Detection events stored in PostgreSQL + pgvector; questions answered with RAG",

        "projects.ab.alt": "AgroByte Vision detecting and tracking animals in a barn",
        "projects.ab.kind": "TEKNOFEST projects · responsible for the AI unit",
        "projects.ab.desc": "Computer vision modules for smart farm and smart fish cage monitoring: animal identification and tracking, behavior analysis, anomaly, smoke and fire detection.",
        "projects.ab.p1": "AgroByte Aqua: TEKNOFEST 2026 finalist, TÜME Foundation ₺1,000,000 award",
        "projects.ab.p2": "AgroByte Vision: TEKNOFEST 2025 finalist",

        "projects.more": "Other projects",
        "projects.task": "Full-stack task management app built with Clean Architecture",
        "projects.fire.name": "Fire and smoke detection",
        "projects.fire": "Real-time detection with cloud event logging",
        "projects.kitapla": "Android app for discovering and tracking books",

        "exp.title": "Experience",
        "exp.medas.when": "July – August 2025",
        "exp.medas.role": "Business Intelligence & Data Analytics Intern",
        "exp.medas.desc": "Analyzed large-scale enterprise data with Oracle and SQL, optimized slow queries and built Power BI reports.",
        "exp.arvis.when": "July – September 2024",
        "exp.arvis.role": "AI R&D Intern",
        "exp.arvis.desc": "Built object detection, tracking and anomaly detection prototypes on camera footage for workplace safety (Python, OpenCV, YOLO).",

        "skills.title": "Skills",
        "skills.front": "Frontend",
        "skills.back": "Backend",
        "skills.back.v": "Python, FastAPI, Flask, REST API design, layered architecture",
        "skills.db": "Databases",
        "skills.db.v": "PostgreSQL, SQL, schema design, query optimization, SQLAlchemy",
        "skills.sec": "Web security",
        "skills.sec.v": "JWT, role-based access control, password hashing, input validation, OWASP Top 10",
        "skills.tools": "Tools",
        "skills.ai": "Computer vision & AI",
        "skills.ai.v": "YOLO, OpenCV, PyTorch, LLM API integration, RAG",
        "skills.lang": "Languages",
        "skills.lang.v": "Turkish (native), English (good)",

        "edu.title": "Education & recognition",
        "edu.degree": "B.Sc. Computer Engineering · 100% English-medium · Sep 2021 – Jun 2026",
        "edu.courses": "Software Engineering, Database Systems, Distributed Systems, Algorithms, Object-Oriented Programming, Machine and Deep Learning, Mobile Programming",
        "aw.1": "TEKNOFEST finalist and TÜME Foundation ₺1,000,000 award (AgroByte Aqua)",
        "aw.2": "TEKNOFEST finalist (AgroByte Vision)",
        "aw.3": "Google AI & Technology Academy scholar — one of 2,000 selected from about 25,000 applicants",
        "cert.title": "Certificates",
        "cert.java": "Java Programming <span>BTK Akademi</span>",
        "cert.react": "Web Development with React <span>Üretken Akademi</span>",
        "cert.web": "Web Application Development Training <span>Google AI &amp; Technology Academy</span>",
        "cert.miuul": "AI Summer Camp, Python for Data Science <span>Miuul</span>",

        "contact.title": "Let's work together",
        "contact.lead": "I'm open to software, backend, web and AI roles. Email is the fastest way to reach me.",
        "footer.top": "Back to top"
    };

    const meta = {
        tr: {
            title: "Emin Osman Atcı — Bilgisayar Mühendisi",
            desc: "Emin Osman Atcı — Web uygulamaları, backend sistemleri ve görüntü işleme projeleri geliştiren Bilgisayar Mühendisi.",
            toggle: "EN",
            toggleLabel: "Switch to English"
        },
        en: {
            title: "Emin Osman Atcı — Computer Engineer",
            desc: "Emin Osman Atcı — Computer Engineer building web applications, backend systems and computer vision projects.",
            toggle: "TR",
            toggleLabel: "Türkçeye geç"
        }
    };

    /* Remember the Turkish originals so we can switch back */
    const textNodes = document.querySelectorAll("[data-i18n]");
    const htmlNodes = document.querySelectorAll("[data-i18n-html]");
    const altNodes = document.querySelectorAll("[data-i18n-alt]");
    textNodes.forEach((el) => { el.dataset.tr = el.textContent.trim(); });
    htmlNodes.forEach((el) => { el.dataset.tr = el.innerHTML.trim(); });
    altNodes.forEach((el) => { el.dataset.trAlt = el.getAttribute("alt"); });

    const toggle = document.getElementById("languageToggle");
    let lang = "tr";
    try { lang = localStorage.getItem("portfolioLanguage") || "tr"; } catch (e) { /* storage unavailable */ }

    function setLanguage(next) {
        lang = next === "en" ? "en" : "tr";
        const isEn = lang === "en";

        textNodes.forEach((el) => {
            const key = el.dataset.i18n;
            el.textContent = isEn && en[key] ? en[key] : el.dataset.tr;
        });
        htmlNodes.forEach((el) => {
            const key = el.dataset.i18nHtml;
            el.innerHTML = isEn && en[key] ? en[key] : el.dataset.tr;
        });
        altNodes.forEach((el) => {
            const key = el.dataset.i18nAlt;
            el.setAttribute("alt", isEn && en[key] ? en[key] : el.dataset.trAlt);
        });

        document.documentElement.lang = lang;
        document.title = meta[lang].title;
        const d = document.querySelector('meta[name="description"]');
        if (d) d.setAttribute("content", meta[lang].desc);
        if (toggle) {
            toggle.textContent = meta[lang].toggle;
            toggle.setAttribute("aria-label", meta[lang].toggleLabel);
        }
        try { localStorage.setItem("portfolioLanguage", lang); } catch (e) { /* storage unavailable */ }
    }

    if (toggle) toggle.addEventListener("click", () => setLanguage(lang === "en" ? "tr" : "en"));
    setLanguage(lang);


    /* ---------- Mobile navigation ---------- */

    const navToggle = document.getElementById("navToggle");
    const mobileNav = document.getElementById("mobileNav");

    function closeNav() {
        if (!navToggle || !mobileNav) return;
        mobileNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
    }

    if (navToggle && mobileNav) {
        navToggle.addEventListener("click", () => {
            const open = mobileNav.classList.toggle("is-open");
            navToggle.setAttribute("aria-expanded", String(open));
        });
        mobileNav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));
        window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeNav(); });
        window.addEventListener("resize", () => { if (window.innerWidth > 900) closeNav(); });
    }


    /* ---------- Header border + active section ---------- */

    const header = document.getElementById("siteHeader");
    const links = document.querySelectorAll(".main-nav a");
    const sections = [...links]
        .map((a) => document.querySelector(a.getAttribute("href")))
        .filter(Boolean);

    function onScroll() {
        if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);

        let current = null;
        sections.forEach((s) => {
            if (s.getBoundingClientRect().top <= 120) current = s.id;
        });
        links.forEach((a) => {
            a.classList.toggle("is-active", a.getAttribute("href") === "#" + current);
        });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();


    /* ---------- Year ---------- */

    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
});
