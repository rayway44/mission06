
import { 
    GoogleMap,
    Marker,
    InfoWindow,
  } from '@react-google-maps/api'
  
  import {useState} from 'react'
  
  import './Map.css'
  import {useLocation} from 'react-router-dom'
  import axios from 'axios'
  
  
  export default function Map() {

    const google = window.google; //DO NOT DELETE

    const [propOne, setPropOne] = useState(0)
    const [propOneImg, setPropOneImg] = useState(0)

    const [propTwo, setPropTwo] = useState(0)
    const [propTwoImg, setPropTwoImg] = useState(0)
    
    const [propThree, setPropThree] = useState(0)
    const [propThreeImg, setPropThreeImg] = useState(0)


     // grabs search params from URL
     const {search} = useLocation()
     const searchParams = new URLSearchParams(search)
 
     const property = searchParams.get('property')
     const city = searchParams.get('city')
     const suburb = searchParams.get('suburb')
     const rent = searchParams.get('rent')
     const bedroom = searchParams.get('bedroom')
     const bathroom = searchParams.get('bathroom')
     const pet = searchParams.get('pet')
     const smoker = searchParams.get('smoker')

    let querySearch = `http://localhost:5000/listing/${property}/${city}/${suburb}/${rent}/${bedroom}/${bathroom}/${pet}/${smoker}`

    axios.get(querySearch)
        .then(res => {
            
            console.log(res.data)  
            // console.log(`CALLING FROM MAP`)
            setPropOne(res.data[0].address)
            setPropOneImg(res.data[0].images)

            setPropTwo(res.data[1].address)
            setPropTwoImg(res.data[1].images)

            setPropThree(res.data[2].address)
            setPropThreeImg(res.data[2].images)
            
          })
         

    const auckland = {lat: -36.8469154, lng: 174.7417116};
    const propertyOne = { lat: -36.8469154, lng: 174.7417116 };
    const propertyTwo = { lat: -36.8486661, lng: 174.7423653 };
    const propertyThree = { lat: -36.8470639, lng: 174.7404854 };
    const propertyFour = { lat: -36.846873, lng: 174.742888 };
    const propertyFive = { lat: -36.845692, lng: 174.735973 };
    const propertySix = { lat: -36.848362, lng: 174.735576 };
    const propertySeven = { lat: -36.850774, lng: 174.736134 };
    const propertyEight = { lat: -36.850193, lng:174.743354 };
    const propertyNine = { lat: -36.847962, lng:174.742636 };
    
    const zoom = 14
    
  
    const markers = [
      {
        id: 1,
        name: [<span className='info-styling'><img src={propOneImg} alt=''/><br/>
        <span className='info-window-title'>{propOne}</span><br/><br/>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel purus dolor. Donec eget nisl nec metus euismod ullamcorper. Pellentesque blandit leo eros, eu convallis quam faucibus sit amet. Etiam viverra tincidunt lacinia.</span>
        </span>],
        icon: {
          url: 'images/img.png',
          scaledSize: new google.maps.Size(100,140)
        },
        holder: google.maps.Animation.DROP,
        position: propertyOne,
      },  
      {
        id: 2,
        name: [<span className='info-styling'><img src={propTwoImg} alt=''/><br/>
        <span className='info-window-title'>{propTwo}</span><br/><br/>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel purus dolor. Donec eget nisl nec metus euismod ullamcorper. Pellentesque blandit leo eros, eu convallis quam faucibus sit amet. Etiam viverra tincidunt lacinia.</span>
        </span>],
        icon: {
          url: 'images/img.png',
          scaledSize: new google.maps.Size(100,140)
        },
        holder: google.maps.Animation.DROP,
        position: propertyTwo,
      },  
      {
        id: 3,
        name: [<span className='info-styling'><img src={propThreeImg} alt=''/><br/><br/>
        <span className='info-window-title'>{propThree}</span><br/><br/>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel purus dolor. Donec eget nisl nec metus euismod ullamcorper. Pellentesque blandit leo eros, eu convallis quam faucibus sit amet. Etiam viverra tincidunt lacinia.</span>
        </span>],
        icon: {
          url: 'images/img.png',
          scaledSize: new google.maps.Size(100,140)
        },
        holder: google.maps.Animation.DROP,
        position: propertyThree,
      },  
      {
        id: 4,
        name: [<span className='info-styling'><img src={propThreeImg} alt=''/><br/><br/>
        <span className='info-window-title'>{propThree}</span><br/><br/>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel purus dolor. Donec eget nisl nec metus euismod ullamcorper. Pellentesque blandit leo eros, eu convallis quam faucibus sit amet. Etiam viverra tincidunt lacinia.</span>
        </span>],
        icon: {
          url: 'images/img.png',
          scaledSize: new google.maps.Size(100,140)
        },
        holder: google.maps.Animation.DROP,
        position: propertyFour,
      },  
      {
        id: 5,
        name: [<span className='info-styling'><img src={propThreeImg} alt=''/><br/><br/>
        <span className='info-window-title'>{propThree}</span><br/><br/>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel purus dolor. Donec eget nisl nec metus euismod ullamcorper. Pellentesque blandit leo eros, eu convallis quam faucibus sit amet. Etiam viverra tincidunt lacinia.</span>
        </span>],
        icon: {
          url: 'images/img.png',
          scaledSize: new google.maps.Size(100,140)
        },
        holder: google.maps.Animation.DROP,
        position: propertyFive,
      },  
      {
        id: 6,
        name: [<span className='info-styling'><img src={propThreeImg} alt=''/><br/><br/>
        <span className='info-window-title'>{propThree}</span><br/><br/>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel purus dolor. Donec eget nisl nec metus euismod ullamcorper. Pellentesque blandit leo eros, eu convallis quam faucibus sit amet. Etiam viverra tincidunt lacinia.</span>
        </span>],
        icon: {
          url: 'images/img.png',
          scaledSize: new google.maps.Size(100,140)
        },
        holder: google.maps.Animation.DROP,
        position: propertySix,
      },  
      {
        id: 7,
        name: [<span className='info-styling'><img src={propThreeImg} alt=''/><br/><br/>
        <span className='info-window-title'>{propThree}</span><br/><br/>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel purus dolor. Donec eget nisl nec metus euismod ullamcorper. Pellentesque blandit leo eros, eu convallis quam faucibus sit amet. Etiam viverra tincidunt lacinia.</span>
        </span>],
        icon: {
          url: 'images/img.png',
          scaledSize: new google.maps.Size(100,140)
        },
        holder: google.maps.Animation.DROP,
        position: propertySeven,
      },  
      {
        id: 8,
        name: [<span className='info-styling'><img src={propThreeImg} alt=''/><br/><br/>
        <span className='info-window-title'>{propThree}</span><br/><br/>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel purus dolor. Donec eget nisl nec metus euismod ullamcorper. Pellentesque blandit leo eros, eu convallis quam faucibus sit amet. Etiam viverra tincidunt lacinia.</span>
        </span>],
        icon: {
          url: 'images/img.png',
          scaledSize: new google.maps.Size(100,140)
        },
        holder: google.maps.Animation.DROP,
        position: propertyEight,
      },  
      {
        id: 8,
        name: [<span className='info-styling'><img src={propThreeImg} alt=''/><br/><br/>
        <span className='info-window-title'>{propThree}</span><br/><br/>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel purus dolor. Donec eget nisl nec metus euismod ullamcorper. Pellentesque blandit leo eros, eu convallis quam faucibus sit amet. Etiam viverra tincidunt lacinia.</span>
        </span>],
        icon: {
          url: 'images/img.png',
          scaledSize: new google.maps.Size(100,140)
        },
        holder: google.maps.Animation.DROP,
        position: propertyEight,
      },  
      {
        id: 9,
        name: [<span className='info-styling'><img src={propThreeImg} alt=''/><br/><br/>
        <span className='info-window-title'>{propThree}</span><br/><br/>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel purus dolor. Donec eget nisl nec metus euismod ullamcorper. Pellentesque blandit leo eros, eu convallis quam faucibus sit amet. Etiam viverra tincidunt lacinia.</span>
        </span>],
        icon: {
          url: 'images/img.png',
          scaledSize: new google.maps.Size(100,140)
        },
        holder: google.maps.Animation.DROP,
        position: propertyNine,
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
        {markers.map(({ id, name, position, icon, holder}) => (
          <Marker
            key={id}
            position={position}
            animation={holder}
            icon={icon}
            onClick={() => handleActiveMarker(id)}
          >
            {activeMarker === id ? (
              <InfoWindow >
                <div id='infoWindow' >{name}</div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
      </GoogleMap>
        
      </div>
    )
  }