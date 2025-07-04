import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
        <img
          src={`/images/${product.imagen}`}
          className="product-img"
          alt={product.nombre}
        />
        <div className="product-body">
          <div className="product-content">
            <h5 className="product-title">{product.nombre}</h5>
            <p className="product-description">{product.descripcion}</p>
          </div>
          <span className="product-price">${product.precio}</span>
        </div>
      </Link>
      <div className="product-footer">
        <button
          className="btn-agregar"
          onClick={() => addToCart(product)}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
