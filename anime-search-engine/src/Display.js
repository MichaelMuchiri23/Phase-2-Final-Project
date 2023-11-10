import React from "react";

function Display({result}){
   return(
    <div>
        <video id="video-result" width="320" height="240" autoPlay>
            <source src={result} type="video/mp4" />
        </video>
        <ul className="details">
            <li>{result}</li>
            <li>{result}</li>
        </ul>
    </div>
   )
}

export default Display