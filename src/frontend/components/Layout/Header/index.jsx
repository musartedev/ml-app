import React from 'react';
import Logo from '../../../assets/img/Logo.png';
import Search from '../../../assets/img/icons/search.png';

import '../../../styles/components/Layout/Header.scss';

const Header = () => {
  const handleSubmit = () => console.log('Submitting...');

  return (
    <header className="Header">
      <div className="Header__content container">
        <div className="Header__brand">
          <img src={Logo} alt="Mercado Libre Logo" />
        </div>
        <div className="Header__search">
          <form role="search" onSubmit={handleSubmit}>
            <input
              type="text"
              name="seartchTerm"
              placeholder="Nunca dejes de buscar..."
            />
            <button type="submit">
              <img src={Search} alt="Search Icon" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
