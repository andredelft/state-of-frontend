import { SlideContainer } from "./components/slide/Slide";
import { Introduction } from "./slides/Title";
import { ScrollSnap } from "./slides/ScrollSnap";
import { Dialog } from "./slides/Dialog";
import { FontEffects } from "./slides/FontEffects";
import { Grid } from "./slides/Grid";
import { TitleSlide } from "./components/slide/TitleSlide";
import { ContainerQueries } from "./slides/ContainerQueries";
import { ImageEffects } from "./slides/ImageEffects";
import { Conclusion } from "./slides/Conclusion";

export function Presentation() {
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
