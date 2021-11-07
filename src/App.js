import {useState, useEffect} from 'react'
import Contacts from './components/contact/Contacts';
import {Context} from "./components/context";
import NavBar from './components/header/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import "./App.css"
import {Route, Routes} from "react-router-dom";
import AddContact from "./components/contact/AddContact";
import About from "./components/about/About";
import NotFound from "./components/NotFound";
import axios from 'axios';

function App() {

    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            console.log("res ", res);
            console.log("data ", res.data);
            setContacts(res.data);
        })
    }, []);

    return (
        <div className="App">
            <NavBar title="This is Nav Bar Dynamique"/>
            <Context.Provider value={{contacts, setContacts}}>
                <Routes>
                    <Route path="/" element={<Contacts/>}/>
                    <Route path="/add" element={<AddContact/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            < /Context.Provider>

        </div>
    );
}

export default App;
