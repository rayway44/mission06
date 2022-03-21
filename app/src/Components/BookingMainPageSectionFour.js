import React from 'react'
import './BookingMainPageSectionFour.css'
import Map from './Map'
import { useLoadScript } from "@react-google-maps/api";

export default function BookingMainPageSectionOne() {

  const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: API_KEY // Add your API key
    });

    if(!isLoaded) return <div>Hold the caller. . .</div>

  return (
    <div id='booking-main-page-section-four'>
        <div id='booking-main-page-section-four-holder'>
            <div>
              Top Holder  
            </div>
            <div id='booking-main-page-section-four-map-holder'>
              <Map />
            </div>
        </div>
    </div>
  )
}
