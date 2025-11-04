import { Link } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface DepartmentCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  coursesCount: number;
  href: string;
}

export default function DepartmentCard({ icon: Icon, title, description, coursesCount, href }: DepartmentCardProps) {
  return (
    <Card className="h-full hover-elevate active-elevate-2 transition-all" data-testid={`card-department-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-6">
        <Icon className="mb-4 h-12 w-12 text-primary" />
        <h3 className="mb-2 text-xl font-semibold" data-testid="text-department-title">{title}</h3>
        <p className="mb-4 text-sm text-muted-foreground" data-testid="text-department-description">{description}</p>
        <p className="text-sm font-medium text-muted-foreground" data-testid="text-department-courses">
          {coursesCount} Courses Available
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={href}>
          <Button variant="ghost" className="group" data-testid="button-view-courses">
            View Courses
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
