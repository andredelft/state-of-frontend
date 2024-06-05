import { useCallback, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Slide } from "../../components/slide/Slide";
import "./number-animation.scss";
import numberAnimation from "../../assets/videos/number-animation.mp4";
import { Button } from "../../components/button/Button";
import clsx from "clsx";
import { useArrowNav } from "../../hooks/useArrowNav";
import { isElOutOfViewPort } from "../../utils/isInViewPort";
import codeSnippet from "../../assets/images/numberAnimation/code-snippet.png";

const STEPS = [1, 2];
const MIN_STEP = STEPS[0];
const MAX_STEP = STEPS.slice(-1)[0];

export function NumberAnimation() {
  const refToCheckIfOutOfViewport = useRef(null);
  const [activeStep, setActiveStep] = useState(MIN_STEP);

  const handleActiveStep = useCallback((newStep: number) => {
    if (isElOutOfViewPort(refToCheckIfOutOfViewport.current)) {
      return;
    }

    document.startViewTransition(() => {
      // about flushSync: https://malcolmkee.com/blog/view-transition-api-in-react-app/#usage-view-transition-api-with-react
      flushSync(() => {
        setActiveStep(newStep);
      });
    });
  }, []);

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

      <div className="number-animation-nav-buttons">
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
          "number-animation__video",
          activeStep === 1
            ? "number-animation__video--large"
            : "number-animation__video--small",
        )}
      >
        <video
          src={numberAnimation}
          className="number-animation-transition-name"
          autoPlay
          loop
          muted
        />
      </div>

      {activeStep === 2 && (
        <div className="number-animation__image-grid">
          <h1>CSS Custom Properties</h1>
          <img src={codeSnippet} width={700} alt="" />
          <ul>
            <li>Geen JS, betere performance</li>
            <li>Nieuwe animatie mogelijkheden</li>
            <li>Easing!</li>
          </ul>
        </div>
      )}
    </Slide>
  );
}
