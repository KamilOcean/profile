import "./Features.css";
import logoLF from "../images/love_frontend_logo.png";

export default function Features() {
  return (
    <section className="features">
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
          for my previous client. I also interview users to check hypotesis and
          collect UX feedbacks about products.
        </div>
        <img src="/cjm.jpg" alt="my CJM" />
      </div>
    </section>
  );
}
