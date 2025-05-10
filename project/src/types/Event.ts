export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  price: string;
  status?: 'sold-out' | 'nearly-full' | 'sales-ending' | 'unavailable';
  link: string;
  organizer: {
    name: string;
    followers: number;
  };
}