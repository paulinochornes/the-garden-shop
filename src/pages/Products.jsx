// src/pages/Products.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

function Products() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search')?.toLowerCase() || '';

  const [products, setProducts] = useState([]);

  const categoryFromPath = location.pathname.split('/products/')[1];

  useEffect(() => {
    let filtered = productsData.products;

    if (categoryFromPath) {
      filtered = filtered.filter(product => product.category?.toLowerCase() === categoryFromPath.toLowerCase());
    }

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery)
      );
    }

    setProducts(filtered);
  }, [searchQuery, categoryFromPath]);

  return (
    <div className="container mt-5">
      <h2>Productos</h2>
      {products.length === 0 ? (
        <p>No se encontraron productos para "{searchQuery || categoryFromPath}"</p>
      ) : (
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
}

export default Products;
