import "./Features.css";
import { useTranslation } from "react-i18next";
import { IAllTranslations } from "../interfaces";

import logoLF from "../images/love_frontend_logo.png";
import arrows from "../images/feat_arrows.svg";

export const featuresTranslations: IAllTranslations = {
  en: {
    "Title": "Technical achievements",
    "I have": "I have this rank on",
    "Scores": "scores",
    "I am an owner": "I am an owner of a popular Russian community",
    "GitHub": `There are open-source projects in my GitHub profile. A few of them are in vue-awesome list: vue-sticker and vue-mods-names`,
    "PM": "I studied web design and Product Management. I can test hypotheses and I made",
    "PM2": "for my previous client. I can also interview users to prove hypotheses and collect feedback on our product",
  },
  ru: {
    "Title": "Технические достижения",
    "I have": "У меня следующий ранг на ",
    "Scores": "очков",
    "I am an owner": "Я являюсь владельцем популярного в России сообщества",
    "GitHub": `В моем профиле на GitHub есть несколько проектов с открытым
    исходным кодом. Некоторые из них находятся в vue-awesome-list:
    vue-sticker, vue-mods-names`,
    "PM": "Я изучал веб-дизайн и управление продуктами. Я могу проверять гипотезы разными способами и сделал",
    "PM2": "для своего предыдущего клиента. Я также провожу глубинные интервью, чтобы проверить гипотезы и собрать отзывы о нашем продукте",
  }
};

export default function Features() {
  const { t } = useTranslation('features');
  return (
    <div className="features-block">
      <section className="features">
        <h2 className="features__title">{t('Title')}</h2>
        <div className="features__content">
          <div className="features__vue-block">
            <p className="features__vue-text">
              {t('GitHub')} <a href="https://github.com/KamilIsmagilov/vue-sticker" target="_blank" rel="noreferrer">vue-sticker</a>, <a href="https://github.com/RGRU/vue-mods-names" target="_blank" rel="noreferrer">vue-mods-names</a>
            </p>
            <img
              className="features__vue-image"
              src="/vue-sticker.gif"
              alt="vue"
            />
          </div>
          <div className="features__stack-code">
            <div className="features__stack">
              <p className="features__stack-title">
                {t('I have')} <a href="https://stackoverflow.com/users/7047488/kamil-ocean">
                  Stack Overflow
                </a>
                : 526 {t('Scores')}
              </p>
              <img
                className="features__stack-image"
                src="/stackoverflow.jpg"
                alt="stackoveflow"
              />
            </div>
            <div className="features__code">
              <p className="features__code-title">{t('I have')} <a href="https://www.codewars.com/users/KamilOcean">CodeWars</a>
              </p>
              <img className="features__code-image"
                src="https://www.codewars.com/users/KamilOcean/badges/large?logo=true"
                alt="codewars"
              />
            </div>
          </div>
          <div className="features__love">
            <img
              className="features__love-logo"
              src={logoLF}
              alt="Love Frontend"
            />
            <p className="features__love-text">
              {t('I am an owner')} <a
                className="features__love-link"
                href="https://vk.com/love_frontend"
              >
                Love Frontend
              </a>
            </p>
          </div>
          <div className="features__design">
            <p className="features__design-text">
              {t("PM")} <a href="https://miro.com/app/board/o9J_lb-0teE=/?share_link_id=262422631335">
                CJM
              </a> {t("PM2")}
            </p>
            <img
              className="features__design-image"
              src="/cjm.jpg"
              alt="my CJM"
            />
          </div>
          <div className="features__photo">
            <img className="features__arrows" src={arrows} alt="arrows" />
          </div>
          {/* <img className="features__photo" src={featPhoto} alt="kamil_feat_photo"/> */}
        </div>
      </section>
      {/* End of dekstop version */}
      {/* Mobile version */}
      <section className="features_mobile_type">
        <h2>Open-source projects on GitHub</h2>
        <div className="horizontal-content">
          <p className="features__vue-text_mobile_type">
            I have a few open-source projects on my{" "}
            <a href="https://github.com/KamilOcean">GitHub profile</a>. Few of
            them are in vue-awesome-list:{" "}
            <a href="https://github.com/KamilOcean/vue-sticker">vue-sticker</a>,{" "}
            <a href="https://github.com/RGRU/vue-mods-names">vue-mods-names</a>.
          </p>
          <img src="/vue-sticker.gif" alt="" />
        </div>
        <h2>Other</h2>
        <div className="horizontal-content reversed">
          <p className="features__love-text_mobile_type">
            I am owner of the popular Russian community{" "}
            <a href="https://vk.com/love_frontend">Love Frontend</a>
          </p>
          <img src={logoLF} alt="Love Frontend" className="lf-logo" />
        </div>
        <div className="horizontal-content">
          <p className="features__code-title_mobile_type">
            I have this rank on <a href="https://www.codewars.com/users/KamilOcean">CodeWars</a>
          </p>
          <img
            className="features__code-image"
            src="https://www.codewars.com/users/KamilOcean/badges/large?logo=true"
            alt="codewars"
          />
        </div>
        <div className="horizontal-content reversed">
          <p className="features__stack-title_mobile_type">
            I have this rank on <a href="https://stackoverflow.com/users/7047488/kamil-ocean">
              Stack Overflow
            </a>
            : 526 scores
          </p>
          <img className="features__stack-image" src="/stackoverflow.jpg" alt="stackoveflow" />
        </div>
        <div className="horizontal-content">
          <div className="right-text">
            I studied web-design and Product Management. I know how to test
            hypotesis and I made{" "}
            <a href="https://miro.com/app/board/o9J_lb-0teE=/?share_link_id=262422631335">
              a CJM
            </a>{" "}
            for my previous client. I also interview users to check hypotesis
            and collect UX feedbacks about products.
          </div>
          <img className="features__design-image" src="/cjm.jpg" alt="my CJM" />
        </div>
      </section>
    </div>
  );
}
