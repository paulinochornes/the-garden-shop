import React from 'react';
import { motion } from 'framer-motion';

function Payments() {
  return (
    <motion.div
      className="dashboard-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Métodos de Pago</h2>
      <div className="dashboard-card card p-3 mb-4">
        <h5>Visa - **** 1234</h5>
        <p>Vencimiento: 08/27</p>
      </div>
      <div className="dashboard-card card p-3">
        <h5>Mastercard - **** 5678</h5>
        <p>Vencimiento: 01/26</p>
      </div>
    </motion.div>
  );
}

export default Payments;