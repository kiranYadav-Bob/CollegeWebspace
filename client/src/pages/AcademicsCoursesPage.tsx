
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AcademicsCoursesPage() {
  const ugCourses = [
    { code: "CS101", name: "Introduction to Programming", credits: 4 },
    { code: "CS201", name: "Data Structures & Algorithms", credits: 4 },
    { code: "CS301", name: "Database Management Systems", credits: 3 },
    { code: "CS401", name: "Machine Learning", credits: 4 },
    { code: "ENG101", name: "Engineering Mathematics", credits: 4 },
    { code: "BUS201", name: "Business Analytics", credits: 3 },
  ];

  const pgCourses = [
    { code: "CS501", name: "Advanced Algorithms", credits: 4 },
    { code: "CS601", name: "Artificial Intelligence", credits: 4 },
    { code: "CS701", name: "Cloud Computing", credits: 3 },
    { code: "MBA501", name: "Strategic Management", credits: 4 },
    { code: "MBA601", name: "Financial Management", credits: 3 },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="border-b bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Courses & Syllabus
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive curriculum designed for academic excellence.
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
                <div className="grid gap-4">
                  {ugCourses.map((course) => (
                    <Card key={course.code}>
                      <CardHeader>
                        <CardTitle className="text-lg flex justify-between">
                          <span>{course.code} - {course.name}</span>
                          <span className="text-sm text-muted-foreground">{course.credits} Credits</span>
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="postgraduate" className="mt-8">
                <div className="grid gap-4">
                  {pgCourses.map((course) => (
                    <Card key={course.code}>
                      <CardHeader>
                        <CardTitle className="text-lg flex justify-between">
                          <span>{course.code} - {course.name}</span>
                          <span className="text-sm text-muted-foreground">{course.credits} Credits</span>
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  ))}
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
