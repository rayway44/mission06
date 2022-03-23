import React from 'react'
import BookingPageNavBar from './Compo/BookingPageNavBar'
import Listing from './Compo/Listing/Listing'
import Map from './Compo/Map'

import './ListingPage.css'

import { useLoadScript } from "@react-google-maps/api";


function ListingPage() {


  const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: API_KEY // Add your API key
    });

    if(!isLoaded) return <div>Hold the caller. . .</div>

  return (
    <div className='listing-page-border-patrol'>
        <BookingPageNavBar />
        <div className='listing-page-complied-container'>
          <Listing />
          
          <div className='listing-page-map-holder'>
            <Map />
          </div>
        
        </div>
        
    </div>
  )
}

export default ListingPage