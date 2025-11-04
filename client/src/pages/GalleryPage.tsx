import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import campusImage from "@assets/generated_images/College_campus_aerial_hero_7a402c72.png";
import libraryImage from "@assets/generated_images/Library_interior_photo_13d10bb1.png";
import labImage from "@assets/generated_images/Science_lab_facility_a5499f61.png";
import sportsImage from "@assets/generated_images/Sports_facilities_campus_4c0bc1cc.png";
import auditoriumImage from "@assets/generated_images/Auditorium_event_venue_748df2fd.png";
import computerLabImage from "@assets/generated_images/Computer_lab_technology_70d13558.png";

export default function GalleryPage() {
  //todo: remove mock functionality
  const allImages = [
    { src: campusImage, alt: "Campus Aerial View", category: "Campus" },
    { src: libraryImage, alt: "University Library", category: "Facilities" },
    { src: labImage, alt: "Science Laboratory", category: "Facilities" },
    { src: sportsImage, alt: "Sports Complex", category: "Sports" },
    { src: auditoriumImage, alt: "Main Auditorium", category: "Events" },
    { src: computerLabImage, alt: "Computer Lab", category: "Facilities" },
    { src: libraryImage, alt: "Reading Area", category: "Campus" },
    { src: labImage, alt: "Research Lab", category: "Facilities" },
  ];

  const campusImages = allImages.filter(img => img.category === "Campus");
  const facilitiesImages = allImages.filter(img => img.category === "Facilities");
  const sportsImages = allImages.filter(img => img.category === "Sports");
  const eventsImages = allImages.filter(img => img.category === "Events");

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="border-b bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl" data-testid="text-page-title">
                Campus Gallery
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-page-subtitle">
                Explore our beautiful campus, modern facilities, and vibrant student life through these images.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 mb-8">
                <TabsTrigger value="all" data-testid="tab-all">All</TabsTrigger>
                <TabsTrigger value="campus" data-testid="tab-campus">Campus</TabsTrigger>
                <TabsTrigger value="facilities" data-testid="tab-facilities">Facilities</TabsTrigger>
                <TabsTrigger value="sports" data-testid="tab-sports">Sports</TabsTrigger>
                <TabsTrigger value="events" data-testid="tab-events">Events</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <GalleryGrid images={allImages} />
              </TabsContent>

              <TabsContent value="campus">
                <GalleryGrid images={campusImages} />
              </TabsContent>

              <TabsContent value="facilities">
                <GalleryGrid images={facilitiesImages} />
              </TabsContent>

              <TabsContent value="sports">
                <GalleryGrid images={sportsImages} />
              </TabsContent>

              <TabsContent value="events">
                <GalleryGrid images={eventsImages} />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
