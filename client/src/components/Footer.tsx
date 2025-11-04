import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about/history">
                  <a className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-history">
                    History
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about/mission">
                  <a className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-mission">
                    Mission & Vision
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about/principal">
                  <a className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-principal">
                    Principal's Message
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about/governing">
                  <a className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-governing">
                    Governing Body
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Academics</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/academics/departments">
                  <a className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-departments">
                    Departments
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/academics/courses">
                  <a className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-courses">
                    Courses & Syllabus
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/academics/faculty">
                  <a className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-faculty">
                    Faculty Members
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/downloads">
                  <a className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-downloads">
                    Downloads
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Student Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/admissions/apply">
                  <a className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-apply">
                    Apply Online
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/student-life/clubs">
                  <a className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-clubs">
                    Clubs & Societies
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/student-life/hostel">
                  <a className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-hostel">
                    Hostel Facilities
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/placements">
                  <a className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-placements">
                    Placement Cell
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-muted-foreground flex-shrink-0" />
                <span className="text-sm text-muted-foreground" data-testid="text-address">
                  123 University Road, Education City, State 12345
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground" data-testid="text-phone">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground" data-testid="text-email">
                  info@excellence.edu
                </span>
              </li>
            </ul>
            <div className="mt-4 flex gap-2">
              <Button size="icon" variant="ghost" data-testid="button-facebook">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-twitter">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-instagram">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-linkedin">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © 2024 Excellence University. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy">
                <a className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-privacy">
                  Privacy Policy
                </a>
              </Link>
              <Link href="/terms">
                <a className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-terms">
                  Terms of Service
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
