import { Slide } from "../../components/slide/Slide";
import { Button } from "../../components/button/Button";
import React, { useCallback, useRef, useState } from "react";
import { isElOutOfViewPort } from "../../utils/isInViewPort";
import { flushSync } from "react-dom";
import { useArrowNav } from "../../hooks/useArrowNav";
import "./page-transition.scss";

const STEPS = [1, 2];
const MIN_STEP = STEPS[0];
const MAX_STEP = STEPS.slice(-1)[0];

export function PageTransition() {
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
    <Slide>
      <div ref={refToCheckIfOutOfViewport} />

      <div className="page-transition-nav-buttons">
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
    </Slide>
  );
}
