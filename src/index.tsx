/* eslint-disable no-sequences */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './components/mapbox/geocoder';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Test /> */}

  </React.StrictMode>
);
