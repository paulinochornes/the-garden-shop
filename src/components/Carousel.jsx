// src/components/Carousel.jsx
import React from 'react';
import ProductCard from './ProductCard';
import '../styles/Carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carousel({ products }) {
  return (
    <div id="productCarousel" className="carousel slide carousel-bootstrap-container" data-bs-ride="carousel">
      <div className="carousel-inner">
        {products.map((product, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <div className="d-flex justify-content-center">
              <div className="carousel-card-wrapper">
                <ProductCard product={product} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon custom-carousel-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon custom-carousel-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}

export default Carousel;
