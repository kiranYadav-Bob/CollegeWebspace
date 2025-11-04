import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import QuickLinks from "@/components/QuickLinks";
import DepartmentCard from "@/components/DepartmentCard";
import NewsCard from "@/components/NewsCard";
import EventCard from "@/components/EventCard";
import { Computer, FlaskConical, Building2, Briefcase, Heart, Calculator, Globe, BookOpen, Palette, Music } from "lucide-react";
import libraryImage from "@assets/generated_images/Library_interior_photo_13d10bb1.png";
import labImage from "@assets/generated_images/Science_lab_facility_a5499f61.png";
import sportsImage from "@assets/generated_images/Sports_facilities_campus_4c0bc1cc.png";

export default function HomePage() {
  //todo: remove mock functionality
  const departments = [
    {
      icon: Computer,
      title: "Computer Science",
      description: "AI, Machine Learning, and cutting-edge software development",
      coursesCount: 28,
      href: "/academics/departments/cs"
    },
    {
      icon: FlaskConical,
      title: "Engineering",
      description: "Mechanical, Civil, Electrical, and Electronics excellence",
      coursesCount: 35,
      href: "/academics/departments/engineering"
    },
    {
      icon: Calculator,
      title: "Mathematics",
      description: "Pure mathematics, applied statistics, and data analytics",
      coursesCount: 18,
      href: "/academics/departments/math"
    },
    {
      icon: Briefcase,
      title: "Business Administration",
      description: "MBA, Finance, Marketing, and Entrepreneurship programs",
      coursesCount: 24,
      href: "/academics/departments/business"
    },
    {
      icon: Heart,
      title: "Medical Sciences",
      description: "Medicine, Nursing, Pharmacy, and allied health sciences",
      coursesCount: 22,
      href: "/academics/departments/medical"
    },
    {
      icon: Building2,
      title: "Architecture",
      description: "Architecture, Interior Design, and urban planning",
      coursesCount: 15,
      href: "/academics/departments/architecture"
    },
    {
      icon: Computer,
      title: "Information Technology",
      description: "Cybersecurity, Cloud Computing, and Data Science",
      coursesCount: 22,
      href: "/academics/departments/it"
    },
    {
      icon: Globe,
      title: "Natural Sciences",
      description: "Physics, Chemistry, Biology, and Environmental Science",
      coursesCount: 20,
      href: "/academics/departments/sciences"
    },
    {
      icon: BookOpen,
      title: "Law & Legal Studies",
      description: "Constitutional, Criminal, and Corporate Law programs",
      coursesCount: 19,
      href: "/academics/departments/law"
    },
    {
      icon: Palette,
      title: "Fine Arts",
      description: "Visual Arts, Painting, Sculpture, and Digital Arts",
      coursesCount: 12,
      href: "/academics/departments/arts"
    },
    {
      icon: Music,
      title: "Performing Arts",
      description: "Music, Theatre, Dance, and Cinematography",
      coursesCount: 10,
      href: "/academics/departments/performing"
    },
    {
      icon: Globe,
      title: "Social Sciences",
      description: "Sociology, Psychology, Economics & Political Science",
      coursesCount: 26,
      href: "/academics/departments/social"
    },
  ];

  //todo: remove mock functionality
  const newsItems = [
    {
      title: "New Library Wing Inaugurated",
      excerpt: "State-of-the-art library facility with digital resources opens to students.",
      date: "November 20, 2024",
      category: "Campus News",
      image: libraryImage,
      href: "/news/library"
    },
    {
      title: "Research Grant Awarded",
      excerpt: "$2M grant awarded for renewable energy research project.",
      date: "November 15, 2024",
      category: "Research",
      image: labImage,
      href: "/news/research-grant"
    },
    {
      title: "Sports Team Wins Championship",
      excerpt: "University basketball team secures regional championship title.",
      date: "November 10, 2024",
      category: "Sports",
      image: sportsImage,
      href: "/news/championship"
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <Hero />
        <StatsBar />
        
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl" data-testid="text-departments-title">
                Our Departments
              </h2>
              <p className="text-lg text-muted-foreground" data-testid="text-departments-subtitle">
                Explore our diverse academic programs
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {departments.map((dept) => (
                <DepartmentCard key={dept.title} {...dept} />
              ))}
            </div>
          </div>
        </section>

        <QuickLinks />

        <section className="border-t bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl" data-testid="text-news-title">
                Latest News & Announcements
              </h2>
              <p className="text-lg text-muted-foreground" data-testid="text-news-subtitle">
                Stay updated with campus happenings
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {newsItems.map((news) => (
                <NewsCard key={news.title} {...news} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
