
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, BookOpen, Clock, Award } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AcademicsCoursesPage() {
  const ugCourses = [
    { 
      code: "CS101", 
      name: "Introduction to Programming", 
      credits: 4,
      duration: "1 Semester",
      syllabus: [
        "Fundamentals of Programming",
        "Data Types and Variables",
        "Control Structures",
        "Functions and Modules",
        "Object-Oriented Programming Basics"
      ]
    },
    { 
      code: "CS201", 
      name: "Data Structures & Algorithms", 
      credits: 4,
      duration: "1 Semester",
      syllabus: [
        "Arrays and Linked Lists",
        "Stacks and Queues",
        "Trees and Graphs",
        "Sorting and Searching Algorithms",
        "Algorithm Complexity Analysis"
      ]
    },
    { 
      code: "CS301", 
      name: "Database Management Systems", 
      credits: 3,
      duration: "1 Semester",
      syllabus: [
        "Relational Database Design",
        "SQL and Query Optimization",
        "Normalization",
        "Transactions and Concurrency",
        "NoSQL Databases"
      ]
    },
    { 
      code: "CS401", 
      name: "Machine Learning", 
      credits: 4,
      duration: "1 Semester",
      syllabus: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Neural Networks",
        "Deep Learning Fundamentals",
        "Model Evaluation and Deployment"
      ]
    },
    { 
      code: "ENG101", 
      name: "Engineering Mathematics", 
      credits: 4,
      duration: "1 Semester",
      syllabus: [
        "Calculus and Differential Equations",
        "Linear Algebra",
        "Probability and Statistics",
        "Numerical Methods",
        "Complex Analysis"
      ]
    },
    { 
      code: "BUS201", 
      name: "Business Analytics", 
      credits: 3,
      duration: "1 Semester",
      syllabus: [
        "Data Visualization",
        "Predictive Analytics",
        "Business Intelligence Tools",
        "Statistical Analysis",
        "Decision Support Systems"
      ]
    },
    { 
      code: "CS102", 
      name: "Web Development", 
      credits: 3,
      duration: "1 Semester",
      syllabus: [
        "HTML, CSS, JavaScript Fundamentals",
        "Responsive Design",
        "Frontend Frameworks",
        "Backend Development",
        "API Design and Integration"
      ]
    },
    { 
      code: "CS202", 
      name: "Operating Systems", 
      credits: 4,
      duration: "1 Semester",
      syllabus: [
        "Process Management",
        "Memory Management",
        "File Systems",
        "Concurrency and Synchronization",
        "Virtual Memory"
      ]
    },
  ];

  const pgCourses = [
    { 
      code: "CS501", 
      name: "Advanced Algorithms", 
      credits: 4,
      duration: "1 Semester",
      syllabus: [
        "Advanced Graph Algorithms",
        "Dynamic Programming",
        "Approximation Algorithms",
        "Randomized Algorithms",
        "Computational Complexity"
      ]
    },
    { 
      code: "CS601", 
      name: "Artificial Intelligence", 
      credits: 4,
      duration: "1 Semester",
      syllabus: [
        "Search Algorithms",
        "Knowledge Representation",
        "Machine Learning Integration",
        "Natural Language Processing",
        "Computer Vision"
      ]
    },
    { 
      code: "CS701", 
      name: "Cloud Computing", 
      credits: 3,
      duration: "1 Semester",
      syllabus: [
        "Cloud Architecture",
        "Virtualization Technologies",
        "Container Orchestration",
        "Serverless Computing",
        "Cloud Security"
      ]
    },
    { 
      code: "MBA501", 
      name: "Strategic Management", 
      credits: 4,
      duration: "1 Semester",
      syllabus: [
        "Competitive Strategy",
        "Corporate Strategy",
        "Strategic Planning",
        "Business Model Innovation",
        "Global Strategy"
      ]
    },
    { 
      code: "MBA601", 
      name: "Financial Management", 
      credits: 3,
      duration: "1 Semester",
      syllabus: [
        "Corporate Finance",
        "Investment Analysis",
        "Risk Management",
        "Financial Markets",
        "Portfolio Management"
      ]
    },
    { 
      code: "CS502", 
      name: "Deep Learning", 
      credits: 4,
      duration: "1 Semester",
      syllabus: [
        "Convolutional Neural Networks",
        "Recurrent Neural Networks",
        "Transformer Architectures",
        "Generative Models",
        "Advanced Optimization Techniques"
      ]
    },
    { 
      code: "CS602", 
      name: "Distributed Systems", 
      credits: 4,
      duration: "1 Semester",
      syllabus: [
        "Distributed Algorithms",
        "Consensus Protocols",
        "Fault Tolerance",
        "Distributed Storage",
        "Microservices Architecture"
      ]
    },
    { 
      code: "MBA502", 
      name: "Digital Marketing", 
      credits: 3,
      duration: "1 Semester",
      syllabus: [
        "SEO and SEM",
        "Social Media Marketing",
        "Content Marketing",
        "Analytics and Metrics",
        "E-commerce Strategies"
      ]
    },
  ];

  const handleDownloadPDF = (courseCode: string, courseName: string) => {
    // Create a simple PDF download simulation
    // In production, this would fetch actual PDF files from the server
    const pdfContent = `Course: ${courseCode} - ${courseName}\n\nSyllabus will be downloaded from the server.`;
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${courseCode}_Syllabus.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

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
                <Accordion type="single" collapsible className="space-y-4">
                  {ugCourses.map((course) => (
                    <AccordionItem key={course.code} value={course.code}>
                      <Card>
                        <AccordionTrigger className="hover:no-underline px-6">
                          <CardHeader className="p-0 flex-1">
                            <div className="flex items-start justify-between w-full">
                              <div className="flex-1">
                                <CardTitle className="text-lg text-left">
                                  {course.code} - {course.name}
                                </CardTitle>
                                <CardDescription className="flex items-center gap-4 mt-2">
                                  <span className="flex items-center gap-1">
                                    <Award className="h-4 w-4" />
                                    {course.credits} Credits
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    {course.duration}
                                  </span>
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-4">
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold mb-3 flex items-center gap-2">
                                  <BookOpen className="h-4 w-4" />
                                  Course Syllabus
                                </h4>
                                <ul className="space-y-2 ml-6">
                                  {course.syllabus.map((topic, index) => (
                                    <li key={index} className="text-sm text-muted-foreground list-disc">
                                      {topic}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <Button 
                                onClick={() => handleDownloadPDF(course.code, course.name)}
                                className="w-full sm:w-auto"
                                variant="outline"
                              >
                                <Download className="h-4 w-4 mr-2" />
                                Download Detailed Syllabus (PDF)
                              </Button>
                            </div>
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="postgraduate" className="mt-8">
                <Accordion type="single" collapsible className="space-y-4">
                  {pgCourses.map((course) => (
                    <AccordionItem key={course.code} value={course.code}>
                      <Card>
                        <AccordionTrigger className="hover:no-underline px-6">
                          <CardHeader className="p-0 flex-1">
                            <div className="flex items-start justify-between w-full">
                              <div className="flex-1">
                                <CardTitle className="text-lg text-left">
                                  {course.code} - {course.name}
                                </CardTitle>
                                <CardDescription className="flex items-center gap-4 mt-2">
                                  <span className="flex items-center gap-1">
                                    <Award className="h-4 w-4" />
                                    {course.credits} Credits
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    {course.duration}
                                  </span>
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                          <CardContent className="pt-4">
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold mb-3 flex items-center gap-2">
                                  <BookOpen className="h-4 w-4" />
                                  Course Syllabus
                                </h4>
                                <ul className="space-y-2 ml-6">
                                  {course.syllabus.map((topic, index) => (
                                    <li key={index} className="text-sm text-muted-foreground list-disc">
                                      {topic}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <Button 
                                onClick={() => handleDownloadPDF(course.code, course.name)}
                                className="w-full sm:w-auto"
                                variant="outline"
                              >
                                <Download className="h-4 w-4 mr-2" />
                                Download Detailed Syllabus (PDF)
                              </Button>
                            </div>
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
