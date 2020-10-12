import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../../styles/components/common/Breadcrumb.scss';

const Breadcrumb = ({ categories }) => {
  return (
    <nav className="Breadcrumb container">
      <ol>
        {categories.map(category => (
          <li className="Breadcrumb__item" key={category}>
            <Link to="/" title={category}>
              {category}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

Breadcrumb.defaultProps = {
  categories: [],
};

export default Breadcrumb;
