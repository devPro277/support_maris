"use client";

import Image from "next/image";
import { Bell } from "lucide-react";
import type { Student } from "@/types";
import StatusBadge from "@/components/StatusBadge";
import { SCORE_TIER_COLOR, getScoreTier } from "@/utils/helpers";

interface StudentRowProps {
  student: Student;
  onOpenReport: (student: Student) => void;
}

export default function StudentRow({ student, onOpenReport }: StudentRowProps) {
  const canOpen = student.status === "submitted" && student.aiReport;

  return (
    <div
      role={canOpen ? "button" : undefined}
      tabIndex={canOpen ? 0 : undefined}
      onClick={() => canOpen && onOpenReport(student)}
      onKeyDown={(e) => {
        if (canOpen && (e.key === "Enter" || e.key === " ")) onOpenReport(student);
      }}
      className={`flex items-center justify-between rounded-2xl border border-[var(--color-border)] bg-white p-3 pr-3.5 transition-all duration-150 ${
        canOpen ? "cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(16,24,40,0.07)] active:scale-[0.99]" : ""
      }`}
    >
      <div className="flex min-w-0 items-center gap-3">
        <Image
          src={student.avatarUrl}
          alt={student.name}
          width={38}
          height={38}
          className="h-[38px] w-[38px] shrink-0 rounded-full object-cover"
        />
        <div className="min-w-0">
          <p className="truncate text-[13.5px] font-medium text-[var(--color-text)]">
            {student.name}
          </p>
          <div className="mt-1">
            <StatusBadge status={student.status} />
          </div>
        </div>
      </div>

      {student.status === "submitted" && student.score !== null ? (
        <span
          className="font-mono-num shrink-0 text-[15px] font-semibold"
          style={{ color: SCORE_TIER_COLOR[getScoreTier(student.score)] }}
        >
          {student.score}
        </span>
      ) : (
        <button
          type="button"
          onClick={(e) => e.stopPropagation()}
          className="flex shrink-0 items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-3 py-1.5 text-[11.5px] font-medium text-[var(--color-text-muted)] transition-colors duration-150 hover:bg-white active:scale-95"
        >
          <Bell size={13} />
          Remind
        </button>
      )}
    </div>
  );
}
