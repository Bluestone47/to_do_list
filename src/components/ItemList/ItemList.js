import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item/Item';

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <Item key={item}>{item}</Item>
      ))}
    </ul>
  );
};

ItemList.propTypes = {
  items: PropTypes.array
};

export default ItemList;
