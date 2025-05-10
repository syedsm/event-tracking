import React from 'react';
import EventList from './EventList';
import { useEvents }  from '../data/events';
import { Calendar, MapPin, Music } from 'lucide-react';

const EventsPage: React.FC = () => {
  const { events, loading } = useEvents(); // Destructure events and loading from the hook

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="pt-12 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-blue-700 mb-4">
            Upcoming Events in Sydney
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Discover and book tickets for the most exciting events happening in Sydney
          </p>
        </div>
      </header>

      <section className="mb-8">
        <div className="max-w-7xl mx-auto px-4 mb-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
              <Calendar size={16} className="mr-2" />
              All Events
            </button>
            {/* <button className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm hover:bg-gray-50 transition-colors">
              <Music size={16} className="mr-2" />
              Concerts
            </button>
            <button className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm hover:bg-gray-50 transition-colors">
              <MapPin size={16} className="mr-2" />
              Cruises
            </button> */}
          </div>
        </div>
        
        <EventList events={events} />
      </section>
      
      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2025 Sydney Events. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default EventsPage;