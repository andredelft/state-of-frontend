import { RefObject, useCallback, useMemo, useRef } from "react";
import "./step-buttons.scss";
import { flushSync } from "react-dom";
import { useArrowNav } from "../../hooks/useArrowNav";
import { isElOutOfViewPort } from "../../utils/isInViewPort";
import clsx from "clsx";

type StepButtonsProps = {
  numSteps: number;
  activeStep: number;
  onActiveStepChange: (step: number) => void;
  transitionSteps?: number[];
};

export function StepButtons({
  numSteps,
  activeStep,
  onActiveStepChange,
  transitionSteps = [],
}: StepButtonsProps) {
  const steps = useMemo(
    // Create an array with all steps: [1, 2, ..., numSteps]
    () => Array.from({ length: numSteps }, (_, i) => i + 1),
    [numSteps],
  );

  const wrapperRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const handleActiveStepChange = useCallback(
    (newStep: number) => {
      if (isElOutOfViewPort(wrapperRef.current)) {
        return;
      }

      const stepsAreSequential = Math.abs(activeStep - newStep) === 1;
      const maxStepIsTransitionStep = transitionSteps.includes(
        Math.max(activeStep, newStep),
      );

      if (stepsAreSequential && maxStepIsTransitionStep) {
        document.startViewTransition(() => {
          // about flushSync: https://malcolmkee.com/blog/view-transition-api-in-react-app/#usage-view-transition-api-with-react
          flushSync(() => onActiveStepChange(newStep));
        });
      } else {
        onActiveStepChange(newStep);
      }
    },
    [onActiveStepChange, transitionSteps, activeStep],
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
    <div className="step-buttons" ref={wrapperRef}>
      {steps.map((step) => (
        <button
          key={step}
          className={clsx(
            "step-buttons__button",
            step === activeStep && "step-buttons__button--active",
          )}
          onClick={() => handleActiveStepChange(step)}
        >
          {step}
        </button>
      ))}
    </div>
  );
}
