
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Music, Code, Palette, Book, Camera, Theater, Globe } from "lucide-react";

export default function StudentLifeClubsPage() {
  const clubs = [
    { icon: Code, name: "Tech Club", description: "Coding competitions, hackathons, and tech workshops", members: 150 },
    { icon: Music, name: "Music Society", description: "Bands, orchestras, and music performances", members: 80 },
    { icon: Palette, name: "Arts & Crafts", description: "Painting, sculpture, and creative workshops", members: 65 },
    { icon: Book, name: "Literary Society", description: "Book clubs, poetry, and creative writing", members: 90 },
    { icon: Camera, name: "Photography Club", description: "Photo walks, exhibitions, and workshops", members: 70 },
    { icon: Theater, name: "Drama Club", description: "Plays, skits, and theatrical performances", members: 55 },
    { icon: Globe, name: "International Club", description: "Cultural exchange and global awareness", members: 100 },
    { icon: Users, name: "Debate Society", description: "Public speaking and debate competitions", members: 85 },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="border-b bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Clubs & Societies
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Join our vibrant student community and explore your interests beyond academics.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clubs.map((club) => (
                <Card key={club.name} className="hover-elevate transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <club.icon className="h-8 w-8 text-primary" />
                      <CardTitle>{club.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{club.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4" />
                      <span>{club.members} members</span>
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
