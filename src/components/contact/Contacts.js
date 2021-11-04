import React, {Component} from 'react'
import Contact from './Contact';

class Contacts extends Component {


    state = {
        contacts: [
            {
                id: 1,
                nom: "abidar",
                prenom: "yassine",
                tel: "0639564084",
                ville: "Rabat",
                email: "yassinabidar201@gmail.com"
            },
            {
                id: 2,
                nom: "abidar",
                prenom: "abdo-test",
                ville: "Marrakech",
                tel: "0639564084",
                email: "abdo-test@gmail.com"
            },
            {
                id: 3,
                nom: "abidar",
                prenom: "assmae",
                ville: "Casablanca",
                tel: "0639564084",
                email: "assmae@gmail.com"
            },
            {
                id: 4,
                nom: "abdo",
                prenom: "abdo",
                tel: "0639564084",
                ville: "Rabat",
                email: "abdo@gmail.com"
            },
            {
                id: 5,
                nom: "batassa",
                prenom: "abdo",
                tel: "0639564084",
                ville: "Casa",
                email: "abdo@gmail.com"
            },
            {
                id: 6,
                nom: "Khayati",
                prenom: "abdo",
                tel: "0639564084",
                ville: "Rabat",
                email: "abdo@gmail.com"
            }
        ]
    }

    deleteContact(id) {
        this.setState({
            contacts: this.state.contacts.filter(el => el.id !== id)
        })
    }

    render() {
        const {contacts} = this.state;
        return (
            <div className="container">
                <div className="row">
                    {
                        contacts.map((contact) => {
                            return <Contact contactDeleted={this.deleteContact.bind(this, contact.id)} key={contact.id}
                                            data={contact}/>
                        })
                    }
                </div>
            </div>
        )
    }
}


export default Contacts;
