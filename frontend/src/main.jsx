// // import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import React from 'react'
// // import ReactDOM from 'react-dom'
// import { BrowserRouter } from 'react-router-dom'
// // import { StrictMode } from 'react-router-dom'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   // <StrictMode>
//   //   <App />
//   // </StrictMode>,
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// )


import { createRoot } from 'react-dom/client';
// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { StrictMode } from 'react-router-dom'
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
      <App />
);
