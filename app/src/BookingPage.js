import React from 'react'
import BookingPageNavBar from './Compo/BookingPageNavBar'
import BookingMainPageSectionOne from './Compo/BookingMainPageSectionOne'
import BookingPageMainImg from './Compo/BookingPageMainImg'
import BookingMainPageSectionTwo from './Compo/BookingMainPageSectionTwo'
import BookingMainPageSectionThree from './Compo/BookingMainPageSectionThree'
import BookingMainPageSectionFour from './Compo/BookingMainPageSectionFour'
import BookingMainPageSectionFive from './Compo/BookingMainPageSectionFive'
import BookingMainPageSectionSix from './Compo/BookingMainPageSectionSix'
import BookingMainPageSectionSeven from './Compo/BookingMainPageSectionSeven'
import BookingPageFooter from './Compo/BookingPageFooter'
import './Compo/BookingPage.css'

export default function BookingPage() {

  return (
    <div id='booking-page-holder'>
        <BookingPageNavBar />
        <BookingPageMainImg />
        <BookingMainPageSectionOne />
        <BookingMainPageSectionTwo />
        <BookingMainPageSectionThree />
        <BookingMainPageSectionFour />
        <BookingMainPageSectionFive />
        <BookingMainPageSectionSix />
        <BookingMainPageSectionSeven />
        
        <BookingPageFooter />

    </div>
  )
}
