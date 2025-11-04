import GalleryGrid from '../GalleryGrid';
import libraryImage from '@assets/generated_images/Library_interior_photo_13d10bb1.png';
import labImage from '@assets/generated_images/Science_lab_facility_a5499f61.png';
import sportsImage from '@assets/generated_images/Sports_facilities_campus_4c0bc1cc.png';
import auditoriumImage from '@assets/generated_images/Auditorium_event_venue_748df2fd.png';
import computerLabImage from '@assets/generated_images/Computer_lab_technology_70d13558.png';

export default function GalleryGridExample() {
  const images = [
    { src: libraryImage, alt: "University Library", category: "Campus" },
    { src: labImage, alt: "Science Laboratory", category: "Facilities" },
    { src: sportsImage, alt: "Sports Complex", category: "Sports" },
    { src: auditoriumImage, alt: "Main Auditorium", category: "Campus" },
    { src: computerLabImage, alt: "Computer Lab", category: "Facilities" },
    { src: libraryImage, alt: "Reading Area", category: "Campus" },
  ];

  return (
    <div className="p-8">
      <GalleryGrid images={images} />
    </div>
  );
}
