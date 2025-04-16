
import { Product, Category } from "../types";

export const categories: Category[] = [
  {
    id: "electronics",
    name: "Electronics",
    description: "Latest gadgets and electronic devices",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "clothing",
    name: "Clothing",
    description: "Trendy clothing for all occasions",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoaW5nfGVufDB8fDB8fHww"
  },
  {
    id: "home",
    name: "Home & Kitchen",
    description: "Everything for your home needs",
    image: "https://images.unsplash.com/photo-1556185781-a47769abb7ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: "books",
    name: "Books",
    description: "Bestsellers and classics",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "Premium wireless headphones with noise cancellation technology for an immersive audio experience. Perfect for music lovers and professionals alike.",
    price: 129.99,
    discountPrice: 99.99,
    category: "electronics",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.7,
    inStock: true,
    featured: true
  },
  {
    id: "2",
    name: "Smart Watch",
    description: "Track your fitness, receive notifications, and more with this state-of-the-art smartwatch. Water-resistant and long battery life.",
    price: 199.99,
    category: "electronics",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.5,
    inStock: true,
    featured: true
  },
  {
    id: "3",
    name: "Denim Jacket",
    description: "Classic denim jacket that never goes out of style. Perfect for casual outings and layering.",
    price: 79.99,
    discountPrice: 59.99,
    category: "clothing",
    images: [
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVuaW0lMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.3,
    inStock: true
  },
  {
    id: "4",
    name: "Coffee Maker",
    description: "Automatic coffee maker with multiple brewing options. Start your day right with the perfect cup of coffee.",
    price: 149.99,
    category: "home",
    images: [
      "https://images.unsplash.com/photo-1570486187219-743291200ca0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZSUyMG1ha2VyfGVufDB8fDB8fHww"
    ],
    rating: 4.8,
    inStock: true,
    featured: true
  },
  {
    id: "5",
    name: "Bestselling Novel",
    description: "The latest bestselling novel that's captivating readers worldwide. A thrilling story of adventure and mystery.",
    price: 24.99,
    category: "books",
    images: [
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.6,
    inStock: true
  },
  {
    id: "6",
    name: "Tablet Pro",
    description: "High-performance tablet for work and entertainment. Featuring a stunning display and powerful processor.",
    price: 349.99,
    discountPrice: 299.99,
    category: "electronics",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFibGV0fGVufDB8fDB8fHww"
    ],
    rating: 4.9,
    inStock: true,
    featured: true
  },
  {
    id: "7",
    name: "Casual Sneakers",
    description: "Comfortable and stylish sneakers for everyday wear. Available in multiple colors.",
    price: 69.99,
    category: "clothing",
    images: [
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.4,
    inStock: true
  },
  {
    id: "8",
    name: "Cooking Set",
    description: "Complete cooking set with non-stick pans and pots. Perfect for the home chef.",
    price: 129.99,
    category: "home",
    images: [
      "https://images.unsplash.com/photo-1585837073803-201ea7a34b5d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29va2luZyUyMHBvdHN8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.7,
    inStock: true
  }
];

// Helper functions
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};
