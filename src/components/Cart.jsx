import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Cart() {
  const { cartItems, removeFromCart, clearCart, totalPrice } = useCart();

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">
        🛒 Tu carrito de compras
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-center">El carrito está vacío.</p>
      ) : (
        <>
          <div className="row g-4">
            {cartItems.map((item) => (
              <div key={item.id} className="col-12">
                <div className="card shadow-sm p-3 d-flex flex-row align-items-center">
                  <img
                    src={`/images/${item.imagen}`}
                    alt={item.nombre}
                    style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }}
                    className="me-3"
                  />
                  <div className="flex-grow-1">
                    <h5 className="mb-1">{item.nombre}</h5>
                    <p className="mb-1">Precio unitario: ${item.precio}</p>
                    <p className="mb-1">Cantidad: {item.quantity}</p>
                  </div>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Quitar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 d-flex justify-content-between align-items-center">
            <h4>Total: ${totalPrice}</h4>
            <div className="d-flex gap-3">
              <button className="btn btn-outline-secondary" onClick={clearCart}>
                Vaciar carrito
              </button>
              <Link to="/checkout" className="btn btn-success">
                Ir al checkout
              </Link>
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}

export default Cart;
