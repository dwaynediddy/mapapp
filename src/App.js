import React, { useState, useEffect } from 'react';

import './App.css';
import GMap from './Gmap'

const GOOGLE_MAP_API_KEY = 'AIzaSyDqOTmEdqJJ_EqvZNknrWjVdC5wrIr9JPQ'

const loadGoogleMapScript = (callback) => {
  if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
}
 
const App = () => {
  const [loadMap, setLoadMap] = useState(false);
 
  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true)
    });
  }, []);
 
  return (
    <div className="App">
      {!loadMap ? <div>Loading...</div> : <GMap />}
    </div>
  );
}
 
export default App