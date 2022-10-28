import { useState } from "react";
import image1 from "../assets/images/malta/1.jpg";
import image2 from "../assets/images/malta/2.jpg";
import image3 from "../assets/images/malta/3.jpg";
import image4 from "../assets/images/malta/4.jpg";
import image5 from "../assets/images/malta/5.jpg";
import image6 from "../assets/images/malta/6.jpg";
import image7 from "../assets/images/malta/7.jpg";
import image8 from "../assets/images/malta/8.jpg";
import { Carousel, SnapAlign } from "../components/carousel/Carousel";
import {
  Listbox,
  ListboxItem,
  ListboxItems,
} from "../components/inputs/listbox/Listbox";
import { Slide } from "../components/slide/Slide";
import { Switch } from "../components/inputs/switch/Switch";
import "./scroll-snap.css";
import { WithLabel } from "../components/inputs/WithLabel";

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const listboxItems: ListboxItems<SnapAlign> = [
  {
    name: "start",
    title: "Start",
  },
  { name: "center", title: "Center" },
  { name: "end", title: "End" },
];

export function ScrollSnap() {
  const [enableSnap, setEnableSnap] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ListboxItem<SnapAlign>>(
    listboxItems[1]
  );

  return (
    <Slide>
      <h1>Scroll snap</h1>
      <div className="input-container">
        <WithLabel label="Enable scroll snap">
          <Switch checked={enableSnap} onChange={setEnableSnap} />
        </WithLabel>
        {enableSnap && (
          <WithLabel label="Snap align">
            <Listbox
              items={listboxItems}
              selected={selectedItem}
              onChange={setSelectedItem}
            />
          </WithLabel>
        )}
      </div>
      <Carousel
        enableSnap={enableSnap}
        snapAlign={selectedItem.name}
        images={images}
      />
    </Slide>
  );
}
