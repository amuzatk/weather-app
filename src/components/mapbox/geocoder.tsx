// import React, { useRef, useEffect, useState } from "react";
// import mapboxgl from "mapbox-gl";
// import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
// import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

// (mapboxgl as any).accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

// const MapboxGeocoderMap: React.FC = () => {
//   const mapContainerRef = useRef<HTMLDivElement>(null);
//   const [map, setMap] = useState<mapboxgl.Map>();

//   useEffect(() => {
//     if (!mapContainerRef.current) return;

//     const initializeMap = () => {
//       const newMap = new mapboxgl.Map({
//         container: mapContainerRef.current,
//         style: "mapbox://styles/mapbox/streets-v11",
//         center: [-122.436, 37.77],
//         zoom: 12,
//       });

//       setMap(newMap);

//       const geocoder = new MapboxGeocoder({
//         accessToken: mapboxgl.accessToken,
//         mapboxgl: mapboxgl,
//       });

//       newMap.addControl(geocoder);

//       newMap.on("load", () => {
//         newMap.resize();
//       });
//     };

//     if (!map) {
//       initializeMap();
//     }
//   }, [map]);

//   return <div ref={mapContainerRef} style={{ height: "100vh" }} />;
// };

// export default MapboxGeocoderMap;

// import React, { useRef, useEffect, useState } from "react";
// import mapboxgl, { LngLatLike } from "mapbox-gl";
// import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
// import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

// mapboxgl.accessToken =
//   "pk.eyJ1Ijoia2F6bWF0aWNzIiwiYSI6ImNsZms3MzIyZDA4NXI0Nm1jcW5yOTJwbWQifQ.EhcBmsAV3bt0CcffTCdmAw" ||
//   "";

// const cityCoordinates: { [key: string]: LngLatLike } = {
//   "San Francisco": [-122.436, 37.77],
//   Paris: [2.3522, 48.8566],
//   Tokyo: [139.6917, 35.6895],
//   Moscow: [37.6173, 55.7558],
//   "New York": [-74.0059, 40.7128],
//   "Mexico City": [-99.1332, 19.4326],
//   London: [-0.1278, 51.5074],
//   "Buenos Aires": [-58.3816, -34.6037],
//   Beijing: [116.4074, 39.9042],
//   Cairo: [31.2357, 30.0444],
//   "São Paulo": [-46.6333, -23.5505],
//   Istanbul: [28.9784, 41.0082],
//   Yokohama: [139.638, 35.4437],
//   Sydney: [151.2093, -33.8688],
//   Oslo: [10.7461, 59.9127],
//   "San Diego": [-117.1628, 32.7157],
//   "Washington, D.C.": [-77.0369, 38.9072],
//   Strasbourg: [6.1296, 49.6116],
//   Nantes: [-1.5536, 47.2184],
//   Ljubljana: [14.5058, 46.0569],
// };

// const cityNames = Object.keys(cityCoordinates);

// const MapboxGeocoderMap: React.FC = () => {
//   const mapContainerRef = useRef<HTMLDivElement>(null);
//   const [map, setMap] = useState<mapboxgl.Map>();

//   useEffect(() => {
//     if (!mapContainerRef.current) return;

//     const initializeMap = () => {
//       const newMap = new mapboxgl.Map({
//         container: mapContainerRef.current,
//         style: "mapbox://styles/mapbox/streets-v11",
//         center:
//           cityCoordinates[
//             cityNames[Math.floor(Math.random() * cityNames.length)]
//           ],
//         zoom: 12,
//       });

//       setMap(newMap);

//       const geocoder = new MapboxGeocoder({
//         accessToken: mapboxgl.accessToken,
//         mapboxgl: mapboxgl,
//         limit: 20,
//         // proximity: cityCoordinates,
//       });

//       newMap.addControl(geocoder);

//       newMap.on("load", () => {
//         newMap.resize();
//       });
//     };

//     if (!map) {
//       initializeMap();
//     }
//   }, [map]);

//   return <div ref={mapContainerRef} style={{ height: "100vh" }} />;
// };

// export default MapboxGeocoderMap;

import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import App from "../../App";

(mapboxgl as any).accessToken =
  "pk.eyJ1Ijoia2F6bWF0aWNzIiwiYSI6ImNsZms3MzIyZDA4NXI0Nm1jcW5yOTJwbWQifQ.EhcBmsAV3bt0CcffTCdmAw" ||
  "";
const MapboxGeocoderMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<mapboxgl.Map>();


  useEffect(() => {
    if (!mapContainerRef.current) return;

    const initializeMap = () => {
      const newMap = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-122.436, 37.77],
        zoom: 12,
      });

      setMap(newMap);

      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      });

      newMap.addControl(geocoder);

      newMap.on("load", () => {
        newMap.resize();

        // Define marker and popup
        const marker = new mapboxgl.Marker().setLngLat([-122.436, 37.77]);
        const popup = new mapboxgl.Popup().setHTML("<h3>Weather Forecast is coming soon!</h3><h3>Tomorrow Weather Forecast is coming soon!</h3>");


        // Attach popup to marker
        marker.setPopup(popup);


        // Add marker to map
        marker.addTo(newMap);

        // Listen for click event on marker and open popup
        // marker.addListener("click", () => {
        //   popup.addTo(newMap);
        // });
      });
    };

    if (!map) {
      initializeMap();
    }
  }, [map]);

  return (
    <>
    <h1>News branch kazzem2 to be deployed</h1>
  <div ref={mapContainerRef} style={{ height: "100vh" }} />
  <App  />
  </>
  )

};

export default MapboxGeocoderMap;
