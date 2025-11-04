
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

export default function StudentLifeEventsPage() {
  const events = [
    { title: "Annual Tech Fest", date: "March 15-17, 2025", location: "Main Campus", description: "Three days of innovation, competitions, and workshops" },
    { title: "Cultural Night", date: "April 5, 2025", location: "Auditorium", description: "Showcase of diverse cultural performances and traditions" },
    { title: "Sports Week", date: "May 1-7, 2025", location: "Sports Complex", description: "Inter-department sports competitions and tournaments" },
    { title: "Science Exhibition", date: "June 10, 2025", location: "Science Block", description: "Student research projects and scientific demonstrations" },
    { title: "Music Festival", date: "July 20, 2025", location: "Open Air Theatre", description: "Live performances by student bands and artists" },
    { title: "Career Fair", date: "August 15, 2025", location: "Convention Center", description: "Meet recruiters and explore career opportunities" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="border-b bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Events & Festivals
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Experience a vibrant campus life with exciting events throughout the year.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {events.map((event) => (
                <Card key={event.title}>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
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
