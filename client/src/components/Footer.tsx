import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const aboutLinks = [
    { title: "History", href: "/about/history" },
    { title: "Mission & Vision", href: "/about/mission" },
    { title: "Campus", href: "/about/infrastructure" },
  ];

  const quickLinks = [
    { title: "Admissions", href: "/admissions/undergraduate" },
    { title: "Academics", href: "/academics/departments" },
    { title: "Research", href: "/research" },
    { title: "Placements", href: "/placements" },
  ];

  const studentLinks = [
    { title: "Student Portal", href: "/portal" },
    { title: "Library", href: "/library" },
    { title: "Events", href: "/student-life/events" },
    { title: "Clubs", href: "/student-life/clubs" },
  ];

  // Added academicsLinks based on the changes provided, assuming it was intended to be included.
  const academicsLinks = [
    { title: "Departments", href: "/academics/departments" },
    { title: "Programs", href: "/academics/programs" },
    { title: "Faculty", href: "/academics/faculty" },
  ];

  // Renamed studentLinks to studentServices for consistency with the changes provided.
  const studentServices = studentLinks;


  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About</h3>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Student Services</h3>
            <ul className="space-y-2">
              {studentServices.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Stay updated with our latest news and events.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="flex-1" />
              <Button>
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2024 Excellence University. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex gap-4 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}