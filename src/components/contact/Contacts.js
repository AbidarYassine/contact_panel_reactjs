import Contact from "./Contact";
import {connect} from "react-redux";
import {getContacts} from "../../actions/actions";

function Contacts(props) {
    // useEffect(() => {
    //     props.getContacts();
    // }, [])

    return (
        <div className="container">
            <div className="row">
                {
                    props.contacts ? (props.contacts.map((contact) => {
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

//mise a jour data in store
const mapStateToProps = (state) => {
    return {
        contacts: state.contact.contacts
    }
}

export default connect(mapStateToProps, {getContacts})(Contacts);
