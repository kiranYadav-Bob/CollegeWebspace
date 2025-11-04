import { Link } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
  href: string;
}

export default function NewsCard({ title, excerpt, date, category, image, href }: NewsCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all" data-testid={`card-news-${title.toLowerCase().replace(/\s+/g, '-').slice(0, 30)}`}>
      {image && (
        <div className="h-48 overflow-hidden">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
      )}
      <CardContent className="p-6">
        <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span data-testid="text-news-date">{date}</span>
          <span className="text-xs">•</span>
          <span className="text-xs font-medium text-primary" data-testid="text-news-category">{category}</span>
        </div>
        <h3 className="mb-2 text-xl font-semibold" data-testid="text-news-title">{title}</h3>
        <p className="text-sm text-muted-foreground" data-testid="text-news-excerpt">{excerpt}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={href}>
          <Button variant="ghost" className="group" data-testid="button-read-more">
            Read More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
