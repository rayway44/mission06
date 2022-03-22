import React, {useState, useEffect} from 'react'
import './LandingPageBody.css'
import axios from 'axios'

import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


export default function LandingPageBody() {

    const [bedroom, setBedroom] = useState(1)
    const [bathroom, setBathroom] = useState(1)

    const [property, setProperty] = useState('House')
    const [suburb, setSuburb] = useState('Epsom')
    const [city, setCity] = useState('Auckland City')
    const [rent, setRent] = useState('800')
    
    const [pet, setPet] = useState(false)
    const [smoker, setSmoker] = useState(false)
    
    const link = `/booking?property=${property}&city=${city}&suburb=${suburb}&rent=${rent}&bedroom=${bedroom}&bathroom=${bathroom}&pet=${pet}&smoker=${smoker}`
 
    // ==============================
    function bedroomCountAdd(){
        
        if(bedroom <= 3){
            setBedroom(bedroom + 1)
        } else {
            setBedroom(4)
        }
            
    }

    function bedroomCountSubtract(){
        
        if(bedroom <= 2){
            setBedroom(1)
        } else {
            setBedroom(bedroom - 1)
        }
        
    }

    function bathroomCountAdd(){
        
        if(bathroom <= 3){
            setBathroom(bathroom + 1)
        } else {
            setBathroom(4)
        }
    }

    function bathroomCountSubtract(){
        
        
        if(bathroom <= 2){
            setBathroom(1)
        } else {
            setBathroom(bathroom - 1)
        }
    
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
                                <div class='landing-page-body-line-1-minus' onClick={bathroomCountSubtract}>-</div>
                                <div class='landing-page-body-line-1-box'>{bathroom}</div>
                                <div class='landing-page-body-line-1-add' onClick={bathroomCountAdd}>+</div>
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
                                Pets Ok <input type='checkbox' onChange={e => setPet(e.target.checked)}></input>
                            </div>
                            <div class='landing-page-body-line-1'>
                                Smokers <input type='checkbox' onChange={e => setSmoker(e.target.checked)}></input>
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
