import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

(mapboxgl as any).accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

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
