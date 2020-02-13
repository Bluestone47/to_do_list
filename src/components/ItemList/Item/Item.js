import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ children }) => (
  <li>
    {children}
    <button>X</button>
  </li>
);

Item.propTypes = {
  children: PropTypes.string.isRequired
}

export default Item;
