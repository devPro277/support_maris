export type SubmissionStatus = "submitted" | "pending" | "not_submitted";

export interface Teacher {
  id: string;
  name: string;
  avatarUrl: string;
  statusText: string;
}

export interface DashboardStats {
  groupsCount: number;
  studentsCount: number;
  submittedToday: number;
  waiting: number;
}

export interface Group {
  id: string;
  name: string;
  todayTopic: string;
  exerciseLabel: string;
  description: string;
  studentIds: string[];
}

export interface ErrorItem {
  id: string;
  category: "Grammar" | "Vocabulary" | "Spelling" | "Punctuation";
  original: string;
  correction: string;
  note?: string;
}

export interface AIReport {
  id: string;
  score: number;
  notebookImageUrl: string;
  errors: ErrorItem[];
  recommendation: string;
  analyzedAt: string;
}

export interface Student {
  id: string;
  groupId: string;
  name: string;
  avatarUrl: string;
  status: SubmissionStatus;
  score: number | null;
  aiReport: AIReport | null;
}
