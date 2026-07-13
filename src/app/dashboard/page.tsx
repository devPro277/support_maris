import { Layers, Users, CheckCircle2, Clock } from "lucide-react";
import Header from "@/components/Header";
import StatCard from "@/components/StatCard";
import GroupCard from "@/components/GroupCard";
import { getDashboardStats, getGroups, getTeacher } from "@/utils/helpers";

export default function DashboardPage() {
  const teacher = getTeacher();
  const stats = getDashboardStats();
  const groups = getGroups();

  return (
    <div className="flex min-h-dvh flex-col gap-6 px-4 pb-8 pt-5">
      <Header teacher={teacher} />

      <div className="grid grid-cols-2 gap-3">
        <StatCard
          icon={Layers}
          title="Groups"
          value={stats.groupsCount}
          subtitle="Active this term"
          color="blue"
        />
        <StatCard
          icon={Users}
          title="Students"
          value={stats.studentsCount}
          subtitle="Across all groups"
          color="purple"
        />
        <StatCard
          icon={CheckCircle2}
          title="Submitted Today"
          value={stats.submittedToday}
          subtitle="Homework reviewed"
          color="green"
        />
        <StatCard
          icon={Clock}
          title="Waiting"
          value={stats.waiting}
          subtitle="Needs a reminder"
          color="orange"
        />
      </div>

      <div>
        <h2 className="font-display mb-3 px-1 text-[14px] font-semibold text-[var(--color-text)]">
          Your groups
        </h2>
        <div className="space-y-2.5">
          {groups.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>
      </div>
    </div>
  );
}
