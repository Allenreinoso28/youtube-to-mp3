// import React, {useState} from "react";

const Convert = ({song}) => { 

    return(
    <div className="convert">

        {song.isConverting ? (
            <div className="convert-block">
                <div className="song-title">
                    {song.title}
                </div>
                <img className="thumbnail" src={`https://img.youtube.com/vi/${song.id}/mqdefault.jpg`} alt="Youtube thumbnail"></img>
                <div>
                    <a className="download-btn" href={song.link}>Download</a>
                </div>
            </div>
            
            
            ) : (
            <div className="placeholder div"></div>
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