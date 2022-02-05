import { useSelector } from 'react-redux'; 
import React from 'react';
import { contactSelectors } from "../../redux/contactSlice.js" 
import Item from "./Item"

function List() {
  const contacts = useSelector(contactSelectors.selectAll)
  return <ul className='list'>
    {
      contacts.map(contact => <Item key={contact.id} Item={contact} />)
    }
  </ul>;
}

export default List;
