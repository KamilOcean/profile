import Slider from "react-slick";
import { useTranslation } from "react-i18next";

import styles from "./Articles.module.css";
import { IAllTranslations, IArticle } from "../interfaces";

export const articlesTranslations: IAllTranslations = {
  en: {
    "Title": "My articles"
  },
  ru: {
    "Title": "Мои статьи"
  }
};

export default function Articles(): React.ReactElement {
  const { t } = useTranslation('articles');

  let slidesOnScreen: number = 1;

  if (window.innerWidth > 640) {
    slidesOnScreen = 2;
  }

  if (window.innerWidth > 1279) {
    slidesOnScreen = 3;
  }

  const settings: JQuerySlickOptions = {
    dots: true,
    // infinite: true,
    // autoplay: true,
    pauseOnHover: true,
    // speed: 500,
    slidesToShow: slidesOnScreen,
    slidesToScroll: slidesOnScreen
  };

  const articles: IArticle[] = [
    {
      title: 'How to use Composition API instead of Vuex in Vue3 and also in Vue2',
      url: 'https://dev.to/kamilocean/how-to-use-composition-api-instead-of-vuex-in-vue3-and-also-in-vue2-a0f',
      imgUrl: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jpall6wqhe20jo7xq5th.jpeg'
    },
    {
      title: 'What a media placeholder is and how to implement it?',
      url: 'https://dev.to/kamilocean/what-a-media-placeholder-is-and-how-to-implement-it-18pj',
      imgUrl: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o9mcq30rqnd2tf1n6e22.jpg'
    },
    {
      title: 'How to remember the ways of rounding a number to an integer?',
      url: 'https://dev.to/kamilocean/how-to-remember-the-ways-of-rounding-a-number-to-an-integer-hn3',
      imgUrl: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sf8tlr9b1kz217cetsng.jpg'
    },
    {
      title: 'Какой тип числа у Number в JS?',
      url: 'https://habr.com/ru/post/525330/',
      imgUrl: 'https://habrastorage.org/r/w780q1/getpro/habr/upload_files/633/a1b/93f/633a1b93f0b6a413e59ea4cd832b393f.jpg'
    },
    {
      title: 'How to create your own plugin and how it works under the hood',
      url: 'https://kamilocean.medium.com/how-to-create-your-own-plugin-and-how-it-works-under-the-hood-99e62604059f',
      imgUrl: 'https://miro.medium.com/max/1400/1*0IqKUzUP9QqZkY7Jxsy9fw.png'
    }
  ];

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{t("Title")}</h2>
      <Slider {...settings} className={styles.slider}>
        {articles.map((article: IArticle, idx: number) => (
          <a className={styles.article} href={article.url} key={idx}>
            <img className={styles.image} src={article.imgUrl} alt="" />
            <strong className={styles.articleTitle}>{article.title}</strong>
          </a>
        ))}
      </Slider>
    </div>
  )
}
