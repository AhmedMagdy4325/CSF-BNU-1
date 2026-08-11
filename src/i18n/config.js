import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import arTranslation from "../locales/ar/translation.json";
import enTranslation from "../locales/en/translation.json";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ar: { translation: arTranslation },
            en: { translation: enTranslation },
        },
        fallbackLng: "ar",
        supportedLngs: ["ar", "en"],
        interpolation: { escapeValue: false },
    });

const updateDirection = lng => {
    const dir = lng === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = lng;
};

i18n.on("languageChanged", updateDirection);
updateDirection(i18n.language || "ar");

export default i18n;
