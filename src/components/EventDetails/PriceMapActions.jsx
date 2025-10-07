import React from 'react';
import { Map } from 'lucide-react';

const PriceMapActions = ({ price, onOpenMap }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <div>
        <span className="block text-sm text-gray-600">Price</span>
        <span className="text-2xl font-bold text-indigo-600">{price}</span>
      </div>
      <button onClick={onOpenMap} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg flex items-center transition-colors">
        <Map className="h-5 w-5 mr-2" />
        Open Map
      </button>
    </div>
  );
};

export default PriceMapActions;
