import React from "react";
import Display from "./Display";

function Search(){
    return(
        <form id="url-form" onSubmit={}>
            <label className="label">Input URL in the Searchbar</label>
            <input type="text" placeholder="Input URL here" className="field" />
            <button className="btn">Search</button>
        </form>
    )
}

export default Search