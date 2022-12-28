import * as React from 'react';
import MapGl, { Marker,Popup } from 'react-map-gl';
import { getCenter } from 'geolib';
import { useState } from 'react';

function Map({searchResults}){

  const [selectedLocation, setSelectedLocation] = useState({})

  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);
  console.log(center)

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11
  });
  
  return <MapGl
    //style={{width: 600, height: 900}}
    //style={{ cursor: 'pointer' }}
    draggable
    mapStyle='mapbox://styles/carlos-teixeira/clc676320003f14myhbl751fc'
    mapboxApiAccessToken={process.env.mapbox_key}
    {...viewport} 
    onViewportChange={(nextViewport) => setViewport(nextViewport)}
  >
    
    {searchResults.map(result => (
      <div key={result.long}>
        <Marker
          longitude={result.long}
          latitude={result.lat}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <p 
            className='cursor-pointer text-2xl animate-bounce'
            onClick={() => setSelectedLocation(result)}
          >
              📌
          </p>
        </Marker>

        {selectedLocation.long === result.long ? (
          <Popup
            onClose={() => setSelectedLocation({})}
            closeOnClick={true}
            latitude={result.lat}
            longitude={result.long}
          >
            {result.title}
          </Popup>
        ) : (
          false
        )}
      </div>
    ))}

  </MapGl>
}

export default Map;