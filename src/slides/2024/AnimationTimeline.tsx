import React, { useCallback, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Slide } from "../../components/slide/Slide";
import "./animation-timeline.scss";
import { Button } from "../../components/button/Button";
import clsx from "clsx";
import { useArrowNav } from "../../hooks/useArrowNav";
import viewTimelineVideo1 from "../../assets/videos/animation-timeline1.mp4";
import viewTimelineVideo2 from "../../assets/videos/animation-timeline2.mp4";
import viewTimelineVideo3 from "../../assets/videos/animation-timeline3.mp4";
import { isElOutOfViewPort } from "../../utils/isInViewPort";

const STEPS = [1, 2, 3, 4, 5];
const MIN_STEP = STEPS[0];
const MAX_STEP = STEPS.slice(-1)[0];

export function AnimationTimeline() {
  const refToCheckIfOutOfViewport = useRef(null);
  const [activeStep, setActiveStep] = useState(MIN_STEP);

  const handleActiveStep = useCallback(
    (newStep: number) => {
      if (isElOutOfViewPort(refToCheckIfOutOfViewport.current)) {
        return;
      }

      if ([3, 4].includes(activeStep) && [3, 4].includes(newStep)) {
        document.startViewTransition(() => {
          // about flushSync: https://malcolmkee.com/blog/view-transition-api-in-react-app/#usage-view-transition-api-with-react
          flushSync(() => {
            setActiveStep(newStep);
          });
        });
      } else {
        setActiveStep(newStep);
      }
    },
    [activeStep],
  );

  const handlePrev = useCallback(
    () => handleActiveStep(Math.max(MIN_STEP, activeStep - 1)),
    [activeStep, handleActiveStep],
  );

  const handleNext = useCallback(
    () => handleActiveStep(Math.min(MAX_STEP, activeStep + 1)),
    [activeStep, handleActiveStep],
  );

  useArrowNav(handlePrev, handleNext);

  return (
    <Slide isWide onClick={() => handleNext()}>
      <div ref={refToCheckIfOutOfViewport} />

      <div className="animation-timeline-nav-buttons">
        <Button.Group small>
          {STEPS.map((step) => (
            <Button
              key={step}
              rounded
              onClick={(e) => {
                e.stopPropagation();
                handleActiveStep(step);
              }}
              active={step === activeStep}
            >
              {step}
            </Button>
          ))}
        </Button.Group>
      </div>

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
    </Slide>
  );
}
