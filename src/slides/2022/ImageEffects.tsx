import React, { useState } from 'react';
import { Slide } from "../../components/slide/Slide";
import './image-effects.css';
import { Listbox, ListboxItem, ListboxItems } from "../../components/inputs/listbox/Listbox";
import { WithLabel } from "../../components/inputs/WithLabel";
import { Switch } from "../../components/inputs/switch/Switch";
import image1 from "../../assets/images/malta/1.jpg";
import image2 from "../../assets/images/malta/5.jpg";
import image3 from "../../assets/images/malta/7.jpg";
import clsx from "clsx";

type ImageEffect = "normal" | "opacity" | "difference" | "exclusion" | "hard-light" | "multiply" | "screen" | "blur" | "contrast" | "grayscale" | "hue-rotate" | "drop-shadow";

const listboxItems: ListboxItems<ImageEffect> = [
  { name: "normal", title: "Normal" },
  { name: "opacity", title: "Opacity" },
  { name: "difference", title: "blend: Difference" },
  { name: "exclusion", title: "blend: Exclusion" },
  { name: "hard-light", title: "blend: Hard light" },
  { name: "multiply", title: "blend: Multiply" },
  { name: "screen", title: "blend: Screen" },
  { name: "blur", title: "filter: Blur" },
  { name: "contrast", title: "filter: Contrast" },
  { name: "grayscale", title: "filter: Grayscale" },
  { name: "hue-rotate", title: "filter: Hue rotate" },
  { name: "drop-shadow", title: "filter: Drop shadow" }
];

export function ImageEffects() {
  const [showImages, setShowImages] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ListboxItem<ImageEffect>>(
    listboxItems[0]
  );

  return (
    <Slide isWide>
      <h1>Image effects</h1>

      <div className="image-effects">
        <div className="image-effects__left">
          <WithLabel label="Images">
            <Switch checked={showImages} onChange={setShowImages}/>
          </WithLabel>

          <WithLabel label="Effect">
            <Listbox
              items={listboxItems}
              selected={selectedItem}
              onChange={setSelectedItem}
            />
          </WithLabel>
        </div>

        <div className="image-effects__right">
          <div
            className={clsx(
              'image-effects__circles image-effects__circles--' + selectedItem.name,
              showImages && 'image-effects__circles--with-images'
            )}>

            {showImages ? (
              <>
                <img src={image1} alt=""/>
                <img src={image2} alt=""/>
                <img src={image3} alt=""/>
              </>
            ) : (
              <>
                <div/>
                <div/>
                <div/>
              </>
            )}
          </div>
        </div>
      </div>
    </Slide>
  );
}