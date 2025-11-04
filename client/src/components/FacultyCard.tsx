import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail } from "lucide-react";

interface FacultyCardProps {
  name: string;
  designation: string;
  department: string;
  qualification: string;
  email: string;
  image?: string;
}

export default function FacultyCard({ name, designation, department, qualification, email, image }: FacultyCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);

  return (
    <Card className="h-full hover-elevate active-elevate-2 transition-all" data-testid={`card-faculty-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-6 text-center">
        <Avatar className="mx-auto mb-4 h-24 w-24">
          {image && <AvatarImage src={image} alt={name} />}
          <AvatarFallback className="text-lg">{initials}</AvatarFallback>
        </Avatar>
        <h3 className="mb-1 text-lg font-semibold" data-testid="text-faculty-name">{name}</h3>
        <p className="mb-2 text-sm font-medium text-primary" data-testid="text-faculty-designation">{designation}</p>
        <p className="mb-1 text-sm text-muted-foreground" data-testid="text-faculty-department">{department}</p>
        <p className="mb-3 text-xs text-muted-foreground" data-testid="text-faculty-qualification">{qualification}</p>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Mail className="h-4 w-4" />
          <a href={`mailto:${email}`} className="hover:text-foreground" data-testid="link-faculty-email">
            {email}
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
