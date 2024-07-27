// import React, {useState} from "react";

const Convert = ({song}) => { 

    return(
    <div>

        {song.isConverting ? (
            <div>
                <div>
                    {song.title}
                </div>
                <img src={`https://img.youtube.com/vi/${song.id}/mqdefault.jpg`} alt="Youtube thumbnail"></img>
                <div>
                    <a className="download-btn" href={song.link}>Download</a>
                </div>
            </div>
            
            
            ) : (
            <div></div>
            )
        }
        
    </div>

    );  
}
    
export default Convert;

// {
//               isConverting ? (
//                 <img src={`https://img.youtube.com/vi/${song.id}/mqdefault.jpg`}></img>
//             ) : (<div><div/)