export const eventsData = [
  {
    id: 1,
    title: "Tokyo Cherry Blossom Festival 2025",
    description: "Experience Japan’s famous cherry blossoms with live performances, food stalls, and cultural exhibits in Ueno Park.",
    date: "2025-04-05",
    time: "9:00 AM",
    city: "Tokyo",
    venue: "Ueno Park",
    type: "festival",
    price: "Free",
    image: "https://images.pexels.com/photos/356269/pexels-photo-356269.jpeg?auto=compress&cs=tinysrgb&w=800",
    lat: 35.7156,
    lon: 139.7745
  },
  {
    id: 2,
    title: "Paris Fashion Week 2025",
    description: "Witness the world’s top designers unveil their collections at the most prestigious fashion event in Paris.",
    date: "2025-09-25",
    time: "10:00 AM",
    city: "Paris",
    venue: "Carrousel du Louvre",
    type: "fashion",
    price: "€500",
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80",
    lat: 48.8610,
    lon: 2.3358
  },
  {
    id: 3,
    title: "New York Tech Expo 2025",
    description: "Explore cutting-edge innovations in AI, robotics, and blockchain at one of the biggest tech expos in the world.",
    date: "2025-06-18",
    time: "9:00 AM",
    city: "New York",
    venue: "Javits Center",
    type: "tech",
    price: "$250",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    lat: 40.7578,
    lon: -74.0021
  },
  {
    id: 4,
    title: "London Marathon 2025",
    description: "Join thousands of runners from around the world for one of the most iconic marathons through London’s landmarks.",
    date: "2025-04-27",
    time: "8:30 AM",
    city: "London",
    venue: "The Mall, Westminster",
    type: "sports",
    price: "£120",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
    lat: 51.5014,
    lon: -0.1419
  },
  {
    id: 5,
    title: "Rio Carnival 2025",
    description: "Dance to the rhythm of samba in the world’s biggest carnival celebration filled with color, music, and parades.",
    date: "2025-02-28",
    time: "5:00 PM",
    city: "Rio de Janeiro",
    venue: "Sambadrome Marquês de Sapucaí",
    type: "festival",
    price: "$100",
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716f?auto=format&fit=crop&w=800&q=80",
    lat: -22.9068,
    lon: -43.1729
  },
  {
    id: 6,
    title: "Sydney Vivid Festival 2025",
    description: "Enjoy spectacular light shows, live music, and art installations along Sydney Harbour and the Opera House.",
    date: "2025-05-23",
    time: "6:00 PM",
    city: "Sydney",
    venue: "Sydney Opera House",
    type: "art",
    price: "AUD 80",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
    lat: -33.8568,
    lon: 151.2153
  },
];

export const venuesData = [
  {
    id: 1,
    name: "Ueno Park",
    address: "Uenokoen, Taito City",
    city: "Tokyo",
    type: "Public Park",
    capacity: 20000,
    rating: 4.8,
    description: "A historical park in central Tokyo famous for its cherry blossoms and cultural landmarks.",
     image: "https://images.unsplash.com/photo-1585202900225-6d3ac20a6962?q=80&w=800",
    amenities: ["Rest Areas", "Gardens", "Food Stalls", "Museums Nearby"],
    yearEstablished: 1873
  },
  {
    id: 2,
    name: "Carrousel du Louvre",
    address: "99 Rue de Rivoli",
    city: "Paris",
    type: "Exhibition Hall",
    capacity: 10000,
    rating: 4.6,
    description: "A prestigious underground venue beneath the Louvre Museum hosting luxury fashion events and exhibitions.",
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80",
    amenities: ["Air Conditioning", "WiFi", "Catering", "Security"],
    yearEstablished: 1993
  },
  {
    id: 3,
    name: "Javits Center",
    address: "429 11th Ave",
    city: "New York",
    type: "Convention Center",
    capacity: 30000,
    rating: 4.7,
    description: "New York’s premier venue for large-scale conventions, expos, and trade shows.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    amenities: ["WiFi", "Cafeteria", "Exhibit Halls", "Accessibility"],
    yearEstablished: 1986
  },
  {
    id: 4,
    name: "The Mall, Westminster",
    address: "Westminster",
    city: "London",
    type: "Public Road",
    capacity: 50000,
    rating: 4.9,
    description: "An iconic road in central London used for major parades, marathons, and royal ceremonies.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
    amenities: ["Public Transport", "Restrooms Nearby", "First Aid", "Security"],
    yearEstablished: 1911
  },
  {
    id: 5,
    name: "Sambadrome Marquês de Sapucaí",
    address: "R. Marquês de Sapucaí",
    city: "Rio de Janeiro",
    type: "Parade Venue",
    capacity: 90000,
    rating: 4.8,
    description: "A world-famous venue for Rio Carnival’s samba parades and cultural performances.",
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716f?auto=format&fit=crop&w=800&q=80",
    amenities: ["Seating", "Food Vendors", "Restrooms", "Security"],
    yearEstablished: 1984
  },
  {
    id: 6,
    name: "Sydney Opera House",
    address: "Bennelong Point",
    city: "Sydney",
    type: "Cultural Venue",
    capacity: 5700,
    rating: 4.9,
    description: "An iconic Australian performing arts venue hosting concerts, light shows, and major cultural festivals.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
    amenities: ["Restaurants", "Tours", "WiFi", "Accessibility"],
    yearEstablished: 1973
  },
];

export const eventTypes = [
  "festival",
  "fashion",
  "tech",
  "sports",
  "art",
  "food",
  "business"
];

export const cities = [
  "Tokyo",
  "Paris",
  "New York",
  "London",
  "Rio de Janeiro",
  "Sydney",
  "Cape Town",
  "Dubai"
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
