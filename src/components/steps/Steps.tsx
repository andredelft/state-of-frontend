import { useCallback, useMemo, useRef } from "react";
import "./steps.scss";
import { useArrowNav } from "../../hooks/useArrowNav";
import { isElOutOfViewPort } from "../../utils/isInViewPort";
import clsx from "clsx";
import { flushSync } from "react-dom";

type StepsProps = {
  numSteps: number;
  activeStep: number;
  onActiveStepChange: (step: number) => void;
  transitionStepPairs?: number[][];
};

export function Steps({
  numSteps,
  activeStep,
  onActiveStepChange,
  transitionStepPairs = [],
}: StepsProps) {
  const steps = useMemo(
    // Create an array with all steps: [1, 2, ..., numSteps]
    () => Array.from({ length: numSteps }, (_, i) => i + 1),
    [numSteps],
  );

  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleActiveStepChange = useCallback(
    (newStep: number) => {
      if (isElOutOfViewPort(wrapperRef.current)) {
        return;
      }

      const doTransition = transitionStepPairs.some(
        (pair) => pair.includes(activeStep) && pair.includes(newStep),
      );

      if (doTransition) {
        document.startViewTransition(() => {
          // about flushSync: https://malcolmkee.com/blog/view-transition-api-in-react-app/#usage-view-transition-api-with-react
          flushSync(() => onActiveStepChange(newStep));
        });
      } else {
        onActiveStepChange(newStep);
      }
    },
    [onActiveStepChange, transitionStepPairs, activeStep],
  );

  const handlePrev = useCallback(
    () => handleActiveStepChange(Math.max(1, activeStep - 1)),
    [activeStep, handleActiveStepChange],
  );

  const handleNext = useCallback(
    () => handleActiveStepChange(Math.min(numSteps, activeStep + 1)),
    [numSteps, activeStep, handleActiveStepChange],
  );

  useArrowNav(handlePrev, handleNext);

  return (
    <div className="steps" ref={wrapperRef}>
      {steps.map((step) => (
        <button
          key={step}
          className={clsx(
            "steps__button",
            step === activeStep && "steps__button--active",
          )}
          onClick={() => handleActiveStepChange(step)}
        >
          {step}
        </button>
      ))}
    </div>
  );
}
