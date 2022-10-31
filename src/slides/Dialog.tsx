import { useRef } from "react";
import { Button } from "../components/button/Button";
import { Slide } from "../components/slide/Slide";

export function Dialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <Slide>
        <h1>Dialog</h1>
        <Button.Group justify="center">
          <Button onClick={() => dialogRef.current?.showModal()}>
            Give me that sweet dialog!
          </Button>
        </Button.Group>
      </Slide>

      <dialog ref={dialogRef}>
        <h1>This is a dialog</h1>
        <p>Hello!</p>
        <Button onClick={() => dialogRef.current?.close()}>Close</Button>
      </dialog>
    </>
  );
}
