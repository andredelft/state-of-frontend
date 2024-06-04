import React, { useCallback, useState } from "react";
import { flushSync } from "react-dom";
import { Slide } from "../../components/slide/Slide";
import "./typing-animation.scss";
import textAnimation from "../../assets/videos/textAnimation.mov";
import { Button } from "../../components/button/Button";
import clsx from "clsx";
import spansImage from "../../assets/images/typingAnimation/spans.png";
import spansResultGif from "../../assets/images/typingAnimation/spansResult.gif";
import spansTwoImage from "../../assets/images/typingAnimation/spans2.png";
import { useArrowNav } from "../../hooks/useArrowNav";

const STEPS = [1, 2, 3, 4];
const MIN_STEP = STEPS[0];
const MAX_STEP = STEPS.slice(-1)[0];

export function TypingAnimation() {
  const [activeStep, setActiveStep] = useState(MIN_STEP);

  const handleActiveStep = useCallback(
    (newStep: number) => {
      document.startViewTransition(() => {
        // about flushSync: https://malcolmkee.com/blog/view-transition-api-in-react-app/#usage-view-transition-api-with-react
        flushSync(() => {
          setActiveStep(newStep);
        });
      });
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
      <div className="typing-animation-nav-buttons">
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
          "typing-animation__video",
          activeStep === 1
            ? "typing-animation__video--large"
            : activeStep === 3
              ? "hide"
              : "typing-animation__video--small",
        )}
      >
        <video
          src={textAnimation}
          className={clsx(activeStep !== 3 && "transition-name-typing-video")}
          autoPlay
          loop
          muted
        />
      </div>

      {activeStep > 1 && (
        <>
          <h1>Hoe het werkt</h1>

          <ul>
            {activeStep === 3 && (
              <>
                <li>SPAN om elk character</li>
                <li>
                  CSS transition: SPAN onzichtbaar → zichtbaar
                  <div className="typing-animation__images">
                    <img src={spansImage} width="250" alt="" />
                    <span className="typing-animation__arrow-small">→</span>
                    <img
                      src={spansResultGif}
                      width="500"
                      alt=""
                      className="transition-name-typing-video"
                    />
                  </div>
                </li>
              </>
            )}

            {activeStep === 4 && (
              <>
                <li>CSS transitions kunnen delay meekrijgen</li>
                <li>
                  Elke SPAN 0.1s meer delay
                  <div className="typing-animation__images">
                    <img src={spansTwoImage} width="600" alt="" />
                    <span className="typing-animation__arrow-large">→</span>
                  </div>
                </li>
              </>
            )}
          </ul>
        </>
      )}
    </Slide>
  );
}
