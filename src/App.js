import './App.css';
import i18n from './utils/i18n';
import { useTranslation } from "react-i18next";
import Frameworks from "./components/Frameworks";
import Videos from "./components/Videos";
import LangSwitcher from "./components/LangSwitcher";
import Contacts from "./components/Contacts";
import Articles from './components/Articles';
import mainphoto from "./images/mainphoto.png";
import Footer from './components/Footer';

const jobs = [
  {
    title: 'F&B',
    year: '2014',
    position: 'Front-end developer at small startup',
    color: 'var(--4color)',
  },
  {
    title: 'RG.RU',
    year: '2015',
    position: 'Lead front-end developer',
    color: 'var(--1color)',
  },
  {
    title: 'Fornex Hosting',
    year: '2021',
    position: 'Lead front-end developer',
    color: 'var(--2color)',
  },
  {
    title: 'Dream Team Mobile',
    year: '2022 - now',
    position: 'Fullstack developer',
    color: 'var(--3color)',
  }
];


const Job = (props) => (
  <>
    <div className={`line line_${props.idx}`} style={{ backgroundColor: props.color }}>
      {props.year}
    </div>
    <div className={`job job_${props.idx}`} style={{ borderColor: props.color }}>
      <div className="job__title" style={{ color: props.color }}>{props.title}</div>
      <p className="job__position">{props.position}</p>
    </div>
  </>
)

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
      <section className="main">
        <img className="main-photo" src={mainphoto} alt="KamilOcean" />
        <div className="main-info">
          <h1 className="main-title">{t('Kamil Ocean is')}</h1>
          <Contacts />
        </div>
      </section>
      <section className="terms-block">
        <h2 className="terms__title">{t('Terms')}</h2>
        <ul className="terms__items">
          <li className="terms__item">{t('Terms1')}</li>
          <li className="terms__item">{t('Terms2')}</li>
          <li className="terms__item">{t('Terms3')}</li>
          <li className="terms__item">{t('Terms4')}</li>
          <li className="terms__item">{t('Terms5')}</li>
          <li className="terms__item">{t('Terms6')}</li>
          <li className="terms__item">{t('Terms7')}</li>
        </ul>
      </section>
	    <div>
	      <h2 className="job__section-title">{t('Commercial work experience')}</h2>
	      <div className="jobs">
	        {jobs.map((job, idx) => (
	          <Job key={idx} idx={idx} title={job.title} year={job.year} position={job.position} color={job.color}></Job>
	        ))}
	      </div>
          <Frameworks sectionTitle={t('Technical background')} subsectionTitle={t('Frameworks')} />
          <Articles articlesTitle={t('Articles')}/>
        <div>
          <h2>{t('My public speech')}</h2>
          <div className="iframeVideo">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/YKjCysJKqxc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <section>
          <h2>{t('My youtube videos')}</h2>
          <Videos />
        </section>
        <section>
          <h2>Open-source projects on GitHub</h2>
          <div className="horizontal-content">
            <div>
              I have a few open-source projects on my <a href="https://github.com/KamilOcean">GitHub profile</a>. Few of them are in vue-awesome-list: <a href="https://github.com/KamilOcean/vue-sticker">vue-sticker</a>, <a href="https://github.com/RGRU/vue-mods-names">vue-mods-names</a>.
            </div>
            <img src="/vue-sticker.gif" />
          </div>
        </section>
        <section>
          <h2>Other</h2>
          <div className="horizontal-content reversed">
            <div>
              I am owner of the popular Russian community <a href="https://vk.com/love_frontend">Love Frontend</a>
            </div>
            <img src="/LF.jpg" alt="Love Frontend" className="lf-logo" />
          </div>
          <div className="horizontal-content">
            <div>
              I have this rank on <a href="https://www.codewars.com/users/KamilOcean">CodeWars
            </a></div>
            <img src="https://www.codewars.com/users/KamilOcean/badges/large?logo=true" alt="codewars" />
          </div>
          <div className="horizontal-content reversed">
            <div>
              I have this rank on <a href="https://stackoverflow.com/users/7047488/kamil-ocean">Stack Overflow</a>: 526 scores
            </div>
            <img src="/stackoverflow.jpg" alt="stackoveflow" />
          </div>
          <div className="horizontal-content">
            <div className="right-text">
              I studied web-design and Product Management. I know how to test hypotesis and I made <a href="https://miro.com/app/board/o9J_lb-0teE=/?share_link_id=262422631335">a CJM</a> for my previous client. I also interview users to check hypotesis and collect UX feedbacks about products.
            </div>
            <img src="/cjm.jpg" alt="my CJM" />
          </div>
        </section>
        <h2>My commercial experience</h2>
        <ul>
          <li>E-commerce project on Vue</li>
          <li>Many small projects</li>
          <li>Fornex</li>
          <li>DreamTeam mobile</li>
        </ul>
	    </div>
      <Footer />
    </div>
  );
}

export default App;
