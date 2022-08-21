import styles from "./Contacts.module.css";
import telegramIcon from "../images/telegram_icon.svg";
import emailIcon from "../images/email_icon.svg";

const Contacts = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contact__box}>
        <img className={styles.contact__icon} src={telegramIcon} alt="telegram_icon" />
        <a className={styles.contact} href="https://t.me/kamil_ocean">
          Telegram: @Kamil_Ocean
        </a>
      </div>
      <div className={styles.contact__box}>
      <img className={styles.contact__icon} src={emailIcon} alt="telegram_icon" />
        <a className={styles.contact} href="mailto:kamil.ocean@gmail.com">
          kamil.ocean@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contacts;
