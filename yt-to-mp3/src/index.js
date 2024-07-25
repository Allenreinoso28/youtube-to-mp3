import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Result from './result';
var status = undefined;



// // render the outputs in bottom container

  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// if (success === true)
// {
  const leaf = ReactDOM.createRoot(document.getElementById('leaf'));
  leaf.render(<Result downloadStatus={status}/>);
// }
  

