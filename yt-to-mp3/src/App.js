import './App.css';

function App() {
  return (
    <div className="App">
  
      <div class="top-container">
        <form action="convert-mp3" method="post" id="form">

          <h1><i class="fa-brands fa-square-youtube"></i>
            Youtube to MP3 Converter</h1>
          <input id="videoID" type="text" placeholder="Youtube Link"></input><button id="covert-btn">Convert</button>
        </form>
      </div>
    </div>
  );
}

export default App;
