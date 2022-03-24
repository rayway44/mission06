import React from 'react'
import LandingPageCompiler from './Compo/LandingPageCompiler'
import './Compo/LandingPage.css'
import axios from 'axios'
import { useEffect } from 'react'

export default function LandingPage() {
  
  useEffect(() => {
    axios.get(`http://localhost:5000/load`)
    .then(res => {
        console.log(res.data)  
    })
}, [])

  return (
    <div id='landing-page'>
        <LandingPageCompiler />
    </div>// ===== bottom of page
  )
}
