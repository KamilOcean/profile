import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { IAllTranslations } from "../interfaces";

import styles from './videos.module.css';


export const videosTranslations: IAllTranslations = {
  en: {
    "Title": "My public speech and YouTube videos",
  },
  ru: {
    "Title": "Моё публичное выступление и YouTube видео",
  }
}

export default function Videos(): React.ReactElement {
  const { t } = useTranslation('videos');
  const videosUrl: string[] = [
    "https://www.youtube.com/embed/YKjCysJKqxc",
    "https://www.youtube.com/embed/JCaGGw-WWks",
    "https://www.youtube.com/embed/pBRbQ4MfkAc",
    "https://www.youtube.com/embed/ykJcySti-ms",
  ];

  const settings: JQuerySlickOptions = {
    dots: true,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
  };

  if (window.innerWidth > 640) {
    settings.arrows = true;
  }

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{t("Title")}</h2>
      <Slider {...settings} className={styles.slider}>
        {videosUrl.map((url: string) => {
          return (
            <div>
              <iframe
                src={url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
