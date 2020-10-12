import React from 'react';
import PropTypes from 'prop-types';

import '../../../styles/components/common/Breadcrumb.scss';

const Breadcrumb = ({ categories }) => {
  return (
    <nav className="Breadcrumb container">
      <ol>
        {categories.map(category => (
          <li className="Breadcrumb__item">
            <a href="/" title={category}>
              {category}
            </a>
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
