import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ProductVariant } from '@/lib/products';
import { toast } from 'sonner';

export interface CartItem {
  id: string; // unique ID for the cart item (productID + variantID + size)
  product: Product;
  variant: ProductVariant;
  size?: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, variant: ProductVariant, size?: string) => void;
  removeItem: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('anchr-cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('anchr-cart', JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product, variant: ProductVariant, size?: string) => {
    const cartItemId = `${product.id}-${variant.id}-${size || 'nosize'}`;
    
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === cartItemId);
      
      if (existingItem) {
        toast.success(`Updated quantity: ${product.name}`);
        return currentItems.map(item => 
          item.id === cartItemId 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      toast.success(`Added to cart: ${product.name}`);
      return [...currentItems, { id: cartItemId, product, variant, size, quantity: 1 }];
    });
    
    setIsCartOpen(true);
  };

  const removeItem = (cartItemId: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(cartItemId);
      return;
    }
    setItems(currentItems => 
      currentItems.map(item => 
        item.id === cartItemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = items.reduce((total, item) => total + (item.variant.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ 
      items, 
      addItem, 
      removeItem, 
      updateQuantity, 
      clearCart, 
      cartCount, 
      cartTotal,
      isCartOpen,
      setIsCartOpen
    }}>
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
