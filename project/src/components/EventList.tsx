import { Event } from '../types/Event';
import EventCard from './EventCard';

interface EventListProps {
  events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {

  return (
    <div className="max-w-7xl mx-auto px-4 mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {events.map((event) => (
          <div key={event.id}>
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;