import React, {useContext, useState} from 'react'
import './contact.css'
import {Context} from "../context";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function Contact(props) {

    const [showContactToggle, setShowContactToggle] = useState(false);
    const contact = props.data;
    const {contacts, setContacts} = useContext(Context);
    let navigate = useNavigate();

    const show = () => {
        console.log(showContactToggle);
        setShowContactToggle(!showContactToggle);
    }
    const deleteContactEvent = (id) => {
        axios.delete("https://jsonplaceholder.typicode.com/users/" + id).then((res) => {
            console.log(id);
            const newContacts = contacts.filter(el => el.id !== id);
            setContacts(newContacts);

        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-header bg-danger text-white">
                    <span> {contact.name} </span>
                    <i onClick={show} className="fa fa-sort-down float-end icon-btn"/>
                </div>
                {showContactToggle ? (<div className="card-body">
                    <h5 className="card-title">Contact Infromation</h5>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <i className="fa fa-envelope"/>
                            <span className="mr-2">User Name</span>
                            <span className="float-end">{contact.username}</span>
                        </li>
                        <li className="list-group-item">
                            <i className="fa fa-envelope"/>
                            <span className="mr-2">email</span>
                            <span className="float-end">{contact.email}</span>
                        </li>
                        <li className="list-group-item">
                            {
                                contact.address ? (
                                    <div>
                                        <i className="fa fa-building"/>
                                        <span className="mr-2">Adresses</span>
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <span className="mr-2">street</span>
                                                <span className="float-end">{contact.address.street}</span>
                                            </li>
                                            <li className="list-group-item">
                                                <span className="mr-2">suite</span>
                                                <span className="float-end">{contact.address.suite}</span>
                                            </li>
                                            <li className="list-group-item">
                                                <span className="mr-2">city</span>
                                                <span className="float-end">{contact.address.city}</span>
                                            </li>
                                            <li className="list-group-item">
                                                <span className="mr-2">zipcode</span>
                                                <span className="float-end">{contact.address.zipcode}</span>
                                            </li>
                                            <li className="list-group-item">
                                                <span className="mr-2">geo</span>
                                                <ul className="list-group">
                                                    <li className="list-group-item">
                                                        <span className="mr-2">lat</span>
                                                        <span className="float-end">{contact.address.geo.lat}</span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <span className="mr-2">lon</span>
                                                        <span className="float-end">{contact.address.geo.lng}</span>
                                                    </li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </div>
                                ) : null
                            }


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
