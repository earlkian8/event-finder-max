import VenueCard from "./VenueCard";
const VenuesGrid = ({filteredVenues}) => {
 return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
          {filteredVenues.map((venue) => (
            <VenueCard venue={venue}/>
          ))}
        </div>
 );
}

export default VenuesGrid