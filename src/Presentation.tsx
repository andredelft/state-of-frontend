import { SlideContainer } from "./components/slide/Slide";
import { Introduction } from "./slides/Title";
import { ScrollSnap } from "./slides/ScrollSnap";
import { SomeOtherSlide } from "./slides/SomeOtherSlide";

export function Presentation() {
  return (
    <SlideContainer>
      <Introduction />
      <ScrollSnap />
      <SomeOtherSlide />
    </SlideContainer>
  );
}
