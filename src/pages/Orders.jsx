import React from 'react';
import { motion } from 'framer-motion';

function Orders() {
  return (
    <motion.div
      className="dashboard-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Mis Pedidos</h2>
      <div className="dashboard-card card p-3 mb-4">
        <h5>Pedido #1023</h5>
        <p>Fecha: 01/07/2025</p>
        <p>Total: $1240</p>
        <p>Estado: Entregado</p>
      </div>
      <div className="dashboard-card card p-3">
        <h5>Pedido #1010</h5>
        <p>Fecha: 25/06/2025</p>
        <p>Total: $980</p>
        <p>Estado: En camino</p>
      </div>
    </motion.div>
  );
}

export default Orders;