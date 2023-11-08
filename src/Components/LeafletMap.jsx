import React, { useEffect, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import 'leaflet/dist/leaflet.css';

function LeafletMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize map
    const map = new Map(mapRef.current);

    navigator.geolocation()
    // Set initial view and zoom level
    map.setView([51.505, -0.09], 13);

    // Add a tile layer (e.g., OpenStreetMap)
    new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Clean up the map when component unmounts
    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapRef} style={{ height: '400px' }} />;
}

export default LeafletMap;
