import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DepartmentCard from "@/components/DepartmentCard";
import { Computer, FlaskConical, Building2, Briefcase, Heart, Calculator, Palette, Globe, BookOpen, Music, Beaker, Scale, Newspaper } from "lucide-react";

export default function AcademicsPage() {
  //todo: remove mock functionality
  const departments = [
    { icon: Computer, title: "Computer Science", description: "AI, Machine Learning, and Software Development", coursesCount: 28, href: "/academics/departments/cs" },
    { icon: FlaskConical, title: "Engineering", description: "Mechanical, Civil, Electrical, and Electronics", coursesCount: 35, href: "/academics/departments/engineering" },
    { icon: Calculator, title: "Mathematics", description: "Pure and Applied Mathematics & Statistics", coursesCount: 18, href: "/academics/departments/math" },
    { icon: Briefcase, title: "Business Administration", description: "MBA, Finance, Marketing & Entrepreneurship", coursesCount: 24, href: "/academics/departments/business" },
    { icon: Heart, title: "Medical Sciences", description: "Medicine, Nursing, Pharmacy & Allied Health", coursesCount: 22, href: "/academics/departments/medical" },
    { icon: Building2, title: "Architecture", description: "Architecture, Interior Design & Urban Planning", coursesCount: 15, href: "/academics/departments/architecture" },
    { icon: Palette, title: "Fine Arts", description: "Painting, Sculpture, Graphics & Digital Arts", coursesCount: 12, href: "/academics/departments/arts" },
    { icon: Globe, title: "Social Sciences", description: "Sociology, Psychology, Economics & Political Science", coursesCount: 26, href: "/academics/departments/social" },
    { icon: BookOpen, title: "Literature", description: "English, Comparative Literature & Linguistics", coursesCount: 16, href: "/academics/departments/literature" },
    { icon: Music, title: "Performing Arts", description: "Music, Theatre, Dance & Cinematography", coursesCount: 10, href: "/academics/departments/performing" },
    { icon: Beaker, title: "Natural Sciences", description: "Physics, Chemistry, Biology & Environmental Science", coursesCount: 20, href: "/academics/departments/sciences" },
    { icon: Computer, title: "Information Technology", description: "Cybersecurity, Cloud Computing & Data Science", coursesCount: 22, href: "/academics/departments/it" },
    { icon: Scale, title: "Law & Legal Studies", description: "Constitutional Law, Criminal Law & Corporate Law", coursesCount: 19, href: "/academics/departments/law" },
    { icon: Newspaper, title: "Mass Communication", description: "Journalism, Advertising & Public Relations", coursesCount: 14, href: "/academics/departments/masscomm" },
    { icon: Beaker, title: "Biotechnology", description: "Genetic Engineering, Bioinformatics & Biotech Research", coursesCount: 17, href: "/academics/departments/biotech" },
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
