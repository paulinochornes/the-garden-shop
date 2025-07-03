import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ProductCard from '../components/ProductCard';
import productData from '../data/products.json';

function Home() {
  const destacados = productData.products.filter(p =>
    [
      "pexels-fadime-demirtas-42037863-13549394.jpg",
      "pexels-beyzaa-yurtkuran-279977530-17604666.jpg",
      "pexels-sasha-kim-9412433.jpg"
    ].includes(p.imagen)
  );

  const carouselItems = productData.products.filter(p =>
    [
      "pexels-anete-lusina-5722936.jpg",
      "pexels-jardindeneko-19758422.jpg",
      "pexels-vovaflame-3126442.jpg"
    ].includes(p.imagen)
  );

  return (
    <div className="container mt-4">
      {/* Hero Section */}
      <div className="text-center mb-4">
        <img
          src="/images/hero.png"
          alt="The Garden Shop"
          className="img-fluid rounded shadow"
        />
      </div>

      {/* Carousel */}
      <Carousel className="mb-5">
        {carouselItems.map((product, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={`/images/${product.imagen}`}
              alt={product.nombre}
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-2 rounded">
              <h5>{product.nombre}</h5>
              <p>{product.descripcion}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Productos Destacados */}
      <h2 className="mb-3">Promociones destacadas</h2>
      <div className="row">
        {destacados.map((product, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
