import { useTranslation } from "react-i18next";
import { IAllTranslations } from "../interfaces";
import styles from "./Jumbotron.module.css";

import Contacts from "./Contacts.tsx";

import mainphoto from "../images/mainphoto.png";
import topImage from "../images/border_top.png";
import bottomImage from "../images/border_bottom.png";

export const jumbotronTranslations: IAllTranslations = {
  en: {
    "Title": "Kamil Ocean is an experienced web developer (full-stack)"
  },
  ru: {
    "Title": "Камиль Океан - профессиональный web разработчик (full-stack)"
  }
}

export default function Jumbotron() {
  const { t } = useTranslation('jumbotron');
  const TitleComponent: React.FC = () => <h1 className={styles.title}>{t("Title")}</h1>;
  const MainPhotoComponent: React.FC = () => <img className={styles.photo} src={mainphoto} alt="Kamil Ocean" />;
  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
        <MainPhotoComponent />
        <div className={styles.info}>
          <TitleComponent />
          <Contacts />
        </div>
        <img className={styles.backgroundTop} src={topImage} alt="" />
        <img
          className={styles.backgroundBottom}
          src={bottomImage}
          alt=""
        />
      </section>
      <section className={styles.mobile}>
        <TitleComponent />
        <MainPhotoComponent />
        <Contacts />
      </section>
    </div>
  );
}
