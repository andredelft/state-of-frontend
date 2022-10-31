import clsx from "clsx";
import { ReactNode } from "react";
import "./slide.css";

type SlideContainerProps = {
  children?: ReactNode;
};

export function SlideContainer({ children }: SlideContainerProps) {
  return <div className="slide__container">{children}</div>;
}

type SlideProps = {
  className?: string;
  children?: ReactNode;
};

export function Slide({ className, children }: SlideProps) {
  return <div className={clsx("slide", className)}>{children}</div>;
}
