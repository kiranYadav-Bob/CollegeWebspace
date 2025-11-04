import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Building2, TrendingUp, Users, Award } from "lucide-react";

export default function PlacementsPage() {
  //todo: remove mock functionality
  const recruiters = [
    "Google", "Microsoft", "Amazon", "Apple", "Meta",
    "Tesla", "Goldman Sachs", "McKinsey", "Deloitte", "KPMG",
    "IBM", "Oracle", "Cisco", "Intel", "Adobe"
  ];

  //todo: remove mock functionality
  const alumniSuccess = [
    { name: "John Smith", company: "Google", designation: "Senior Software Engineer", testimonial: "Excellence University prepared me for a successful career in tech." },
    { name: "Sarah Johnson", company: "McKinsey & Co", designation: "Management Consultant", testimonial: "The rigorous academics and mentorship helped me excel in consulting." },
    { name: "Michael Chen", company: "Tesla", designation: "Product Manager", testimonial: "The innovation culture at the university shaped my entrepreneurial mindset." },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="border-b bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl" data-testid="text-page-title">
                Placement Cell
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-page-subtitle">
                Our dedicated placement cell ensures exceptional career opportunities for our students with top companies worldwide.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 border-b">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <TrendingUp className="mb-3 h-10 w-10 text-primary" />
                <div className="mb-2 text-4xl font-bold" data-testid="stat-placement-rate">95%</div>
                <div className="text-sm text-muted-foreground">Placement Rate</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <Building2 className="mb-3 h-10 w-10 text-primary" />
                <div className="mb-2 text-4xl font-bold" data-testid="stat-recruiters">200+</div>
                <div className="text-sm text-muted-foreground">Top Recruiters</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="mb-3 h-10 w-10 text-primary" />
                <div className="mb-2 text-4xl font-bold" data-testid="stat-students-placed">2,500+</div>
                <div className="text-sm text-muted-foreground">Students Placed</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="mb-3 h-10 w-10 text-primary" />
                <div className="mb-2 text-4xl font-bold" data-testid="stat-avg-package">$85K</div>
                <div className="text-sm text-muted-foreground">Average Package</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-3xl font-bold" data-testid="text-recruiters-title">
              Our Top Recruiters
            </h2>
            <div className="grid grid-cols-3 gap-6 md:grid-cols-5 lg:grid-cols-5">
              {recruiters.map((company) => (
                <Card key={company} className="hover-elevate active-elevate-2 transition-all">
                  <CardContent className="flex items-center justify-center p-6">
                    <span className="text-center font-semibold text-sm" data-testid={`text-company-${company.toLowerCase().replace(/\s+/g, '-')}`}>
                      {company}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-3xl font-bold" data-testid="text-alumni-title">
              Alumni Success Stories
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {alumniSuccess.map((alumni) => (
                <Card key={alumni.name}>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="text-lg">
                          {alumni.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold" data-testid="text-alumni-name">{alumni.name}</h3>
                        <p className="text-sm text-primary" data-testid="text-alumni-designation">{alumni.designation}</p>
                        <p className="text-sm text-muted-foreground" data-testid="text-alumni-company">{alumni.company}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground italic" data-testid="text-alumni-testimonial">
                      "{alumni.testimonial}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-3xl font-bold" data-testid="text-training-title">
              Training Programs
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle data-testid="text-program-title-1">Technical Skills Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Workshops on latest technologies, coding bootcamps, and hands-on projects to enhance technical proficiency.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle data-testid="text-program-title-2">Soft Skills Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Communication, leadership, and teamwork workshops to prepare students for corporate culture.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle data-testid="text-program-title-3">Interview Preparation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Mock interviews, aptitude tests, and group discussions to build confidence and readiness.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
