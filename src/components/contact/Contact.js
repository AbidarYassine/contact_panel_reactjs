import React from 'react'
import './contact.css'

class Contact extends React.Component {

    state = {
        showContactToggle: false
    };

    show(t) {
        this.setState({
            showContactToggle: !this.state.showContactToggle
        });
    }

    // not working
    // deleteContactEvent() {
    //     console.log("deleteContactEvent")
    //     this.props.contactDeleted();
    // }
    deleteContactEvent = () => {
        this.props.contactDeleted();
    }


    render() {
        const {nom, prenom, email, tel, ville} = this.props.data;
        return (
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header bg-danger text-white">

                        <span> {prenom} {nom}</span>
                        <i onClick={this.show.bind(this, "test")} className="fa fa-sort-down float-end icon-btn"/>
                    </div>
                    {this.state.showContactToggle ? (<div className="card-body">
                        <h5 className="card-title">Contact Infromation</h5>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <i className="fa fa-envelope"/>
                                <span className="mr-2">email</span>
                                <span className="float-end">{email}</span>
                            </li>
                            <li className="list-group-item">
                                <i className="fa fa-building"/>
                                <span className="mr-2">Ville</span>
                                <span className="float-end">{ville}</span>
                            </li>
                            <li className="list-group-item">
                                <i className="fa fa-phone"/>
                                <span className="mr-2">Phone</span>
                                <span className="float-end">{tel}</span>
                            </li>
                        </ul>
                        <a href={"mailto:" + email} className="mt-2 btn btn-dark">Contact By Email</a>
                        <button onClick={this.deleteContactEvent}
                                className="float-end mt-2 btn btn-danger">Delete
                        </button>
                    </div>) : null}

                </div>
            </div>
        )
    }
}

Contact.defaultProps = {
    nom: "no title",
    prenom: "prenom",
    email: "no@no.com",
    tel: "no tel"
}
export default Contact;
