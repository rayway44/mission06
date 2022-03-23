import React from 'react'
import axios from 'axios'
import './Listing.css'
import {useState, useEffect} from 'react'

import Dogpaw from './dogpaw.png'
import Bedroom from './Bedroom.png'
import Bath from './bathroom.png'
import Bbq from './Weber.png'
import Panel from './panel.png'

import {Link} from 'react-router-dom'

function Listing() {

    


  const [project, setProject] = useState([])

  useEffect(() => {
      axios.get(`http://localhost:5000/find`)
      .then(res => {
  
          setProject(res.data)
          console.log(res.data)  
      })
  }, [])

// const quickSort = () => {
//     if (project == null) return []
    
//     let pivot  = project_address[0], left = [], right 
// }


 
  let pet = {
      1: <div id='pets'> <img src={Dogpaw} alt=''/> Pet Friendly </div>
  }


  return (
    <div>
       <div className='listing-filter-container'>
            <div id='filter-results'>showing all results</div>

            <div id='filter-buttons-container'>
                <select id='option'>
                    <option value="-1">Sort by: Featured first</option>
                </select>
                
                <button id='filter-button'><div id='filter-text'>Filter</div> <img src={Panel} alt='' /></button>
                
                
            </div>

        </div>




        <div>
            
            <div className='card-container'>
                <Link to='/booking'>
                {project.map((ele, index) => (
                        <div className='card-holder'>
                            <img src={ele.images} alt='img'/>

                            <div className='card-header'>
                                <h3 className='card-title'>{ele.address}</h3>
                            
                                <div className='card-content'>
                                    <div className='card-icon'><img src={Bath} alt='' /> {ele.bathroom_count}</div> 
                                    <div className='card-icon2'><img src={Bedroom} alt=''/> {ele.bedroom_count}</div>
                                </div>   
                                <div className='card-info'>
                            
                                    <div id='com-events'><img src={Bbq} alt=''/>There are community events</div>
                                    <div >{pet[ele.pet_friendly]}</div>

                                    <div id='price'>$ {ele.price} /pw</div>
                                
                                
                                </div>
                                
                            
                           

                            
                            </div>
                            
                            
                            
                            
                        </div>
                    
                    ))}
                    </Link>
                </div>
            
        
        </div>
    </div>
  )
}

export default Listing