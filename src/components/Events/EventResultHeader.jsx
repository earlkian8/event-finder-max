import { Calendar, MapPin } from "lucide-react";

const EventResultHeader = ({eventsData}) => {
    return (
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200">
              <Calendar className="w-5 h-5 text-indigo-700" />
              <span className="font-semibold text-gray-800">{eventsData.length}</span>
              <span className="text-gray-600">
                {eventsData.length === 1 ? 'event found' : 'events found'}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="w-4 h-4" />
            <span>Worldwide</span>
          </div>
        </div>
    );
}

export default EventResultHeader