import { SlideContainer } from "./components/slide/Slide";
import { Introduction } from "./slides/2024/Introduction";
import { TypingAnimation } from "./slides/2024/TypingAnimation";

export function Presentation2024() {
  return (
    <SlideContainer>
      <Introduction />
      <TypingAnimation />
    </SlideContainer>
  );
}
