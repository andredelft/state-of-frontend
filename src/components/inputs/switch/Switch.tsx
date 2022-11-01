import { Switch as HeadlessUISwitch } from '@headlessui/react';
import clsx from 'clsx';
import './switch.css';

type SwitchProps = {
  label?: string;
  checked: boolean;
  onChange: (value: boolean) => void;
};

export function Switch({ checked, onChange }: SwitchProps) {
  return (
    <HeadlessUISwitch
      checked={checked}
      onChange={onChange}
      className={clsx(
        'switch__container',
        checked && 'switch__container--checked',
      )}>
      <span className="switch__indicator" />
    </HeadlessUISwitch>
  );
}
