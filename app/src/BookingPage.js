import React from 'react'
import BookingPageNavBar from './Components/BookingPageNavBar'
import BookingMainPageSectionOne from './Components/BookingMainPageSectionOne'
import BookingPageMainImg from './Components/BookingPageMainImg'
import BookingMainPageSectionTwo from './Components/BookingMainPageSectionTwo'
import BookingMainPageSectionThree from './Components/BookingMainPageSectionThree'
import BookingMainPageSectionFour from './Components/BookingMainPageSectionFour'
import BookingMainPageSectionFive from './Components/BookingMainPageSectionFive'
import BookingMainPageSectionSix from './Components/BookingMainPageSectionSix'
import BookingMainPageSectionSeven from './Components/BookingMainPageSectionSeven'
import BookingPageFooter from './Components/BookingPageFooter'
import './Components/BookingPage.css'

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
