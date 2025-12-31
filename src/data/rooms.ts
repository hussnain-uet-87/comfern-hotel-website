export interface Room {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  images: string[];
  maxOccupancy: {
    adults: number;
    children: number;
  };
  checkIn: string;
  checkOut: string;
  amenities: {
    icon: string;
    name: string;
  }[];
  cancellationPolicy: string;
  size: string;
}

export const rooms: Room[] = [
  {
    id: "presidential-suite",
    title: "Presidential Suite",
    price: 899,
    thumbnail: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    description: "Experience unparalleled luxury in our most prestigious accommodation. This expansive suite features panoramic city views, a private terrace, and bespoke furnishings that epitomize sophistication.",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&q=80"
    ],
    maxOccupancy: { adults: 2, children: 2 },
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    size: "85 sqm",
    amenities: [
      { icon: "Bed", name: "King Size Bed" },
      { icon: "Shower", name: "Rain Shower" },
      { icon: "Wifi", name: "High-Speed WiFi" },
      { icon: "Wine", name: "Mini-Bar" },
      { icon: "Tv", name: "Smart TV 65\"" },
      { icon: "Coffee", name: "Espresso Machine" },
      { icon: "Wind", name: "Climate Control" },
      { icon: "Armchair", name: "Living Area" }
    ],
    cancellationPolicy: "Free cancellation 48h before arrival"
  },
  {
    id: "executive-deluxe",
    title: "Executive Deluxe",
    price: 549,
    thumbnail: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    description: "Refined elegance meets modern comfort. This spacious room offers stunning views and premium amenities designed for the discerning traveler.",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=1200&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80"
    ],
    maxOccupancy: { adults: 2, children: 1 },
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    size: "55 sqm",
    amenities: [
      { icon: "Bed", name: "King Size Bed" },
      { icon: "Shower", name: "Rain Shower" },
      { icon: "Wifi", name: "High-Speed WiFi" },
      { icon: "Wine", name: "Mini-Bar" },
      { icon: "Tv", name: "Smart TV 55\"" },
      { icon: "Coffee", name: "Coffee Maker" },
      { icon: "Wind", name: "Climate Control" },
      { icon: "Briefcase", name: "Work Desk" }
    ],
    cancellationPolicy: "Free cancellation 48h before arrival"
  },
  {
    id: "grand-premier",
    title: "Grand Premier",
    price: 429,
    thumbnail: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80",
    description: "A harmonious blend of comfort and style. Perfect for both leisure and business travelers seeking a premium experience.",
    images: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=1200&q=80"
    ],
    maxOccupancy: { adults: 2, children: 1 },
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    size: "45 sqm",
    amenities: [
      { icon: "Bed", name: "Queen Size Bed" },
      { icon: "Shower", name: "Premium Shower" },
      { icon: "Wifi", name: "High-Speed WiFi" },
      { icon: "Wine", name: "Mini-Bar" },
      { icon: "Tv", name: "Smart TV 50\"" },
      { icon: "Coffee", name: "Coffee Maker" },
      { icon: "Wind", name: "Climate Control" },
      { icon: "Sofa", name: "Seating Area" }
    ],
    cancellationPolicy: "Free cancellation 48h before arrival"
  },
  {
    id: "signature-suite",
    title: "Signature Suite",
    price: 679,
    thumbnail: "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?w=800&q=80",
    description: "Distinguished by timeless design and exceptional comfort. This suite offers a separate living area and breathtaking views.",
    images: [
      "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?w=1200&q=80",
      "https://images.unsplash.com/photo-1631049035182-249067d7618e?w=1200&q=80",
      "https://images.unsplash.com/photo-1559508551-44bff1de756b?w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80"
    ],
    maxOccupancy: { adults: 2, children: 2 },
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    size: "65 sqm",
    amenities: [
      { icon: "Bed", name: "King Size Bed" },
      { icon: "Shower", name: "Rain Shower & Tub" },
      { icon: "Wifi", name: "High-Speed WiFi" },
      { icon: "Wine", name: "Premium Mini-Bar" },
      { icon: "Tv", name: "Smart TV 60\"" },
      { icon: "Coffee", name: "Espresso Machine" },
      { icon: "Wind", name: "Climate Control" },
      { icon: "Armchair", name: "Living Room" }
    ],
    cancellationPolicy: "Free cancellation 48h before arrival"
  },
  {
    id: "luxury-classic",
    title: "Luxury Classic",
    price: 349,
    thumbnail: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&q=80",
    description: "Classic sophistication meets modern amenities. An ideal choice for those who appreciate understated elegance and comfort.",
    images: [
      "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=1200&q=80",
      "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=1200&q=80",
      "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=1200&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80"
    ],
    maxOccupancy: { adults: 2, children: 1 },
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    size: "40 sqm",
    amenities: [
      { icon: "Bed", name: "Queen Size Bed" },
      { icon: "Shower", name: "Premium Shower" },
      { icon: "Wifi", name: "High-Speed WiFi" },
      { icon: "Wine", name: "Mini-Bar" },
      { icon: "Tv", name: "Smart TV 48\"" },
      { icon: "Coffee", name: "Coffee Maker" },
      { icon: "Wind", name: "Climate Control" },
      { icon: "Briefcase", name: "Work Desk" }
    ],
    cancellationPolicy: "Free cancellation 48h before arrival"
  },
  {
    id: "premier-garden",
    title: "Premier Garden View",
    price: 389,
    thumbnail: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    description: "Serene garden views complement the refined interiors. Perfect for guests seeking tranquility with luxury amenities.",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=80",
      "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=1200&q=80"
    ],
    maxOccupancy: { adults: 2, children: 1 },
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    size: "42 sqm",
    amenities: [
      { icon: "Bed", name: "Queen Size Bed" },
      { icon: "Shower", name: "Premium Shower" },
      { icon: "Wifi", name: "High-Speed WiFi" },
      { icon: "Wine", name: "Mini-Bar" },
      { icon: "Tv", name: "Smart TV 50\"" },
      { icon: "Coffee", name: "Coffee Maker" },
      { icon: "Wind", name: "Climate Control" },
      { icon: "Flower", name: "Garden View" }
    ],
    cancellationPolicy: "Free cancellation 48h before arrival"
  }
];
