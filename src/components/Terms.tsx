import { useTranslation } from "react-i18next";

import { IAllTranslations } from "../interfaces";

import termsLine from "../images/line.svg";
import firstDotline from "../images/first_article_dot-line.svg";
import secondDotline from "../images/second_article_dot-line.svg";

import styles from "./terms.module.css";

export const termsTranslations: IAllTranslations = {
  en: {
    "Title": "How I can help you",
    "Term0": "I will make a web service of any complexity for any purpose",
    "Term1": "I will make a landing page to sell your services",
    "Term2": "I will make an MVP to test your hypotheses without extra effort",
    "Term3": "I will do any technical work on your already finished project",
    "Term4": "I will make for you a Telegram bot",
  },
  ru: {
    "Title": "Чем я могу быть полезен",
    "Term0": "Сделаю web-сервис любой сложности для любых целей",
    "Term1": "Сделаю посадочную страницу для продажи ваших услуг",
    "Term2": "Сделаю MVP для проверки ваших гипотез без лишних трудозатрат",
    "Term3": "Сделаю любые технические работы на Вашем уже готовом проекте",
    "Term4": "Сделаю Вам Telegram бота",
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
        {Array.from({ length: 5 }).map((_, idx) => (
          <li className={styles.term}>{t(`Term${idx}`)}</li>
        ))}
      </ul>
    </section>
  );
};

export default Terms;
