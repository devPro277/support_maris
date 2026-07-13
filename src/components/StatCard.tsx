import type { LucideIcon } from "lucide-react";

export type StatCardColor = "blue" | "purple" | "green" | "orange";

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: number;
  subtitle: string;
  color: StatCardColor;
}

const COLOR_MAP: Record<StatCardColor, { fg: string; bg: string }> = {
  blue: { fg: "var(--color-blue)", bg: "var(--color-blue-soft)" },
  purple: { fg: "var(--color-purple)", bg: "var(--color-purple-soft)" },
  green: { fg: "var(--color-green)", bg: "var(--color-green-soft)" },
  orange: { fg: "var(--color-orange)", bg: "var(--color-orange-soft)" },
};

export default function StatCard({ icon: Icon, title, value, subtitle, color }: StatCardProps) {
  const palette = COLOR_MAP[color];

  return (
    <div
      className="group rounded-2xl bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.04)] border border-[var(--color-border)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(16,24,40,0.08)]"
    >
      <div
        className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105"
        style={{ backgroundColor: palette.bg, color: palette.fg }}
      >
        <Icon size={18} strokeWidth={2.25} />
      </div>
      <p className="font-mono-num text-[22px] font-semibold leading-none text-[var(--color-text)]">
        {value}
      </p>
      <p className="mt-1.5 text-[13px] font-medium text-[var(--color-text)]">{title}</p>
      <p className="mt-0.5 text-[11.5px] text-[var(--color-text-faint)]">{subtitle}</p>
    </div>
  );
}
