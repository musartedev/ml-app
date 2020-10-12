import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/NotFound.scss';

const NotFound = () => {
  return (
    <div className="NotFound">
      <p>Oops! Por acá no está lo que estás buscando</p>
      <Link to="/" title="Volver al inicio">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
