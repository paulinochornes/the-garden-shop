import React from 'react';
import { useParams, Link } from 'react-router-dom';
import guidesData from '../data/guidesData';
import '../styles/guideDetail.css';
import { motion } from 'framer-motion';

function GuideDetail() {
  const { slug } = useParams();
  const guide = guidesData.find(g => g.slug === slug);

  if (!guide) {
    return <div className="container py-5 text-center">Guía no encontrada.</div>;
  }

  return (
    <motion.div
      className="guide-detail container py-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <header className="text-center mb-5">
        <h1 className="text-success mb-3">{guide.title}</h1>
        <p className="text-muted">{guide.description}</p>
      </header>

      {guide.content.map((section, idx) => (
        <motion.section
          key={idx}
          className="mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.15 }}
        >
          <h4 className="text-primary mb-3">{section.subtitle}</h4>

          {section.image && (
            <motion.img
              src={section.image}
              alt={section.subtitle}
              className="img-fluid rounded mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
          )}

          <p>{section.text}</p>
        </motion.section>
      ))}

      <div className="text-center mt-4">
        <Link to="/guides" className="btn btn-outline-success">← Volver a Guías</Link>
      </div>
    </motion.div>
  );
}

export default GuideDetail;
