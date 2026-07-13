import { mockGroups, mockStats, mockStudents, mockTeacher } from "@/data/mockData";
import type { DashboardStats, Group, Student, SubmissionStatus, Teacher } from "@/types";

// --- Data access layer -----------------------------------------------------
// Every function below returns the same shape a REST endpoint would.
// Swapping mock arrays for `fetch()` calls later requires no changes
// to the components that consume these functions.

export function getTeacher(): Teacher {
  return mockTeacher;
}

export function getDashboardStats(): DashboardStats {
  return mockStats;
}

export function getGroups(): Group[] {
  return mockGroups;
}

export function getGroupById(id: string): Group | undefined {
  return mockGroups.find((group) => group.id === id);
}

export function getStudentsByGroupId(groupId: string): Student[] {
  return mockStudents.filter((student) => student.groupId === groupId);
}

export function getStudentById(id: string): Student | undefined {
  return mockStudents.find((student) => student.id === id);
}

export function getGroupSummary(group: Group): string {
  const students = getStudentsByGroupId(group.id);
  const waiting = students.filter((s) => s.status !== "submitted").length;
  if (waiting === 0) return "Everything checked";
  return `${waiting} homework${waiting > 1 ? "s" : ""} waiting`;
}

// --- Formatting helpers ------------------------------------------------

export function formatToday(): string {
  return new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export const STATUS_LABEL: Record<SubmissionStatus, string> = {
  submitted: "Submitted",
  pending: "Pending",
  not_submitted: "Not submitted",
};

export function getScoreTier(score: number): "excellent" | "good" | "fair" | "weak" {
  if (score >= 90) return "excellent";
  if (score >= 70) return "good";
  if (score >= 50) return "fair";
  return "weak";
}

export const SCORE_TIER_COLOR: Record<ReturnType<typeof getScoreTier>, string> = {
  excellent: "var(--color-green)",
  good: "var(--color-blue)",
  fair: "var(--color-orange)",
  weak: "var(--color-red)",
};

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
