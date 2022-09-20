import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { termsTranslations } from "../components/Terms.tsx";
import { videosTranslations } from "../components/Videos.tsx";
import { jumbotronTranslations } from "../components/Jumbotron.tsx";
import { footerTranslations } from "../components/Footer.tsx";
import { articlesTranslations } from "../components/Articles.tsx";
import { toolsTranslations } from "../components/Tools.tsx";
import { featuresTranslations } from "../components/Features.tsx";
import { worksTranslations } from "../components/Works.tsx";
import { testimonialsTranslations } from "../components/Testimonials.tsx";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        jumbotron: jumbotronTranslations.en,
        terms: termsTranslations.en,
        videos: videosTranslations.en,
        footer: footerTranslations.en,
        articles: articlesTranslations.en,
        tools: toolsTranslations.en,
        features: featuresTranslations.en,
        works: worksTranslations.en,
        testimonials: testimonialsTranslations.en,
        common: {
          "Commercial work experience": "Commercial work experience more than 8 years",
        }
      },
      ru: {
        jumbotron: jumbotronTranslations.ru,
        terms: termsTranslations.ru,
        videos: videosTranslations.ru,
        footer: footerTranslations.ru,
        articles: articlesTranslations.ru,
        tools: toolsTranslations.ru,
        features: featuresTranslations.ru,
        works: worksTranslations.ru,
        testimonials: testimonialsTranslations.ru,
        common: {
          "Commercial work experience": "Коммерческий опыт разработки более 8 лет",
        }
      }
    },
    defaultNS: "common",
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

  export default i18n;
