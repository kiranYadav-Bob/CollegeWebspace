import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import EventCard from "@/components/EventCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import libraryImage from "@assets/generated_images/Library_interior_photo_13d10bb1.png";
import labImage from "@assets/generated_images/Science_lab_facility_a5499f61.png";
import sportsImage from "@assets/generated_images/Sports_facilities_campus_4c0bc1cc.png";
import auditoriumImage from "@assets/generated_images/Auditorium_event_venue_748df2fd.png";

export default function NewsPage() {
  //todo: remove mock functionality
  const newsItems = [
    { title: "New Library Wing Inaugurated", excerpt: "State-of-the-art library facility with modern digital resources opens to students.", date: "November 20, 2024", category: "Campus News", image: libraryImage, href: "/news/library" },
    { title: "Research Grant Awarded", excerpt: "$2M grant awarded for renewable energy research project.", date: "November 15, 2024", category: "Research", image: labImage, href: "/news/research-grant" },
    { title: "Sports Team Wins Championship", excerpt: "University basketball team secures regional championship title.", date: "November 10, 2024", category: "Sports", image: sportsImage, href: "/news/championship" },
    { title: "Annual Convocation 2024", excerpt: "University celebrates graduating class of 2024 with distinguished guests.", date: "November 5, 2024", category: "Events", image: auditoriumImage, href: "/news/convocation" },
    { title: "International Collaboration", excerpt: "Partnership with leading European universities announced.", date: "October 28, 2024", category: "Academic", image: libraryImage, href: "/news/collaboration" },
    { title: "Student Innovation Award", excerpt: "Engineering student wins national innovation competition.", date: "October 20, 2024", category: "Achievements", image: labImage, href: "/news/innovation" },
  ];

  //todo: remove mock functionality
  const upcomingEvents = [
    { title: "Annual Sports Day", date: "December 15, 2024", time: "9:00 AM - 5:00 PM", location: "Main Sports Complex", category: "Sports", image: sportsImage },
    { title: "Tech Symposium 2024", date: "December 10, 2024", time: "10:00 AM - 4:00 PM", location: "Auditorium Hall", category: "Academic", image: auditoriumImage },
    { title: "Cultural Fest", date: "December 20, 2024", time: "6:00 PM - 10:00 PM", location: "Open Air Theatre", category: "Cultural", image: auditoriumImage },
    { title: "Career Fair", date: "January 15, 2025", time: "11:00 AM - 5:00 PM", location: "Convention Center", category: "Placement", image: libraryImage },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="border-b bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl" data-testid="text-page-title">
                News & Events
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-page-subtitle">
                Stay updated with the latest happenings and upcoming events at Excellence University.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="news" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="news" data-testid="tab-news">Latest News</TabsTrigger>
                <TabsTrigger value="events" data-testid="tab-events">Upcoming Events</TabsTrigger>
              </TabsList>

              <TabsContent value="news">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {newsItems.map((news) => (
                    <NewsCard key={news.title} {...news} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="events">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {upcomingEvents.map((event) => (
                    <EventCard key={event.title} {...event} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
