// src/components/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <p>El carrito está vacío</p>;
  }

  return (
    <div>
      <h2>Carrito 🛒</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} style={{ marginBottom: '1rem' }}>
            <strong>{item.name}</strong> x {item.quantity} — ${item.price * item.quantity}
            <br />
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h4>Total: ${total}</h4>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
}

export default Cart;
