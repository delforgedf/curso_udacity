import React from 'react';
import PropTypes from 'prop-types';

const ItemList = props => {
  return (
    <div>
      <p className="items">Items</p>
      <ol className="item">{props.items.map((item, index) => <li key={index}>{item}</li>)}</ol>
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemList;
