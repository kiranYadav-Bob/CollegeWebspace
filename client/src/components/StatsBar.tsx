import { Users, GraduationCap, BookOpen, Award } from "lucide-react";

export default function StatsBar() {
  const stats = [
    { icon: Users, label: "Students Enrolled", value: "12,000+", testId: "stat-students" },
    { icon: GraduationCap, label: "Faculty Members", value: "800+", testId: "stat-faculty" },
    { icon: BookOpen, label: "Courses Offered", value: "150+", testId: "stat-courses" },
    { icon: Award, label: "Years of Excellence", value: "70+", testId: "stat-years" },
  ];

  return (
    <section className="border-b bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.testId} className="flex flex-col items-center text-center" data-testid={stat.testId}>
              <stat.icon className="mb-3 h-10 w-10 text-primary" />
              <div className="mb-2 text-4xl font-bold" data-testid={`${stat.testId}-value`}>{stat.value}</div>
              <div className="text-sm text-muted-foreground" data-testid={`${stat.testId}-label`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
