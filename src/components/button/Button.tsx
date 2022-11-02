import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import "./button.css";

type ButtonProps = {
  rounded?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ rounded, ...props }: ButtonProps) {
  return (
    <button
      className={clsx("button", rounded && "button__rounded", props.className)}
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
        small && "button__group--small"
      )}
    >
      {children}
    </div>
  );
}

Button.Group = ButtonGroup;
