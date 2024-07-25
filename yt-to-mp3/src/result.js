import './App.css';
function Result(status) {
    const downloadStatus = status.downloadStatus;
  if(downloadStatus){
    return (
        <div className="Leaf">
    
        <div class="bottom-container">
            <h1>link</h1><button>Download</button>
        </div>
        </div>
        ); 
    }
    if(downloadStatus === false){
    return (
        <div className="Leaf">
    
        <div class="bottom-container">
            <h1>error message</h1>
        </div>
        </div>
        );
    }
    else {
        return(
            <div>
            {/* this will be the space holder div if convert has not been pressed */}
            </div>
        )
    }
}

export default Result;