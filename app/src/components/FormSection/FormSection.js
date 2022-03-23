import React from 'react'

import { useState } from 'react';
import Party from './party.png'

import './FormSection.css'

import {Link} from 'react-router-dom'

function FormSection() {

    const [visible, setVisible] = useState(1);
    const firstscreen = () => {
        setVisible(1)
    }
    const secondscreen = () => {
        setVisible(2)
    }
    


  return (
    <div>
        <div className='formsection-container'>
        {visible === 1 && <div className='formsection-content'>
          <div className='formsection-title'>
                    <div id='book'>
                        Book a viewing
                    </div>
                    <div id='contactless'>
                        looking for a contactless viewing?
                    </div>
                    <div id='virtual'>
                        <button>Virtual Tour</button>
                    </div>

                </div>
                
                    <p className='or'>---------------or---------------</p>
                
                     <div className='formsection-form'>
                    <div className=''>
                        <label>Full Name:</label>
                    </div>
                    <div>
                    <input className='formsection-input' placeholder='Write your full name'></input>
                    </div>
                    <div className=''>
                        <label>Contact Details:</label>
                    </div>
                    <div>
                    <input className='formsection-input' placeholder='Write your phone number'></input>
                    </div>
                    <div className=''>
                        <label>Your Email:</label>
                    </div>
                    <div>
                    <input className='formsection-input' placeholder='Write your email'></input>
                    </div>
                </div>

                <div className='formsection-bottom'>
                    <div className='formsection-checkbox'>
                    <div className='formsection-item'>
                        <input type="checkbox"/>
                        <label for=""><p className='label-text'>I agree to the <a id='label-link'>terms and conditions</a></p>  </label>
                        
                    </div>
                    <div className='formsection-item'>
                    <input type="checkbox" />
                        <label for=""> <p className='label-text'>I'd like to get notified on new similar listings</p></label>
                    </div>
                    </div>
                    <div>
                        <button  id='booknow' onClick={secondscreen}>Book Now</button>
                        
                    </div>

                </div>

            </div>} {visible === 2 && 
            <div>
                <div id='result-title'>WooHoo! all done</div>

                <img src={Party} alt='' />
                <Link to='/'>
                <button id='booknow'>Return Home</button>
                </Link>
            </div>}

        </div>
    </div>
  )
}

export default FormSection