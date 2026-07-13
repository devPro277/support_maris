import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen } from "lucide-react";
import { getGroupById, getStudentsByGroupId } from "@/utils/helpers";
import GroupStudentList from "@/components/GroupStudentList";

interface GroupPageProps {
  params: Promise<{ id: string }>;
}

export default async function GroupPage({ params }: GroupPageProps) {
  const { id } = await params;
  const group = getGroupById(id);

  if (!group) notFound();

  const students = getStudentsByGroupId(group.id);

  return (
    <div className="flex min-h-dvh flex-col gap-5 px-4 pb-8 pt-5">
      <div className="flex items-center gap-3 px-1">
        <Link
          href="/dashboard"
          aria-label="Back to dashboard"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--color-text)] shadow-[0_1px_2px_rgba(16,24,40,0.06)] transition-colors hover:bg-[var(--color-surface-muted)]"
        >
          <ArrowLeft size={17} />
        </Link>
        <div className="min-w-0">
          <h1 className="font-display truncate text-[16px] font-semibold text-[var(--color-text)]">
            {group.name}
          </h1>
          <p className="truncate text-[12px] text-[var(--color-text-muted)]">{group.todayTopic}</p>
        </div>
      </div>

      <div className="flex gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
          <BookOpen size={16} />
        </div>
        <div className="min-w-0">
          <p className="text-[13px] font-medium text-[var(--color-text)]">
            {group.todayTopic} &middot; {group.exerciseLabel}
          </p>
          <p className="mt-1 text-[12px] leading-snug text-[var(--color-text-muted)]">
            {group.description}
          </p>
        </div>
      </div>

      <div>
        <h2 className="font-display mb-3 px-1 text-[14px] font-semibold text-[var(--color-text)]">
          Students ({students.length})
        </h2>
        <GroupStudentList students={students} />
      </div>
    </div>
  );
}
