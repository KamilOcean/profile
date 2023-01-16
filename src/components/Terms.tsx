import { useTranslation } from "react-i18next";

import { IAllTranslations } from "../interfaces";

import termsLine from "../images/line.svg";
import firstDotline from "../images/first_article_dot-line.svg";
import secondDotline from "../images/second_article_dot-line.svg";

import styles from "./terms.module.css";

export const termsTranslations: IAllTranslations = {
  en: {
    "Title": "How I can help you",
    "Term0": "Developing different web applications. With React, Vue or Lit-element.",
    "Term1": "Many optimizations and performance refinements like page speed, TTFB, TTFP, SSR.",
    "Term3": "AMP, PWA, Push Notifications, Firebase, QuillJS, RactiveJS, RXJS, Lodash, Tailwind, SASS, Bootstrap",
    "Term4": "I worked a little as a back-end developer on Ruby on Rails and NodeJS. Plus I made a small utility on GoLang",
    "Term2": "REST, GraphQL (Apollo).",
  },
  ru: {
    "Title": "Чем я могу быть полезен",
    "Term0": "Я разрабатывал разные SPA. С помощью экосистемы React, Vue и Angular. В большинстве случаев это админ панели (поэтому их нет в моём портфолио, это закрытые проекты)",
    "Term1": "В RG.RU я делал множество различных оптимизаций и улучшений производительности, таких как улучшение page speed, TTFB, TTFP и я работал с SSR",
    "Term2": "Я работал с AMP, PWA, Push Notifications, Firebase, QuillJS, RactiveJS, RXJS, Lodash, Tailwind, SASS, Bootstrap",
    "Term3": "Я работал немного как back-end разработчик на Ruby и NodeJS. Также я делал небольшую утилиту на GoLang.",
    "Term4": "Я работал с REST, GraphQL.",
  }
};

const Terms: React.FC = () => {
  const { t } = useTranslation('terms');
  return (
    <section className={styles.wrapper}>
      <div className={styles.titleBlock}>
        <h2 className={styles.title}>{t('Title')}</h2>
        <img className={styles.line} src={termsLine} alt="" />
        <img
          className={styles.dotlineLeft}
          src={firstDotline}
          alt=""
        />
        <img
          className={styles.dotlineRight}
          src={secondDotline}
          alt=""
        />
      </div>
      <ul className={styles.terms}>
        {Array.from({ length: 4 }).map((_, idx) => (
          <li className={styles.term} key={idx}>{t(`Term${idx}`)}</li>
        ))}
      </ul>
    </section>
  );
};

export default Terms;
