import "./App.css";
import i18n from "./utils/i18n";
import { useTranslation } from "react-i18next";
import Frameworks from "./components/Frameworks";
import Videos from "./components/Videos";
import LangSwitcher from "./components/LangSwitcher";
import Main from "./components/Main";
import Articles from "./components/Articles";
import Features from "./components/Features";
import termsLine from "./images/line.svg";
import firstDotine from "./images/first_article_dot-line.svg";
import secondDotine from "./images/second_article_dot-line.svg";
import Footer from "./components/Footer";
import Speech from "./components/Speech";

const jobs = [
  {
    title: "F&B",
    year: "2014",
    position: "Front-end developer at small startup",
    color: "var(--4color)",
  },
  {
    title: "RG.RU",
    year: "2015",
    position: "Lead front-end developer",
    color: "var(--1color)",
  },
  {
    title: "Fornex Hosting",
    year: "2021",
    position: "Lead front-end developer",
    color: "var(--2color)",
  },
  {
    title: "Dream Team Mobile",
    year: "2022 - now",
    position: "Fullstack developer",
    color: "var(--3color)",
  },
];

const Job = (props) => (
  <>
    <div
      className={`line line_${props.idx}`}
      style={{ backgroundColor: props.color }}
    >
      {props.year}
    </div>
    <div
      className={`job job_${props.idx}`}
      style={{ borderColor: props.color }}
    >
      <div className="job__title" style={{ color: props.color }}>
        {props.title}
      </div>
      <p className="job__position">{props.position}</p>
    </div>
  </>
);

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
if (params?.lang) {
  i18n.changeLanguage(params.lang);
}

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="header">
        <LangSwitcher i18n={i18n} />
      </header>
      <Main mainTitle={t("Kamil Ocean is")} />
      <section className="terms-block">
        <div className="terms__title-block">
          <h2 className="terms__title">{t("Terms")}</h2>
          <img className="terms__line" src={termsLine} alt="terms_line" />
          <img
            className="terms__dotline_type_left"
            src={firstDotine}
            alt="terms__first-dotline"
          />
          <img
            className="terms__dotline_type_right"
            src={secondDotine}
            alt="terms__second-dotline"
          />
        </div>
        <ul className="terms__items">
          <li className="terms__item">{t("Terms1")}</li>
          <li className="terms__item">{t("Terms2")}</li>
          <li className="terms__item">{t("Terms3")}</li>
          <li className="terms__item">{t("Terms4")}</li>
          <li className="terms__item">{t("Terms5")}</li>
          <li className="terms__item">{t("Terms6")}</li>
          <li className="terms__item">{t("Terms7")}</li>
        </ul>
      </section>
      <h2 className="job__section-title">{t("Commercial work experience")}</h2>
      <section className="jobs">
        {jobs.map((job, idx) => (
          <Job
            key={idx}
            idx={idx}
            title={job.title}
            year={job.year}
            position={job.position}
            color={job.color}
          />
        ))}
      </section>
      <Frameworks
        sectionTitle={t("Technical background")}
        subsectionTitle={t("Frameworks")}
        description={t("Technical background description")}
      />
      <Articles articlesTitle={t("Articles")} />
      <Speech speechTitle={t("My public speech")} />
      <Videos videosTitle={t("My youtube videos")} />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
