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
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800"
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
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800"
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
    image: "https://images.unsplash.com/photo-1486218119243-13883505764c?w=800"
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
    image: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=800"
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
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800"
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
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800"
  }
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
  };
};

// default export kept for backward compatibility
export default getEventById;
