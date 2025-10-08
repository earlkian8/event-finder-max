import React, { useState } from 'react';
import { MapPin, Building2, Users, Star, ChevronDown } from 'lucide-react';
import { venuesData } from '../utils/data';
import VenueHeroSection from '../components/Venue/VenueHeroSection';
import VenueResultsHeader from '../components/Venue/VenueResultsHeader';
import VenuesGrid from '../components/Venue/VenuesGrid';
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
        <VenueHeroSection/>
        <VenueResultsHeader filteredVenues={filteredVenues}/>
        <VenuesGrid filteredVenues={filteredVenues}/>
      </div>
    </div>
  );
};

export default VenuePage;