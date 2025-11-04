import NewsCard from '../NewsCard';
import libraryImage from '@assets/generated_images/Library_interior_photo_13d10bb1.png';

export default function NewsCardExample() {
  return (
    <div className="p-8">
      <NewsCard
        title="New Library Wing Inaugurated"
        excerpt="The university celebrated the opening of a state-of-the-art library wing with modern facilities and digital resources."
        date="November 20, 2024"
        category="Campus News"
        image={libraryImage}
        href="/news/library-inauguration"
      />
    </div>
  );
}
