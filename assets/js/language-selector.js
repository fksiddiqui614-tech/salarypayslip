/* =========================================================
   SALARYPAYSLIP
   GLOBAL LANGUAGE SELECTOR
   PHASE 1 — ON-PAGE TRANSLATION
   ========================================================= */

(function () {

    "use strict";

    /*
     * GTranslate configuration
     *
     * English remains the original/master language.
     * Browser auto-detection is intentionally disabled.
     */

    window.gtranslateSettings = {
        default_language: "en",

        native_language_names: true,

        detect_browser_language: false,

        languages: [
            "en",
            "es",
            "fr",
            "de",
            "pt",
            "it",
            "ar",
            "hi",
            "zh-CN",
            "ja"
        ],

        wrapper_selector: ".gtranslate_wrapper"
    };


    /* =====================================================
       CREATE WIDGET CONTAINER
    ===================================================== */

    function createLanguageWrapper() {

        /*
         * If a page already contains a language wrapper
         * (for example, an article hero), use that wrapper.
         */

        if (
            document.querySelector(".gtranslate_wrapper")
        ) {
            return;
        }


        const wrapper = document.createElement("div");

        wrapper.className = "gtranslate_wrapper";

        wrapper.setAttribute(
            "aria-label",
            "Language selector"
        );


        /*
         * Homepage and pages with the standard navbar:
         * place selector inside the navbar.
         */

        const nav = document.querySelector(".navbar nav");

        if (nav) {

            nav.appendChild(wrapper);

        }

        /*
         * IMPORTANT:
         *
         * Do NOT insert the selector into document.body
         * as a fallback.
         *
         * Article pages already contain their own
         * .gtranslate_wrapper inside the hero.
         */
    }


    /* =====================================================
       LOAD GTRANSLATE WIDGET
    ===================================================== */

    function loadGTranslate() {

        if (
            document.querySelector(
                'script[src*="cdn.gtranslate.net/widgets/latest/dropdown.js"]'
            )
        ) {
            return;
        }


        const script = document.createElement("script");

        script.src =
            "https://cdn.gtranslate.net/widgets/latest/dropdown.js";

        script.defer = true;

        script.async = true;

        document.head.appendChild(script);
    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    function initializeLanguageSelector() {

        /*
         * First check for an existing wrapper.
         *
         * If none exists, create one in the standard
         * homepage navbar.
         */

        createLanguageWrapper();

        /*
         * Then load GTranslate.
         */

        loadGTranslate();
    }


    /* =====================================================
       DOM READY
    ===================================================== */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initializeLanguageSelector
        );

    } else {

        initializeLanguageSelector();

    }

})();
