import './App.css';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import Slider from "react-slick";
import Frameworks from "./components/Frameworks";
import YoutubeVideos from "./components/YoutubeVideos";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Kamil Ocean is": "Kamil Ocean is an experienced web developer (full-stack)",
          "Commercial work experience": "Commercial work experience more than 8 years",
          "Technical background": "Technical background",
          "Frameworks": "I work with all popular frameworks",
          "Bundlers CI and devOps": "",
          "Technical bacgkround description": "I really do tests for my code by Cypress (e2e) and Jest (unit tests). I also set up screenshot testing by Cypress for my projects at work. I worked with many different CMS like WordPress, Shopify and Strapi. I worked with RestAPI and GraphQL",
          "Articles": "My articles",
          "My public speech": "My public speech",
          "My youtube videos": "My YouTube videos",
        }
      },
      ru: {
        translation: {
          "Kamil Ocean is": "Камиль Океан - профессиональный web разработчик (full-stack)",
          "Commercial work experience": "Коммерческий опыт разработки более 8 лет",
          "Technical background": "Технический бэкграунд",
          "Frameworks": "Я работаю со всеми популярными фрэймворками",
          "Bundlers CI and devOps": "Бандлеры и devOps инструменты",
          "Technical bacgkround description": "Я постоянно делаю тесты для проектов с помощью Cypress (e2e) и Jest (unit test). Я также настраиваю скриншот тестирование. Работал с разными CMS, такими как, WordPress, Shopify и Strapi. Работаю с RestAPI и GraphQL. Поработал с QuillJS, RactiveJS. Разбираюсь в NodeJS, MongoDB, Postgrees, MySQL, PHP",
          "Articles": "Мои статьи",
          "My public speech": "Моё публичное выступление",
          "My youtube videos": "Мои YouTube видео",
        }
      },
      es: {
        translation: {
          "Kamil Ocean is": "",
          "Commercial work experience": "",
          "Technical background": "",
          "Frameworks": "",
          "Bundlers CI and devOps": "",
          "Technical bacgkround description": "",
          "Articles": "",
          "My public speech": "",
          "My youtube videos": "",
        }
      }
    },
    lng: "ru",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

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

const articles = [
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
]

const settings = {
  dots: true,
  infinite: false,
  autoplay: true,
  pauseOnHover: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3
};

const Job = (props) => (
  <>
    <div className={`line line_${props.idx}`} style={{ backgroundColor: props.color }}>
      {props.year}
    </div>
    <div className={`job job_${props.idx}`} style={{ borderColor: props.color }}>
      <div className="job__title" style={{ color: props.color }}>{props.title}</div>
      <div>{props.position}</div>
    </div>
  </>
)

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <h1>{t('Kamil Ocean is')}</h1>
      <img className="main-photo" src="/Kamil.jpg" alt="Kamil Ocean" />
	    <div>
	      <h2>{t('Commercial work experience')}</h2>
	      <div className="jobs">
	        {jobs.map((job, idx) => (
	          <Job key={idx} idx={idx} title={job.title} year={job.year} position={job.position} color={job.color}></Job>
	        ))}
	      </div>
          <Frameworks sectionTitle={t('Technical background')} subsectionTitle={t('Frameworks')} />
        <section>
          <h3>{t('Bundlers CI and devOps')}</h3>
          <div className="framework-list">
            <div className="framework">
              <img src="/bundlers/docker.png" alt="docker" />
              Docker
            </div>
            <div className="framework">
              <img src="/bundlers/webpack.png" alt="webpack" />
              Webpack
            </div>
            <div className="framework">
              <img src="/bundlers/grunt.png" alt="grunt" />
              Grunt
            </div>
            <div className="framework">
              <img src="/bundlers/github.png" alt="github" />
              GitHub
            </div>
            <div className="framework">
              <img src="/bundlers/gitlab.png" alt="gitlab" />
              GitLab
            </div>
          </div>
        </section>
	      <div>
          {t('Technical background description')}
 	      </div>
        <div>
          <h2>{t('Articles')}</h2>
            <Slider {...settings} className="articles">
              {articles.map(article => {
                return (
                  <a className="article" href={article.url}>
                    <img src={article.imgUrl} alt={article.title} />
                    <strong>{article.title}</strong>
                  </a>
                )
              })}
            </Slider>
        </div>
        <div>
          <h2>{t('My public speech')}</h2>
          <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/YKjCysJKqxc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <section>
          <h2>{t('My youtube videos')}</h2>
              <YoutubeVideos />
        </section>
        <ul>
          <li>I have open-source projects on GitHub and there are a few projects that are in Vue-awesome-list</li>
          <li>I have this rank on CodeWars</li>
          <li>I have this rank on StackOverflow</li>
          <li>I am owner of the popular Russian social community Love Frontend</li>
          <li>I studied web-design and Product Management just for myself. I know how to test hypotesis and I made a few CJM for my previous jobs. I also interview users to collect UX feedbacks about products.</li>

        </ul>
        <h2>My commercial experience</h2>
        <ul>
          <li>E-commerce project on Vue</li>
          <li>Many small projects</li>
          <li>Fornex</li>
          <li>DreamTeam mobile</li>
        </ul>
	    </div>
    </div>
  );
}

export default App;
