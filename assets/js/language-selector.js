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
         * Place selector inside the existing navbar.
         */

        const nav = document.querySelector(".navbar nav");

        if (nav) {

            nav.appendChild(wrapper);

        } else {

            /*
             * Fallback for pages that may not use
             * the homepage navbar structure.
             */

            document.body.insertBefore(
                wrapper,
                document.body.firstChild
            );
        }
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

        createLanguageWrapper();

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