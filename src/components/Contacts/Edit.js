import React from 'react';
import {useParams} from "react-router-dom"
import EditForm from './EditForm';
import { Routes, Route, Navigate } from "react-router-dom";
import {useSelector} from "react-redux"
import {contactSelectors} from "../../redux/contactSlice"

function Edit() {
  const {id} = useParams()

  const contact = useSelector(state => contactSelectors.selectById(state, id))

  if(!contact){
    return <Routes>
      <Route path="/" element={<Navigate replace to="/" />} />
  </Routes>
  }

  return <div>
    <h1>Edit</h1>
    <EditForm contact={contact}/>
  </div>;
}

export default Edit;
