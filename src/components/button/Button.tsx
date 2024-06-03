import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import "./button.css";

type ButtonProps = {
  rounded?: boolean;
  active?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ rounded, active, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "button",
        rounded && "button--rounded",
        active && "button--active",
        props.className,
      )}
      {...props}
    >
      {props.children}
    </button>
  );
}

type ButtonGroupProps = {
  wrap?: boolean;
  justify?: "start" | "center" | "end";
  children?: ReactNode;
  small?: boolean;
};

function ButtonGroup({ wrap, justify, children, small }: ButtonGroupProps) {
  return (
    <div
      className={clsx(
        "button__group",
        wrap && "button__group--wrap",
        justify && `button__group--${justify}`,
        small && "button__group--small",
      )}
    >
      {children}
    </div>
  );
}

Button.Group = ButtonGroup;
