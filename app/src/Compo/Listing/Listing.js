import React from 'react'
import axios from 'axios'
import './Listing.css'
import {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'

import Dogpaw from './dogpaw.png'
import Bedroom from './Bedroom.png'
import Bath from './bathroom.png'
import Bbq from './Weber.png'
import Panel from './panel.png'

import {Link} from 'react-router-dom'

function Listing() {

    console.log('LISTINGS PAGE HIT')


    // grabs search params from URL
    const {search} = useLocation()
    const searchParams = new URLSearchParams(search)

    const property = searchParams.get('property')
    const city = searchParams.get('city')
    const suburb = searchParams.get('suburb')
    const rent = searchParams.get('rent')
    const bedroom = searchParams.get('bedroom')
    const bathroom = searchParams.get('bathroom')
    const pet = searchParams.get('pet')
    const smoker = searchParams.get('smoker')


    console.log(`
    - property: ${property} 
    - city: ${city} 
    - price: ${rent}
    - bed: ${bedroom}
    - bathroom: ${bathroom}
    - suburb: ${suburb}
    - smoker: ${smoker}
    - pet: ${pet}`)

    // const query = name + age 
    const querySearch = `http://localhost:5000/booking/${property}/${city}/${suburb}/${rent}/${bedroom}/${bathroom}/${pet}/${smoker}`

    // axios.get(`http://localhost:5000/booking/${property}/${city}/${suburb}/${rent}/${bedroom}/${bathroom}/${pet}/${smoker}`)
    // .then(res => {
    //     const result = res
    //     console.log(result)
    //     console.log("HITTING QUERY END POINT")

    // })


    // =========================================================================

        const [project, setProject] = useState([])

        useEffect(() => {
            axios.get(querySearch)
            .then(res => {
        
                setProject(res.data)
                // console.log(res.data)  
            })
        }, [])

// const quickSort = () => {
//     if (project == null) return []
    
//     let pivot  = project_address[0], left = [], right 
// }

  
  let dog = {
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
                
                {project.map((ele, index) => (
                    <Link to={ `/booking/${ele.listing_id}`}>
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
                                    <div >{dog[ele.pet_friendly]}</div>

                                    <div id='price'>$ {ele.price} /pw</div>
                                
                                
                                </div>
                                
                            
                           

                            
                            </div>
                            
                            
                            
                            
                        </div>
                        </Link>
                    ))}
                    
                </div>
            
        
        </div>
    </div>
  )
}

export default Listing