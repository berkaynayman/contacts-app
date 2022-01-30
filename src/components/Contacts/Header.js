import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {contactSelectors, removeAll} from "../../redux/contactSlice"

function Header() {
    const dispatch = useDispatch()
  const total = useSelector(contactSelectors.selectTotal)

    const handleDeleteAll = () => {
        if(window.confirm("are you sure?")){
            dispatch(removeAll())
        }
    }

  return (
    <div className='title'>
        <h1>Contacts - {total}</h1>
        { total > 0 && <div className='deleteAll'
        onClick={handleDeleteAll}>Delete All</div>
        }
        
    </div>
  );
}

export default Header;
