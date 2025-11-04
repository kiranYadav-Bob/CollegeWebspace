import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DepartmentCard from "@/components/DepartmentCard";
import { Computer, FlaskConical, Building2, Briefcase, Heart, Calculator, Palette, Globe, BookOpen, Music } from "lucide-react";

export default function AcademicsPage() {
  //todo: remove mock functionality
  const departments = [
    { icon: Computer, title: "Computer Science", description: "Cutting-edge technology and software development", coursesCount: 25, href: "/academics/departments/cs" },
    { icon: FlaskConical, title: "Engineering", description: "Mechanical, Civil, and Electrical engineering", coursesCount: 30, href: "/academics/departments/engineering" },
    { icon: Calculator, title: "Mathematics", description: "Pure and applied mathematics", coursesCount: 15, href: "/academics/departments/math" },
    { icon: Briefcase, title: "Business Administration", description: "MBA and business programs", coursesCount: 20, href: "/academics/departments/business" },
    { icon: Heart, title: "Medical Sciences", description: "Healthcare and medical research", coursesCount: 18, href: "/academics/departments/medical" },
    { icon: Building2, title: "Architecture", description: "Design and urban planning", coursesCount: 12, href: "/academics/departments/architecture" },
    { icon: Palette, title: "Fine Arts", description: "Visual arts and design programs", coursesCount: 10, href: "/academics/departments/arts" },
    { icon: Globe, title: "Social Sciences", description: "Sociology, Psychology, and Economics", coursesCount: 22, href: "/academics/departments/social" },
    { icon: BookOpen, title: "Literature", description: "English and Comparative Literature", coursesCount: 14, href: "/academics/departments/literature" },
    { icon: Music, title: "Performing Arts", description: "Music, Theatre, and Dance", coursesCount: 8, href: "/academics/departments/performing" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="border-b bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl" data-testid="text-page-title">
                Academic Departments
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-page-subtitle">
                Excellence University offers a wide range of undergraduate and postgraduate programs across diverse disciplines. Our experienced faculty and modern facilities ensure world-class education.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {departments.map((dept) => (
                <DepartmentCard key={dept.title} {...dept} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
