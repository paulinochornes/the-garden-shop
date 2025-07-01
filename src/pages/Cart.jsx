// src/pages/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <div className="container mt-5"><h2>Tu carrito está vacío 🪴</h2></div>;
  }

  return (
    <div className="container mt-5">
      <h2>Tu carrito 🛒</h2>
      {cartItems.map((item) => (
        <div key={item.id} style={{ borderBottom: '1px solid #ccc', padding: '1rem 0' }}>
          <h4>{item.name}</h4>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio unitario: ${item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <h3 className="mt-4">Total: ${total}</h3>
      <button onClick={clearCart} style={{ marginTop: '1rem' }}>Vaciar carrito</button>
    </div>
  );
}
<Link to="/checkout">
  <button style={{ marginTop: '1rem' }}>Finalizar compra</button>
</Link>

export default Cart;
