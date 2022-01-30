import React from 'react';

function Item({Item}) {
  return <li>
    <span>{Item.name}</span>
    <span>{Item.phone}</span>
  </li>;
}

export default Item;
