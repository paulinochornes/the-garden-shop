import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import heroImage from "../assets/hero.png";
import productData from "../data/products.json";
import ProductCard from "../components/ProductCard";

function Home() {
  const destacados = productData.products.slice(0, 3);
  const populares = productData.products.slice(3, 6);

  return (
    <>
      {/* Portada */}
      <section style={{ position: 'relative', height: '60vh', overflow: 'hidden' }}>
        <img
          src={heroImage}
          alt="The Garden Shop portada"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          className="position-absolute top-50 start-50 translate-middle text-center text-white"
          style={{ textShadow: '0 0 8px rgba(0,0,0,0.6)' }}
        >
          <h1 className="display-4 fw-bold">Bienvenido a The Garden Shop</h1>
          <p className="lead">Tu rincón verde para conectar con la naturaleza</p>
        </div>
      </section>

      {/* Carrusel de artículos */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Artículos destacados</h2>

        <div id="articlesCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner rounded shadow">
            {destacados.map((producto, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={producto.id || index}
              >
                <img
                  src={`/images/${producto.imagen}`}
                  className="d-block w-100"
                  alt={producto.nombre}
                  style={{ maxHeight: "500px", objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                  <h5>{producto.nombre}</h5>
                  <p>{producto.descripcion}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#articlesCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#articlesCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </section>

      {/* Sección de productos */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Productos populares</h2>
        <div className="row g-4">
          {populares.map((producto) => (
            <div className="col-md-4" key={producto.id}>
              <ProductCard producto={producto} />
            </div>
          ))}
        </div>
      </section>

      {/* Sección de promociones */}
      <section className="py-5 text-white" style={{ backgroundColor: '#a7c1a8' }}>
        <div className="container text-center">
          <h2 className="mb-3">¡Promociones de temporada!</h2>
          <p className="lead">Descubrí descuentos exclusivos en plantas, macetas y kits de jardinería.</p>
          <a href="/products" className="btn btn-light btn-lg mt-3">Ver productos</a>
        </div>
      </section>
    </>
  );
}

export default Home;
