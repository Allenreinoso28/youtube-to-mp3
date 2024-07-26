import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Result from './result';
import Test from './testOutput';
var status = undefined;
let videoID = "";


// // render the outputs in bottom container

  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

let videoIDForm = document.getElementById("videoIDForm");
// videoIDForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//  //handle my submit here
//  let videoID = document.getElementById("videoID")
// });


// if (success === true)
// {
  // const leaf = ReactDOM.createRoot(document.getElementById('leaf'));
  // leaf.render(<Result downloadStatus={status}/>);
  const leaf = ReactDOM.createRoot(document.getElementById('leaf'));
  leaf.render(<Test output={videoIDForm}/>);
// }
  

