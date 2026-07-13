import type { AIReport, DashboardStats, Group, Student, Teacher } from "@/types";

export const mockTeacher: Teacher = {
  id: "t1",
  name: "Sardor aka",
  avatarUrl: "https://i.pravatar.cc/150?img=12",
  statusText: "Tizim barqaror ishlamoqda",
};

export const mockStats: DashboardStats = {
  groupsCount: 3,
  studentsCount: 45,
  submittedToday: 18,
  waiting: 5,
};

export const mockGroups: Group[] = [
  {
    id: "g1",
    name: "IELTS 7.0 Evening",
    todayTopic: "Present Perfect",
    exerciseLabel: "Exercise 12",
    description: "Focus on present perfect vs past simple with real-world examples.",
    studentIds: ["s1", "s2", "s3", "s4"],
  },
  {
    id: "g2",
    name: "General English Morning",
    todayTopic: "Daily Routines Vocabulary",
    exerciseLabel: "Exercise 5",
    description: "Everyday vocabulary practice through short writing tasks.",
    studentIds: ["s5", "s6", "s7"],
  },
  {
    id: "g3",
    name: "Kids Speaking Club",
    todayTopic: "Animals & Adjectives",
    exerciseLabel: "Exercise 3",
    description: "Simple sentence building using descriptive adjectives.",
    studentIds: ["s8", "s9", "s10"],
  },
];

const report = (overrides: Partial<AIReport> & { id: string }): AIReport => ({
  score: 85,
  notebookImageUrl: "https://picsum.photos/seed/" + overrides.id + "/640/860",
  errors: [],
  recommendation: "",
  analyzedAt: "2026-07-11T09:12:00Z",
  ...overrides,
});

export const mockStudents: Student[] = [
  {
    id: "s1",
    groupId: "g1",
    name: "Aziza Karimova",
    avatarUrl: "https://i.pravatar.cc/150?img=47",
    status: "submitted",
    score: 85,
    aiReport: report({
      id: "s1",
      score: 85,
      errors: [
        {
          id: "e1",
          category: "Grammar",
          original: "He have gone to school.",
          correction: "He has gone to school.",
          note: "Third-person singular requires 'has' with present perfect.",
        },
        {
          id: "e2",
          category: "Vocabulary",
          original: "Repeated use of 'good' four times in the paragraph.",
          correction: "Try 'great', 'impressive', or 'valuable' for variety.",
        },
      ],
      recommendation:
        "The student understands the grammar rule but loses points because of attention mistakes.",
    }),
  },
  {
    id: "s2",
    groupId: "g1",
    name: "Bekzod Yusupov",
    avatarUrl: "https://i.pravatar.cc/150?img=13",
    status: "pending",
    score: null,
    aiReport: null,
  },
  {
    id: "s3",
    groupId: "g1",
    name: "Dilnoza Rashidova",
    avatarUrl: "https://i.pravatar.cc/150?img=32",
    status: "not_submitted",
    score: null,
    aiReport: null,
  },
  {
    id: "s4",
    groupId: "g1",
    name: "Jasur Tashkentov",
    avatarUrl: "https://i.pravatar.cc/150?img=15",
    status: "submitted",
    score: 96,
    aiReport: report({
      id: "s4",
      score: 96,
      errors: [
        {
          id: "e3",
          category: "Spelling",
          original: "recieve",
          correction: "receive",
        },
      ],
      recommendation:
        "Excellent command of present perfect. Only a minor spelling slip affected the score.",
    }),
  },
  {
    id: "s5",
    groupId: "g2",
    name: "Kamola Nurmatova",
    avatarUrl: "https://i.pravatar.cc/150?img=44",
    status: "submitted",
    score: 62,
    aiReport: report({
      id: "s5",
      score: 62,
      errors: [
        {
          id: "e4",
          category: "Grammar",
          original: "I usually goes to school at 7.",
          correction: "I usually go to school at 7.",
          note: "Subject-verb agreement error with 'I'.",
        },
        {
          id: "e5",
          category: "Punctuation",
          original: "Missing capital letters at the start of two sentences.",
          correction: "Start every new sentence with a capital letter.",
        },
      ],
      recommendation:
        "Vocabulary is solid, but recurring subject-verb agreement mistakes are the main gap to address next.",
    }),
  },
  {
    id: "s6",
    groupId: "g2",
    name: "Otabek Sodiqov",
    avatarUrl: "https://i.pravatar.cc/150?img=51",
    status: "submitted",
    score: 78,
    aiReport: report({
      id: "s6",
      score: 78,
      errors: [
        {
          id: "e6",
          category: "Vocabulary",
          original: "Word 'nice' used five times.",
          correction: "Vary with 'enjoyable', 'pleasant', 'wonderful'.",
        },
      ],
      recommendation: "Good structure overall. Encourage a richer vocabulary range.",
    }),
  },
  {
    id: "s7",
    groupId: "g2",
    name: "Feruza Alimova",
    avatarUrl: "https://i.pravatar.cc/150?img=48",
    status: "not_submitted",
    score: null,
    aiReport: null,
  },
  {
    id: "s8",
    groupId: "g3",
    name: "Sanjar Bekov",
    avatarUrl: "https://i.pravatar.cc/150?img=60",
    status: "submitted",
    score: 91,
    aiReport: report({
      id: "s8",
      score: 91,
      errors: [
        {
          id: "e7",
          category: "Spelling",
          original: "elefant",
          correction: "elephant",
        },
      ],
      recommendation: "Strong sentence building for this level. Keep practicing adjective order.",
    }),
  },
  {
    id: "s9",
    groupId: "g3",
    name: "Madina Yoqubova",
    avatarUrl: "https://i.pravatar.cc/150?img=29",
    status: "pending",
    score: null,
    aiReport: null,
  },
  {
    id: "s10",
    groupId: "g3",
    name: "Ulugbek Rahimov",
    avatarUrl: "https://i.pravatar.cc/150?img=33",
    status: "submitted",
    score: 45,
    aiReport: report({
      id: "s10",
      score: 45,
      errors: [
        {
          id: "e8",
          category: "Grammar",
          original: "The cat is more big than the dog.",
          correction: "The cat is bigger than the dog.",
          note: "Short adjectives take '-er', not 'more'.",
        },
        {
          id: "e9",
          category: "Vocabulary",
          original: "Limited adjective range, mostly 'big' and 'small'.",
          correction: "Introduce 'huge', 'tiny', 'enormous' for description practice.",
        },
      ],
      recommendation:
        "Needs more practice with comparative adjectives before moving to the next unit.",
    }),
  },
];
