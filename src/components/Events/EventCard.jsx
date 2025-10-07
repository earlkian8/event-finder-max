import { Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
const EventCard = ({event}) => {
    return (
        <div 
              key={event.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group cursor-pointer"
            >
            <div className="relative h-48 overflow-hidden">
            <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute top-3 right-3 px-3 py-1 bg-indigo-700 text-white text-xs font-semibold rounded-full capitalize">
                {event.type}
            </div>
            </div>
            
            <div className="p-5">
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors">
                {event.title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {event.description}
            </p>
            
            <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>{new Date(event.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                })}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>{event.time}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>{event.venue}, {event.city}</span>
                </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-2xl font-bold text-indigo-700">
                {event.price}
                </span>
                <Link to={`/events/${event.id}`}>
                    <button className="px-4 py-2 bg-indigo-700 text-white rounded-lg font-medium hover:bg-indigo-800 hover:shadow-md transition-all duration-200">
                        View Details
                    </button>
                </Link>
            </div>
            </div>
        </div>
    );
}

export default EventCard