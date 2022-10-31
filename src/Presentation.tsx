import { SlideContainer } from "./components/slide/Slide";
import { Introduction } from "./slides/Title";
import { ScrollSnap } from "./slides/ScrollSnap";
import { SomeExampleSlide } from "./slides/SomeExampleSlide";

export function Presentation() {
  return (
    <SlideContainer>
      <Introduction />
      <SomeExampleSlide />
      <ScrollSnap />
    </SlideContainer>
  );
}
