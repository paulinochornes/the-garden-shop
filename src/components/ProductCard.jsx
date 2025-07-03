// src/components/ProductCard.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={`/images/${product.imagen}`}
        className="card-img-top"
        alt={product.nombre}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.nombre}</h5>
        <p className="card-text">{product.descripcion}</p>
        <div className="mt-auto">
          <p className="fw-bold">${product.precio}</p>
          <button
            className="btn btn-success w-100"
            onClick={() => addToCart(product)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
