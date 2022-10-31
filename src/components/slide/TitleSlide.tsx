import { Slide } from "./Slide";
import "./slide.css";

type TitleSlideProps = {
  title: string;
  description: string;
};

export function TitleSlide({ title, description }: TitleSlideProps) {
  return (
    <Slide className="slide__title-slide">
      <h1>{title}</h1>
      <p>{description}</p>
    </Slide>
  );
}
