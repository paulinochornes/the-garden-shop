// src/context/CartContext.jsx
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    if (!product || !product.nombre || !product.precio) {
      console.warn('Producto incompleto:', product);
      return;
    }

    const existing = cartItems.find(item => item.nombre === product.nombre);

    if (existing) {
      setCartItems(cartItems.map(item =>
        item.nombre === product.nombre
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (nombre) => {
    setCartItems(cartItems.filter(item => item.nombre !== nombre));
  };

  const clearCart = () => setCartItems([]);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      totalItems
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
