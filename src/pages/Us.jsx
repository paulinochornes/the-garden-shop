import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';
import '../styles/us.css';

import paulinoImg from '../assets/team/paulino.webp';
import agustinImg from '../assets/team/agustin.webp';
import nataliaImg from '../assets/team/natalia.webp';

const teamMembers = [
  {
    name: 'Paulino Collazo',
    image: paulinoImg,
    description:
      'Soy Paulino, y The Garden Shop es un proyecto que llevo muy cerca del corazón. Me encargué del desarrollo y la parte técnica, pero también me involucré en todos los detalles porque quería que esta tienda tuviera alma. Creo que la tecnología puede conectar con la naturaleza, y eso es lo que quisimos lograr acá.',
  },
  {
    name: 'Agustín Noble',
    image: agustinImg,
    description:
      'Soy Agustín. En este proyecto puse foco en lo visual y en cómo organizar las ideas para que todo tuviera coherencia. Nos enfrentamos a varios desafíos, pero trabajar en equipo y ver cómo todo cobraba forma fue una de las partes más lindas del proceso.',
  },
  {
    name: 'Natalia Sena',
    image: nataliaImg,
    description:
      'Soy Natalia. Me encargué de pensar en la experiencia de usuario y que todo funcionara de forma fluida. Lo hicimos con mucho compromiso, entre clases, entregas y contrarreloj. Pero al final logramos algo que sentimos nuestro y que esperamos disfrutes tanto como nosotros al crearlo.',
  }
];

function Us() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="container mt-5 us-section">
      <motion.h2
        className="text-center mb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-center text-success mb-3">Sobre Nosotros</h1>
      </motion.h2>

      <div className="team-grid-horizontal">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className={`team-card ${activeIndex === index ? 'active' : ''}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveIndex(index)}
          >
            <div className="circle-wrapper">
              <img src={member.image} alt={member.name} className="circle-img" />
            </div>
            <p className="team-name">{member.name}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            key="description"
            className="team-description-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <p>{teamMembers[activeIndex].description}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="about-project text-center mt-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h3 className="mb-3">Acerca del Proyecto</h3>
        <p>
          Este proyecto nació en clase, pero rápidamente se convirtió en algo más. Fue un trabajo intenso, con tiempos ajustados, muchos cambios y sobre todo, mucho aprendizaje.
        </p>
        <p>
          Cada uno aportó desde su lugar: ideas, horas de práctica, reuniones y ganas de que esto saliera bien. The Garden Shop refleja eso: una mezcla de naturaleza, diseño, tecnología y esfuerzo compartido.
        </p>
        <p>
          Esperamos que al navegarlo, sientas un poco de lo que nosotros sentimos al hacerlo: compromiso, creatividad y amor por lo que hacemos.
        </p>
      </motion.div>

      <Footer />
    </div>
  );
}

export default Us;
