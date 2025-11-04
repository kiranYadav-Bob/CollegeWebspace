import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FacultyCard from "@/components/FacultyCard";

export default function FacultyPage() {
  //todo: remove mock functionality
  const faculty = [
    { name: "Dr. Sarah Johnson", designation: "Professor", department: "Computer Science", qualification: "PhD in CS, MIT", email: "s.johnson@excellence.edu" },
    { name: "Dr. Michael Chen", designation: "Associate Professor", department: "Engineering", qualification: "PhD in Mechanical Eng, Stanford", email: "m.chen@excellence.edu" },
    { name: "Dr. Emily Rodriguez", designation: "Professor", department: "Mathematics", qualification: "PhD in Mathematics, Harvard", email: "e.rodriguez@excellence.edu" },
    { name: "Dr. James Wilson", designation: "Assistant Professor", department: "Business", qualification: "PhD in Economics, Oxford", email: "j.wilson@excellence.edu" },
    { name: "Dr. Aisha Patel", designation: "Professor", department: "Medical Sciences", qualification: "MD, PhD, Johns Hopkins", email: "a.patel@excellence.edu" },
    { name: "Dr. David Brown", designation: "Associate Professor", department: "Architecture", qualification: "PhD in Urban Planning, MIT", email: "d.brown@excellence.edu" },
    { name: "Dr. Lisa Anderson", designation: "Professor", department: "Fine Arts", qualification: "MFA, Yale School of Art", email: "l.anderson@excellence.edu" },
    { name: "Dr. Robert Taylor", designation: "Assistant Professor", department: "Social Sciences", qualification: "PhD in Psychology, Berkeley", email: "r.taylor@excellence.edu" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="border-b bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl" data-testid="text-page-title">
                Our Faculty
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-page-subtitle">
                Meet our distinguished faculty members who bring decades of experience and expertise to guide your academic journey.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {faculty.map((member) => (
                <FacultyCard key={member.email} {...member} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
