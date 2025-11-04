import EventCard from '../EventCard';
import sportsImage from '@assets/generated_images/Sports_facilities_campus_4c0bc1cc.png';

export default function EventCardExample() {
  return (
    <div className="p-8">
      <EventCard
        title="Annual Sports Day"
        date="December 15, 2024"
        time="9:00 AM - 5:00 PM"
        location="Main Sports Complex"
        category="Sports"
        image={sportsImage}
      />
    </div>
  );
}
