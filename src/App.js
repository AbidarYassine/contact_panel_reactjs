import {useState, useEffect} from 'react'
import Contacts from './components/contact/Contacts';
import {Provider} from "react-redux";
import NavBar from './components/header/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import "./App.css"
import {Route, Routes} from "react-router-dom";
import AddContact from "./components/contact/AddContact";
import About from "./components/about/About";
import NotFound from "./components/NotFound";
import axios from 'axios';
import store from "./store";

function App() {

    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            setContacts(res.data);
        })
    }, []);

    return (
        <div className="App">
            <NavBar title="This is Nav Bar Dynamique"/>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<Contacts/>}/>
                    <Route path="/add" element={<AddContact/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Provider>

        </div>
    );
}

export default App;
