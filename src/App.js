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
import store from "./redux/store";

function App() {
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
