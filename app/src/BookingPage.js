import React from 'react'
import BookingPageNavBar from './Components/BookingPageNavBar'
import BookingPageMainImg from './Components/BookingPageMainImg'
import BookingMainPageSectionOne from './Components/BookingMainPageSectionOne'
import BookingPageFooter from './Components/BookingPageFooter'
import BookingMainPageSectionTwo from './Components/BookingMainPageSectionTwo'
import './Components/BookingPage.css'

export default function BookingPage() {
  return (
    <div id='booking-page-holder'>
        <BookingPageNavBar />
        <BookingPageMainImg />
        <BookingMainPageSectionOne />
        <BookingMainPageSectionTwo />
        <BookingMainPageSectionOne />
        <BookingPageFooter />

    </div>
  )
}
