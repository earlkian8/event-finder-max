import React from 'react';
import { Calendar, MapPin, Tag } from 'lucide-react';

const EventMeta = ({ date, venueName, type }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="flex items-center text-gray-600">
        <Calendar className="h-5 w-5 mr-2 text-indigo-600" />
        <span>{date}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <MapPin className="h-5 w-5 mr-2 text-indigo-600" />
        <span>{venueName}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <Tag className="h-5 w-5 mr-2 text-indigo-600" />
        <span>{type}</span>
      </div>
    </div>
  );
};

export default EventMeta;
