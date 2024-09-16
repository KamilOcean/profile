import styles from "./Contacts.module.css";
import telegramIcon from "../images/telegram_icon.svg";
import emailIcon from "../images/email_icon.svg";

const Contacts: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contact__box}>
        <img className={styles.contact__icon} src={telegramIcon} alt="logo of telegram" />
        <a className={styles.contact} href="https://t.me/KamilOcean">
          Telegram: @KamilOcean
        </a>
      </div>
      <div className={styles.contact__box}>
      <img className={styles.contact__icon} src={emailIcon} alt="logo of email" />
        <a className={styles.contact} href="mailto:kamil.ocean@gmail.com">
        kamil.ocean@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contacts;
