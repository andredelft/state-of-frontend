import { Slide } from "../../components/slide/Slide";
import "./animation-timeline.scss";
import clsx from "clsx";
import viewTimelineVideo1 from "../../assets/videos/animation-timeline1.mp4";
import viewTimelineVideo2 from "../../assets/videos/animation-timeline2.mp4";
import viewTimelineVideo3 from "../../assets/videos/animation-timeline3.mp4";
import { StepButtons } from "../../components/step-buttons/StepButtons";
import { useState } from "react";
import { SupportNotice } from "../../components/support-notice/SupportNotice";

export function AnimationTimeline() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <Slide isWide>
      <StepButtons
        activeStep={activeStep}
        onActiveStepChange={setActiveStep}
        numSteps={5}
        transitionStepPairs={[[3, 4]]}
      />

      <div
        className={clsx(
          "animation-timeline__video",
          activeStep > 3
            ? "animation-timeline__video--small"
            : "animation-timeline__video--large",
        )}
      >
        <video
          src={clsx(
            activeStep === 1 && viewTimelineVideo1,
            activeStep === 2 && viewTimelineVideo2,
            activeStep >= 3 && viewTimelineVideo3,
          )}
          className="animation-timeline-transition-name"
          autoPlay
          loop
          muted
        />
      </div>

      {activeStep > 3 && (
        <>
          <h1>Animation Timeline View en Scroll</h1>

          {activeStep === 5 && (
            <ul>
              <li>Puur CSS, geen JS → Soepeler</li>
              <li>CSS animation gekoppeld aan scroll-positie</li>
              <li>Kijkt naar hele pagina of de viewport</li>
            </ul>
          )}
        </>
      )}

      {activeStep > 3 && (
        <SupportNotice percentage={71.94} fallback="low-effort" />
      )}
    </Slide>
  );
}
