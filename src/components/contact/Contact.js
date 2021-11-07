import React, {useContext, useState} from 'react'
import './contact.css'
import {Context} from "../context";

function Contact(props) {

    const [showContactToggle, setShowContactToggle] = useState();
    const contact = props.data;
    const {contacts, setContacts} = useContext(Context);

    const show = () => {
        setShowContactToggle({
            showContactToggle: !showContactToggle
        });
    }
    const deleteContactEvent = (id) => {
        console.log(id);
        const newContacts = contacts.filter(el => el.id !== id);
        setContacts(newContacts);
    }

    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-header bg-danger text-white">
                    <span> {contact.prenom} {contact.nom}</span>
                    <i onClick={show} className="fa fa-sort-down float-end icon-btn"/>
                </div>
                {showContactToggle ? (<div className="card-body">
                    <h5 className="card-title">Contact Infromation</h5>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <i className="fa fa-envelope"/>
                            <span className="mr-2">email</span>
                            <span className="float-end">{contact.email}</span>
                        </li>
                        <li className="list-group-item">
                            <i className="fa fa-building"/>
                            <span className="mr-2">Ville</span>
                            <span className="float-end">{contact.ville}</span>
                        </li>
                        <li className="list-group-item">
                            <i className="fa fa-phone"/>
                            <span className="mr-2">Phone</span>
                            <span className="float-end">{contact.tel}</span>
                        </li>
                    </ul>
                    <a href={"mailto:" + contact.email} className="mt-2 btn btn-dark">Contact By Email</a>
                    <button onClick={deleteContactEvent.bind(this, contact.id)}
                            className="float-end mt-2 btn btn-danger">Delete
                    </button>
                </div>) : null}

            </div>
        </div>
    )
    // not working
    // deleteContactEvent() {
    //     console.log("deleteContactEvent")
    //     this.props.contactDeleted();
    // }
    // deleteContactEvent = () => {
    //     this.props.contactDeleted();
    // }


}

Contact.defaultProps = {
    nom: "no title",
    prenom: "prenom",
    email: "no@no.com",
    tel: "no tel"
}
export default Contact;
