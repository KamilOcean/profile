import Slider from "react-slick";
import { useTranslation } from "react-i18next";

import styles from "./Testimonials.module.css";
import { IAllTranslations, ITestimonial } from "../interfaces";

export const testimonialsTranslations: IAllTranslations = {
  en: {
    "Title": "Testimonials",
    "name0": "Kate Kornuska",
    "text0": `Kamil has been developing several web projects.
     As a developer, he is collected, disciplined and results-oriented. Easily copes with complex tasks, finds a common language with clients and the team. Professional, open in communication, and prone to rapid assimilation of new technologies.
     Working in a team with such a developer is comfortable.`,
    "name1": "Max Chagin",
    "text1": "Kamil has worked at RG.RU as a senior front-end developer. He thinks big and has awesome soft skills. That's why he often solves many business tasks and always participates in all stakeholders' meetings. He studies Product Management. ",
  },
  ru: {
    "Title": "Отзывы",
    "name0": "Катерина Корунская",
    "text0": `Камиль занимался разработкой нескольких веб проектов.
    Как разработчик, собран, дисциплинирован и ориентирован на результат. Легко справляется со сложными задачами, находит общий язык с клиентами и командой. Профессионален, открыт в коммуникации, и склонен к быстрому усвоению новых технологий.
    Работать в команде с таким разработчиком комфортно.`,
    "name1": "Максим Чагин",
    "text1": "Камиль работал в RG.RU старшим фронтенд-разработчиком. Он мыслит масштабно и обладает потрясающими \"Soft skills\". Именно поэтому он часто решает множество бизнес-задач и всегда участвует во всех встречах заинтересованных сторон. Он изучает управление продуктами.",
  }
};

export default function Testimonials(): React.ReactElement {
  const { t } = useTranslation('testimonials');

  let slidesOnScreen: number = 1;

  if (window.innerWidth > 640) {
    slidesOnScreen = 2;
  }

  const settings: JQuerySlickOptions = {
    dots: true,
    infinite: true,
    pauseOnHover: true,
    slidesToShow: slidesOnScreen,
    slidesToScroll: slidesOnScreen
  };

  const testimonials: ITestimonial[] = [
    {
      photoUrl: '/kate.jpg',
    },
    {
      photoUrl: '/max.jpeg',
    }
  ];

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{t("Title")}</h2>
      <Slider {...settings} className={styles.slider}>
        {testimonials.map((article: ITestimonial, idx: number) => (
          <a className={styles.article} href={article.contactUrl || '#'} key={idx}>
            <img className={styles.image} src={"/profile" + article.photoUrl} alt="" />
            <div className={styles.name}>{t(`name${idx}`)}</div>
            <span className={styles.text}>{t(`text${idx}`)}</span>
          </a>
        ))}
      </Slider>
    </div>
  )
}
