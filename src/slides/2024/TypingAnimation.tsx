import React, { useEffect, useState } from "react";
import { Slide } from "../../components/slide/Slide";
import "./typing-animation.css";
import textAnimation from "../../assets/videos/textAnimation.mov";
import { Button } from "../../components/button/Button";
import clsx from "clsx";
import spansImage from "../../assets/images/typingAnimation/spans.png";
import spansResultGif from "../../assets/images/typingAnimation/spansResult.gif";
import spansTwoImage from "../../assets/images/typingAnimation/spans2.png";

export function TypingAnimation() {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") {
        handlePrev();
        return;
      }

      if (e.key === "ArrowRight") {
        handleNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeStep]);

  function handlePrev() {
    handleActiveStep(Math.max(1, activeStep - 1));
  }

  function handleNext() {
    handleActiveStep(Math.min(4, activeStep + 1));
  }

  function handleActiveStep(newStep: number) {
    if ([1, 2].includes(activeStep) && [1, 2].includes(newStep)) {
      document.startViewTransition(() => {
        setActiveStep(newStep);
      });
    } else {
      setActiveStep(newStep);
    }
  }

  return (
    <Slide isWide onClick={() => handleNext()}>
      <div className="typing-animation-buttons">
        <Button.Group small>
          {[1, 2, 3, 4].map((step) => (
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
              ? "typing-animation__video--hidden"
              : "typing-animation__video--small",
        )}
      >
        <video src={textAnimation} autoPlay loop muted />
      </div>

      {activeStep > 1 && (
        <>
          <h1>Hoe het werkt</h1>

          <ul>
            {[2, 3].includes(activeStep) && (
              <>
                <li>SPAN om elk character</li>
                <li>
                  CSS transition: SPAN onzichtbaar → zichtbaar
                  {activeStep === 3 && (
                    <div className="typing-animation__images">
                      <img src={spansImage} width="250" alt="" />
                      <span className="typing-animation__arrow-small">→</span>
                      <img src={spansResultGif} width="500" alt="" />
                    </div>
                  )}
                </li>
              </>
            )}

            {activeStep === 4 && (
              <>
                <li>CSS transitions kunnen delay meekrijgen</li>
                <li>
                  Elke SPAN 0.1s meer delay
                  <div className="typing-animation__images">
                    <img src={spansTwoImage} width="500" alt="" />
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
