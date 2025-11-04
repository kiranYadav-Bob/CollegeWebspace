import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Download, FileText, Calendar } from "lucide-react";

export default function AdmissionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="border-b bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl" data-testid="text-page-title">
                Admissions
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-page-subtitle">
                Begin your journey to academic excellence. Explore our programs and apply today.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="undergraduate" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="undergraduate" data-testid="tab-undergraduate">Undergraduate</TabsTrigger>
                <TabsTrigger value="postgraduate" data-testid="tab-postgraduate">Postgraduate</TabsTrigger>
              </TabsList>

              <TabsContent value="undergraduate" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle data-testid="text-eligibility-title">Eligibility Criteria</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• High school diploma or equivalent</li>
                        <li>• Minimum GPA of 3.0</li>
                        <li>• SAT/ACT scores (optional)</li>
                        <li>• English proficiency test (for international students)</li>
                        <li>• Letters of recommendation</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle data-testid="text-dates-title">Important Dates</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Application Opens: January 1, 2025</li>
                        <li>• Early Decision Deadline: March 15, 2025</li>
                        <li>• Regular Decision Deadline: May 31, 2025</li>
                        <li>• Admission Results: July 15, 2025</li>
                        <li>• Classes Begin: August 15, 2025</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle data-testid="text-fees-title">Tuition & Fees</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Tuition (per year)</span>
                          <span className="font-semibold">$18,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Hostel</span>
                          <span className="font-semibold">$4,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Other Fees</span>
                          <span className="font-semibold">$1,200</span>
                        </div>
                        <div className="border-t pt-3 flex justify-between">
                          <span className="font-semibold">Total (per year)</span>
                          <span className="font-bold text-primary">$23,200</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle data-testid="text-scholarships-title">Scholarships</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Merit-based scholarships up to 100%</li>
                        <li>• Need-based financial aid</li>
                        <li>• Sports scholarships</li>
                        <li>• Research assistantships</li>
                        <li>• International student grants</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <Link href="/admissions/apply">
                    <Button size="lg" data-testid="button-apply-online">
                      <FileText className="mr-2 h-5 w-5" />
                      Apply Online
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" data-testid="button-download-brochure">
                    <Download className="mr-2 h-5 w-5" />
                    Download Brochure
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="postgraduate" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle data-testid="text-pg-eligibility-title">Eligibility Criteria</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Bachelor's degree in relevant field</li>
                        <li>• Minimum GPA of 3.2</li>
                        <li>• GRE/GMAT scores (program dependent)</li>
                        <li>• English proficiency test (for international students)</li>
                        <li>• Statement of purpose</li>
                        <li>• Research proposal (for PhD programs)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle data-testid="text-pg-fees-title">Tuition & Fees</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Tuition (per year)</span>
                          <span className="font-semibold">$22,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Research Fees</span>
                          <span className="font-semibold">$2,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Other Fees</span>
                          <span className="font-semibold">$1,500</span>
                        </div>
                        <div className="border-t pt-3 flex justify-between">
                          <span className="font-semibold">Total (per year)</span>
                          <span className="font-bold text-primary">$25,500</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <Link href="/admissions/apply">
                    <Button size="lg" data-testid="button-pg-apply-online">
                      <FileText className="mr-2 h-5 w-5" />
                      Apply Online
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" data-testid="button-pg-download-brochure">
                    <Download className="mr-2 h-5 w-5" />
                    Download Brochure
                  </Button>
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
