import type { SubmissionStatus } from "@/types";
import { STATUS_LABEL } from "@/utils/helpers";

interface StatusBadgeProps {
  status: SubmissionStatus;
}

const STYLE_MAP: Record<SubmissionStatus, { fg: string; bg: string; dot: string }> = {
  submitted: { fg: "#0d8f5f", bg: "var(--color-green-soft)", dot: "var(--color-green)" },
  pending: { fg: "#b3720a", bg: "var(--color-orange-soft)", dot: "var(--color-orange)" },
  not_submitted: { fg: "#c53a3a", bg: "var(--color-red-soft)", dot: "var(--color-red)" },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const style = STYLE_MAP[status];

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11.5px] font-medium"
      style={{ backgroundColor: style.bg, color: style.fg }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: style.dot }} />
      {STATUS_LABEL[status]}
    </span>
  );
}
