import React from 'react'
import './BookingPageMainImg.css'

import {useState, useEffect} from 'react'
import axios from 'axios'

import {useLocation, useParams} from 'react-router-dom'



export default function BookingPageMainImg() {

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
  <div>
    {project.map((ele, index) => (
      <div id='booking-page-main-img'>

        <img src={ele.images} alt=''/>
      </div>
    ))}
  </div>
   
  )
}
