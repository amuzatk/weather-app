import React, { useRef, useEffect, useState } from "react";
import mapboxgl, {LngLatLike} from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

// REACT_APP_MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoia2F6bWF0aWNzIiwiYSI6ImNsZms3MzIyZDA4NXI0Nm1jcW5yOTJwbWQifQ.EhcBmsAV3bt0CcffTCdmAw';
// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
mapboxgl.accessToken = 'pk.eyJ1Ijoia2F6bWF0aWNzIiwiYSI6ImNsZms3MzIyZDA4NXI0Nm1jcW5yOTJwbWQifQ.EhcBmsAV3bt0CcffTCdmAw';
console.log(mapboxgl.accessToken);

const MapboxGeocoderMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<mapboxgl.Map>();
  const [selectedCity, setSelectedCity] = useState<string>("");

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const initializeMap = () => {
      const newMap = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [2.3522, 48.8566],
        zoom: 1,
      });

      setMap(newMap);

      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      });

      newMap.addControl(geocoder);

      geocoder.on("result", (event: any) => {
        setSelectedCity(event.result.place_name);
      });

      newMap.on("load", () => {
        newMap.resize();
      });
    };

    if (!map) {
      initializeMap();
    }
  }, [map]);

  const createMarkerAndPopup = (lngLat: mapboxgl.LngLatLike) => {
    const marker = new mapboxgl.Marker().setLngLat(lngLat);
    const popup = new mapboxgl.Popup().setHTML("<div><h3>Hello York-Goup!</h3><p>Weather Forecasts for today and tomorrow coming soon!!!</p><div>");

    marker.setPopup(popup);
    marker.addTo(map);

    marker.on("click", () => {
      popup.addTo(map);
    });
  };

  useEffect(() => {
    if (!map || !selectedCity) return;

    map.flyTo({
      center: [0, 0], // Clear the map first
      zoom: 1,
      essential: true,
    });

    // Use Mapbox Geocoding API to get the coordinates of the selected city
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        selectedCity
      )}.json?access_token=${mapboxgl.accessToken}&limit=1`
    )
      .then((response) => response.json())
      .then((data) => {
        const coordinates = data.features[0].center;
console.log(data, 'dddd');

        createMarkerAndPopup(coordinates);
      });
  }, [map, selectedCity]);

  return( 
  <div ref={mapContainerRef} style={{ height: "100vh" }} />
  )

};

export default MapboxGeocoderMap;