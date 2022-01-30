import { useSelector } from 'react-redux'; 
import React from 'react';
import { contactSelectors } from "../../redux/contactSlice.js" 
import Item from "./Item"

function List() {
  const contacts = useSelector(contactSelectors.selectAll)
  console.log(contacts);
  return <div>
    {
      contacts.map(contact => <Item key={contact.id} Item={contact} />)
    }
  </div>;
}

export default List;
