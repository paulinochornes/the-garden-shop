// src/components/Carousel.jsx
import React from 'react';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';
import '../styles/Carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carousel({ products }) {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div id="productCarousel" className="carousel slide carousel-bootstrap-container" data-bs-ride="carousel">
      <div className="carousel-inner">
        {products.map((product, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <div className="d-flex justify-content-center">
              <motion.div
                className="carousel-card-wrapper"
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <ProductCard product={product} />
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#productCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon custom-carousel-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#productCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon custom-carousel-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}

export default Carousel;
