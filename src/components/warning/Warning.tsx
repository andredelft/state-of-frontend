import { Warning as WarningIcon } from "phosphor-react";
import { ReactNode } from "react";
import "./warning.css";

type WarningProps = {
  warning: ReactNode;
};

export function Warning({ warning }: WarningProps) {
  return (
    <div className="warning">
      <WarningIcon className="warning__icon" weight="regular" />
      <div className="warning__content">{warning}</div>
    </div>
  );
}
