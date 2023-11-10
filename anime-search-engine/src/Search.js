import React, {useState} from "react";
import Display from "./Display";

function Search(){
    const [result, setResult] = useState("")
    const [content, setContent] = useState("")

    //Function that handles data fetching
    function handleSubmit(e){
      e.preventDefault()
      fetch(`https://api.trace.moe/search?url=${content}`)
      .then(res => res.json())
      .then(data => console.log(data))
      
    }
    return(
        <>
         <form id="url-form" onSubmit={handleSubmit}>
            <label className="label">Input URL in the Searchbar</label>
            <input value={content} type="text" placeholder="Input URL here" className="field"
                   onChange={(e) => setContent(e.target.value)}
            />
            <button className="btn">Search</button>
         </form>
         <Display result={result} />
        </>
    )
}

export default Search