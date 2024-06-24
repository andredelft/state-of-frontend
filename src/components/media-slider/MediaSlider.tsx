import { ReactNode } from "react";
import "./_media-slider.scss";

type MediaSliderProps = {
  children?: ReactNode;
};

export function MediaSlider({ children }: MediaSliderProps) {
  return <div className="media-slider">{children}</div>;
}

type VideoProps = {
  src: string;
};

function Video({ src }: VideoProps) {
  return (
    <video
      className="media-slider__slide media-slider__slide--video"
      src={src}
      autoPlay
      loop
      muted
    />
  );
}

type ImageProps = {
  src: string;
  alt?: string;
  reference?: {
    name: string;
    href: string;
  };
};

function Image({ src, alt, reference }: ImageProps) {
  return (
    <figure className="media-slider__slide media-slider__slide--figure">
      <img src={src} alt={alt || ""} />
      {reference && (
        <figcaption>
          Source: <a href={reference.href}>{reference.name}</a>
        </figcaption>
      )}
    </figure>
  );
}

MediaSlider.Video = Video;
MediaSlider.Image = Image;
