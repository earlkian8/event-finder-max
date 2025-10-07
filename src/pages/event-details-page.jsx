import React from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getEventById, getVenueForEvent } from './../utils/data';
import DetailNotFound from '../components/EventDetails/detail-not-found';

import HeroImage from '../components/EventDetails/HeroImage';
import EventMeta from '../components/EventDetails/EventMeta';
import About from '../components/EventDetails/About';
import Venue from '../components/EventDetails/Venue';
import PriceMapActions from '../components/EventDetails/PriceMapActions';
import ShareSection from '../components/EventDetails/ShareSection';

const EventDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const event = id ? getEventById(id) : undefined;
  const venue = id ? getVenueForEvent(id) : undefined;

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20 px-4 sm:px-6 lg:px-8 py-8">
        <DetailNotFound/>
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20 px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link to={`/events${location.search}`} className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to events
        </Link>
      </div>

      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <HeroImage src={event.image} title={event.title} />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{event.title}</h1>

          <EventMeta date={formattedDate} venueName={venue ? venue.name : event.city} type={eventType} />

          <About description={event.description} />

          <Venue venue={venue} />

          <PriceMapActions price={event.price} onOpenMap={handleOpenMap} />

          <ShareSection url={shareableUrl} />
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
