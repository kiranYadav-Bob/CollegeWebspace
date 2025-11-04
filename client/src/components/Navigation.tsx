import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Menu, X, GraduationCap, Search } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aboutLinks = [
    { title: "History", href: "/about/history" },
    { title: "Mission & Vision", href: "/about/mission" },
    { title: "Principal's Message", href: "/about/principal" },
    { title: "Governing Body", href: "/about/governing" },
    { title: "Campus Infrastructure", href: "/about/infrastructure" },
  ];

  const academicsLinks = [
    { title: "Departments", href: "/academics/departments" },
    { title: "Courses & Syllabus", href: "/academics/courses" },
    { title: "Faculty Members", href: "/academics/faculty" },
    { title: "Academic Calendar", href: "/academics/calendar" },
  ];

  const admissionsLinks = [
    { title: "Undergraduate", href: "/admissions/undergraduate" },
    { title: "Postgraduate", href: "/admissions/postgraduate" },
    { title: "Fees & Scholarships", href: "/admissions/fees" },
    { title: "Apply Online", href: "/admissions/apply" },
  ];

  const studentLifeLinks = [
    { title: "Clubs & Societies", href: "/student-life/clubs" },
    { title: "Events & Festivals", href: "/student-life/events" },
    { title: "Hostel & Facilities", href: "/student-life/hostel" },
    { title: "Sports", href: "/student-life/sports" },
  ];

  return (
    <nav className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-3 py-2">
            <GraduationCap className="h-8 w-8 text-primary" data-testid="logo-icon" />
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none" data-testid="text-college-name">
                Excellence University
              </span>
              <span className="text-xs text-muted-foreground">Est. 1950</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/about" className="px-3 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md" data-testid="link-about">
                      About Us
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger data-testid="button-academics-menu">Academics</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {academicsLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link href={link.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none hover-elevate active-elevate-2" data-testid={`link-${link.title.toLowerCase().replace(/\s+/g, '-')}`}>
                              <div className="text-sm font-medium leading-none">{link.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger data-testid="button-admissions-menu">Admissions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {admissionsLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link href={link.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none hover-elevate active-elevate-2" data-testid={`link-${link.title.toLowerCase().replace(/\s+/g, '-')}`}>
                              <div className="text-sm font-medium leading-none">{link.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/research" className="px-3 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md" data-testid="link-research">
                      Research
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger data-testid="button-student-life-menu">Student Life</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {studentLifeLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link href={link.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none hover-elevate active-elevate-2" data-testid={`link-${link.title.toLowerCase().replace(/\s+/g, '-')}`}>
                              <div className="text-sm font-medium leading-none">{link.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/gallery" className="px-3 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md" data-testid="link-gallery">
                      Gallery
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/news" className="px-3 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md" data-testid="link-news">
                      News & Events
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/placements" className="px-3 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md" data-testid="link-placements">
                      Placements
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/contact" className="px-3 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md" data-testid="link-contact">
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-2">
            <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
              <DialogTrigger asChild>
                <Button size="icon" variant="ghost" data-testid="button-search">
                  <Search className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Search Website</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <Input
                    placeholder="Search courses, departments, faculty, events..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                    autoFocus
                  />
                  {searchQuery && (
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Search results for "{searchQuery}"</p>
                      <div className="rounded-md border p-4">
                        <p className="text-sm text-muted-foreground">No results found. Try different keywords.</p>
                      </div>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
            <ThemeToggle />
            <Link href="/admissions/apply">
              <Button variant="default" className="hidden sm:inline-flex" data-testid="button-apply-now">
                Apply Now
              </Button>
            </Link>
            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-in slide-in-from-top-2 duration-300" data-testid="mobile-menu">
            <div className="flex flex-col gap-2">
              <Link href="/about">
                <Button variant="ghost" className="w-full justify-start" data-testid="link-mobile-about">
                  About Us
                </Button>
              </Link>
              <Link href="/academics/departments">
                <Button variant="ghost" className="w-full justify-start" data-testid="link-mobile-academics">
                  Academics
                </Button>
              </Link>
              <Link href="/admissions/undergraduate">
                <Button variant="ghost" className="w-full justify-start" data-testid="link-mobile-admissions">
                  Admissions
                </Button>
              </Link>
              <Link href="/research">
                <Button variant="ghost" className="w-full justify-start" data-testid="link-mobile-research">
                  Research
                </Button>
              </Link>
              <Link href="/student-life/clubs">
                <Button variant="ghost" className="w-full justify-start" data-testid="link-mobile-student-life">
                  Student Life
                </Button>
              </Link>
              <Link href="/gallery">
                <Button variant="ghost" className="w-full justify-start" data-testid="link-mobile-gallery">
                  Gallery
                </Button>
              </Link>
              <Link href="/news">
                <Button variant="ghost" className="w-full justify-start" data-testid="link-mobile-news">
                  News & Events
                </Button>
              </Link>
              <Link href="/placements">
                <Button variant="ghost" className="w-full justify-start" data-testid="link-mobile-placements">
                  Placements
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" className="w-full justify-start" data-testid="link-mobile-contact">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}