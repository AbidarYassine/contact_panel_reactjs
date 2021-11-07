import {NavLink} from "react-router-dom";
import React from "react";


function NotFound() {
    return (
        <div className="container-fluid row">
            <div className="col-6 offset-5">
                <h1>Not Found 404</h1>
                <NavLink className="text nav-link active" to='/'>Home</NavLink>
            </div>
        </div>
    )
}

export default NotFound;
