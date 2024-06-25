import { ReactNode } from "react";
import clsx from "clsx";
import "./support-notice.scss";

type Percentage = number | null;
type Fallback = "no-fallback" | "low-effort" | "high-effort";

type Status = "success" | "warning" | "fail";

type SupportNoticeProps = {
  percentage: Percentage;
  fallback?: Fallback;
};

function getPercentageStatus(percentage: Percentage): Status {
  if (percentage === null) {
    return "warning";
  }

  if (percentage > 95) {
    return "success";
  }

  if (percentage > 80) {
    return "warning";
  }

  return "fail";
}

function getFallbackStatus(fallback: Fallback): {
  value: string;
  status: Status;
} {
  switch (fallback) {
    case "no-fallback":
      return { value: "Geen fallback nodig", status: "success" };
    case "low-effort":
      return { value: "Low effort", status: "warning" };
    case "high-effort":
      return { value: "High effort", status: "fail" };
  }
}

export function SupportNotice({ percentage, fallback }: SupportNoticeProps) {
  return (
    <ul className="support-notice">
      <Item
        label="Support"
        value={percentage === null ? "?" : `${percentage.toFixed(1)}%`}
        status={getPercentageStatus(percentage)}
      />
      {fallback && <Item label="Fallback" {...getFallbackStatus(fallback)} />}
    </ul>
  );
}

type ItemProps = {
  label: ReactNode;
  value: ReactNode;
  status?: Status;
};

function Item({ label, value, status }: ItemProps) {
  return (
    <li className="support-notice__item">
      {label}:{" "}
      <span
        className={clsx(
          "support-notice__item-value",
          status && `support-notice__item-value--${status}`,
        )}
      >
        {value}
      </span>
    </li>
  );
}
