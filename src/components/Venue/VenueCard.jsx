import { MapPin, Star, Users } from "lucide-react";

const VenueCard = ({venue}) => {
    return (
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
              </div>
            </div>
    );
}

export default VenueCard