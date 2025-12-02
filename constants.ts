import { Dish, Review, GalleryItem, TeamMember } from './types';
import { Offer } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Menu', path: '/menu' },
  { name: 'Offers', path: '/offers' },
  { name: 'Reservations', path: '/reservations' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export const MENU_ITEMS: Dish[] = [
  {
    id: 1,
    name: "Madras Chili Prawn Fry",
    description: "Tiger prawns tossed with roasted red chilies, curry leaves, and coastal spices, served with lemon wedges.",
    price: 1450,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
    isVeg: false,
    isPopular: true
  },
  {
    id: 2,
    name: "Nethili (Anchovy) Fry",
    description: "Crisp-fried anchovies coated in a turmeric-coconut crust with pickled shallots.",
    price: 1050,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: 3,
    name: "Chettinad Crab Cakes",
    description: "Blue crab patties spiced with peppercorn, fennel, and garlic, finished with raw mango slaw.",
    price: 1650,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    isVeg: false
  },
  {
    id: 4,
    name: "Karuvadu Curry",
    description: "Heirloom-style dry fish curry simmered in tamarind, shallots, and sun-dried chilies served with dosa crepes.",
    price: 2400,
    category: "Mains",
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=800&q=80",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: 5,
    name: "Malabar Meen Pollichathu",
    description: "Banana-leaf wrapped seer fish baked in coconut chili masala with pearl onions and lime.",
    price: 2650,
    category: "Mains",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
    isVeg: false,
    isPopular: true
  },
  {
    id: 6,
    name: "King Prawn Moilee",
    description: "Coconut-milk stew of jumbo prawns, ginger, and green chilies with appam curls.",
    price: 2550,
    category: "Mains",
    image: "https://images.unsplash.com/photo-1589621316386-00e2c08c5c8f?auto=format&fit=crop&w=800&q=80",
    isVeg: false,
    isSpicy: true
  },
  {
    id: 7,
    name: "Tender Coconut Payasam",
    description: "Slow-cooked coconut milk pudding with jaggery, cardamom, and roasted cashews.",
    price: 650,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    isPopular: true
  },
  {
    id: 8,
    name: "Elaneer Soufflé",
    description: "Feather-light tender coconut soufflé with palm sugar tuile.",
    price: 600,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&w=800&q=80",
    isVeg: true
  },
  {
    id: 9,
    name: "Spiced Toddy Cooler",
    description: "House toddy reduction with kokum, ginger, and sparkling lime; spirit-free and refreshing.",
    price: 450,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80",
    isVeg: true
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Divya Raman",
    rating: 5,
    comment: "Authentic coastal flavors that taste just like home in Karaikal. The seer fish pollichathu was unreal.",
    date: "2024-11-02",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Rohit Menon",
    rating: 5,
    comment: "Prawn moilee with appams and the toddy cooler—pure heaven. Service is warm and unrushed.",
    date: "2024-10-18",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Meera Swaminathan",
    rating: 4,
    comment: "Loved the spice levels and fresh catch. Book ahead for weekends—totally worth the wait.",
    date: "2024-09-05",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80"
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  { id: 1, category: 'Food', src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80', alt: 'Pepper crab on banana leaf' },
  { id: 2, category: 'Interior', src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80', alt: 'Coastal inspired dining room' },
  { id: 3, category: 'Food', src: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=1200&q=80', alt: 'Seafood curry with tamarind' },
  { id: 4, category: 'Chef', src: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80', alt: 'Chef plating grilled prawns' },
  { id: 5, category: 'Interior', src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80', alt: 'Bar with shell-inspired lighting' },
  { id: 6, category: 'Events', src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80', alt: 'Private coastal dinner setup' },
];

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Chef Raajeshwari Murugan",
    role: "Executive Chef",
    bio: "Raised on the Nagapattinam coast, she brings heirloom Tamil seafood recipes, slow toasting spices, and cooking each catch the day it arrives.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Arun Prakash",
    role: "Sous Chef",
    bio: "Arun pairs spice-forward gravies with fire-kissed grills, championing sustainable sourcing from small coastal boats.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80"
  }
];

export const OFFERS: Offer[] = [
  {
    id: 1,
    title: "Bay Breeze Tasting",
    description: "5-course coastal tasting with seer fish, king prawns, and tender coconut dessert.",
    price: "Rs. 2499 per person",
    tag: "Chef’s Pick",
    details: ["Includes mocktail pairing", "Appams & parottas included", "Limited seats nightly"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    cta: "Book Now",
  },
  {
    id: 2,
    title: "Sunday Fisherman’s Lunch",
    description: "Family-style spread of crab pepper roast, nethili fry, and coconut rice.",
    price: "Rs. 1899 for two",
    tag: "Weekend Special",
    details: ["Complimentary meen kola urundai", "Kids get payasam on the house"],
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
    cta: "Reserve Table",
  },
  {
    id: 3,
    title: "Early Catch Hour",
    description: "30% off starters 12–1 PM weekdays: prawns, anchovies, and squid specials.",
    price: "Save 30%",
    tag: "Weekday Offer",
    details: ["Dine-in only", "Subject to daily catch", "No pre-booking needed"],
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
    cta: "Plan Visit",
  },
  {
    id: 4,
    title: "Coastal Celebration",
    description: "Private dining menu for 10+, customized spice levels and vegetarian add-ons.",
    price: "From Rs. 1499 per guest",
    tag: "Groups",
    details: ["Dedicated host", "Custom seafood platters", "Advance booking required"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    cta: "Enquire",
  },
];
