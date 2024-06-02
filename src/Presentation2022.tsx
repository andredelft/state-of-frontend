import { SlideContainer } from "./components/slide/Slide";
import { Introduction } from "./slides/2022/Introduction";
import { ScrollSnap } from "./slides/2022/ScrollSnap";
import { Dialog } from "./slides/2022/Dialog";
import { FontEffects } from "./slides/2022/FontEffects";
import { Grid } from "./slides/2022/Grid";
import { TitleSlide } from "./components/slide/TitleSlide";
import { ContainerQueries } from "./slides/2022/ContainerQueries";
import { ImageEffects } from "./slides/2022/ImageEffects";
import { Conclusion } from "./slides/2022/Conclusion";

export function Presentation2022() {
  return (
    <SlideContainer>
      <Introduction />
      <ScrollSnap />
      <FontEffects />
      <Dialog />
      <ImageEffects />
      <TitleSlide title="Container queries" />
      <ContainerQueries />
      <Grid />
      <Conclusion />
    </SlideContainer>
  );
}
