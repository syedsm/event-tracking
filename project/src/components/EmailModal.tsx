import React, { useState } from 'react';
import { X } from 'lucide-react';
import axios from 'axios';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
  onSubmit: (email: string) => void;
}

const EmailModal: React.FC<EmailModalProps> = ({ 
  isOpen, 
  onClose, 
  eventTitle, 
   
}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // axios.post("https://event-tracking-backend.onrender.com/api/save", { email, eventTitle }).then((res) => {
      axios.post("http://localhost:5000/api/save", { email, eventTitle }).then((res) => {
      // console.log("res", res);
      if (res.status === 201) {
        window.location.href = "https://www.eventbrite.com.au/d/australia--sydney/events/";
      }
    });
    
    setEmail('');
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
      <div 
        className="bg-white rounded-xl p-6 w-full max-w-md mx-4 relative transform transition-all duration-300 animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        
        <h3 className="text-xl font-bold text-gray-800 mb-4">Get tickets for</h3>
        <p className="text-blue-700 font-medium mb-6">{eventTitle}</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              required
            />
            {error && (
              <p className="mt-1 text-red-500 text-sm">{error}</p>
            )}
          </div>
          
          <div className="flex justify-end mt-6">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Get Ticket Link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailModal;