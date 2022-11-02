import { ReactNode } from "react";
import { Slide } from "./Slide";
import "./slide.css";

type TitleSlideProps = {
  title: string;
  description?: ReactNode;
};

export function TitleSlide({ title, description }: TitleSlideProps) {
  return (
    <Slide className="slide__title-slide">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </Slide>
  );
}
