import { useEffect, useState } from 'react';
import { Event } from '../types/Event';
import axios from 'axios';

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("https://event-tracking.onrender.com/api/scrape");
        // const res = await axios.get("http://localhost:5000/api/scrape");
        console.log("res", res);
        setEvents(res.data);
      } catch (err) {
        console.error("Failed to fetch events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return { events, loading };
};
