import React from 'react';
import '../styles/hero.css'; 

function HeroBanner() {
  return (
    <div className="card-base" style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Bienvenidos a The Garden Shop</h1>
      <p>Tu vivero favorito ahora también online.</p>
      <button className="btn-agregar" onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}>
        Ver productos
      </button>
    </div>
  );
}

export default HeroBanner;
