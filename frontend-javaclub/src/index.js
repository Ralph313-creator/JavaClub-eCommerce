import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const preload = document.querySelector('#preloader');
window.addEventListener('load', () => {
  preload.style.display = 'none';
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
