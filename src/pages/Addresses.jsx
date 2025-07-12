import React from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiBriefcase, FiEdit2, FiTrash2 } from 'react-icons/fi';
import '../styles/dashboard.css';

function Addresses() {
  return (
    <motion.div
      className="dashboard-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="dashboard-title">Mis Direcciones</h2>

      <motion.div
        className="dashboard-card card d-flex flex-column flex-md-row align-items-start align-items-md-center mb-4"
        whileHover={{ scale: 1.02 }}
      >
        <div className="d-flex align-items-center mb-2 mb-md-0">
          <FiHome className="card-header-icon" />
          <h5 className="mb-0 ms-2">Casa</h5>
        </div>
        <p className="ms-md-3 mt-2 mt-md-0 text-muted">Av. Rivera 1234, Montevideo, Uruguay</p>
        <div className="action-icons ms-md-auto mt-2 mt-md-0">
          <FiEdit2 />
          <FiTrash2 />
        </div>
      </motion.div>

      <motion.div
        className="dashboard-card card d-flex flex-column flex-md-row align-items-start align-items-md-center"
        whileHover={{ scale: 1.02 }}
      >
        <div className="d-flex align-items-center mb-2 mb-md-0">
          <FiBriefcase className="card-header-icon" />
          <h5 className="mb-0 ms-2">Trabajo</h5>
        </div>
        <p className="ms-md-3 mt-2 mt-md-0 text-muted">Calle Ejemplo 567, Ciudad Vieja, Montevideo</p>
        <div className="action-icons ms-md-auto mt-2 mt-md-0">
          <FiEdit2 />
          <FiTrash2 />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Addresses;
