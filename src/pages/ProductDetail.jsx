import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';
import { useCart } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  const product = productsData.products.find(p => p.id === parseInt(id));

  if (!product) return <p className="text-center mt-5">Producto no encontrado</p>;

  const handleAddToCart = () => {
    addToCart(product);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000); // Desaparece en 2 seg
  };

  return (
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-md-6">
          <img
            src={`/images/${product.imagen}`}
            alt={product.nombre}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6">
          <h2>{product.nombre}</h2>
          <p className="text-muted">{product.descripcion}</p>
          <h4 className="text-success">${product.precio}</h4>
          <button className="btn btn-success mt-3" onClick={handleAddToCart}>
            Agregar al carrito
          </button>

          {showToast && (
            <div
              className="alert alert-success mt-4 animate__animated animate__fadeInDown"
              role="alert"
            >
              Producto agregado al carrito ✅
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
