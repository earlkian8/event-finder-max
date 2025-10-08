import React, { useState } from 'react';
import { MapPin, Search, X, Sparkles, Building2, Users, Star, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { venuesData } from '../utils/data';

const VenuePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const venueTypes = ['All Types', 'Stadium', 'Concert Hall', 'Conference Center', 'Theater', 'Arena'];
  
  const cities = ['All Cities', ...new Set(venuesData.map(venue => venue.city))].sort();

  const filteredVenues = venuesData.filter(venue => {
    const matchesSearch = venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         venue.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         venue.address.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = !selectedType || selectedType === 'All Types' || venue.type === selectedType;
    const matchesCity = !selectedCity || selectedCity === 'All Cities' || venue.city === selectedCity;
    
    return matchesSearch && matchesType && matchesCity;
  });

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedType('');
    setSelectedCity('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="relative mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Explore Amazing Venues</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Discover Venues
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect location for your next event. Browse through our curated 
            collection of world-class venues.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search venues by name, city, or address..."
                  className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Type Filter */}
            <div className="relative w-full lg:w-48">
              <Building2 className="absolute left-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none appearance-none bg-white transition-all"
              >
                {venueTypes.map(type => (
                  <option key={type} value={type === 'All Types' ? '' : type}>
                    {type}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            {/* City Filter */}
            <div className="relative w-full lg:w-48">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none appearance-none bg-white transition-all"
              >
                {cities.map(city => (
                  <option key={city} value={city === 'All Cities' ? '' : city}>
                    {city}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Clear Button */}
            {(searchQuery || selectedType || selectedCity) && (
              <button
                onClick={handleClearFilters}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200 whitespace-nowrap"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200">
              <Building2 className="w-5 h-5 text-indigo-700" />
              <span className="font-semibold text-gray-800">{filteredVenues.length}</span>
              <span className="text-gray-600">
                {filteredVenues.length === 1 ? 'venue found' : 'venues found'}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="w-4 h-4" />
            <span>Worldwide</span>
          </div>
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
          {filteredVenues.map((venue) => (
            <div
              key={venue.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-indigo-700 text-white text-xs font-semibold rounded-full">
                  {venue.type}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors">
                  {venue.name}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{venue.address}, {venue.city}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>Capacity: {venue.capacity.toLocaleString()}</span>
                  </div>

                  {venue.rating && (
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{venue.rating} / 5.0</span>
                    </div>
                  )}
                </div>

                {venue.description && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {venue.description}
                  </p>
                )}

                <div className="pt-4 border-t border-gray-100">
                  <Link to={`/venues${venue.id}`}>
                    <button className="w-full px-4 py-2 bg-indigo-700 text-white rounded-lg font-medium hover:bg-indigo-800 hover:shadow-md transition-all duration-200">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredVenues.length === 0 && (
          <div className="text-center py-16">
            <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No venues found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <button
              onClick={handleClearFilters}
              className="px-6 py-3 bg-indigo-700 text-white rounded-lg font-medium hover:bg-indigo-800 hover:shadow-lg transition-all duration-200"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VenuePage;