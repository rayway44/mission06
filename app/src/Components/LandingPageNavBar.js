import React from 'react'
import './LandingPageNavBar.css'



export default function LandingPageNavBar() {
  return (
      
      <div className='landing-page-nav-bar'>
                
                
                <div className='landing-page-nav-bar-left'>
                    <div className='landing-page-nav-icon'>
                        <img src='images/auckland-property-management.png' alt=' ' /> 
                    </div>
                    <div className='landing-page-nav-icon'>
                        <a href=' '>Home</a> 
                    </div>
                    <div className='landing-page-nav-icon'>
                        <a href=' '>Property Search</a> 
                    </div>
                    <div className='landing-page-nav-icon'>
                        <a href=' '>Property Management</a> 
                    </div>
                </div>


                <div className='landing-page-nav-bar-right'>
                    <div className='landing-page-nav-icon'>
                        <a href=' '>About</a> 
                    </div>
                    
                    <div className='landing-page-nav-icon'>
                        <a href=' '>Contact Us</a> 
                    </div>
                    <div className='landing-page-nav-icon'>
                        <a href=' '>icon</a> 
                    </div>
                    <div className='landing-page-nav-icon'>
                        <a href=' '>icon</a> 
                    </div>

                </div>
            </div>
  )
}
