import { useState, useEffect } from "react"
import List from "./List"
import Form from "./Form"

import "./style.css"

function Contacts(){
    const [contacts, setContacts] = useState([
        {
            fullname: "Berkay Nayman",
            phone_number: "555 1234 4545"
        },
        {
            fullname: "Fatma Aslan",
            phone_number: "533 2341 1122"
        },
        {
            fullname: "Mehmet",
            phone_number: "561 6161 6161"
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
