// Importing the 'React' module and 'useState' hook from the 'react' library.
import React, {useState} from "react";
//Import other functions
import Form from "./Form";
import Convert from "./Convert";
function AppGroup() {

    var convert = false;
    var videoID = "";
    const [song, setSong] = useState([]);

    const getLink = async (link) => {
        console.log(link);
  
        var urlLink = link;
        var videoid = urlLink.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
        if(videoid != null) {
        videoID = videoid[1];
        console.log(videoID);
        console.log("video id = ",videoid[1]);

        
        
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
            console.log(result.link);
            convert = true;
            setSong({title: result.title, link: result.link, id: videoID, isConverting: convert})
            console.log(song);

        } catch (error) {
            console.error(error);
            alert("Invalid Link!");
        }


        } else { 
            console.log("The youtube url is not valid.");
            alert("Invalid Link!");
        }
        
    };
    
    
    return (
      <div className="App">
        <Form getLink={getLink}/>
        <Convert song={song}/>
      </div>
    );
  }
  
  export default AppGroup;