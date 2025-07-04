import React from 'react';

function Addresses() {
  return (
    <div className="container mt-5">
      <h2>Mis Direcciones</h2>
      <div className="card p-3 shadow-sm mt-3">
        <h5>Casa</h5>
        <p>Av. Rivera 1234, Montevideo, Uruguay</p>
      </div>
      <div className="card p-3 shadow-sm mt-3">
        <h5>Trabajo</h5>
        <p>Calle Ejemplo 567, Ciudad Vieja, Montevideo</p>
      </div>
    </div>
  );
}

export default Addresses;