// src/components/ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    description: 'Planta tropical de interior con hojas grandes.',
    price: 1200,
  },
  {
    id: 2,
    name: 'Lavanda',
    description: 'Aromática y decorativa, ideal para exteriores soleados.',
    price: 1500,
  },
  {
    id: 3,
    name: 'Sustrato universal',
    description: 'Mezcla equilibrada para todo tipo de plantas.',
    price: 600,
  },
];

function ProductList() {
  return (
    <div>
      <h2>Nuestros productos 🌿</h2>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
