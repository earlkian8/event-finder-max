import React, { useState } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { eventsData } from '../utils/data';
import { Calendar, MapPin, Tag, Map, ArrowLeft } from 'lucide-react';

const ShareableLink = ({ url }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      } else {

        const el = document.createElement('textarea');
        el.value = url;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {

      console.error('Copy failed', err);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input readOnly value={url} className="flex-1 px-3 py-2 border border-gray-200 rounded-md text-sm bg-gray-50" />
      <button onClick={copy} className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
};

const getEventById = (id) => {
  const num = Number(id);
  return eventsData.find((e) => e.id === num);
};

const getVenueForEvent = (id) => {
  const ev = getEventById(id);
  if (!ev) return undefined;
  return {
    name: ev.venue,
    city: ev.city,
    address: ev.venue,
    capacity: 5000,
  };
};

const EventDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const event = id ? getEventById(id) : undefined;
  const venue = id ? getVenueForEvent(id) : undefined;

  if (!event) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Event not found</h2>
        <p className="text-gray-600 mb-6">The event you're looking for doesn't exist or has been removed.</p>
        <Link to="/events" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to events
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const eventType = event.type.charAt(0).toUpperCase() + event.type.slice(1);

  const handleOpenMap = () => {
    navigate(`/events/${id}/map${location.search}`);
  };

  const shareableUrl = `${window.location.origin}/events/${id}${location.search}`;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link to={`/events${location.search}`} className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to events
        </Link>
      </div>

      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="h-80 overflow-hidden">
          <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{event.title}</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <Calendar className="h-5 w-5 mr-2 text-indigo-600" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2 text-indigo-600" />
              <span>{venue ? venue.name : event.city}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Tag className="h-5 w-5 mr-2 text-indigo-600" />
              <span>{eventType}</span>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">About this event</h2>
            <p className="text-gray-600">{event.description}</p>
          </div>

          {venue && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Venue</h2>
              <p className="text-gray-600 mb-1">{venue.name}</p>
              <p className="text-gray-600 mb-1">{venue.address}, {venue.city}</p>
              <p className="text-gray-600">Capacity: {venue.capacity.toLocaleString()}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <span className="block text-sm text-gray-600">Price</span>
              <span className="text-2xl font-bold text-indigo-600">{event.price}</span>
            </div>
            <button onClick={handleOpenMap} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg flex items-center transition-colors">
              <Map className="h-5 w-5 mr-2" />
              Open Map
            </button>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Share this event</h2>
            <ShareableLink url={shareableUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
