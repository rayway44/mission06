import React from 'react'
import './BookingMainPageSectionTwo.css'

import {useState, useEffect} from 'react'
import axios from 'axios'

import {useLocation, useParams} from 'react-router-dom'

import Couch from './couch.png'
import Bed from './bigbed.png'
import Bigbath from './bigbath.png'
import Paw from './paw.png'
import Parking from './parking.png'


export default function BookingMainPageSectionOne() {

    const [project, setProject] = useState([])

  let {id} = useParams()
  parseInt(id)
  

  useEffect(() => {
      axios.get(`http://localhost:5000/find/${id}`)
      .then(res => {
  
          setProject(res.data)
          console.log(res.data)  
      })
  }, [])

let garage = {
    1 : <div class='booking-main-page-section-two-icon'>
            <div class='booking-main-page-section-two-icon-img'>
                <img src={Parking} alt=' '/>
             </div>
            <div class='booking-main-page-section-two-icon-title'>
        <br/> Garage
    </div>
</div>
}

let pet = {
    1 : <div class='booking-main-page-section-two-icon'>
            <div class='booking-main-page-section-two-icon-img'>
                <img src={Paw} alt=' '/>
            </div>
            <div class='booking-main-page-section-two-icon-title'>
                <br/>Pet Friendly
            </div>
        </div>
}

  return (

    <div id='booking-main-page-section-two'>
      {project.map((ele, index) => (  
        <div id='booking-main-page-section-two-holder'>
            <div class='booking-main-page-section-two-icon'>
                <div class='booking-main-page-section-two-icon-img'>
                    <img src={Bed} alt=' '/>
                </div>
                <div class='booking-main-page-section-two-icon-title'>
                    <br/>{ele.bedroom_count} Bedrooms
                </div>
            </div>

            <div class='booking-main-page-section-two-icon'>
                <div class='booking-main-page-section-two-icon-img'>
                    <img src={Bigbath} alt=' ' />
                </div>
                <div class='booking-main-page-section-two-icon-title'>
                    <br/>{ele.bathroom_count} Bathrooms
                </div>
            </div>
            <div class='booking-main-page-section-two-icon'>
                <div class='booking-main-page-section-two-icon-img'>
                    <img src={Couch} alt=' '/>
                </div>
                <div class='booking-main-page-section-two-icon-title'>
                    <br/>2 Living Rooms
                </div>
            </div>
            <div>
                {garage[ele.garage_space]}
            </div>
            <div>
                {pet[ele.pet_friendly]}
            </div>    
            
        </div>
        ))}
    </div>
  )
}
