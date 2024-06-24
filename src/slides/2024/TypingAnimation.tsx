import { useState } from "react";
import { Slide } from "../../components/slide/Slide";
import "./typing-animation.scss";
import textAnimation from "../../assets/videos/textAnimation.mp4";
import clsx from "clsx";
import spansImage from "../../assets/images/typingAnimation/spans.png";
import spansResultGif from "../../assets/images/typingAnimation/spansResult.gif";
import spansTwoImage from "../../assets/images/typingAnimation/spans2.png";
import { StepButtons } from "../../components/step-buttons/StepButtons";

export function TypingAnimation() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <Slide isWide>
      <StepButtons
        activeStep={activeStep}
        onActiveStepChange={setActiveStep}
        numSteps={4}
        transitionStepPairs={[
          [1, 2],
          [2, 3],
          [3, 4],
        ]}
      />

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
          className={clsx(
            activeStep !== 3 && "typing-animation-transition-name",
          )}
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
                      className="typing-animation-transition-name"
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
