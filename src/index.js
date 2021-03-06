import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/root/App";
import "./assets/sass/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


