import "./support-notice.scss";
import clsx from "clsx";

type Percentage = number | null;
type FallbackStatus = "no-fallback" | "low-effort" | "high-effort";

type SupportNoticeProps = {
  percentage: number | null;
  fallback?: FallbackStatus;
};

//

function getPercentageClass(percentage: Percentage): string {
  if (percentage === null) {
    return "unknown";
  }

  if (percentage > 95) {
    return "high";
  }

  if (percentage > 80) {
    return "medium";
  }

  return "low";
}

function getFallbackStatusText(fallbackStatus: FallbackStatus): string {
  switch (fallbackStatus) {
    case "no-fallback":
      return "Geen fallback nodig";
    case "low-effort":
      return "Low effort";
    case "high-effort":
      return "High effort";
  }
}

export function SupportNotice({ percentage, fallback }: SupportNoticeProps) {
  return (
    <ul className="support-notice">
      <li>
        Support:{" "}
        <span
          className={clsx(
            "support-notice__percentage",
            `support-notice__percentage--${getPercentageClass(percentage)}`,
          )}
        >
          {percentage ? `${percentage.toFixed(1)}%` : "?"}
        </span>
      </li>
      {fallback && (
        <li>
          Fallback:{" "}
          <span
            className={clsx(
              "support-notice__fallback-status",
              `support-notice__fallback-status--${fallback}`,
            )}
          >
            {getFallbackStatusText(fallback)}
          </span>
        </li>
      )}
    </ul>
  );
}
