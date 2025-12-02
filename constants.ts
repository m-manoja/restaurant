import { Dish, Review, GalleryItem, TeamMember } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Menu', path: '/menu' },
  { name: 'Reservations', path: '/reservations' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export const MENU_ITEMS: Dish[] = [
  {
    id: 1,
    name: "Truffle Arancini",
    description: "Crispy risotto balls infused with black truffle oil, served with garlic aioli.",
    price: 14,
    category: "Starters",
    image: "https://picsum.photos/400/300?random=1",
    isVeg: true,
    isPopular: true
  },
  {
    id: 2,
    name: "Wagyu Beef Carpaccio",
    description: "Thinly sliced raw beef, parmesan shavings, capers, and truffle vinaigrette.",
    price: 22,
    category: "Starters",
    image: "https://picsum.photos/400/300?random=2",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: 3,
    name: "Pan-Seared Scallops",
    description: "Jumbo scallops with cauliflower puree and crispy pancetta.",
    price: 19,
    category: "Starters",
    image: "https://picsum.photos/400/300?random=3",
    isVeg: false
  },
  {
    id: 4,
    name: "Herb-Crusted Lamb Rack",
    description: "Served with dauphinoise potatoes, seasonal greens, and rosemary jus.",
    price: 38,
    category: "Mains",
    image: "https://picsum.photos/400/300?random=4",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: 5,
    name: "Wild Mushroom Risotto",
    description: "Arborio rice, porcini mushrooms, parmesan crisp, and truffle oil.",
    price: 26,
    category: "Mains",
    image: "https://picsum.photos/400/300?random=5",
    isVeg: true
  },
  {
    id: 6,
    name: "Spicy Seafood Linguine",
    description: "Fresh mussels, clams, shrimp, and calamari in a spicy tomato sauce.",
    price: 32,
    category: "Mains",
    image: "https://picsum.photos/400/300?random=6",
    isVeg: false,
    isSpicy: true
  },
  {
    id: 7,
    name: "Molten Chocolate Lava Cake",
    description: "Warm chocolate cake with a gooey center, served with vanilla bean ice cream.",
    price: 12,
    category: "Desserts",
    image: "https://picsum.photos/400/300?random=7",
    isVeg: true,
    isPopular: true
  },
  {
    id: 8,
    name: "Lemon Basil Tart",
    description: "Zesty lemon curd in a butter pastry shell topped with fresh basil.",
    price: 10,
    category: "Desserts",
    image: "https://picsum.photos/400/300?random=8",
    isVeg: true
  },
  {
    id: 9,
    name: "Artisan Cocktails",
    description: "Selection of handcrafted cocktails using premium spirits and fresh ingredients.",
    price: 15,
    category: "Drinks",
    image: "https://picsum.photos/400/300?random=9",
    isVeg: true
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    rating: 5,
    comment: "The ambiance is stunning and the lamb rack was the best I've ever had. Highly recommend for date night!",
    date: "2023-10-15",
    image: "https://picsum.photos/100/100?random=10"
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    comment: "Exceptional service and the chef's specials are truly special. A gem in the city.",
    date: "2023-11-02",
    image: "https://picsum.photos/100/100?random=11"
  },
  {
    id: 3,
    name: "Emily Davis",
    rating: 4,
    comment: "Great food, slightly noisy on a Saturday night but the truffle arancini made up for it.",
    date: "2023-09-28",
    image: "https://picsum.photos/100/100?random=12"
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  { id: 1, category: 'Food', src: 'https://picsum.photos/800/600?random=20', alt: 'Plated Dish 1' },
  { id: 2, category: 'Interior', src: 'https://picsum.photos/800/600?random=21', alt: 'Dining Hall' },
  { id: 3, category: 'Food', src: 'https://picsum.photos/800/600?random=22', alt: 'Dessert Detail' },
  { id: 4, category: 'Chef', src: 'https://picsum.photos/800/600?random=23', alt: 'Chef Plating' },
  { id: 5, category: 'Interior', src: 'https://picsum.photos/800/600?random=24', alt: 'Bar Area' },
  { id: 6, category: 'Events', src: 'https://picsum.photos/800/600?random=25', alt: 'Wedding Setup' },
];

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Alessandro Rossi",
    role: "Executive Chef",
    bio: "With over 20 years of experience in Michelin-starred kitchens across Italy, Alessandro brings authentic flavors with a modern twist.",
    image: "https://picsum.photos/400/500?random=30"
  },
  {
    id: 2,
    name: "Maria Gonzales",
    role: "Sous Chef",
    bio: "Maria is the creative force behind our dessert menu, blending classic techniques with bold new flavors.",
    image: "https://picsum.photos/400/500?random=31"
  }
];