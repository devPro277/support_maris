"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Sparkles, Maximize2, Lightbulb } from "lucide-react";
import type { Student } from "@/types";
import ProgressCircle from "@/components/ProgressCircle";
import ImageViewer from "@/components/ImageViewer";

interface AIModalProps {
  student: Student;
  onClose: () => void;
}

const CATEGORY_STYLE: Record<string, string> = {
  Grammar: "var(--color-blue)",
  Vocabulary: "var(--color-purple)",
  Spelling: "var(--color-orange)",
  Punctuation: "var(--color-green)",
};

export default function AIModal({ student, onClose }: AIModalProps) {
  const [imagePreviewOpen, setImagePreviewOpen] = useState(false);
  const report = student.aiReport;
  if (!report) return null;

  return (
    <div
      className="animate-fade-in fixed inset-0 z-50 flex items-end justify-center bg-black/45 md:items-center md:p-4"
      onClick={onClose}
    >
      <div
        className="animate-slide-up flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-[28px] bg-white md:rounded-[28px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
              <Sparkles size={15} />
            </div>
            <div>
              <h2 className="font-display text-[15px] font-semibold leading-none text-[var(--color-text)]">
                {student.name}
              </h2>
              <p className="mt-1 text-[11.5px] text-[var(--color-text-faint)]">AI homework analysis</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close analysis"
            className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface-muted)]"
          >
            <X size={18} />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-5 md:grid md:grid-cols-2 md:gap-6">
          <div className="mb-5 md:mb-0">
            <p className="mb-2 text-[12px] font-medium text-[var(--color-text-muted)]">Notebook</p>
            <button
              type="button"
              onClick={() => setImagePreviewOpen(true)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-[var(--color-border)]"
            >
              <Image
                src={report.notebookImageUrl}
                alt={`${student.name} notebook page`}
                width={640}
                height={860}
                className="h-[260px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] md:h-[340px]"
              />
              <span className="absolute bottom-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-black/45 text-white opacity-90 transition-opacity group-hover:opacity-100">
                <Maximize2 size={14} />
              </span>
            </button>
          </div>

          <div>
            <div className="mb-5 flex items-center justify-center rounded-2xl bg-[var(--color-surface-muted)] py-5">
              <ProgressCircle score={report.score} />
            </div>

            <p className="mb-2 text-[12px] font-medium text-[var(--color-text-muted)]">
              Detected errors ({report.errors.length})
            </p>
            <div className="space-y-2">
              {report.errors.map((error) => (
                <div
                  key={error.id}
                  className="rounded-xl border border-[var(--color-border)] p-3"
                >
                  <span
                    className="mb-1.5 inline-block rounded-full px-2 py-0.5 text-[10.5px] font-medium text-white"
                    style={{ backgroundColor: CATEGORY_STYLE[error.category] }}
                  >
                    {error.category}
                  </span>
                  <p className="text-[12.5px] leading-snug text-[var(--color-red)] line-through decoration-1">
                    {error.original}
                  </p>
                  <p className="mt-1 text-[12.5px] leading-snug text-[var(--color-text)]">
                    {error.correction}
                  </p>
                  {error.note && (
                    <p className="mt-1 text-[11.5px] leading-snug text-[var(--color-text-faint)]">
                      {error.note}
                    </p>
                  )}
                </div>
              ))}
              {report.errors.length === 0 && (
                <p className="text-[12.5px] text-[var(--color-text-faint)]">No errors detected.</p>
              )}
            </div>

            <div className="mt-4 flex gap-2.5 rounded-2xl bg-[var(--color-accent-soft)] p-3.5">
              <Lightbulb size={16} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
              <p className="text-[12.5px] leading-snug text-[#0f5d80]">{report.recommendation}</p>
            </div>
          </div>
        </div>
      </div>

      {imagePreviewOpen && (
        <ImageViewer
          src={report.notebookImageUrl}
          alt={`${student.name} notebook page`}
          onClose={() => setImagePreviewOpen(false)}
        />
      )}
    </div>
  );
}
