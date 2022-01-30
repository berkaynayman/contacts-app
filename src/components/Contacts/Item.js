import React from 'react';
import {useDispatch} from "react-redux"
import {deleteContact} from "../../redux/contactSlice"
import {Link} from "react-router-dom"


function Item({Item}) {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    if(window.confirm("are you sure?")){
      dispatch(deleteContact(id))
    }
  }

  return <li>
    <span>{Item.name}</span>
    <span>{Item.phone}</span>
    <span className='edit'>
      <span>
        <Link to={`/edit/${Item.id}`}>Edit</Link>
      </span>
      <span className="deleteBtn" onClick={() => handleDelete(Item.id)}>X</span>
    </span>
  </li>;
}

export default Item;
