import React from 'react';
import Footer from '../components/Footer';

function Us() {
  return (
    <div className="container mt-5">
      <h2>Sobre Nosotros 🌿</h2>
      <p className="mt-4">
        Somos Paulino Collazo, Agustín Noble y Natalia Sena, tres personas unidas por el amor a la naturaleza,
        la tecnología y el deseo de hacer del mundo un lugar más verde.
      </p>
      <p>
        Este proyecto nació como una fusión entre nuestras pasiones: el diseño, la programación y la jardinería.
        Creamos este vivero digital con el objetivo de acercar plantas, herramientas y belleza natural a cada hogar,
        cultivando no solo jardines, sino también momentos de conexión y bienestar.
      </p>
      <p>
        Gracias por visitarnos y ser parte de este sueño verde. 🌱
      </p>
      <Footer />
    </div>
  );
}

export default Us;
