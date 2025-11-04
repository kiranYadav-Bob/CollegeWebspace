import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from 'react';

export default function Footer() {
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real application, you would navigate or perform a search action here.
    console.log("Searching for:", searchQuery);
    // Example: window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <>
      <nav className="border-b bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">UniConnect</h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/academics" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Academics
                </Link>
                <Link href="/admissions" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Admissions
                </Link>
                <Link href="/research" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Research
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <form onSubmit={handleSearch} className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
                <Button variant="ghost" size="icon" type="submit" className="text-gray-600 hover:text-blue-600">
                  <Search className="h-5 w-5" />
                </Button>
              </form>
              <div className="ml-4 flex items-center md:ml-6">
                {/* Profile dropdown or other user-related icons would go here */}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>
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
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = link.href;
                      }}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Student Services</h3>
              <ul className="space-y-2">
                {studentServices.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = link.href;
                      }}
                    >
                      {link.title}
                    </a>
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
    </>
  );
}