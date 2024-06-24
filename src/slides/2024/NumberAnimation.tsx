import { useState } from "react";
import { Slide } from "../../components/slide/Slide";
import "./number-animation.scss";
import numberAnimation from "../../assets/videos/number-animation.mp4";
import clsx from "clsx";
import codeSnippet from "../../assets/images/numberAnimation/code-snippet.png";
import { StepButtons } from "../../components/step-buttons/StepButtons";

export function NumberAnimation() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <Slide isWide>
      <StepButtons
        activeStep={activeStep}
        onActiveStepChange={setActiveStep}
        numSteps={2}
        transitionStepPairs={[[1, 2]]}
      />

      <div
        className={clsx(
          "number-animation__video",
          `number-animation__video--${activeStep === 1 ? "large" : "small"}`,
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
