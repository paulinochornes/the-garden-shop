// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="mt-5 pt-4 border-top text-center" style={{ backgroundColor: '#EEEFE0', padding: '1rem' }}>
      <p>📍 La Paz 1122, Montevideo</p>
      <p>
        Seguinos en{' '}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>{' '}
        🌱
      </p>
      <p style={{ fontSize: '0.8rem', color: '#6b7c76' }}>
        © {new Date().getFullYear()} The Garden Shop. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
