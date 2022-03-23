import React from 'react'
import './BookingPageNavBar.css'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

import Logo from './logoWhite.png'

export default function BookingPageNavBar() {

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


    console.log(`${property} - ${city} - ${suburb}`)

    // const query = name + age 

    axios.get(`http://localhost:5000/booking/${property}/${city}/${suburb}/${rent}/${bedroom}/${bathroom}/${pet}/${smoker}`)
    .then(res => {
        const result = res
        console.log(result)
    })
    

  return (
    <div className='booking-page-nav-bar'>

        <div className='booking-page-nav-bar-left'>
            <div className='booking-page-nav-icon'>
                <img src={Logo} alt='auck'/> 
            </div>
            <div className='booking-page-nav-icon'>
                <a href=' '>Home</a>
            </div>
            <div className='booking-page-nav-icon'>
                <a href=' '>Property Search</a> 
            </div>
            <div className='booking-page-nav-icon'>
                <a href=' '>Property Management</a> 
            </div>
            <div className='booking-page-nav-icon'>
                <Link to='/'>Here</Link>
            </div>
           
        </div>
                


        <div className='booking-page-nav-bar-right'>
            <div className='booking-page-nav-icon'>
                <a href=' '>About</a> 
            </div>
            
            <div className='booking-page-nav-icon'>
                <a href=' '>Contact Us</a> 
            </div>
            <div className='booking-page-nav-icon'>
                <a href=' '>icon</a> 
            </div>
            <div className='booking-page-nav-icon'>
                <a href=' '>icon</a> 
            </div>

        </div>


    </div>
  )
}
