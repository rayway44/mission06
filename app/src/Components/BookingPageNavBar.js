import React from 'react'
import './BookingPageNavBar.css'

export default function BookingPageNavBar() {
  return (
    <div class='booking-page-nav-bar'>

        <div class='booking-page-nav-bar-left'>
            <div class='booking-page-nav-icon'>
                <img src='images/auckland-property-management-white.png' /> 
            </div>
            <div class='booking-page-nav-icon'>
                <a href=''>Home</a> 
            </div>
            <div class='booking-page-nav-icon'>
                <a href=''>Property Search</a> 
            </div>
            <div class='booking-page-nav-icon'>
                <a href=''>Property Management</a> 
            </div>
           
        </div>


        <div class='booking-page-nav-bar-right'>
            <div class='booking-page-nav-icon'>
                <a href=''>About</a> 
            </div>
            
            <div class='booking-page-nav-icon'>
                <a href=''>Contact Us</a> 
            </div>
            <div class='booking-page-nav-icon'>
                <a href=''>icon</a> 
            </div>
            <div class='booking-page-nav-icon'>
                <a href=''>icon</a> 
            </div>

        </div>


    </div>
  )
}
