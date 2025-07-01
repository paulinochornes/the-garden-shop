import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-3">Hola, Paulino 🌱</h1>
      <h2 className="mb-4">Bienvenido a The Garden Shop 🌿</h2>
      <p className="mb-4">
        Un lugar donde la naturaleza y la tecnología se encuentran para llenar tu vida de verde. 🌱
        Descubrí nuestra selección de plantas, sustratos y herramientas, todo con un solo clic.
      </p>
      <Link to="/products" className="btn btn-success">
        Ver productos
      </Link>
    </div>
  );
}

export default Home;
