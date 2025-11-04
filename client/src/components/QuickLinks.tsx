import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, FileText, Users, Briefcase, FlaskConical, Library } from "lucide-react";

export default function QuickLinks() {
  const links = [
    {
      icon: FileText,
      title: "Admissions",
      description: "Apply for undergraduate and postgraduate programs",
      href: "/admissions/undergraduate",
      testId: "card-quick-admissions"
    },
    {
      icon: GraduationCap,
      title: "Academics",
      description: "Explore our departments and courses",
      href: "/academics/departments",
      testId: "card-quick-academics"
    },
    {
      icon: FlaskConical,
      title: "Research",
      description: "Discover our research initiatives and labs",
      href: "/research",
      testId: "card-quick-research"
    },
    {
      icon: Briefcase,
      title: "Placements",
      description: "Career opportunities and training programs",
      href: "/placements",
      testId: "card-quick-placements"
    },
    {
      icon: Users,
      title: "Student Life",
      description: "Clubs, events, and campus activities",
      href: "/student-life/clubs",
      testId: "card-quick-student-life"
    },
    {
      icon: Library,
      title: "Downloads",
      description: "Brochures, forms, and academic resources",
      href: "/downloads",
      testId: "card-quick-downloads"
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl" data-testid="text-quick-links-title">
            Quick Links
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-quick-links-subtitle">
            Find what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link key={link.testId} href={link.href}>
              <Card className="h-full hover-elevate active-elevate-2 cursor-pointer transition-all" data-testid={link.testId}>
                <CardContent className="flex flex-col items-start p-6">
                  <link.icon className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold" data-testid={`${link.testId}-title`}>
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`${link.testId}-description`}>
                    {link.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
