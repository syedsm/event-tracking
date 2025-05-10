import React, { useState } from 'react';
import { Event } from '../types/Event';
// import StatusBadge from './StatusBadge';
import EmailModal from './EmailModal';
import { Users } from 'lucide-react';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetTickets = () => {
    setIsModalOpen(true);
  };

  const handleEmailSubmit = (email: string) => {
    // In a real app, you would send this data to your backend
    console.log(`Email submitted: ${email} for event: ${event.title}`);
    window.open(event.link, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group relative h-full">
      <div className="relative">
        {/* <StatusBadge status={event.status} /> */}
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-5 flex flex-col h-[220px]">
        <div>
          <div className="flex items-center mb-1">
            <p className="text-blue-600 text-sm font-medium">{event.date} </p>
          </div>
          <h2 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2 group-hover:text-blue-700 transition-colors">
            {event.title}
          </h2>
          <p className="text-gray-500 text-sm mb-1">{event.location}</p>
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">
            {event.description}
          </p>
        </div>

        <div className="mt-auto">
          <div className="flex justify-between items-center mb-3">
            <p className="font-semibold text-gray-800">{event.price}</p>
            {/* <div className="flex items-center text-gray-500 text-xs">
              <Users size={14} className="mr-1" />
              <span>{event.organizer.followers.toLocaleString()} followers</span>
            </div> */}
          </div>
          
          <button
            onClick={handleGetTickets}
            disabled={event.status === 'sold-out' || event.status === 'unavailable'}
            className={`w-full py-2.5 px-4 rounded-lg font-medium text-sm transition-all duration-300 
              ${event.status === 'sold-out' || event.status === 'unavailable' 
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow'}`}
          >
            {event.status === 'sold-out' ? 'SOLD OUT' : 
             event.status === 'unavailable' ? 'UNAVAILABLE' : 'GET TICKETS'}
          </button>
        </div>
      </div>

      <EmailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        eventTitle={event.title}
        onSubmit={handleEmailSubmit}
      />
    </div>
  );
};

export default EventCard;