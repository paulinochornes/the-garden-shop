// src/pages/Guides.jsx
import React from 'react';
import { FiDroplet, FiSun, FiAlertCircle, FiBookOpen, FiActivity, FiFeather } from 'react-icons/fi';
import '../styles/guides.css';

const guides = [
  {
    icon: <FiBookOpen />,
    title: 'Cuidados Básicos',
    description: 'Todo lo que necesitás saber para empezar con tus plantas.',
  },
  {
    icon: <FiDroplet />,
    title: 'Riego y Luz',
    description: 'Cómo regar correctamente y ubicar tus plantas según su necesidad de luz.',
  },
  {
    icon: <FiFeather />,
    title: 'Sustratos y Macetas',
    description: 'Elegí el mejor sustrato y recipiente para cada especie.',
  },
  {
    icon: <FiActivity />,
    title: 'Fertilizantes',
    description: 'Cuándo, cómo y con qué nutrir tus plantas.',
  },
  {
    icon: <FiAlertCircle />,
    title: 'Problemas Comunes',
    description: 'Detectá y resolvé enfermedades, plagas y errores frecuentes.',
  },
  {
    icon: <FiSun />,
    title: 'Por tipo de planta',
    description: 'Consejos personalizados según el tipo de planta: cactus, suculentas, bonsái y más.',
  },
];

function Guides() {
  return (
    <div className="guides-page container py-5">
      <h1 className="text-center text-success mb-3">Guías de Cuidado</h1>
      <p className="text-center text-muted mb-5">
        Aprendé a cuidar tus plantas con amor y conocimiento.
      </p>
      <div className="row g-4">
        {guides.map((guide, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <div className="guide-card h-100 p-4 text-center shadow-sm">
              <div className="guide-icon mb-3">{guide.icon}</div>
              <h5 className="mb-2">{guide.title}</h5>
              <p className="text-muted small">{guide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Guides;
