import { Slide } from "../../components/slide/Slide";
import { useState } from "react";
import "./page-transition.scss";
import clsx from "clsx";
import viewTransitionApiVideo from "../../assets/videos/view-transition-api.mp4";
import pageTransitionJSVideo from "../../assets/videos/page-transition.mp4";
import { StepButtons } from "../../components/step-buttons/StepButtons";

export function PageTransition() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <Slide isWide>
      <StepButtons
        activeStep={activeStep}
        onActiveStepChange={setActiveStep}
        numSteps={4}
      />

      {[1, 2].includes(activeStep) && (
        <>
          <h1>Page Transitions</h1>

          {activeStep === 1 && (
            <>
              <p>Probleem: Page Refresh → geen animatie mogelijk</p>
              <p>Oplossing: View Transitions API</p>
            </>
          )}

          {activeStep === 2 && (
            <>
              <h2>View Transitions API</h2>
              <ul>
                <li>Snapshot vóór en ná page refresh</li>
                <li>Cross fade tussen de twee snapshot</li>
                <li>Ook snapshots van onderdelen van de pagina's: morphen</li>
              </ul>
              <h3>Support: </h3>
              <ul>
                <li>Single Document: 65%</li>
                <li>Cross Document (= page refresh): 0%</li>
              </ul>
            </>
          )}
        </>
      )}

      {activeStep > 2 && (
        <div
          className={clsx(
            "page-transition__video",
            "page-transition__video--large",
          )}
        >
          <video
            src={clsx(
              activeStep === 3 && viewTransitionApiVideo,
              activeStep === 4 && pageTransitionJSVideo,
            )}
            autoPlay
            loop
            muted
          />
        </div>
      )}
    </Slide>
  );
}
