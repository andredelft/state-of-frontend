import { SlideContainer } from "./components/slide/Slide";
import { Introduction } from "./slides/2024/Introduction";
import { TextAnimation } from "./slides/2024/TextAnimation";

export function Presentation2024() {
  return (
    <SlideContainer>
      <Introduction />
      <TextAnimation />
    </SlideContainer>
  );
}
