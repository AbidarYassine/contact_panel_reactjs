import React from 'react';
import {Context} from "../context";
import {useContext, useState} from 'react';


function AddContact() {
    const {contacts, setContacts} = useContext(Context);
    const [contact, setContact] = useState({
        nom: "",
        prenom: "",
        email: "",
        ville: "",
        phone: "",
    });
    const [show, setShow] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        const newContacts = contacts.push(contact)
        // setContacts(newContacts);
    }
    const onChangeInput = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    }
    return (
        // <Context.Consumer>
        //     {
        //         value => {
        //             console.log("Add product comp", value)
        //         }
        //     }
        // </Context.Consumer>
        <div className="container-fluid row ">
            <div className="col-md-6 offset-3">
                <button onClick={() => setShow(!show)} className="btn btn-primary float-end mb-2">Show / Hide</button>
            </div>
            {
                show ? (<form onSubmit={submitForm} className="col-md-6 offset-3">
                    <div className="form-group">
                        <label htmlFor="nom">Nom</label>
                        <input onChange={onChangeInput} defaultValue={contact.nom} id="nom"
                               placeholder="Nom"
                               className="form-control" name="nom" type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="prenom">Prenom</label>
                        <input onChange={onChangeInput} id="prenom" defaultValue={contact.prenom}
                               placeholder="Prenom"
                               name="prenom"
                               className="form-control"
                               type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input onChange={onChangeInput} id="email" name="email"
                               defaultValue={contact.email}
                               placeholder="Email"
                               className="form-control"
                               type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ville">Ville</label>
                        <input onChange={onChangeInput} id="ville" name="ville"
                               defaultValue={contact.ville}
                               placeholder="Ville"
                               className="form-control"
                               type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input onChange={onChangeInput} id="phone" name="phone"
                               defaultValue={contact.phone}
                               placeholder="Phone"
                               className="form-control"
                               type="text"/>
                    </div>
                    <div className="d-grid gap-2 mt-3 mb-3">
                        <button onClick={submitForm} type="submit" className="btn btn-dark btn-block">Add New
                            Contact
                        </button>
                    </div>
                </form>) : null
            }

        </div>
    )

}

export default AddContact;






