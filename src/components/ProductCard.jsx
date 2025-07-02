// src/components/ProductCard.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <strong>${product.price}</strong>
      <br />
      <button onClick={() => addToCart(product)} style={{ marginTop: '1rem' }}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;
