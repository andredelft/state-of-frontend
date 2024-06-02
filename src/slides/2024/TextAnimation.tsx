import React from "react";
import { Slide } from "../../components/slide/Slide";
import "./text-animation.css";
import textAnimation from "../../assets/videos/textAnimation.mov";

export function TextAnimation() {
  return (
    <Slide isWide>
      <div className="text-animation">
        <div className="video-wrapper">
          <video
            className="video-large"
            src={textAnimation}
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </Slide>
  );
}
