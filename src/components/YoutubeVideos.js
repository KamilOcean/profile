import Slider from "react-slick";

export default function YoutubeVideos() {
    const videos = [
        'https://www.youtube.com/embed/JCaGGw-WWks',
        'https://www.youtube.com/embed/pBRbQ4MfkAc',
        'https://www.youtube.com/embed/ykJcySti-ms'
      ];

    const settings = {
        dots: true,
        infinite: false,
        autoplay: true,
        pauseOnHover: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
    <Slider {...settings}>
    {videos.map(url => {
      return (
        <div>
         <iframe width="560" height="315" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      )
    })}
    </Slider>
    )
}