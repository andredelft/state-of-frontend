import { ReactNode } from "react";
import "./slide.css";

type SlideContainerProps = {
  children?: ReactNode;
};

export function SlideContainer({ children }: SlideContainerProps) {
  return <div className="slide-container">{children}</div>;
}

type SlideProps = {
  children?: ReactNode;
};

export function Slide({ children }: SlideProps) {
  return <div className="slide">{children}</div>;
}
