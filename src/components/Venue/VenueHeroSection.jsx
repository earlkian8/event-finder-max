import { Sparkles } from "lucide-react";

const VenueHeroSection = () => {
    return (
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
    );
}

export default VenueHeroSection