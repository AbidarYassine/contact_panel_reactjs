import {useState} from 'react'
import Contacts from './components/contact/Contacts';
import {Context} from "./components/context";
import NavBar from './components/header/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import "./App.css"
import {BrowserRouter as Route, Router, Switch} from "react-router-dom";
import AddContact from "./components/contact/AddContact";

function App() {
    const initialValue = [{
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
        }];
    const [contacts, setContacts] = useState(initialValue);

    return (
        <div className="App">
            <NavBar title="This is Nav Bar Dynamique"/>
            <Context.Provider value={{contacts, setContacts}}>
                <AddContact/>
                <Contacts/>
            < /Context.Provider>
            <div className="wrapper  d-md-block mt-4">
                <button id="viewAll" className="btn btn-block btn-dark">View All</button>
            </div>
        </div>
    );
}

export default App;
