import React, {useState, useEffect} from 'react'
import './LandingPageBody.css'
import axios from 'axios'

import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


export default function LandingPageBody() {

    const [bedroom, setBedroom] = useState(1)

    const [property, setProperty] = useState('House')
    const [suburb, setSuburb] = useState('Epsom')
    const [city, setCity] = useState('Auckland City')
    const [rent, setRent] = useState('800')
    
    const link = `/booking?property=${property}&city=${city}&suburb=${suburb}&rent=${rent}&bedroom=${bedroom}`
 

    function bedroomCountAdd(){
        
        if(bedroom <= 2){
            console.log('hit')
            setBedroom(bedroom + 1)
        } else if(bedroom >= 2){
            console.log('less')
            setBedroom(3)
        } else {
            console.log('pass')

            setBedroom(3)
        }

    }

    function bedroomCountSubtract(){
        
        
        setBedroom(bedroom - 1)
        
    }

  return (
    <div id='landing-page-body'>

        <div id='landing-page-body-left'>

            <div id='landing-page-body-main-text'>
            Find a rental home  <br/>just right for you
            </div>

            <div id='landing-page-body-search-box'>
                
                    <div class='landing-page-body-line-holder'>
                        <div class='landing-page-body-line-1'>
                            Property Type:<br/>
                            <select class='dropdown' id='property_type' onChange={e => setProperty(e.target.value)}>        
                                <option id='one' value='House'>All</option>
                                <option id='one' value='House' >House</option>
                                <option id='two' value='Townhouse' >Townhouse</option>
                            </select>
                        </div>

                        <div class='landing-page-body-line-1'>
                            Location:<br/>
                            <select class='dropdown' id='city' onChange={e => setCity(e.target.value)} >
                                <option id='one' value='Auckland City'>All Districts</option>
                                <option id='four' value='Auckland City'>Auckland City</option>
                                <option id='one' value='North Shore City'>North Shore City</option>
                                <option id='three' value='Manukau City'>Manukau City</option>
                            </select>
                        </div>

                        <div class='landing-page-body-line-1'>
                            <br/>
                            <select class='dropdown' id='suburb' onChange={e => setSuburb(e.target.value)}>
                                <option id='one' value='Epsom'>All Suburbs</option>
                                <option id='one' value='City Centre'>City Centre</option>
                                <option id='two' value='Epsom'>Epsom</option> 
                            </select>
                        </div>
                    </div>


                    <div class='landing-page-body-line-holder'>

                        <div class='landing-page-body-line-1'>
                            Rent Per Week<br/>
                            <select class='dropdown' id='maximumRent' onChange={e => setRent(e.target.value)}>
                                <option id='one' value='20000'>Maximum</option>
                                <option id='one' value='600'>up to $600</option>
                                <option id='two' value='700'>up to $700</option>
                                <option id='three' value='800'>up to $800</option>
                                <option id='four' value='900'>up to $900</option>
                            </select>
                        </div>

                        
                        <div class='landing-page-body-line-1'>
                            Bedrooms:<br/>
                            <div class='landing-page-body-line-1-btn'>
                                <div class='landing-page-body-line-1-minus' onClick={bedroomCountSubtract}>-</div>
                                <div class='landing-page-body-line-1-box'>{bedroom}</div>
                                <div class='landing-page-body-line-1-add' onClick={bedroomCountAdd}>+</div>
                            </div>
                        </div>
                        <div class='landing-page-body-line-1'>
                            Bathrooms:<br/>
                            <div class='landing-page-body-line-1-btn'>
                                <div class='landing-page-body-line-1-minus'>-</div>
                                <div class='landing-page-body-line-1-box'>12</div>
                                <div class='landing-page-body-line-1-add'>+</div>
                            </div>
                        </div>

                        
                    </div>

                    
                    <div class='landing-page-body-line-holder'>
                        <div class='landing-page-body-line-1'>
                            Keywords<br/>
                           <input type='textarea' placeholder='' class='landing-page-keywords'></input>
                        </div>
                    </div>
                    <div class='landing-page-body-line-holder-bottom'>
                        <div class='landing-page-body-line-bottom-left'>
                            <div class='landing-page-body-line-1'>
                                Pets Ok <input type='radio'></input>
                            </div>
                            <div class='landing-page-body-line-1'>
                                Smokers <input type='radio'></input>
                            </div>
                        </div>

                        <div class='landing-page-body-line-bottom-right'>
                            <div class='landing-page-body-line-1'>
                                    <div class='landing-page-body-search-btn' >
                                    <Link to={link}>Bookings</Link>
                                
                                    </div>
                            </div>
                        </div>
                    </div>
                
            </div>

        </div>
        
        <div id='landing-page-body-right'>
        
        </div>

    
    </div>

    )



}
