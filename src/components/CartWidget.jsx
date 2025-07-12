import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

function CartWidget() {
  const { totalItems } = useCart();
  const controls = useAnimation();

  // Efecto rebote cuando se agregan productos
  useEffect(() => {
    if (totalItems > 0) {
      controls.start({
        scale: [1, 1.3, 0.95, 1],
        transition: { duration: 0.4 },
      });
    }
  }, [totalItems, controls]);

  return (
    <Link to="/cart" className="position-relative text-decoration-none">
      <motion.span
        style={{ fontSize: '1.6rem', display: 'inline-block', cursor: 'pointer' }}
        animate={controls}
      >
        🛒
        {totalItems > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
            {totalItems}
          </span>
        )}
      </motion.span>
    </Link>
  );
}

export default CartWidget;
