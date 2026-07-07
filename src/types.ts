export interface Listing {
  id: string;
  name: string;
  category: 'accommodation' | 'dining' | 'transport' | 'guide';
  subCategory: string; // e.g., 'Homestay', 'Nhà nghỉ', 'Cắm trại', 'Quán hải sản', 'Cafe', 'Thuê tàu/Cano', 'Thuê xe máy', 'Tour bản địa'
  image: string;
  address: string;
  priceRange: string;
  phone: string;
  zalo: string; // Full Zalo link, e.g., 'https://zalo.me/0905123456' or phone number
  mapUrl: string; // Google Maps sharing URL or embed src
  description: string;
  amenities: string[];
  rating: number;
  reviewsCount: number;
  featured?: boolean;
}

export interface Review {
  id: string;
  listingId: string;
  author: string;
  rating: number;
  content: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string; // Markdown or plain text content
  image: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface EmergencyContact {
  name: string;
  phone: string;
  role: string;
}

export interface ListingSubmission {
  name: string;
  category: string;
  subCategory: string;
  phone: string;
  zalo: string;
  address: string;
  priceRange: string;
  description: string;
}
