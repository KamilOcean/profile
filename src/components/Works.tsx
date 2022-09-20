import Slider from "react-slick";
import { useTranslation } from "react-i18next";

import styles from "./Works.module.css";
import { IAllTranslations, IWork } from "../interfaces";

export const worksTranslations: IAllTranslations = {
  en: {
    "Title": "My works",
    "work0Title": "E-commerce shop for RG.RU. Vue, Vuex. I made the whole frontend of this project.",
    "work1Title": "Ads mobile project for Mexican National Team. Preact.",
    "work2Title": "Fornex.com - I worked as lead Frontend developer in Team.",
    "work3Title": "God Literatury - special project for RG.RU",
    "work4Title": "Life Style - special project for RG.RU",
    "work5Title": "Malta. Ads project for RG.RU",
    "work6Title": "East Economic Forum - special project for RG.RU",
    "work7Title": "Property - special project for RG.RU",
    "work8Title": "Bank of Questions - special project for RG.RU",
    "work9Title": "Admin panel for editors in RG.RU. I worked in our team and did many tasks with React, Redux, GraphQL and QuillJS (private project)",
    "work10Title": "CovidQuestions - special project for RG.RU"
  },
  ru: {
    "Title": "Мои работы",
    "work0Title": "Интернет магазин для RG.RU. Vue, Vuex. Я сделал всю frontend часть проекта.",
    "work1Title": "Рекламный мобильный проект для Мексиканской Национальной сборной. Preact",
    "work2Title": "Fornex.com - работал в этой компании в качестве lead Frontend developer.",
    "work3Title": "Год литературы - специальный проект для RG.RU",
    "work4Title": "Стиль Жизни - специальный проект для RG.RU",
    "work5Title": "Мальта. Специальный проект для RG.RU",
    "work6Title": "ВЭФ - специальный проект для RG.RU",
    "work7Title": "Квадратный метр - специальный проект для RG.RU",
    "work8Title": "Банк вопросов - специальный проект для RG.RU",
    "work9Title": "Админка для редакции RG.RU. Работал в команде и выполнял много задач на React, Redux, GraphQL и QuillJS (проект нельзя посмотреть)",
    "work10Title": "Банк вопросов - специальный проект для RG.RU"
  }
};

export default function Articles(): React.ReactElement {
  const { t } = useTranslation('works');

  let slidesOnScreen: number = 1;

  if (window.innerWidth > 640) {
    slidesOnScreen = 2;
  }

  if (window.innerWidth > 1279) {
    slidesOnScreen = 3;
  }

  const settings: JQuerySlickOptions = {
    dots: true,
    infinite: true,
    // autoplay: true,
    pauseOnHover: true,
    // speed: 500,
    slidesToShow: slidesOnScreen,
    slidesToScroll: slidesOnScreen
  };

  const works: IWork[] = [
    {
      url: 'https://rg.ru/subs',
      imgUrl: '/subsmag.jpg'
    },
    {
      url: 'https://pwtp.att.com/fmf',
      imgUrl: '/mxnt.jpg'
    },
    {
      url: 'https://fornex.com/en/',
      imgUrl: '/fornex.jpg'
    },
    {
      url: 'https://godliteratury.ru/',
      imgUrl: '/gl.jpg'
    },
    {
      url: 'https://rg.ru/style',
      imgUrl: '/style.jpg'
    },
    {
      url: 'https://rg.ru/malta',
      imgUrl: '/malta.jpg'
    },
    {
      url: 'https://rg.ru/vostokforum2021',
      imgUrl: '/vef.jpg'
    },
    {
      url: 'https://rg.ru/property',
      imgUrl: '/property.jpg'
    },
    {
      url: 'https://rg.ru/bankvoprosov',
      imgUrl: '/bank.jpg'
    },
    {
      imgUrl: ''
    },
    {
      url: 'https://rg.ru/covidquestion',
      imgUrl: '/covid.jpg'
    }
  ];

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{t("Title")}</h2>
      <Slider {...settings} className={styles.slider}>
        {works.map((article: IWork, idx: number) => (
          <a className={styles.article} href={article.url || '#'} key={idx}>
            <img className={styles.image} src={article.imgUrl} alt="" />
            <span className={styles.description}>{t(`work${idx}Title`)}</span>
          </a>
        ))}
      </Slider>
    </div>
  )
}
