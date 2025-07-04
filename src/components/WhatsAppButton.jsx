import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../styles/whatsapp.css';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/59899199789"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar mensaje por WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </a>
  );
}

export default WhatsAppButton;
