import React from 'react'
import './navbar.css'
// function NavBar() {
//     return (
//         <div>
//             <h1>This is header (Create Panele)</h1>
//         </div>
//     )
// }
// export default NavBar;


/* Arrow Function */
const NavBar = (props) => {
    return (
        <div className="container justify-content-center">
            <h1 className="text-center">{props.title}</h1>
            <ul className="nav nav-pills justify-content-center mb-3">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">All </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Rabat</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Marrakech</a>
                </li>
            </ul>
        </div>

    )
}
export default NavBar;
