import { SlideContainer } from "./components/slide/Slide";
import { Introduction } from "./slides/Title";
import { ScrollSnap } from "./slides/ScrollSnap";
import { SomeExampleSlide } from "./slides/SomeExampleSlide";
import { Dialog } from "./slides/Dialog";

export function Presentation() {
  return (
    <SlideContainer>
      <Introduction />
      <SomeExampleSlide />
      <ScrollSnap />
      <Dialog />
    </SlideContainer>
  );
}
