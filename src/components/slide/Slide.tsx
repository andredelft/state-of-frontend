import clsx from "clsx";
import { ForwardedRef, forwardRef, ReactNode } from "react";
import { Warning } from "../warning/Warning";
import "./slide.css";

type SlideContainerProps = {
  children?: ReactNode;
};

export function SlideContainer({ children }: SlideContainerProps) {
  return <div className="slide__container">{children}</div>;
}

type SlideProps = {
  id?: string;
  className?: string;
  isWide?: boolean;
  children?: ReactNode;
  center?: boolean;
  warning?: string;
  onClick?: () => void;
};

export const Slide = forwardRef(ForwardedSlide);

export function ForwardedSlide(
  { id, className, isWide, children, warning, onClick }: SlideProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      id={id}
      className={clsx("slide", isWide && "slide--wide", className)}
      onClick={onClick}
      ref={ref}
    >
      {warning && <Warning warning={warning} />}

      {children}
    </div>
  );
}
