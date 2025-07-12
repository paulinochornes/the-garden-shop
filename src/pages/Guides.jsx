import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiDroplet, FiSun, FiAlertCircle,
  FiBookOpen, FiActivity, FiFeather
} from 'react-icons/fi';
import '../styles/guides.css';

const guides = [
  {
    icon: <FiBookOpen />, slug: 'cuidados-basicos',
    title: 'Cuidados Básicos',
    description: 'Todo lo que necesitás saber para empezar con tus plantas.',
  },
  {
    icon: <FiDroplet />, slug: 'riego-y-luz',
    title: 'Riego y Luz',
    description: 'Cómo regar correctamente y ubicar tus plantas según su necesidad de luz.',
  },
  {
    icon: <FiFeather />, slug: 'sustratos-y-macetas',
    title: 'Sustratos y Macetas',
    description: 'Elegí el mejor sustrato y recipiente para cada especie.',
  },
  {
    icon: <FiActivity />, slug: 'fertilizantes',
    title: 'Fertilizantes',
    description: 'Cuándo, cómo y con qué nutrir tus plantas.',
  },
  {
    icon: <FiAlertCircle />, slug: 'problemas-comunes',
    title: 'Problemas Comunes',
    description: 'Detectá y resolvé enfermedades, plagas y errores frecuentes.',
  },
  {
    icon: <FiSun />, slug: 'por-tipo-de-planta',
    title: 'Por tipo de planta',
    description: 'Consejos personalizados según el tipo de planta: cactus, suculentas, bonsái y más.',
  },
];

// Animaciones
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 70, damping: 12 }
  }
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function Guides() {
  return (
    <motion.div
      className="guides-page container py-5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-center text-success mb-3" variants={itemVariants}>
        Guías de Cuidado
      </motion.h1>
      <motion.p className="text-center text-muted mb-5" variants={itemVariants}>
        Aprendé a cuidar tus plantas con amor y conocimiento.
      </motion.p>

      <motion.div className="row g-4" variants={stagger}>
        {guides.map((guide, index) => (
          <motion.div
            className="col-12 col-md-6 col-lg-4"
            key={index}
            variants={itemVariants}
          >
            <Link to={`/guides/${guide.slug}`} className="text-decoration-none">
              <div className="guide-card h-100 p-4 text-center shadow-sm">
                <div className="guide-icon mb-3">{guide.icon}</div>
                <h5 className="mb-2">{guide.title}</h5>
                <p className="text-muted small">{guide.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Guides;
