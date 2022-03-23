import React from 'react'
import './BookingMainPageSectionOne.css'

export default function BookingMainPageSectionOne() {
  return (
    <div id='booking-main-page-section-one'>

        <div id="booking-main-page-section-one-holder">
            <div class='booking-main-page-section-one-left'>
                
                <div id='booking-main-page-section-one-left-top'>
                    <span id='booking-main-page-section-one-left-address'>123 Sample Road,</span><br/>
                    <span id='booking-main-page-section-one-left-suburb'>Mount Eden, </span>
                    <span id='booking-main-page-section-one-left-location'>Auckland</span>
                </div>

                <div id='booking-main-page-section-one-left-bottom'>
                    <div id='booking-main-page-section-one-left-bottom-left'>
                        <img src='images/geolocation.png' alt=' ' />
                    </div>
                    <div id='booking-main-page-section-one-left-bottom-right'>
                        Congue tellus sed venenatis magna eu euismod etiam nisl. Pulvinar purus<br/> urna orci blandit vestibulum accumsan, nec convallis.
                    </div>
                </div>
            </div>

            <div class='booking-main-page-section-one-right'>
                <div id='booking-main-page-section-one-right-top'>
                    <span class='booking-main-page-section-one-right-top-price'>
                        $123
                    </span>
                    / week
                </div>
                <div id='booking-main-page-section-one-right-bottom'>
                    <div class='booking-main-page-section-one-right-bottom-btn1'>
                        Book a viewing
                    </div>
                    <div class='booking-main-page-section-one-right-bottom-btn2'>
                        Virtual Tour
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
