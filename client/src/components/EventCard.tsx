import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image?: string;
}

export default function EventCard({ title, date, time, location, category, image }: EventCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all" data-testid={`card-event-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      {image && (
        <div className="h-48 overflow-hidden">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
      )}
      <CardContent className="p-6">
        <Badge className="mb-3" data-testid="badge-event-category">{category}</Badge>
        <h3 className="mb-3 text-xl font-semibold" data-testid="text-event-title">{title}</h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span data-testid="text-event-date">{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span data-testid="text-event-time">{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span data-testid="text-event-location">{location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
