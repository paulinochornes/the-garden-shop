// src/components/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  if (cartItems.length === 0) {
    return <div className="container py-5"><h4>🛒 El carrito está vacío</h4></div>;
  }

  return (
    <div className="container py-5">
      <h2>Carrito de Compras</h2>
      <ul className="list-group mb-4">
        {cartItems.map((item, index) => (
          <li key={index} className="list-group-item d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <img
                src={`/images/${item.imagen}`}
                alt={item.nombre}
                style={{ width: '60px', height: '60px', objectFit: 'cover', marginRight: '1rem' }}
              />
              <div>
                <h6 className="mb-0">{item.nombre}</h6>
                <small className="text-muted">
                  {item.quantity} x ${item.precio} = ${item.quantity * item.precio}
                </small>
              </div>
            </div>
            <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.nombre)}>
              Quitar
            </button>
          </li>
        ))}
      </ul>
      <h4>Total: ${total}</h4>
      <button className="btn btn-outline-danger" onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
}

export default Cart;
