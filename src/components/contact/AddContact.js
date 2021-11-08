import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import {addContact} from "../../actions/actions";


function AddContact(props) {
    const [contact, setContact] = useState({
        name: "",
        username: "",
        email: "",
    });
    const [show, setShow] = useState(true);

    const submitForm = async (e) => {
        e.preventDefault();
        const res = await axios.post("https://jsonplaceholder.typicode.com/users", contact)
        const newContact = {...contact, id: Math.random() * 100};
        props.addContact(newContact);
        // history.push("/");
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
                <button style={{display: "none"}} onClick={() => setShow(!show)}
                        className="btn btn-primary float-end mb-2">Show / Hide
                </button>
            </div>
            {
                show ? (<form onSubmit={submitForm} className="col-md-6 offset-3">
                    <div className="form-group">
                        <label htmlFor="nom">Name</label>
                        <input onChange={onChangeInput} defaultValue={contact.name} id="name"
                               placeholder="Name"
                               className="form-control" name="name" type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="prenom">Prenom</label>
                        <input onChange={onChangeInput} id="username" defaultValue={contact.username}
                               placeholder="User name"
                               name="username"
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

export default connect(null, {addContact})(AddContact);






