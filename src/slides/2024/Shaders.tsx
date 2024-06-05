import { Slide } from "../../components/slide/Slide";
import shaders from "../../assets/videos/shaders.mp4";
import shaders1 from "../../assets/images/shaders/shaders-1.jpeg";
import shaders2 from "../../assets/images/shaders/shaders-2.jpeg";
import shaders3 from "../../assets/images/shaders/shaders-3.jpeg";
import "./shaders.scss";

const bookOfShadersSource = {
  name: "Book of Shaders",
  href: "https://thebookofshaders.com/01/",
};

export function Shaders() {
  return (
    <Slide className="shaders">
      <h1>Shaders</h1>
      <div className="shaders__slide-container">
        <VideoSlide videoSrc={shaders} />
        <ImageSlide imageSrc={shaders1} source={bookOfShadersSource} />
        <ImageSlide imageSrc={shaders2} source={bookOfShadersSource} />
        <ImageSlide imageSrc={shaders3} source={bookOfShadersSource} />
      </div>
    </Slide>
  );
}

type VideoSlideProps = {
  videoSrc: string;
};

function VideoSlide({ videoSrc }: VideoSlideProps) {
  return (
    <div className="shaders__slide">
      <video src={videoSrc} autoPlay loop muted />
    </div>
  );
}

type ImageSlideProps = {
  imageSrc: string;
  source?: {
    name: string;
    href: string;
  };
};
function ImageSlide({ imageSrc, source }: ImageSlideProps) {
  return (
    <div className="shaders__slide shaders__slide--image">
      <div className="shaders__image-container">
        <img src={imageSrc} alt="" />
      </div>
      {source && (
        <div className="shaders__source">
          Source: <a href={source.href}>{source.name}</a>
        </div>
      )}
    </div>
  );
}
