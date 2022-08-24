import Slider from "react-slick";
import './Videos.css';

export default function Videos({videosTitle}) {
  const videos = [
    "https://www.youtube.com/embed/JCaGGw-WWks",
    "https://www.youtube.com/embed/pBRbQ4MfkAc",
    "https://www.youtube.com/embed/ykJcySti-ms",
  ];

  const settings = {
    dots: true,
    // infinite: true,
    // autoplay: true,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="videos">
      <h2 className="videos__title">{videosTitle}</h2>
      <Slider {...settings} className="videos__slider">
        {videos.map((url) => {
          return (
            <div>
              <iframe
                width="905"
                height="510"
                src={url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
