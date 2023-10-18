import i18n from "i18next";
import { initReactI18next } from "react-i18next";


i18n.use(initReactI18next).init({
  lng: "vi",
  fallbackLng: "vi",

  interpolation: {
    escapeValue: false,
  },

  resources: {
    en: {
      lang    : require('../../public/transl/en/lang.json'),
      sidebar : require('../../public/transl/en/sidebar.json'),
      header  : require('../../public/transl/en/header.json'),
      footer  : require('../../public/transl/en/footer.json'),
    },
    vi: {
      lang    : require('../../public/transl/vi/lang.json'),
      sidebar : require('../../public/transl/vi/sidebar.json'),
      header  : require('../../public/transl/vi/header.json'),
      footer  : require('../../public/transl/vi/footer.json'),
    },
  },
});

export default i18n;
