import clsx from "clsx";
import { ReactNode } from "react";
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
};

export function Slide({
  id,
  className,
  isWide,
  children,
  warning,
}: SlideProps) {
  return (
    <div id={id} className={clsx("slide", isWide && "slide--wide", className)}>
      {warning && <Warning warning={warning} />}

      {children}
    </div>
  );
}
