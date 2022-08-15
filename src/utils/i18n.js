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
          "Terms": "Terms and conditions",
          "Terms1": "Моя ставка от 30$/час",
          "Terms2": "Работаю без тайм трэкинга, с оплатой за результат с примерным дедлайном",
          "Terms3": "Любой online meeting оплачивается по двойной ставке (у меня проблемы с режимом сна и я не могу ради одного созвона не спать или переносить свой сон или приём пищи)",
          "Terms4": "Оплата криптовалютой. BTC, USDT",
          "Terms5": "По возможности не официально. Без всяких оформлений.",
          "Terms6": "В случае оформления через Российское ИП, вы будете оплачивать мои налоги сами",
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
          "Terms": "Условия работы",
          "Terms1": "Моя ставка от 30$/час 💵",
          "Terms2": "Работаю без тайм трэкинга, с оплатой за результат ⏳",
          "Terms3": "Любой online meeting оплачивается по двойной ставке (у меня проблемы с режимом сна и я не могу ради одного созвона не спать или переносить свой сон или приём пищи) 🥴",
          "Terms4": "Оплата криптовалютой: BTC, USDT",
          "Terms5": "По возможности не официально. Без всяких оформлений.",
          "Terms6": "В случае оформления через Российское ИП, Вы будете оплачивать мои налоги сами",
          "Terms7": "Если у Вас нет Технического Задания, то я составлю его сам, но эти часы будут входить в стоимость моей работы",
          "Commercial work experience": "Коммерческий опыт разработки более 8 лет",
          "Technical background": "Технический бэкграунд",
          "Frameworks": "Я работаю со всеми популярными фрэймворками",
          "Technical bacgkround description": "Работаю с разными инструментами как на фронте, так и на бэке. SASS, LESS, SCSS, Tailwind, Bootstrap, Material. На бэке приемущественно работал с NodeJS и Go. GraphQL, REST API. MongoDB, Postgreesql, MySQL. Я постоянно делаю тесты для проектов с помощью Cypress (e2e) и Jest (unit test). Я также настраиваю скриншот тестирование. Работал с разными CMS, такими как, WordPress, Shopify и Strapi. Поработал с QuillJS и RactiveJS",
          "Articles": "Мои статьи",
          "My public speech": "Моё публичное выступление",
          "My youtube videos": "Мои YouTube видео",
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
