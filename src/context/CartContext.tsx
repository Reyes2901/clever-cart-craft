
import { createContext, useContext, useState, ReactNode } from 'react';
import { Cart, CartItem, Product } from '../types';

interface CartContextType {
  cart: Cart;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart>({ items: [] });

  const addToCart = (product: Product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.items.find(item => item.productId === product.id);
      
      if (existingItem) {
        // Update quantity of existing item
        return {
          ...prevCart,
          items: prevCart.items.map(item => 
            item.productId === product.id 
              ? { ...item, quantity: item.quantity + quantity } 
              : item
          )
        };
      } else {
        // Add new item
        return {
          ...prevCart,
          items: [...prevCart.items, { productId: product.id, quantity, product }]
        };
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => ({
      ...prevCart,
      items: prevCart.items.filter(item => item.productId !== productId)
    }));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart => ({
      ...prevCart,
      items: prevCart.items.map(item => 
        item.productId === productId 
          ? { ...item, quantity } 
          : item
      )
    }));
  };

  const clearCart = () => {
    setCart({ items: [] });
  };

  // Calculate total number of items in cart
  const cartCount = cart.items.reduce((total, item) => total + item.quantity, 0);

  // Calculate total price of items in cart
  const cartTotal = cart.items.reduce((total, item) => {
    const price = item.product.discountPrice || item.product.price;
    return total + (price * item.quantity);
  }, 0);

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart,
        cartCount,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
