// Importing the 'React' module and 'useState' hook from the 'react' library.
//import React, {useState} from "react";
//Import other functions
import Form from "./Form"
function AppGroup() {
    
    const getLink = async (link) => {
        console.log(link);
  
        var urlLink = link;
        var videoid = urlLink.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
        if(videoid != null) {
        
        console.log("video id = ",videoid[1]);
        console.log(videoid[1]);
        
        const url = `https://youtube-mp36.p.rapidapi.com/dl?id=${videoid[1]}`;
        console.log(url);
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'd93378e5abmshcfcb677c9c44a1cp1f8d79jsn95ace4640607',
                'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            console.log(result.title);
            console.log(result.author);
            console.log(result.thumb);
            console.log(result.link);
        } catch (error) {
            console.error(error);
        }


        } else { 
            console.log("The youtube url is not valid.");
        }
        
    };
    
    
    
    
    
    
    
    
    
    return (
      <div className="App">
        <Form getLink={getLink}/>
        
      </div>
    );
  }
  
  export default AppGroup;