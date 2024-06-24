import { Slide } from "../../components/slide/Slide";
import shaders from "../../assets/videos/shaders.mp4";
import shaders1 from "../../assets/images/shaders/shaders-1.jpeg";
import shaders2 from "../../assets/images/shaders/shaders-2.jpeg";
import shaders3 from "../../assets/images/shaders/shaders-3.jpeg";
import { MediaSlider } from "../../components/media-slider/MediaSlider";
import "./shaders.scss";

const bookOfShadersSource = {
  name: "Book of Shaders",
  href: "https://thebookofshaders.com/01/",
};

export function Shaders() {
  return (
    <Slide className="shaders">
      <h1>Shaders</h1>
      <MediaSlider>
        <MediaSlider.Video videoSrc={shaders} />
        <MediaSlider.Image imageSrc={shaders1} source={bookOfShadersSource} />
        <MediaSlider.Image imageSrc={shaders2} source={bookOfShadersSource} />
        <MediaSlider.Image imageSrc={shaders3} source={bookOfShadersSource} />
      </MediaSlider>
    </Slide>
  );
}
