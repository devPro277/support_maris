import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Group } from "@/types";
import { getGroupSummary } from "@/utils/helpers";

interface GroupCardProps {
  group: Group;
}

export default function GroupCard({ group }: GroupCardProps) {
  const summary = getGroupSummary(group);
  const isClear = summary === "Everything checked";

  return (
    <Link
      href={`/group/${group.id}`}
      className="flex items-center justify-between rounded-2xl border border-[var(--color-border)] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(16,24,40,0.08)] active:scale-[0.99]"
    >
      <div className="min-w-0">
        <h3 className="font-display truncate text-[14.5px] font-semibold text-[var(--color-text)]">
          {group.name}
        </h3>
        <p className="mt-0.5 truncate text-[12.5px] text-[var(--color-text-muted)]">
          {group.todayTopic}
        </p>
        <p
          className="mt-2 inline-block text-[11.5px] font-medium"
          style={{ color: isClear ? "var(--color-green)" : "var(--color-orange)" }}
        >
          {summary}
        </p>
      </div>
      <ChevronRight size={18} className="shrink-0 text-[var(--color-text-faint)]" />
    </Link>
  );
}
