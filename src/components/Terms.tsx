import { useTranslation } from "react-i18next";

import { IAllTranslations } from "../interfaces";

import termsLine from "../images/line.svg";
import firstDotline from "../images/first_article_dot-line.svg";
import secondDotline from "../images/second_article_dot-line.svg";

import styles from "./terms.module.css";

export const termsTranslations: IAllTranslations = {
  en: {
    "Title": "Terms and conditions",
    "Term0": "",
    "Term1": "",
    "Term2": "",
    "Term3": "",
    "Term4": "",
    "Term5": "",
    "Term6": "",
  },
  ru: {
    "Title": "Условия работы",
    "Term0": "Моя ставка от 30$/час 💵",
    "Term1": "Работаю без тайм трэкинга, с оплатой за результат ⏳",
    "Term2": "Любой online meeting оплачивается по двойной ставке (у меня проблемы с режимом сна и я не могу ради одного созвона не спать или переносить свой сон или приём пищи) 🥴",
    "Term3": "Оплата криптовалютой: BTC, USDT",
    "Term4": "По возможности не официально. Без всяких оформлений.",
    "Term5": "В случае оформления через Российское ИП, Вы будете оплачивать мои налоги сами",
    "Term6": "Если у Вас нет Технического Задания, то я составлю его сам, но эти часы будут входить в стоимость моей работы",
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
        {Array.from({ length: 6 }).map((_, idx) => (
          <li className={styles.term}>{t(`Term${idx}`)}</li>
        ))}
      </ul>
    </section>
  );
};

export default Terms;
