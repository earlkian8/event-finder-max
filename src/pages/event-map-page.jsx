import React, { useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { getVenueForEvent } from './../utils/data';
import { X } from 'lucide-react';
import Map from '../components/EventDetails/map';


const EventMapPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const venue = id ? getVenueForEvent(id) : undefined;

  const close = () => {
    // navigate back to the details route, preserving query
    navigate(`/events/${id}${location.search}`);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (!venue) {
    return null;
  }

  return (
    // overlay container that sits in the Outlet area; style kept simple
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-40" onClick={close} />

      <div className="relative bg-white rounded-lg shadow-xl w-11/12 max-w-3xl overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">Map — {venue.name}</h3>
          <button onClick={close} className="p-2 rounded hover:bg-gray-100">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 h-80">
          {venue.lat && venue.lon ? (
            <div className="w-full h-full rounded overflow-hidden">
              <Map lat={venue.lat} lon={venue.lon} venue={venue} />
            </div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-sky-100 to-sky-300 rounded flex flex-col items-center justify-center">
              <div className="text-center">
                <p className="font-semibold text-indigo-700">{venue.name}</p>
                <p className="text-sm text-gray-700">{venue.address}, {venue.city}</p>
                <p className="text-sm text-gray-600 mt-2">Lat: {venue.lat}, Lon: {venue.lon}</p>
              </div>
            </div>
          )}

        </div>

        <div className="p-4 border-t text-right">
          <button onClick={close} className="bg-indigo-600 text-white px-4 py-2 rounded">Close</button>
        </div>
      </div>
    </div>
  );
};

export default EventMapPage;
