import React from 'react';

function Orders() {
  return (
    <div className="container mt-5">
      <h2>Mis Pedidos</h2>
      <div className="card p-3 shadow-sm mt-3">
        <h5>Pedido #1023</h5>
        <p>Fecha: 01/07/2025</p>
        <p>Total: $1240</p>
        <p>Estado: Entregado</p>
      </div>
      <div className="card p-3 shadow-sm mt-3">
        <h5>Pedido #1010</h5>
        <p>Fecha: 25/06/2025</p>
        <p>Total: $980</p>
        <p>Estado: En camino</p>
      </div>
    </div>
  );
}

export default Orders;