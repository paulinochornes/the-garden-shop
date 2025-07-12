import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Cart() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center text-success">Tu carrito de compras</h2>

      {cartItems.length === 0 ? (
        <div className="alert alert-info text-center">
          El carrito está vacío.
        </div>
      ) : (
        <>
          <div className="list-group mb-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="list-group-item list-group-item-action d-flex align-items-center flex-wrap gap-3"
              >
                <img
                  src={`/images/${item.imagen}`}
                  alt={item.nombre}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
                <div className="flex-grow-1">
                  <h5 className="mb-1">{item.nombre}</h5>
                  <p className="mb-1">Precio unitario: ${item.precio}</p>

                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <p className="mb-1 fw-bold mt-2">
                    Subtotal: ${item.precio * item.quantity}
                  </p>
                </div>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Quitar
                </button>
              </div>
            ))}
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <h4 className="mb-3 mb-md-0">Total: ${totalPrice()}</h4>
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
