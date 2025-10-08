export const eventsData = [
  {
    id: 1,
    title: "Sinulog Festival 2025",
    description: "Celebrate Cebu’s grandest festival with vibrant street dancing, colorful parades, and live performances.",
    date: "2025-01-19",
    time: "8:00 AM",
    city: "Cebu City",
    venue: "Cebu City Sports Center",
    type: "festival",
    price: "Free",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800",
    lat: 10.3157,
    lon: 123.8854
  },
  {
    id: 2,
    title: "Manila Tech Summit 2025",
    description: "The country’s biggest technology conference featuring AI, fintech, and startup innovation sessions.",
    date: "2025-07-22",
    time: "9:00 AM",
    city: "Manila",
    venue: "SMX Convention Center",
    type: "tech",
    price: "₱2,500",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    lat: 14.5336,
    lon: 120.9822
  },
  {
    id: 3,
    title: "Philippine Marathon 2025",
    description: "Join thousands of runners for the annual marathon event promoting health and fitness across Metro Manila.",
    date: "2025-03-09",
    time: "5:00 AM",
    city: "Taguig",
    venue: "Bonifacio Global City",
    type: "sports",
    price: "₱800",
    image: "https://images.unsplash.com/photo-1502810190503-830027b8a1ce?w=800",
    lat: 14.5535,
    lon: 121.0497
  },
  {
    id: 4,
    title: "Art Fair Philippines 2025",
    description: "Discover the best of modern and contemporary Philippine visual art from top local galleries.",
    date: "2025-02-23",
    time: "10:00 AM",
    city: "Makati",
    venue: "The Link Carpark",
    type: "art",
    price: "₱350",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800",
    lat: 14.5539,
    lon: 121.0234
  },
  {
    id: 5,
    title: "Startup PH Pitch Day",
    description: "Watch innovative Filipino startups pitch their ideas to investors and business leaders.",
    date: "2025-05-15",
    time: "1:00 PM",
    city: "Quezon City",
    venue: "Ateneo de Manila University",
    type: "business",
    price: "Free",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800",
    lat: 14.6397,
    lon: 121.0782
  },
  {
    id: 6,
    title: "Davao Food & Coffee Expo",
    description: "Enjoy local delicacies, coffee tastings, and culinary workshops from top Mindanao chefs.",
    date: "2025-09-14",
    time: "11:00 AM",
    city: "Davao City",
    venue: "SMX Convention Center Davao",
    type: "food",
    price: "₱250",
    image: "https://images.unsplash.com/photo-1565958011705-44e211f9327d?w=800",
    lat: 7.0847,
    lon: 125.6123
  }
];

export const venuesData = [
  {
    id: 1,
    name: "Cebu City Sports Center",
    address: "Osmeña Blvd",
    city: "Cebu City",
    type: "Festival Grounds",
    capacity: 15000,
    rating: 4.8,
    description: "Main venue for Cebu’s Sinulog Festival and major sports events. Located in the heart of the city.",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800",
    amenities: ["Parking", "Food Stalls", "Public Seating", "Stage Area"],
    yearEstablished: 1994
  },
  {
    id: 2,
    name: "SMX Convention Center",
    address: "Seashell Ln, Mall of Asia Complex",
    city: "Manila",
    type: "Conference Center",
    capacity: 18000,
    rating: 4.6,
    description: "The largest convention and exhibition center in Metro Manila, hosting tech and trade events.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    amenities: ["WiFi", "Air Conditioning", "Catering", "Meeting Rooms"],
    yearEstablished: 2007
  },
  {
    id: 3,
    name: "Bonifacio Global City",
    address: "Taguig City",
    city: "Taguig",
    type: "Open Grounds",
    capacity: 20000,
    rating: 4.7,
    description: "A modern commercial district ideal for marathons, concerts, and outdoor festivals.",
    image: "https://images.unsplash.com/photo-1502810190503-830027b8a1ce?w=800",
    amenities: ["Open Space", "Parking", "Public Transport Access", "Shops Nearby"],
    yearEstablished: 2003
  },
  {
    id: 4,
    name: "The Link Carpark",
    address: "Ayala Center",
    city: "Makati",
    type: "Exhibit Hall",
    capacity: 3000,
    rating: 4.5,
    description: "A multi-level space in Makati transformed annually into an art hub during Art Fair Philippines.",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800",
    amenities: ["Air Conditioning", "Security", "Parking", "Accessibility"],
    yearEstablished: 2013
  },
  {
    id: 5,
    name: "Ateneo de Manila University",
    address: "Katipunan Ave, Loyola Heights",
    city: "Quezon City",
    type: "Conference Center",
    capacity: 8000,
    rating: 4.7,
    description: "One of the Philippines’ top universities, often used for academic and startup pitch events.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800",
    amenities: ["WiFi", "AV Equipment", "Auditoriums", "Cafeterias"],
    yearEstablished: 1859
  },
  {
    id: 6,
    name: "SMX Convention Center Davao",
    address: "SM Lanang Premier, JP Laurel Ave",
    city: "Davao City",
    type: "Conference Center",
    capacity: 10000,
    rating: 4.6,
    description: "A premier events venue in Mindanao known for food expos, conventions, and trade fairs.",
    image: "https://images.unsplash.com/photo-1565958011705-44e211f9327d?w=800",
    amenities: ["Catering", "WiFi", "Air Conditioning", "Parking"],
    yearEstablished: 2012
  }
];

export const eventTypes = [
  "festival",
  "tech",
  "sports",
  "art",
  "business",
  "food"
];

export const cities = [
  "Cebu City",
  "Manila",
  "Taguig",
  "Makati",
  "Quezon City",
  "Davao City"
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
