import { ReactNode } from "react";
import "./with-label.css";

type WithLabelProps = {
  label: string;
  children: ReactNode;
};

export function WithLabel({ label, children }: WithLabelProps) {
  return (
    <div className="with-label__container">
      <div className="with-label__label">{label}</div>
      <div className="with-label__component">{children}</div>
    </div>
  );
}
