export const eventsData = [
  {
    id: 1,
    title: "Summer Music Festival 2025",
    description: "Join us for an unforgettable weekend of live music featuring top artists from around the world.",
    date: "2025-07-15",
    time: "6:00 PM",
    city: "Los Angeles",
    venue: "Hollywood Bowl",
    type: "concert",
    price: "$89",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800",
    lat: 34.1122,
    lon: -118.3391
  },
  {
    id: 2,
    title: "Tech Conference 2025",
    description: "The biggest tech conference of the year featuring AI, blockchain, and future tech innovations.",
    date: "2025-09-20",
    time: "9:00 AM",
    city: "San Francisco",
    venue: "Moscone Center",
    type: "tech",
    price: "$299",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    lat: 37.7840,
    lon: -122.4014
  },
  {
    id: 3,
    title: "Marathon Championship",
    description: "Annual city marathon with participants from all over the country. Run for charity and personal achievement.",
    date: "2025-05-10",
    time: "7:00 AM",
    city: "New York",
    venue: "Central Park",
    type: "sports",
    price: "$45",
    image: "https://images.unsplash.com/photo-1486218119243-13883505764c?w=800",
    lat: 40.785091,
    lon: -73.968285
  },
  {
    id: 4,
    title: "Art & Wine Festival",
    description: "Experience local artists and wineries in this beautiful outdoor festival celebrating creativity.",
    date: "2025-08-12",
    time: "4:00 PM",
    city: "Napa Valley",
    venue: "Vineyard Estates",
    type: "art",
    price: "$65",
    image: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=800",
    lat: 38.5025,
    lon: -122.2654
  },
  {
    id: 5,
    title: "Startup Pitch Competition",
    description: "Watch innovative startups pitch their ideas to top investors for funding opportunities.",
    date: "2025-06-05",
    time: "2:00 PM",
    city: "Austin",
    venue: "Convention Center",
    type: "business",
    price: "Free",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800",
    lat: 30.2711,
    lon: -97.7437
  },
  {
    id: 6,
    title: "Food & Beer Expo",
    description: "Taste the best local craft beers and gourmet food from top chefs in the region.",
    date: "2025-10-18",
    time: "12:00 PM",
    city: "Portland",
    venue: "Expo Center",
    type: "food",
    price: "$35",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    lat: 45.5857,
    lon: -122.7069
  }
];

export const venuesData = [
  {
    id: 1,
    name: "Hollywood Bowl",
    address: "2301 N Highland Ave",
    city: "Los Angeles",
    type: "Concert Hall",
    capacity: 17500,
    rating: 4.8,
    description: "An iconic outdoor amphitheater known for its distinctive band shell and stunning acoustics. The Hollywood Bowl has been the summer home of the Los Angeles Philharmonic since 1922.",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800",
    amenities: ["Parking", "Food & Beverages", "Accessible Seating", "VIP Lounges"],
    yearEstablished: 1922
  },
  {
    id: 2,
    name: "Moscone Center",
    address: "747 Howard St",
    city: "San Francisco",
    type: "Conference Center",
    capacity: 22000,
    rating: 4.6,
    description: "The largest convention and exhibition complex in San Francisco, hosting major tech conferences, trade shows, and corporate events. State-of-the-art facilities with modern technology.",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800",
    amenities: ["WiFi", "Exhibition Halls", "Meeting Rooms", "Catering Services"],
    yearEstablished: 1981
  },
  {
    id: 3,
    name: "Central Park",
    address: "Central Park West & 5th Ave",
    city: "New York",
    type: "Stadium",
    capacity: 50000,
    rating: 4.9,
    description: "An urban park in Manhattan, offering 843 acres of scenic landscapes. Perfect venue for marathons, outdoor concerts, and large-scale public events in the heart of NYC.",
    image: "https://images.unsplash.com/photo-1486218119243-13883505764c?w=800",
    amenities: ["Open Air", "Scenic Routes", "Multiple Entry Points", "Public Facilities"],
    yearEstablished: 1857
  },
  {
    id: 4,
    name: "Vineyard Estates",
    address: "1234 Silverado Trail",
    city: "Napa Valley",
    type: "Arena",
    capacity: 3000,
    rating: 4.7,
    description: "A luxurious estate venue nestled among rolling vineyards, perfect for wine festivals, art exhibitions, and elegant outdoor gatherings with breathtaking valley views.",
    image: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=800",
    amenities: ["Wine Tasting", "Outdoor Space", "Gourmet Catering", "Parking"],
    yearEstablished: 1995
  },
  {
    id: 5,
    name: "Convention Center",
    address: "500 E Cesar Chavez St",
    city: "Austin",
    type: "Conference Center",
    capacity: 12000,
    rating: 4.5,
    description: "A premier convention facility in downtown Austin featuring flexible meeting spaces, modern technology infrastructure, and convenient access to the city's vibrant entertainment district.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800",
    amenities: ["WiFi", "AV Equipment", "Breakout Rooms", "On-site Dining"],
    yearEstablished: 1992
  },
  {
    id: 6,
    name: "Expo Center",
    address: "2060 N Marine Dr",
    city: "Portland",
    type: "Conference Center",
    capacity: 8000,
    rating: 4.4,
    description: "Portland's premier exposition facility featuring versatile spaces for trade shows, food festivals, and community events. Modern amenities with easy access to downtown.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    amenities: ["Parking", "Loading Docks", "Kitchen Facilities", "Outdoor Space"],
    yearEstablished: 2000
  },

];

export const eventTypes = [
  "concert",
  "tech",
  "sports",
  "art",
  "business",
  "food"
];

export const cities = [
  "Los Angeles",
  "San Francisco",
  "New York",
  "Napa Valley",
  "Austin",
  "Portland"
];

export const getEventById = (id) => {
  const num = Number(id);
  return eventsData.find((e) => e.id === num);
};

export const getVenueForEvent = (id) => {
  const ev = getEventById(id);
  if (!ev) return undefined;
  return {
    name: ev.venue,
    city: ev.city,
    address: ev.venue,
    capacity: 5000,
    lat: ev.lat,
    lon: ev.lon,
  };
};

export const getVenueById = (id) => {
  const num = Number(id);
  return venuesData.find((v) => v.id === num);
};

export const getEventsForVenue = (venueId) => {
  const num = Number(venueId);
  return eventsData.filter((e) => e.venueId === num);
};

export default getEventById;
