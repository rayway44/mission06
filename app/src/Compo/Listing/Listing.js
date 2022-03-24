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
  const [visible, setVisible] = useState(1);

  useEffect(() => {
      axios.get(`http://localhost:5000/find`)
      .then(res => {
         
          setProject(res.data)
          setVisible(2)
          console.log(res.data)  
      })
  }, [])



  // const quickSort = houseName => {
  //     console.log(houseName)
  //   if (houseName.length < 2) 
    
  //   return houseName;
    
   
  //   let pivot = houseName[0];
  //   let left  = []; 
  //   let right = [];
  //   for (let i = 1 , total = houseName.length ; i < total; i++){
  //     console.log(houseName.length)
  //     if (houseName[i].suburb < pivot.suburb) 
  //       left.push(houseName[i]);
  //      else 
  //       right.push(houseName[i]); 
  //   }
  //    setProject( [
  //     ...quickSort(left), 
  //     pivot, 
  //     ...quickSort(right)

  //   ]);

  // };

  const quicksort = (list) => {
    if (list.length < 2) {
        return list
    }

    let pivot = list[0]
    let left = []
    let right = []

    for (let i = 1; i < list.length; i ++) {
        if (list[i].suburb < pivot.suburb) {
            left.push(list[i])
        } else {
            right.push(list[i])
        }
    }

   return [...quicksort(left), pivot, ...quicksort(right)]
}

 
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
                
                <button id='filter-button' onClick={() => setProject (quicksort(project))}><div id='filter-text'>Filter</div> <img src={Panel} alt='' /></button>
                
                
            </div>

        </div>




        <div>
            
            <div className='card-container'>
         
        {visible === 1 &&
         <div className='no-listing'>   
            <div id='no-listing-text'>We’re sorry.
We couldn't find anything matching your search. You could broaden your search by removing some refinements.
            </div>
            <Link to={'/'}>
            <button id='listing-booknow'>Return to Search</button>
            </Link>
          </div>}
                
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
                                    <div >{pet[ele.pet_friendly]}</div>

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