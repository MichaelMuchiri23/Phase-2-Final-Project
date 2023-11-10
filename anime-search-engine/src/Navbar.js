import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <NavLink exact to="/">Search Engine</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/documentation">Documentation</NavLink>
        </nav>
    )
}

export default Navbar