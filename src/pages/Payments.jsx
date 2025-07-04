import React from 'react';

function Payments() {
  return (
    <div className="container mt-5">
      <h2>Métodos de Pago</h2>
      <div className="card p-3 shadow-sm mt-3">
        <h5>Visa - **** 1234</h5>
        <p>Vencimiento: 08/27</p>
      </div>
      <div className="card p-3 shadow-sm mt-3">
        <h5>Mastercard - **** 5678</h5>
        <p>Vencimiento: 01/26</p>
      </div>
    </div>
  );
}

export default Payments;