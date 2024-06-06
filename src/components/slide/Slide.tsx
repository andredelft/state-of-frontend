import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";
import { Warning } from "../warning/Warning";
import "./slide.css";

type SlideContainerProps = {
  children?: ReactNode;
};

export function SlideContainer({ children }: SlideContainerProps) {
  return <div className="slide__container">{children}</div>;
}

type SlideProps = HTMLAttributes<HTMLDivElement> & {
  isWide?: boolean;
  warning?: string;
};

export function Slide({
  isWide,
  warning,
  children,
  className,
  ...divProps
}: SlideProps) {
  return (
    <div
      className={clsx("slide", isWide && "slide--wide", className)}
      {...divProps}
    >
      {warning && <Warning warning={warning} />}

      {children}
    </div>
  );
}
