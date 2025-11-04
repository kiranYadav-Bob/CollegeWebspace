import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import heroImage from "@assets/generated_images/College_campus_aerial_hero_7a402c72.png";

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl" data-testid="text-hero-title">
            Welcome to Excellence University
          </h1>
          <p className="mb-8 text-xl text-white/90 md:text-2xl" data-testid="text-hero-subtitle">
            Empowering minds, shaping futures. Join a legacy of academic excellence spanning over 70 years.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/admissions/apply">
              <Button size="lg" variant="default" className="group" data-testid="button-hero-apply">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/academics/courses">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 text-white border-white/30 backdrop-blur-md hover:bg-white/20"
                data-testid="button-hero-explore"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
