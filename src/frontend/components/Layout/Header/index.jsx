import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/Logo.png';
import SearchBox from './SearchBox';

import '../../../styles/components/Layout/Header.scss';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__content container">
        <div className="Header__brand">
          <Link to="/">
            <img src={Logo} alt="Mercado Libre Logo" />
          </Link>
        </div>
        <div className="Header__search">
          <SearchBox />
        </div>
      </div>
    </header>
  );
};

export default Header;
