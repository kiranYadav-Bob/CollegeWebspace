
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConical, BookOpen, Users } from "lucide-react";

export default function ResearchPage() {
  const projects = [
    { title: "AI in Healthcare", lead: "Dr. Sarah Johnson", status: "Ongoing" },
    { title: "Sustainable Energy Solutions", lead: "Dr. Michael Chen", status: "Ongoing" },
    { title: "Quantum Computing Applications", lead: "Dr. Emily Davis", status: "Completed" },
    { title: "Climate Change Modeling", lead: "Dr. Robert Wilson", status: "Ongoing" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="border-b bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Research & Innovation
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Cutting-edge research advancing knowledge and solving real-world problems.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 border-b">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <FlaskConical className="mb-3 h-10 w-10 text-primary" />
                <div className="mb-2 text-4xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground">Active Projects</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <BookOpen className="mb-3 h-10 w-10 text-primary" />
                <div className="mb-2 text-4xl font-bold">200+</div>
                <div className="text-sm text-muted-foreground">Publications</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="mb-3 h-10 w-10 text-primary" />
                <div className="mb-2 text-4xl font-bold">100+</div>
                <div className="text-sm text-muted-foreground">Researchers</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Ongoing Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <Card key={project.title}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Lead Researcher: {project.lead}</p>
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                        {project.status}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
