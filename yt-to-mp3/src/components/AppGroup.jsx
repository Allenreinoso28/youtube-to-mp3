// Importing the 'React' module and 'useState' hook from the 'react' library.
import React, {useState} from "react";
//Import other functions
import Form from "./Form"
function AppGroup() {

    const [videoID, setVideoID] = useState("");
    const [download, setDownload] = useState([]);

    
    const getLink = async (link) => {
        console.log(link);
  
        var urlLink = link;
        var videoid = urlLink.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
        if(videoid != null) {
        
        console.log("video id = ",videoid[1]);
        console.log(videoid[1]);
        setVideoID(videoid[1]);
        } else { 
        console.log("The youtube url is not valid.");
        }
    }
    

    const getDownload = async (download) => {
          const url = `https://youtube-mp36.p.rapidapi.com/dl?id=${videoID}`;
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
            setDownload([download, {title: result.title, downloadlink: result.link}])
            console.log(result.link);
        } catch (error) {
            console.error(error);
        }
    }
      
return (
      <div className="App">
        <Form getLink={getLink}/>
        
      </div>
    );

        
        
    };
    
    
    
  
  export default AppGroup;