import React, { useState } from 'react'
import './BookingPageNavBar.css'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import axios from 'axios'

export default function BookingPageNavBar() {

    // grabs search params from URL
    const {search} = useLocation()
    const searchParams = new URLSearchParams(search)

    const property = searchParams.get('property')
    const city = searchParams.get('city')
    const suburb = searchParams.get('suburb')
    const rent = searchParams.get('rent')
    const bedroom = searchParams.get('bedroom')


    console.log(`${property} - ${city} - ${suburb}`)

    // const query = name + age 

    axios.get(`http://localhost:5000/booking/${property}/${city}/${suburb}/${rent}/${bedroom}/`)
    .then(res => {
        const result = res
        console.log(result)
    })
    

  return (
    <div class='booking-page-nav-bar'>

        <div class='booking-page-nav-bar-left'>
            <div class='booking-page-nav-icon'>
                <img src='images/auckland-property-management-white.png' alt='auck'/> 
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
            <div class='booking-page-nav-icon'>
                <Link to='/'>Here</Link>
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
