// import React, { useRef, useEffect } from 'react';
// import mapboxgl from 'mapbox-gl';
// import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

// const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoia2F6bWF0aWNzIiwiYSI6ImNsZmhjM3dzMDFlenozem56dDZkbmMzNDcifQ.pG2v20o-3o4PmIlRjnfYrg';
// (mapboxgl as any).accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN


// interface Props {
//   center: [number, number];
//   zoom: number;
// }

// const Map: React.FC<Props> = ({ center, zoom }) => {
//   const mapContainer = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
//     const map = new mapboxgl.Map({
//       container: mapContainer.current!,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center,
//       zoom,
//     });

//     const geocoder = new MapboxGeocoder({
//       accessToken: mapboxgl.accessToken,
//       mapboxgl,
//     });
//     map.addControl(geocoder);

//     return () => {
//       map.remove();
//     };
//   }, [center, zoom]);

//   return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />;
// };

// export default Map;

import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

mapboxgl.accessToken = "pk.eyJ1Ijoia2F6bWF0aWNzIiwiYSI6ImNsZmhjM3dzMDFlenozem56dDZkbmMzNDcifQ.pG2v20o-3o4PmIlRjnfYrg";

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
      });
    };

    if (!map) {
      initializeMap();
    }
  }, [map]);

  return <div ref={mapContainerRef} style={{ height: "100vh" }} />;
};

export default MapboxGeocoderMap;
