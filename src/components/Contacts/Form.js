import {useState} from 'react';
import { nanoid } from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux'
import {addContact} from '../../redux/contactSlice'

function Form() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || !phone) return false

        dispatch(addContact({ id: nanoid(), name, phone}))
        setName("")
        setPhone("")
        //const names = name.split(",")
        //const data  = names.map((name) => ({id: nanoid(), name}))
        //dispatch(addContacts(data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder='phone number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                <div className='btn'>
                    <button type='submit'>ADD</button>
                </div>
            </form>        
        </div>
    );
}

export default Form;
