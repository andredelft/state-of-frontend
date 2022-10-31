import React, { useState } from 'react';
import { Slide } from "../components/slide/Slide";
import { WithLabel } from "../components/inputs/WithLabel";
import { Switch } from "../components/inputs/switch/Switch";
import './font-effects.css';
import clsx from "clsx";

export function FontEffects() {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  return (
    <Slide isWide>
      <div className="font-effects">
          <h1 className={clsx(
            "font-effects__heading",
            isAnimated && "font-effects__heading--animated"
          )}>
            Variable font
          </h1>
          <WithLabel label="Animate">
            <Switch checked={isAnimated} onChange={setIsAnimated}/>
          </WithLabel>
      </div>
    </Slide>
  );
}