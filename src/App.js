import Contacts from './components/contact/Contacts';
import NavBar from './components/header/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import "./App.css"
function App() {
  return (
    <div className="App">
      <NavBar title="This is Nav Bar Dynamique" />
      <Contacts />
      <div className="wrapper  d-md-block mt-4">
        <button id="viewAll" className="btn btn-block btn-dark">View All</button>
      </div>
    </div>
  );
}

export default App;
