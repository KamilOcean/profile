import "./Footer.css";
import Contacts from "./Contacts";

export default function Footer() {
    return(
        <footer className="footer">
            <div className="footer__background"></div>
            <p className="footer__text">Свяжитесь со мной любым удобным для Вас способом и мы обсудим подробнее ваш проект</p>
            <Contacts />
        </footer>

    )
}