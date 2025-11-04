import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4" data-testid="gallery-grid">
        {images.map((image, index) => (
          <Card
            key={index}
            className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer transition-all"
            onClick={() => setSelectedImage(image)}
            data-testid={`gallery-image-${index}`}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0" data-testid="dialog-image-preview">
          <div className="relative">
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-2 top-2 z-10"
              onClick={() => setSelectedImage(null)}
              data-testid="button-close-preview"
            >
              <X className="h-4 w-4" />
            </Button>
            {selectedImage && (
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full"
                data-testid="image-preview"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
