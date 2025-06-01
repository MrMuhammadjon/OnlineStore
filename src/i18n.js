import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationUz from "./i18n/uz.json"
import translationRu from "./i18n/en.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uz: {
        translation: translationUz
      },
      en: {
        translation: translationRu
      }
    },
    lng: 'uz', // boshlang‘ich til
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false
    }
  });


export default i18n