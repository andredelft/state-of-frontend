import { SlideContainer } from "components/slide/Slide";
import { Introduction } from "./slides/Introduction";
import { TypingAnimation } from "./slides/TypingAnimation";
import { NumberAnimation } from "./slides/NumberAnimation";
import { AnimationTimeline } from "./slides/AnimationTimeline";
import { PageTransition } from "./slides/PageTransition";
import { Conclusion } from "./slides/Conclusion";
import { Shaders } from "./slides/Shaders";

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
