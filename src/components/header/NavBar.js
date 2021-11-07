import React from 'react'
import './navbar.css'
import {NavLink} from "react-router-dom";
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
                    {/*<a className="nav-link active" aria-current="page" href="#">All </a>*/}
                    <NavLink className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
                             to='/'>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'} to='/add'>Add
                        Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
                             to='/about'>About</NavLink>
                </li>
            </ul>
        </div>

    )
}
export default NavBar;
