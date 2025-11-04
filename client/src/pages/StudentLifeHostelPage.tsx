
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wifi, Utensils, Shield, Dumbbell } from "lucide-react";

export default function StudentLifeHostelPage() {
  const facilities = [
    { icon: Wifi, title: "High-Speed WiFi", description: "24/7 internet connectivity in all rooms" },
    { icon: Utensils, title: "Mess Facilities", description: "Nutritious meals with diverse menu options" },
    { icon: Shield, title: "24/7 Security", description: "CCTV monitoring and security personnel" },
    { icon: Dumbbell, title: "Recreation Room", description: "Games, gym, and entertainment facilities" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="border-b bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Hostel & Facilities
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Modern, safe, and comfortable accommodation for our students.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
              {facilities.map((facility) => (
                <Card key={facility.title}>
                  <CardHeader>
                    <facility.icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{facility.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{facility.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Hostel Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Room Rent (per year)</span>
                    <span className="font-semibold">$3,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Mess Charges (per year)</span>
                    <span className="font-semibold">$1,000</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between">
                    <span className="font-semibold">Total (per year)</span>
                    <span className="font-bold text-primary">$4,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
