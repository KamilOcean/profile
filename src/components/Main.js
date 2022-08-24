import "./Main.css";
import Contacts from "./Contacts";
import mainphoto from "../images/mainphoto.png";
import topImage from "../images/border_top.png";
import bottomImage from "../images/border_bottom.png";

export default function Main({mainTitle}) {
  return (
    <div className="main-block">
    <section className="main">
      <img className="main__photo" src={mainphoto} alt="KamilOcean" />
      <div className="main__info">
        <h1 className="main__title">{mainTitle}</h1>
        <Contacts />
      </div>
      <img className="main__background-top" src={topImage} alt="border_top" />
      <img
        className="main__background-bottom"
        src={bottomImage}
        alt="border_bottom"
      />
    </section>
        <section className="main-mobile">
        <h1 className="main__title">{mainTitle}</h1>
        <img className="main__photo" src={mainphoto} alt="KamilOcean" />
          <Contacts />
      </section>
      </div>
  );
}
