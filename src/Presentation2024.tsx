import { SlideContainer } from "./components/slide/Slide";
import { Introduction } from "./slides/2024/Introduction";
import { TypingAnimation } from "./slides/2024/TypingAnimation";
import { AnimationTimeline } from "./slides/2024/AnimationTimeline";
import { PageTransition } from "./slides/2024/PageTransition";
import { Conclusion } from "./slides/2024/Conclusion";

export function Presentation2024() {
  return (
    <SlideContainer>
      <Introduction />
      <TypingAnimation />
      <AnimationTimeline />
      <PageTransition />
      <Conclusion />
    </SlideContainer>
  );
}
