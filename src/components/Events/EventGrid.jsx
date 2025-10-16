import EventCard from "./EventCard";

const EventGrid = ({ eventsData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
      {eventsData && eventsData.length > 0 ? (
        eventsData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))
      ) : (
        <div className="col-span-full text-center text-gray-500 text-lg">
          No events found
        </div>
      )}
    </div>
  );
};

export default EventGrid;
