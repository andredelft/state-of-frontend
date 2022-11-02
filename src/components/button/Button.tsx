import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import './button.css';

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={clsx('button', props.className)} {...props}>
      {props.children}
    </button>
  );
}

type ButtonGroupProps = {
  wrap?: boolean;
  justify?: 'start' | 'center' | 'end';
  children?: ReactNode;
};

function ButtonGroup({ wrap, justify, children }: ButtonGroupProps) {
  return (
    <div
      className={clsx(
        'button__group',
        wrap && 'button__group--wrap',
        justify && `button__group--${justify}`,
      )}>
      {children}
    </div>
  );
}

Button.Group = ButtonGroup;
