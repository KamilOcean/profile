import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Kamil Ocean is": "Kamil Ocean is an experienced web developer (full-stack)",
          "Commercial work experience": "Commercial work experience more than 8 years",
          "Technical background": "Technical background",
          "Frameworks": "I work with all popular frameworks",
          "Bundlers CI and devOps": "",
          "Technical bacgkround description": "I really do tests for my code by Cypress (e2e) and Jest (unit tests). I also set up screenshot testing by Cypress for my projects at work. I worked with many different CMS like WordPress, Shopify and Strapi. I worked with RestAPI and GraphQL",
          "Articles": "My articles",
          "My public speech": "My public speech",
          "My youtube videos": "My YouTube videos",
        }
      },
      ru: {
        translation: {
          "Kamil Ocean is": "Камиль Океан - профессиональный web разработчик (full-stack)",
          "Commercial work experience": "Коммерческий опыт разработки более 8 лет",
          "Technical background": "Технический бэкграунд",
          "Frameworks": "Я работаю со всеми популярными фрэймворками",
          "Bundlers CI and devOps": "Бандлеры и devOps инструменты",
          "Technical bacgkround description": "Я постоянно делаю тесты для проектов с помощью Cypress (e2e) и Jest (unit test). Я также настраиваю скриншот тестирование. Работал с разными CMS, такими как, WordPress, Shopify и Strapi. Работаю с RestAPI и GraphQL. Поработал с QuillJS, RactiveJS. Разбираюсь в NodeJS, MongoDB, Postgrees, MySQL, PHP",
          "Articles": "Мои статьи",
          "My public speech": "Моё публичное выступление",
          "My youtube videos": "Мои YouTube видео",
        }
      },
      es: {
        translation: {
          "Kamil Ocean is": "",
          "Commercial work experience": "",
          "Technical background": "",
          "Frameworks": "",
          "Bundlers CI and devOps": "",
          "Technical bacgkround description": "",
          "Articles": "",
          "My public speech": "",
          "My youtube videos": "",
        }
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

  export default i18n;