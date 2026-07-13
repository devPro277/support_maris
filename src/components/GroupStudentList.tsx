"use client";

import { useState } from "react";
import type { Student } from "@/types";
import StudentRow from "@/components/StudentRow";
import AIModal from "@/components/AIModal";

interface GroupStudentListProps {
  students: Student[];
}

export default function GroupStudentList({ students }: GroupStudentListProps) {
  const [activeStudent, setActiveStudent] = useState<Student | null>(null);

  return (
    <>
      <div className="space-y-2.5">
        {students.map((student) => (
          <StudentRow key={student.id} student={student} onOpenReport={setActiveStudent} />
        ))}
      </div>

      {activeStudent && (
        <AIModal student={activeStudent} onClose={() => setActiveStudent(null)} />
      )}
    </>
  );
}
