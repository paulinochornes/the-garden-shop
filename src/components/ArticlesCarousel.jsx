function CarouselItem({ producto }) {
  return (
    <div className="card-base" style={{ width: '300px', margin: '0 auto' }}>
      <img src={`/images/${producto.imagen}`} alt={producto.nombre} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
      <div style={{ padding: '1rem' }}>
        <h5>{producto.nombre}</h5>
        <p style={{ fontSize: '0.9rem' }}>{producto.descripcion}</p>
        <button className="btn-agregar">Ver más</button>
      </div>
    </div>
  );
}
