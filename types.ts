export interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'Starters' | 'Mains' | 'Desserts' | 'Drinks';
  image: string;
  isVeg: boolean;
  isSpicy?: boolean;
  isChefSpecial?: boolean;
  isPopular?: boolean;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  image?: string;
  date: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Offer {
  id: number;
  title: string;
  description: string;
  price: string;
  tag?: string;
  details?: string[];
  image: string;
  cta: string;
}

export interface GalleryItem {
  id: number;
  category: 'Food' | 'Interior' | 'Events' | 'Chef';
  src: string;
  alt: string;
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  requests: string;
}
