import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" className="text-decoration-none position-relative">
      <span style={{ fontSize: '1.5rem' }}>🛒</span>
      {totalItems > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
          {totalItems}
        </span>
      )}
    </Link>
  );
}

export default CartWidget;
