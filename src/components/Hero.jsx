import React from 'react';
import { motion } from 'framer-motion';
import '../styles/hero.css';

function Hero() {
  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="hero-text-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="hero-title">Bienvenidos a The Garden Shop</h1>
        <p className="hero-subtitle">Tu vivero de confianza</p>
        <motion.button
          className="hero-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
        >
          Ver productos
        </motion.button>
      </motion.div>

      <div className="hero-svg">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path d="M0,0 C480,120 960,0 1440,120 L1440,150 L0,150 Z" fill="#ffffff" />
        </svg>
      </div>
    </motion.section>
  );
}

export default Hero;
