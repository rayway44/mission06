import React from 'react'
import './BookingMainPageSectionOne.css'
import {useState, useEffect} from 'react'
import axios from 'axios'

import {useLocation, useParams} from 'react-router-dom'

import Geo from './geolocation.png'


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

    
    

  return (

    <div id='booking-main-page-section-one'>
        {project.map((ele, index) => (
                
            
        <div id="booking-main-page-section-one-holder">
           
                    <div className='booking-main-page-section-one-left'>
                
                    <div id='booking-main-page-section-one-left-top'>
                    
                        <span id='booking-main-page-section-one-left-address'></span><br/>
                        <span id='booking-main-page-section-one-left-suburb'>{ele.address} </span>
                        <span id='booking-main-page-section-one-left-location'>{ele.city}</span>
                    </div>
    
                    <div id='booking-main-page-section-one-left-bottom'>
                        <div id='booking-main-page-section-one-left-bottom-left'>
                            <img src={Geo} alt=' ' />
                        </div>
                        <div id='booking-main-page-section-one-left-bottom-right'>
                            Congue tellus sed venenatis magna eu euismod etiam nisl. Pulvinar purus<br/> urna orci blandit vestibulum accumsan, nec convallis.
                        </div>
                    </div>
                </div>
    
                <div className='booking-main-page-section-one-right'>
                    <div id='booking-main-page-section-one-right-top'>
                        <span className='booking-main-page-section-one-right-top-price'>
                            ${ele.price}
                        </span>
                        / week
                    </div>
                    <div id='booking-main-page-section-one-right-bottom'>
                        <div className='booking-main-page-section-one-right-bottom-btn1'>
                            Book a viewing 
                        </div>
                        <div className='booking-main-page-section-one-right-bottom-btn2'>
                            Virtual Tour
                        </div>
                    </div>
                </div>
            
            
        </div>
        ))}
    </div>
  )
}
