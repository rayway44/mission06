
import { 
    GoogleMap,
    Marker,
    InfoWindow,
  } from '@react-google-maps/api'
  
  import {useState} from 'react'
  
  import './Map.css'
  
  
  export default function Map() {
    const google = window.google; //DO NOT DELETE
    // const API_KEY = `AIzaSyCTguzByLKCcv6eVpbBmb78PGJlK5_f07M`
    
  
    const auckland = {lat: -36.8469154, lng: 174.7417116};
    const propertyOne = { lat: -36.8469154, lng: 174.7417116 };
    const propertyTwo = { lat: -36.8486661, lng: 174.7423653 };
    const propertyThree = { lat: -36.8470639, lng: 174.7404854 };
    const zoom = 16
  
    const contentString = <h1> LETS GO</h1>
  
      let box = document.createElement("infoWindow");
      box.innerHTML = contentString
  
  
    const markers = [
      {
        id: 1,
        name: [<h1>I am one</h1>,<p> am oneI  oneI am one<br/>I am oneI am one am oneI  oneI am one<br/>I am oneI am one am oneI  oneI am one<br/>I am oneI am one am oneI  oneI am one<br/>I am oneI am one am oneI  oneI am one<br/>I am oneI am one am oneI  oneI am one<br/>I am oneI am one am oneI  oneI am one<br/>I am oneI am one</p>,<h1>I am one</h1>],
        position: propertyOne,
      },  
      {
        id: 2,
        name: [<h1>I am one</h1>,<p> am oneI  oneI am one<br/>I am oneI am one am oneI  oneI am one<br/>I am oneI am one am oneI  oneI am one<br/>I am oneI am one am oneI  oneI am one<br/>I am oneI am one am oneI  oneI am one<br/>I am oneI am one am oneI  oneI am one<br/>I am oneI am one am oneI  oneI am one<br/>I am oneI am one</p>,<h1>I am one</h1>],
        position: propertyTwo,
      },  
      {
        id: 3,
        name: contentString,
        position: propertyThree,
      }
    ];
    
      const [activeMarker, setActiveMarker] = useState(null);
    
      const handleActiveMarker = (marker) => {
        
        setActiveMarker(marker);
        console.log('we here belos')
      };
    
      const handleOnLoad = (map) => {
        console.log('we here')
        const bounds = new google.maps.LatLngBounds();
        markers.forEach(({ position }) => bounds.extend(position));
        map.fitBounds(bounds);
      };
  
      // zoom={zoom} 
      // center={auckland}
      // mapContainerClassName='map'
    
    return (
      <div className='map'>
        
        <GoogleMap
        onLoad={handleOnLoad}
        onClick={() => setActiveMarker(null)}
        center={auckland}
        mapContainerClassName='map-map'
        zoom={zoom} 
      >
        {markers.map(({ id, name, position, }) => (
          <Marker
            key={id}
            
            position={position}
            label= 'holder'
            onClick={() => handleActiveMarker(id)}
          >
            {activeMarker === id ? (
              <InfoWindow >
                <div id='infoWindow' className='infoWindow'>{name}</div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
      </GoogleMap>
        
      </div>
    )
  }