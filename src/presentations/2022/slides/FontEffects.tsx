import { useState } from "react";
import { Slide } from "components/slide/Slide";
import { WithLabel } from "components/inputs/WithLabel";
import { Switch } from "components/inputs/switch/Switch";
import "./font-effects.css";
import clsx from "clsx";

export function FontEffects() {
  const [bgAnimated, setBgAnimated] = useState<boolean>(false);
  const [weightAnimated, setWeightAnimated] = useState<boolean>(false);

  return (
    <Slide isWide>
      <div className="font-effects">
        <h1
          className={clsx(
            "font-effects__heading",
            weightAnimated && "font-effects__heading--weight-animated",
            bgAnimated && "font-effects__heading--bg-animated",
          )}
        >
          I'm font of you!
        </h1>
        <h2>Animate:</h2>
        <div className="font-effects__controls">
          <WithLabel label="Background">
            <Switch checked={bgAnimated} onChange={setBgAnimated} />
          </WithLabel>
          <WithLabel label="Weight">
            <Switch checked={weightAnimated} onChange={setWeightAnimated} />
          </WithLabel>
        </div>
      </div>
    </Slide>
  );
}
