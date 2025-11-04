
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StudentLifeSportsPage() {
  const sports = [
    "Cricket", "Football", "Basketball", "Volleyball", "Tennis", 
    "Badminton", "Table Tennis", "Swimming", "Athletics", "Chess"
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="border-b bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Sports Facilities
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                State-of-the-art sports infrastructure for a healthy and active campus life.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Available Sports</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {sports.map((sport) => (
                <Card key={sport}>
                  <CardContent className="p-6 text-center">
                    <span className="font-semibold">{sport}</span>
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
