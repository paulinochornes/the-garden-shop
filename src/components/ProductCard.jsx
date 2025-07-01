// src/components/ProductCard.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
       <Link to={`/product/${product.id}`}>
    {product.name}
  </Link>
      <p>{product.description}</p>
      <strong>${product.price}</strong>
      <br />
      <button onClick={() => addToCart(product)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;