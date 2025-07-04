import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import Footer from '../components/Footer';

function Products() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search')?.toLowerCase() || '';

  const [products, setProducts] = useState([]);

  const categoryFromPath = location.pathname.split('/products/')[1];

  useEffect(() => {
    let filtered = productsData.products;

    if (categoryFromPath) {
      filtered = filtered.filter(product =>
        product.categoria?.toLowerCase() === categoryFromPath.toLowerCase()
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.nombre.toLowerCase().includes(searchQuery) ||
        product.descripcion.toLowerCase().includes(searchQuery)
      );
    }

    setProducts(filtered);
  }, [searchQuery, categoryFromPath]);

  return (
    <div className="container py-5">
      <h2 className="mb-4">Productos</h2>
      {products.length === 0 ? (
        <p>No se encontraron productos para "{searchQuery || categoryFromPath}"</p>
      ) : (
        <div className="row g-4">
          {products.map(product => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Products;
