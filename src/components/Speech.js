import "./Speech.css";

export default function PublicSpeech({ speechTitle }) {
  return (
    <section className="speech">
      <h2 className="speech__title">{speechTitle}</h2>
      <div className="iframeVideo">
        <iframe
          width="905"
          height="510"
          src="https://www.youtube.com/embed/YKjCysJKqxc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
}
