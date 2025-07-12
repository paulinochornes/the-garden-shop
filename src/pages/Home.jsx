import React, { useEffect, useState } from 'react';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';
import Carousel from 'react-bootstrap/Carousel';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts'; // 🔹 NUEVO
import '../styles/home.css';

function Home() {
  const [featured, setFeatured] = useState([]);
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    setFeatured(productsData.products.slice(0, 4));
    setCarouselItems(productsData.products.slice(4, 7));
  }, []);

  return (
    <>
      <Hero />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Carrusel de productos */}
        <div className="container py-5">
          <motion.h2 className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Novedades
          </motion.h2>
          <Carousel>
            {carouselItems.map((product) => (
              <Carousel.Item key={product.id}>
                <motion.img
                  src={`/images/${product.imagen}`}
                  className="d-block w-100"
                  alt={product.nombre}
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <Carousel.Caption>
                  <h5>{product.nombre}</h5>
                  <p>{product.descripcion}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Productos destacados */}
        <motion.div
          className="container py-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Productos Destacados
          </motion.h2>
          <div className="row g-4">
            {featured.map((product) => (
              <motion.div
                key={product.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 🔽 NUEVA SECCIÓN: Historial de precios */}
        <motion.div
          className="container py-5 featured-prices-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 className="section-title mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Tendencia de precios
          </motion.h2>
          <FeaturedProducts />
        </motion.div>

        <Footer />
      </motion.div>
    </>
  );
}

export default Home;
