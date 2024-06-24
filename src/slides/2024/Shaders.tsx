import { Slide } from "../../components/slide/Slide";
import shaders from "../../assets/videos/shaders.mp4";
import shaders1 from "../../assets/images/shaders/shaders-1.jpeg";
import shaders2 from "../../assets/images/shaders/shaders-2.jpeg";
import shaders3 from "../../assets/images/shaders/shaders-3.jpeg";
import { MediaSlider } from "../../components/media-slider/MediaSlider";
import { SupportNotice } from "../../components/support-notice/SupportNotice";
import "./shaders.scss";

const bookOfShaders = {
  name: "Book of Shaders",
  href: "https://thebookofshaders.com/01/",
};

export function Shaders() {
  return (
    <Slide className="shaders">
      <h1>Shaders</h1>

      <MediaSlider>
        <MediaSlider.Video src={shaders} />
        <MediaSlider.Image src={shaders1} reference={bookOfShaders} />
        <MediaSlider.Image src={shaders2} reference={bookOfShaders} />
        <MediaSlider.Image src={shaders3} reference={bookOfShaders} />
      </MediaSlider>

      <SupportNotice percentage={98.17} />
    </Slide>
  );
}
