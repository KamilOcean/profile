import "./Articles.css";
import Slider from "react-slick";

export default function Articles({articlesTitle}) {

    const settings = {
        dots: true,
        // infinite: true,
        // autoplay: true,
        pauseOnHover: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

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

    return(
        <div className="articles-block">
          <h2 className="articles__title">{articlesTitle}</h2>
            <Slider {...settings} className="articles">
              {articles.map(article => {
                return (
                  <a className="article" href={article.url}>
                    <img className="article__image" src={article.imgUrl} alt={article.title} />
                    <strong className="article__title">{article.title}</strong>
                  </a>
                )
              })}
            </Slider>
        </div>
    )
}