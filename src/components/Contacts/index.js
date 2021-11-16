import { useState, useEffect } from "react"
import List from "./List"
import Form from "./Form"

import "./style.css"

function Contacts(){
    const [contacts, setContacts] = useState([
        {
            fullname: "Berkay",
            phone_number: "123"
        },
        {
            fullname: "Nayman",
            phone_number: "5464"
        },
        {
            fullname: "Mehmet",
            phone_number: "2354654"
        }
    ])
    
    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    return(
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts}/>
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    );
}

export default Contacts;