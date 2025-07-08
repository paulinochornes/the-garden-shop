import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';
import { useCart } from '../context/CartContext';
import '../styles/productDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const product = productsData.products.find(p => p.id === parseInt(id));

  if (!product) return <p className="text-center mt-5">Producto no encontrado</p>;

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="container py-5 bg-light-green">
      <div className="row bg-white p-4 rounded shadow">
        {/* Imagen */}
        <div className="col-md-6 text-center">
          <img
            src={`/images/${product.imagen}`}
            alt={product.nombre}
            className="img-fluid rounded"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>

        {/* Información */}
        <div className="col-md-6 d-flex flex-column justify-content-between">
          <div>
            <h2 className="text-primary-green fw-bold">{product.nombre}</h2>
            <p className="text-muted">{product.descripcion}</p>

            <h4 className="text-primary-green fw-bold mt-3">${product.precio}</h4>

            <div className="mt-3">
              <p className="mb-1">🚚 Envíos a todo Uruguay</p>
              <p className="mb-1">🎁 Regalo sorpresa superando los $2.000</p>
            </div>

            {/* CONTADOR */}
            <div className="d-flex align-items-center gap-3 my-4">
              <button className="btn btn-outline-secondary" onClick={decrement}>−</button>
              <input
                type="text"
                className="form-control text-center"
                value={quantity}
                readOnly
                style={{ width: '60px' }}
              />
              <button className="btn btn-outline-secondary" onClick={increment}>+</button>
            </div>

            <div className="d-flex gap-3">
              <button className="btn btn-primary-green" onClick={handleAddToCart}>
                Agregar al carrito
              </button>
              <button className="btn btn-secondary-green">Comprar ahora</button>
            </div>

            {showToast && (
              <div
                className="alert alert-success mt-4 animate__animated animate__fadeInDown"
                role="alert"
              >
                Producto agregado al carrito ✅
              </div>
            )}
          </div>

          <div className="mt-4">
            <p className="small text-muted">Pagos seguros con múltiples opciones</p>
            <div className="d-flex gap-3 align-items-center">
              <img src="/icons/mastercard.svg" alt="mastercard" width="40" />
              <img src="/icons/visa.svg" alt="visa" width="40" />
              <img src="/icons/oca.svg" alt="oca" width="40" />
              <img src="/icons/amex.svg" alt="amex" width="40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
