export default function PublicSpeech({speechTitle}) {
  return (
    <div className="speech">
      <h2>{speechTitle}</h2>
      <div className="iframeVideo">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YKjCysJKqxc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
