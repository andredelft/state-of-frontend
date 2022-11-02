import "./carousel.css";
import clsx from "clsx";

export type SnapAlign = "start" | "center" | "end";

type CarouselProps = {
  images: string[];
  enableSnap?: boolean;
  snapAlign?: SnapAlign;
};

export function Carousel({ images, enableSnap, snapAlign }: CarouselProps) {
  return (
    <div
      className={clsx(
        "carousel__container",
        enableSnap && "carousel__container--snap",
        snapAlign && `carousel__container--snap-${snapAlign}`
      )}
    >
      {images.map((image, i) => (
        <img
          className="carousel__image"
          key={i}
          src={image}
          alt={`Carousel ${i}`}
          height={500}
        />
      ))}
    </div>
  );
}
