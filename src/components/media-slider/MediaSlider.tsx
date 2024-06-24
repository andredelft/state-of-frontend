import { ReactNode } from "react";
import "./_media-slider.scss";

type MediaSliderProps = {
  children?: ReactNode;
};

export function MediaSlider({ children }: MediaSliderProps) {
  return <div className="media-slider">{children}</div>;
}

type VideoProps = {
  videoSrc: string;
};

function Video({ videoSrc }: VideoProps) {
  return (
    <video
      className="media-slider__slide media-slider__slide--video"
      src={videoSrc}
      autoPlay
      loop
      muted
    />
  );
}

type ImageProps = {
  imageSrc: string;
  alt?: string;
  source?: {
    name: string;
    href: string;
  };
};
function Image({ imageSrc, alt, source }: ImageProps) {
  return (
    <figure className="media-slider__slide media-slider__slide--figure">
      <img src={imageSrc} alt={alt || ""} />
      {source && (
        <figcaption>
          Source: <a href={source.href}>{source.name}</a>
        </figcaption>
      )}
    </figure>
  );
}

MediaSlider.Video = Video;
MediaSlider.Image = Image;
