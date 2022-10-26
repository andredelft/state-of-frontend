import { SlideContainer } from "./components/slide/Slide";
import { Introduction } from "./slides/Introduction";
import { ScrollSnap } from "./slides/ScrollSnap";
import { SomeOtherSlide } from "./slides/SomeOtherSlide";

export function App() {
  return (
    <SlideContainer>
      <Introduction />
      <ScrollSnap />
      <SomeOtherSlide />
    </SlideContainer>
  );
}
