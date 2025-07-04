import React from 'react';

function Profile() {
  return (
    <div className="container mt-5">
      <h2>Mi Perfil</h2>
      <div className="card p-3 shadow-sm mt-3">
        <p><strong>Nombre:</strong> Juan Pérez</p>
        <p><strong>Email:</strong> juan.perez@example.com</p>
        <p><strong>Teléfono:</strong> +598 91234567</p>
      </div>
    </div>
  );
}

export default Profile;