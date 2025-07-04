// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';
import Carousel from 'react-bootstrap/Carousel';
import heroImage from '../assets/hero.png';
import Footer from '../components/Footer';

function Home() {
  const [featured, setFeatured] = useState([]);
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    setFeatured(productsData.products.slice(0, 4));
    setCarouselItems(productsData.products.slice(4, 7));
  }, []);

  return (
    <div>
      {/* Portada */}
      <div className="text-center py-5 bg-light">
        <img
          src={heroImage}
          alt="The Garden Shop"
          className="img-fluid"
          style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
        />
        <h1 className="mt-3">Bienvenidos a The Garden Shop</h1>
        <p className="lead">Tu vivero de confianza</p>
      </div>

      {/* Carrusel de productos */}
      <div className="container py-4">
        <h2 className="mb-4">Novedades</h2>
        <Carousel>
          {carouselItems.map((product) => (
            <Carousel.Item key={product.id}>
              <img
                src={`/images/${product.imagen}`}
                className="d-block w-100"
                alt={product.nombre}
                style={{ maxHeight: '400px', objectFit: 'cover' }}
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
      <div className="container py-5">
        <h2 className="mb-4">Productos Destacados</h2>
        <div className="row g-4">
          {featured.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
