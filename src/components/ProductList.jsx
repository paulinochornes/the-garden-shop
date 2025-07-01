import React, { useEffect, useState } from 'react';
import productsData from '../data/products.json';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData.products); // ✅ Accedés al array correcto
    console.log(productsData.products);
  }, []);
  

  return (
    <div className="container mt-5">
      <h2>Productos</h2>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <strong>${product.price}</strong>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
