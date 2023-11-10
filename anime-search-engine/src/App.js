import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchEngine from "./SearchEngine";
import Navbar from "./Navbar";

function App(){
    return(
        <div>
         <Navbar />
         <Routes>
            <Route path="/" element={<SearchEngine />} />
         </Routes>
        </div>
    )
}

export default App