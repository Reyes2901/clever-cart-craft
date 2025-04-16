
// Product types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  category: string;
  images: string[];
  rating: number;
  inStock: boolean;
  featured?: boolean;
}

// Cart types
export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export interface Cart {
  items: CartItem[];
}

// Category types
export interface Category {
  id: string;
  name: string;
  description?: string;
  image?: string;
}
