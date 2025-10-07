
import EventCard from "./EventCard";
const EventGrid = ({eventsData}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
          {eventsData.map((event) => (
            <EventCard event={event}/>
          ))}
        </div>
    );
}

export default EventGrid