import React from 'react'
import axios from 'axios'

import './CardCarousel.css'

import {useState, useEffect} from 'react'

import Dogpaw from '../Listing/dogpaw.png'
import Bedroom from '../Listing/Bedroom.png'
import Bath from '../Listing/bathroom.png'
import Bbq from '../Listing/Weber.png'



function CardCarousel() {

    const [project, setProject] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/find`)
        .then(res => {
    
            setProject(res.data)
            console.log(res.data)  
        })
    }, [])
   
    let pet = {
        0: <div id='car-pets'> Not Pet Friendly </div>,
        1: <div id='car-pets'> <img src={Dogpaw} alt=''/> Pet Friendly </div> 
    }

  return (
    <div>
        <h3>Properties you may like</h3>
        <div className='car-container'>
            
            {project.map((ele, index) => (
                <div className='car-card'>
                    <img src={ele.images} alt='img'/>
                    <div className='car-card-content'>
                        <h3 id='car-card-title'>{ele.address}</h3>
                        
                        <div className='car-bath-bed'>
                            <div className='car-card-icon'><img src={Bath} alt='' /> {ele.bathroom_count}</div> 
                            <div className='car-card-icon2'><img src={Bedroom} alt=''/> {ele.bedroom_count}</div>
                        </div>

                        <div className='car-card-info'>
                            
                            <div id='car-com-events'><img src={Bbq} alt=''/>There are community events</div>
                            <div id='car-pet'>{pet[ele.pet_friendly]}</div>

                            <div id='car-price'>$ {ele.price} /pw</div>
                        
                        
                        </div>


                    </div>
                </div>
            ))}
            
                
            
        
        </div>
    </div>
  )
}

export default CardCarousel