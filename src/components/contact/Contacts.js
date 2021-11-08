import React, {useContext} from 'react'
import {Context} from "../context";
import Contact from "./Contact";

function Contacts() {
    const {contacts} = useContext(Context);
    return (
        <div className="container">
            <div className="row">
                {
                    contacts ? (contacts.map((contact) => {
                        return <Contact
                            key={contact.id}
                            data={contact}/>
                    })) : null
                }
            </div>
            <div className="wrapper d-md-block mt-4">
                <button id="viewAll" className="btn btn-block btn-dark">View All</button>
            </div>
        </div>
    )
}


export default Contacts;
