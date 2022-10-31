import { Listbox as HeadlessUIListbox } from "@headlessui/react";
import { CaretDown, Check } from "phosphor-react";
import "./listbox.css";

export type ListboxItem<T> = { name: T; title: string };
export type ListboxItems<T> = ListboxItem<T>[];

type ListboxProps<T extends string> = {
  items: ListboxItems<T>;
  selected?: ListboxItem<T> | null;
  onChange: (value: any) => void;
};

export function Listbox<T extends string>({
  items,
  selected,
  onChange,
}: ListboxProps<T>) {
  return (
    <HeadlessUIListbox value={selected} onChange={onChange}>
      <div className="listbox__container">
        <HeadlessUIListbox.Button className="listbox__button">
          <span className="listbox__selected-value">{selected?.title}</span>
          <span className="listbox__dropdown-icon">
            <CaretDown size={30} aria-hidden="true" />
          </span>
        </HeadlessUIListbox.Button>
        <HeadlessUIListbox.Options className="listbox__options">
          {items.map((item, i) => (
            <HeadlessUIListbox.Option
              key={i}
              className="listbox__option"
              value={item}
            >
              {item.title}
              {item.name === selected?.name && (
                <span className="listbox__checkmark">
                  <Check size={30} weight="bold" aria-hidden="true" />
                </span>
              )}
            </HeadlessUIListbox.Option>
          ))}
        </HeadlessUIListbox.Options>
      </div>
    </HeadlessUIListbox>
  );
}
