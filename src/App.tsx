import "./App.css";
import i18n from "./utils/i18n.ts";
import Tools from "./components/Tools.tsx";
import Videos from "./components/Videos.tsx";
import Jumbotron from "./components/Jumbotron.tsx";
import Articles from "./components/Articles.tsx";
import Features from "./components/Features.tsx";
import Footer from "./components/Footer.tsx";
import Terms from './components/Terms.tsx';
import Jobs from './components/Jobs.tsx';
import Works from './components/Works.tsx';
import Testimonials from './components/Testimonials.tsx';

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
if (params?.lang) {
  i18n.changeLanguage(params.lang);
}

function App() {
  return (
    <div className="App">
      {/* <header className="header">
        <LangSwitcher i18n={i18n} />
      </header> */}
      <Jumbotron />
      <Terms />
      <Works />
      <Testimonials />
      <Jobs />
      <Tools />
      <Articles />
      <Videos />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
