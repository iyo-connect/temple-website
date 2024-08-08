import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import enLang from "../assets/locales/en/translation.json";
import taLang from "../assets/locales/ta/translation.json";
import hiLang from "../assets/locales/hi/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: enLang,
      },
      ta: {
        translation: taLang,
      },
      hi: {
        translation: hiLang,
      },
    },
  });

export default i18n;
