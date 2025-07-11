import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import guidesData from '../data/guidesData';
import '../styles/guideDetail.css';

function GuideDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const guide = guidesData.find(g => g.slug === slug);

  if (!guide) {
    return (
      <div className="container py-5 text-center">
        <h2>Guía no encontrada 🌱</h2>
        <button className="btn btn-primary-green mt-3" onClick={() => navigate('/guides')}>
          Volver a guías
        </button>
      </div>
    );
  }

  return (
    <div className="guide-detail container py-5">
      <div className="mb-4">
        <h1 className="text-success">{guide.title}</h1>
        <p className="text-muted">{guide.description}</p>
        <Link to="/guides" className="btn btn-outline-secondary mt-3">← Volver a guías</Link>
      </div>

      {guide.image && (
        <div className="mb-4">
          <img src={guide.image} alt={guide.title} className="img-fluid rounded shadow-sm" />
        </div>
      )}

      {guide.content.map((section, index) => (
        <div className="mb-4" key={index}>
          <h4 className="text-dark">{section.subtitle}</h4>
          <p className="text-muted">{section.text}</p>
        </div>
      ))}
    </div>
  );
}

export default GuideDetail;
