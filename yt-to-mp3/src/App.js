import './App.css';


export default function App() {

  function handleSubmit(e){
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
        <form method='post' onSubmit={handleSubmit}id="videoIDForm">

          <h1><i class="fa-brands fa-square-youtube"></i>
            Youtube to MP3 Converter</h1>
          <input id="videoID" type="text" placeholder="Youtube Link"></input><button type='submit' id="covert-btn">Convert</button>
        </form>
     
  );
}


