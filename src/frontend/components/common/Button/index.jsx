import React from 'react';
import PropTypes from 'prop-types';

import '../../../styles/components/common/Button.scss';

const Button = ({ onClick, title }) => {
  return (
    <button className="Button" type="button" onClick={onClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
