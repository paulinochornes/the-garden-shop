import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        🛒
        {totalItems > 0 && (
          <span style={{
            position: 'absolute',
            top: '-10px',
            right: '-10px',
            background: '#819a91',
            color: '#fff',
            borderRadius: '50%',
            padding: '2px 6px',
            fontSize: '0.8rem'
          }}>
            {totalItems}
          </span>
        )}
      </div>
    </Link>
  );
}

export default CartWidget;
