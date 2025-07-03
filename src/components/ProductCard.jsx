// src/components/ProductCard.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={`/images/${product.imagen}`}
        className="card-img-top"
        alt={product.nombre}
        style={{ height: '220px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.nombre}</h5>
        <p className="card-text text-muted small">{product.descripcion}</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fw-bold text-success">${product.precio}</span>
          <button
            className="btn btn-sm btn-outline-success"
            onClick={() => addToCart(product)}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
