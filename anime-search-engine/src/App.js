import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchEngine from "./SearchEngine";
import Navbar from "./Navbar";
import About from "./About";

function App(){
    return(
        <div>
         <Navbar />
         <Routes>
            <Route path="/" element={<SearchEngine />} />
            <Route path="/about" element={<About />} />
         </Routes>
        </div>
    )
}

export default App