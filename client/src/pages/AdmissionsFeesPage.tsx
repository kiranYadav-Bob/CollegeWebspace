
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdmissionsFeesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="border-b bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Fees & Scholarships
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Transparent fee structure and scholarship opportunities.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="undergraduate" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
                <TabsTrigger value="postgraduate">Postgraduate</TabsTrigger>
              </TabsList>

              <TabsContent value="undergraduate" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Fee Structure</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Tuition Fee</span>
                          <span className="font-semibold">$18,000/year</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Hostel</span>
                          <span className="font-semibold">$4,000/year</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Other Fees</span>
                          <span className="font-semibold">$1,200/year</span>
                        </div>
                        <div className="border-t pt-3 flex justify-between">
                          <span className="font-semibold">Total</span>
                          <span className="font-bold text-primary">$23,200/year</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Scholarships</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Merit scholarships up to 100%</li>
                        <li>• Need-based financial aid</li>
                        <li>• Sports scholarships</li>
                        <li>• Minority scholarships</li>
                        <li>• International student grants</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="postgraduate" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Fee Structure</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Tuition Fee</span>
                          <span className="font-semibold">$22,000/year</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Research Fees</span>
                          <span className="font-semibold">$2,000/year</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Other Fees</span>
                          <span className="font-semibold">$1,500/year</span>
                        </div>
                        <div className="border-t pt-3 flex justify-between">
                          <span className="font-semibold">Total</span>
                          <span className="font-bold text-primary">$25,500/year</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Scholarships</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Research assistantships</li>
                        <li>• Teaching assistantships</li>
                        <li>• Merit scholarships up to 50%</li>
                        <li>• Industry-sponsored fellowships</li>
                        <li>• Government grants</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
