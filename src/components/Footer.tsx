import styles from "./Footer.module.css";
import Contacts from "./Contacts.tsx";
import { useTranslation } from "react-i18next";
import { IAllTranslations } from "../interfaces";

export const footerTranslations: IAllTranslations = {
  en: {
    "Description": "Contact me in any convenient way and we will discuss our cooperation in more detail"
  },
  ru: {
    "Description": "Свяжитесь со мной любым удобным способом и мы обсудим подробнее ваш проект"
  }
}

export default function Footer() {
  const { t } = useTranslation('footer');
  return (
    <footer className={styles.wrapper}>
      <div className={styles.background}></div>
      <p className={styles.text}>{t("Description")}</p>
      <Contacts />
    </footer>

  )
}
