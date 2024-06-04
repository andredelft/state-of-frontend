import { SlideContainer } from "./components/slide/Slide";
import { Introduction } from "./slides/2024/Introduction";
import { TypingAnimation } from "./slides/2024/TypingAnimation";
import { ViewTimeline } from "./slides/2024/ViewTimeline";
import { PageTransition } from "./slides/2024/PageTransition";

export function Presentation2024() {
  return (
    <SlideContainer>
      <Introduction />
      <TypingAnimation />
      <ViewTimeline />
      <PageTransition />
    </SlideContainer>
  );
}
