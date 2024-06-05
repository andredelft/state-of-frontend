import { SlideContainer } from "./components/slide/Slide";
import { Introduction } from "./slides/2024/Introduction";
import { TypingAnimation } from "./slides/2024/TypingAnimation";
import { NumberAnimation } from "./slides/2024/NumberAnimation";
import { AnimationTimeline } from "./slides/2024/AnimationTimeline";
import { PageTransition } from "./slides/2024/PageTransition";
import { Conclusion } from "./slides/2024/Conclusion";
import { Shaders } from "./slides/2024/Shaders";

export function Presentation2024() {
  return (
    <SlideContainer>
      <Introduction />
      <TypingAnimation />
      <NumberAnimation />
      <AnimationTimeline />
      <Shaders />
      <PageTransition />
      <Conclusion />
    </SlideContainer>
  );
}
