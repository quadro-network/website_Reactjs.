import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals.js';
import App from './App.js';
import NavPanel from './view/header/NavPanel.js';
import Footer from './view/footer/Footer.js';
import Sidebar from './view/header/ContactData.js';

const nav = ReactDOM.createRoot(document.getElementById('nav'));
nav.render(
  <React.StrictMode>
      <NavPanel />
      <Sidebar />

  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
 
  </React.StrictMode>
);

const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

   
reportWebVitals();
