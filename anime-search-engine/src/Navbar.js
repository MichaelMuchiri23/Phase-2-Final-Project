import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    const styles = {
        display: "inline-block",
        margin: "0 6px 6px",
        padding: "12px",
        color: "white",
        background: "green"
    
    }

    return(
        <nav>
            <NavLink style={styles} exact to="/">Search Engine</NavLink>
            <NavLink style={styles} to="/about">About</NavLink>
            <NavLink style={styles} to="/documentation">Documentation</NavLink>
        </nav>
    )
}

export default Navbar