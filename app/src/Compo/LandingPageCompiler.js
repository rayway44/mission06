import React from 'react'
import './LandingPageCompiler.css'
import LandingPageNavBar from './LandingPageNavBar'
import LandingPageBody from './LandingPageBody'

export default function LandingPageCompiler() {
  return (
    <div id='landing-page-bg'>
        
        <LandingPageNavBar/>
        <LandingPageBody />
        
    </div>
  )
}
