// src/context/CartContext.jsx
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const itemInCart = cartItems.find(item => item.id === product.id);
    if (itemInCart) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
