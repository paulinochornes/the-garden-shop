import React from 'react';
import { motion } from 'framer-motion';

function Profile() {
  return (
    <motion.div
      className="dashboard-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Mi Perfil</h2>
      <div className="dashboard-card card p-3">
        <p><strong>Nombre:</strong> Juan Pérez</p>
        <p><strong>Email:</strong> juan.perez@garden.com</p>
        <p><strong>Teléfono:</strong> +598 91234567</p>
      </div>
    </motion.div>
  );
}

export default Profile;