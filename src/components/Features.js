import "./Features.css";
import logoLF from "../images/love_frontend_logo.png";
import arrows from "../images/feat_arrows.svg";

export default function Features() {
  return (
    <div className="features-block">
      <section className="features">
        <h2 className="features__title">Плюшки</h2>
        <div className="features__content">
          <div className="features__vue-block">
            <p className="features__vue-text">
              В моем профиле на GitHub есть несколько проектов с открытым
              исходным кодом. Немногие из них находятся в vue-awesome-list:
              vue-sticker, vue-mods-names.
            </p>
            <img
              className="features__vue-image"
              src="/vue-sticker.gif"
              alt="vue-image"
            />
          </div>
          <div className="features__stack-code">
          <div className="features__stack">
            <p className="features__stack-title">
              {" "}
              I have this rank on{" "}
              <a href="https://stackoverflow.com/users/7047488/kamil-ocean">
                Stack Overflow
              </a>
              : 526 scores
            </p>
            <img
              className="features__stack-image"
              src="/stackoverflow.jpg"
              alt="stackoveflow"
            />
          </div>
          <div className="features__code">
            <p className="features__code-title">I have this rank on{" "}
            <a href="https://www.codewars.com/users/KamilOcean">CodeWars</a>
            </p>
          <img className="features__code-image"
            src="https://www.codewars.com/users/KamilOcean/badges/large?logo=true"
            alt="codewars"
          />
        </div>
          </div>
          <div className="features__love">
            <p className="features__love-text">
              Я являюсь владельцем популярного в России сообщества Love
              Frontend.{" "}
            </p>
            <a
              className="features__love-link"
              href="https://vk.com/love_frontend"
            >
              <img
                className="features__love-logo"
                src={logoLF}
                alt="Love Frontend"
              />
            </a>
          </div>
          <div className="features__design">
            <p className="features__design-text">
              Я изучал веб-дизайн и управление продуктами. Я умею проверять
              гипотезы и сделал{" "}
              <a href="https://miro.com/app/board/o9J_lb-0teE=/?share_link_id=262422631335">
                CJM
              </a>{" "}
              для своего предыдущего клиента. Я также опрашиваю пользователей,
              чтобы проверить гипотезу и собрать отзывы о продуктах.
            </p>
            <img
              className="features__design-image"
              src="/cjm.jpg"
              alt="my CJM"
            />
          </div>
          <div className="features__photo">
            <img className="features__arrows" src={arrows} alt="arrows"/>
          </div>
          {/* <img className="features__photo" src={featPhoto} alt="kamil_feat_photo"/> */}
        </div>
      </section>
      {/* End of dekstop version */}
      {/* Mobile version */}
      <section className="features-mobile">
        <h2>Open-source projects on GitHub</h2>
        <div className="horizontal-content">
          <div>
            I have a few open-source projects on my{" "}
            <a href="https://github.com/KamilOcean">GitHub profile</a>. Few of
            them are in vue-awesome-list:{" "}
            <a href="https://github.com/KamilOcean/vue-sticker">vue-sticker</a>,{" "}
            <a href="https://github.com/RGRU/vue-mods-names">vue-mods-names</a>.
          </div>
          <img src="/vue-sticker.gif" />
        </div>
        <h2>Other</h2>
        <div className="horizontal-content reversed">
          <div>
            I am owner of the popular Russian community{" "}
            <a href="https://vk.com/love_frontend">Love Frontend</a>
          </div>
          <img src={logoLF} alt="Love Frontend" className="lf-logo" />
        </div>
        <div className="horizontal-content">
          <div>
            I have this rank on{" "}
            <a href="https://www.codewars.com/users/KamilOcean">CodeWars</a>
          </div>
          <img
            src="https://www.codewars.com/users/KamilOcean/badges/large?logo=true"
            alt="codewars"
          />
        </div>
        <div className="horizontal-content reversed">
          <div>
            I have this rank on{" "}
            <a href="https://stackoverflow.com/users/7047488/kamil-ocean">
              Stack Overflow
            </a>
            : 526 scores
          </div>
          <img src="/stackoverflow.jpg" alt="stackoveflow" />
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
          <img src="/cjm.jpg" alt="my CJM" />
        </div>
      </section>
    </div>
  );
}
