import clsx from "clsx";
import React, { useRef, useState } from "react";
import { Button } from "../../components/button/Button";
import {
  Listbox,
  ListboxItem,
  ListboxItems,
} from "../../components/inputs/listbox/Listbox";
import { WithLabel } from "../../components/inputs/WithLabel";
import { Slide } from "../../components/slide/Slide";
import "./dialog.css";

type BackdropOption = "blur" | "saturate" | "sepia" | "invert";

export function Dialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [backdrop, setBackdrop] = useState<ListboxItem<BackdropOption> | null>(
    null
  );

  const backdropOptions: ListboxItems<BackdropOption> = [
    { name: "blur", title: "Blur" },
    { name: "sepia", title: "Sepia" },
    { name: "saturate", title: "Saturate" },
    { name: "invert", title: "Invert" },
  ];

  return (
    <>
      <Slide>
        <h1>Dialog</h1>
        <p>Uitdagingen van een dialog:</p>
        <ul>
          <li>
            Positioning (<code>z-index</code>!)
          </li>
          <li>Focus management</li>
          <li>Scroll behaviour</li>
        </ul>
        <Button.Group>
          <Button onClick={() => dialogRef.current?.showModal()}>
            Give me that sweet new <code>&lt;dialog&gt;</code>!
          </Button>
        </Button.Group>
      </Slide>

      <dialog
        ref={dialogRef}
        className={clsx(backdrop && `dialog__backdrop--${backdrop.name}`)}
      >
        <h1 className="dialog__title">This is a dialog</h1>
        <WithLabel label="Backdrop type">
          <Listbox
            selected={backdrop}
            items={backdropOptions}
            onChange={setBackdrop}
          />
        </WithLabel>
        <Button.Group justify="center">
          <Button onClick={() => dialogRef.current?.close()}>Close</Button>
        </Button.Group>
      </dialog>
    </>
  );
}
