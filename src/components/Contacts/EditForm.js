import {useState} from 'react';
import {useDispatch} from "react-redux";
import {updateContact} from "../../redux/contactSlice"

function EditForm({ contact }) {
    const dispatch = useDispatch()
    const [name, setName] = useState(contact.name)
    const [phone, setPhone] = useState(contact.phone)
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !phone) return false
        
        dispatch(updateContact({
                id: contact.id,
                changes:{
                    name,
                    phone,
                }
            })
        )
    }

  return <div>
        <form onSubmit={handleSubmit}>
            <input placeholder='name'
            value={name}
            onChange={(e) => setName(e.target.value)} />
            <input placeholder='phone number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)} />
            <div className='btn'>
                <button type='submit'>SAVE</button>
            </div>
        </form>        
    </div>
}

export default EditForm;
