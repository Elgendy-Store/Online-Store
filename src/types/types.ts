// Product Types
export interface Product {
  id: string;
  name: string;
  englishName?: string;
  description: string;
  price: number;
  images: string[];
  categories: string[]; // Changed from single category to array of categories
  subcategory?: string;
  features: string[];
  specifications: Record<string, string>;
  isAvailable: boolean;
  isNew: boolean;
  isPromotion: boolean;
  isBundle: boolean;
  rating: number;
  reviewCount: number;
  createdAt: Date;
  userRating?: number;
  discount_value:number;
}

export interface Category {
  id: string;
  name: string;
  englishName?: string;
  image: string;
  subcategories?: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  englishName?: string;
  image?: string;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: Date;
}

export interface BudgetItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: Date;
  avatar?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface StoreInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  workingHours: {
    days: string;
    hours: string;
  };
}

export interface SearchItem {
  id: string;
  name: string;
  englishName?: string;
  type: 'product' | 'category' | 'subcategory';
  categoryId?: string;
  subcategoryId?: string;
  priority: number; // For sorting: subcategory (3) > category (2) > product (1)
  highlightIndices?: number[][]; // For highlighting matches
  image?: string; // Optional image for product/category thumbnails
}