import React from 'react'
import axios from 'axios'
import './Listing.css'
import {useState, useEffect} from 'react'

import Dogpaw from './dogpaw.png'
import Bedroom from './Bedroom.png'
import Bath from './bathroom.png'
import Bbq from './Weber.png'
import Panel from './panel.png'

function Listing() {

    


  const [project, setProject] = useState([])

  useEffect(() => {
      axios.get(`http://localhost:5000/find`)
      .then(res => {
  
          setProject(res.data)
          console.log(res.data)  
      })
  }, [])

//   function swap(arr, i, j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }
//   function partition(arr, low, high) {
 
//     // pivot
//     let pivot = arr[high];
 
//     // Index of smaller element and
//     // indicates the right position
//     // of pivot found so far
//     let i = (low - 1);
 
//     for (let j = low; j <= high - 1; j++) {
 
//         // If current element is smaller
//         // than the pivot
//         if (arr[j] < pivot) {
 
//             // Increment index of
//             // smaller element
//             i++;
//             swap(arr, i, j);
//         }
//     }
//     swap(arr, i + 1, high);
//     return (i + 1);
// } 

// function quickSort(arr, low, high) {
    
//     if (low < high) {
 
//         // pi is partitioning index, arr[p]
//         // is now at right place
//         let pi = partition(arr, low, high);
 
//         // Separately sort elements before
//         // partition and after partition
//         quickSort(arr, low, pi - 1);
//         quickSort(arr, pi + 1, high);
//     }
//     console.log(arr + 'sorted')
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

                </div>
            
        
        </div>
    </div>
  )
}

export default Listing