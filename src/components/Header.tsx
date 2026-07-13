import Image from "next/image";
import type { Teacher } from "@/types";
import { formatToday } from "@/utils/helpers";

interface HeaderProps {
  teacher: Teacher;
}

export default function Header({ teacher }: HeaderProps) {
  return (
    <div className="flex items-center justify-between px-1 pb-1">
      <div className="flex items-center gap-3">
        <Image
          src={teacher.avatarUrl}
          alt={teacher.name}
          width={44}
          height={44}
          className="h-11 w-11 rounded-full object-cover ring-2 ring-white shadow-sm"
        />
        <div>
          <h1 className="font-display text-[17px] font-semibold text-[var(--color-text)]">
            {teacher.name}
          </h1>
          <p className="text-[12px] text-[var(--color-text-muted)]">{formatToday()}</p>
        </div>
      </div>
      <div className="flex items-center gap-1.5 rounded-full bg-[var(--color-green-soft)] px-2.5 py-1.5">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-green)] opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-green)]" />
        </span>
        <span className="text-[11px] font-medium text-[#0d8f5f]">{teacher.statusText}</span>
      </div>
    </div>
  );
}
