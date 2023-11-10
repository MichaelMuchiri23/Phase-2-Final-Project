import React from "react";

function Display({result}){
   return(
    <div id="display-div">
        <video src={result.video} controls id="video-result" width="400" height="240" >
            <source src={result.video} type="video/mp4" />
        </video>
        <ul className="details">
            <li>{result.filename}</li>
            <li>{result.episode}</li>
        </ul>
    </div>
   )
}

export default Display