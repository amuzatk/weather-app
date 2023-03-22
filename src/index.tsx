/* eslint-disable no-sequences */
import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import App from './App';
// import Mapbox from './components/mapbox/mapbox';
import Map from './components/mapbox/geocoder';
import MapboxGeocoderMap from './components/mapbox/geocoder';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Mapbox /> */}
    <App />
    {/* <Map zoom={10}  /> */}
    <MapboxGeocoderMap />

  </React.StrictMode>
);
