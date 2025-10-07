import React from 'react';

const Venue = ({ venue }) => {
  if (!venue) return null;

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Venue</h2>
      <p className="text-gray-600 mb-1">{venue.name}</p>
      <p className="text-gray-600 mb-1">{venue.address}, {venue.city}</p>
      <p className="text-gray-600">Capacity: {venue.capacity.toLocaleString()}</p>
    </div>
  );
};

export default Venue;
