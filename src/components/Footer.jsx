// src/components/Footer.jsx
import React from 'react';
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
      <footer className="bg-light py-5 mt-5 border-top" style={{ backgroundColor: '#EEEFE0' }}>
        <div className="container">
          <div className="row text-center text-md-start justify-content-center">

            {/* Tienda */}
            <div className="col-md-4 mb-4">
              <h6 className="footer-title">Tienda</h6>
              <p className="mb-1">Dirección: La Paz 1122, Montevideo, Uruguay</p>
              <p className="mb-1">Teléfono: 2600 2202</p>
              <p>Email: <a href="mailto:info@thegardenshop.com">info@thegardenshop.com</a></p>
            </div>

            {/* Horario */}
            <div className="col-md-4 mb-4 text-center">
              <h6 className="footer-title">Horario</h6>
              <p className="mb-1">Lunes a Sábado</p>
              <p>08:00 - 18:00 Hs.</p>
              <div className="mt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3 text-dark">
                  <FontAwesomeIcon icon={faFacebookF} size="lg" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </div>
            </div>

            {/* Ayuda */}
            <div className="col-md-4 mb-4">
              <h6 className="footer-title">Ayuda</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="footer-link">Política de Cambios</a></li>
                <li><a href="#" className="footer-link">Políticas de privacidad</a></li>
                <li><a href="#" className="footer-link">Políticas de envíos</a></li>
              </ul>
            </div>
          </div>

          {/* Mapa */}
          <div className="row mt-4 justify-content-center">
            <div className="col-12 col-md-10">
              <iframe
                title="Mapa Tienda"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.6803135473263!2d-56.18825582441209!3d-34.89455547374321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f80bd346f0ebf%3A0x3b47f7755e47a1d!2sLa%20Paz%201122%2C%2011800%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses!2suy!4v1720107782193!5m2!1ses!2suy"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="text-center pt-4 small text-muted">
            © 2025, The Garden Shop. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/59899199789"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enviar WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
    </>
  );
}

export default Footer;
