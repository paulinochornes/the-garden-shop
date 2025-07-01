// src/pages/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';
import { useCart } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = productsData.products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="container mt-5"><h2>Producto no encontrado 🪴</h2></div>;
  }

  return (
    <div className="container mt-5">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: '300px', height: 'auto', marginBottom: '1rem' }} />
      <p>{product.description}</p>
      <strong>Precio: ${product.price}</strong>
      <br />
      <button onClick={() => addToCart(product)} style={{ marginTop: '1rem' }}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductDetail;
 