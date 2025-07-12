import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/products.css';

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
    <>
      <motion.div
        className="products-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="products-title"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Productos
        </motion.h2>

        {products.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="no-results"
          >
            No se encontraron productos para "{searchQuery || categoryFromPath}"
          </motion.p>
        ) : (
          <div className="products-grid">
            <AnimatePresence>
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </motion.div>

      <Footer />
    </>
  );
}

export default Products;
