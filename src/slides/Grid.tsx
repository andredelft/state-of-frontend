import React, { useState } from 'react';
import { Slide } from "../components/slide/Slide";
import './grid.css';
import { Listbox, ListboxItem, ListboxItems } from "../components/inputs/listbox/Listbox";
import { WithLabel } from "../components/inputs/WithLabel";
import clsx from "clsx";
import { Switch } from "../components/inputs/switch/Switch";

type GridArea = "one" | "two" | "three" | "four" | "five";

const listboxItems: ListboxItems<GridArea> = [
  { name: "one", title: "One" },
  { name: "two", title: "Two" },
  { name: "three", title: "Three" },
  { name: "four", title: "Four" },
  { name: "five", title: "Five" },
];

export function Grid() {
  const [showPhoto, setShowPhoto] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ListboxItem<GridArea>>(
    listboxItems[4]
  );

  return (
    <Slide>
      <h1>Grid</h1>

      <div className="input-container">
        <WithLabel label="Show photo">
          <Switch checked={showPhoto} onChange={setShowPhoto}/>
        </WithLabel>

        {showPhoto && (
          <WithLabel label="Photo in grid area:">
            <Listbox
              items={listboxItems}
              selected={selectedItem}
              onChange={setSelectedItem}
            />
          </WithLabel>
        )}
      </div>

      <div className={clsx('grid', showPhoto && 'grid--photo-area-' + selectedItem.name)}>
        <div/>
        <div/>
        <div/>
        <div/>
        <div className={clsx(showPhoto && "grid__photo")}/>
      </div>

    </Slide>
  );
}
