import React from 'react'
import './LandingPageBody.css'

import { Link} from 'react-router-dom'

export default function LandingPageBody() {


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
                            <select class='dropdown' id='bedroomsMin'>
                                <option id='one' value='20000'>All</option>
                                <option id='one' value='400000'>one</option>
                                <option id='two' value='500000'>two</option>
                                <option id='three' value='700000'>three</option>
                                <option id='four' value='1600000'>four</option>
                            </select>
                        </div>

                        <div class='landing-page-body-line-1'>
                            Location:<br/>
                            <select class='dropdown' id='bedroomsMin'>
                                <option id='one' value='20000'>All Districts</option>
                                <option id='one' value='400000'>one</option>
                                <option id='two' value='500000'>two</option>
                                <option id='three' value='700000'>three</option>
                                <option id='four' value='1600000'>four</option>
                            </select>
                        </div>

                        <div class='landing-page-body-line-1'>
                            <br/>
                            <select class='dropdown' id='bedroomsMin'>
                                <option id='one' value='20000'>All Suburbs</option>
                                <option id='one' value='400000'>one</option>
                                <option id='two' value='500000'>two</option>
                                <option id='three' value='700000'>three</option>
                                <option id='four' value='1600000'>four</option>
                            </select>
                        </div>
                    </div>


                    <div class='landing-page-body-line-holder'>

                        <div class='landing-page-body-line-1'>
                            Rent Per Week<br/>
                            <select class='dropdown' id='bedroomsMin'>
                                <option id='one' value='20000'>Minimum</option>
                                <option id='one' value='400000'>one</option>
                                <option id='two' value='500000'>two</option>
                                <option id='three' value='700000'>three</option>
                                <option id='four' value='1600000'>four</option>
                            </select>
                        </div>

                        <div class='landing-page-body-line-1'>
                            <br/>
                            -
                        </div>

                        <div class='landing-page-body-line-1'>
                            <br/>
                            <select class='dropdown' id='bedroomsMin'>
                                <option id='one' value='20000'>Maximum</option>
                                <option id='one' value='400000'>one</option>
                                <option id='two' value='500000'>two</option>
                                <option id='three' value='700000'>three</option>
                                <option id='four' value='1600000'>four</option>
                            </select>
                        </div>
                        
                        <div class='landing-page-body-line-1'>
                            Bedrooms:<br/>
                            <div class='landing-page-body-line-1-btn'>
                                <div class='landing-page-body-line-1-minus'>-</div>
                                <div class='landing-page-body-line-1-box'>12</div>
                                <div class='landing-page-body-line-1-add'>+</div>
                            </div>
                        </div>
                        <div class='landing-page-body-line-1'>
                            Bathrooms:<br/>
                            <div class='landing-page-body-line-1-btn'>
                                <div class='landing-page-body-line-1-minus'>-</div>
                                <div class='landing-page-body-line-1-box'>12</div>
                                <div class='landing-page-body-line-1-add'>+</div>
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
                                Pets Ok <input type='radio'></input>
                            </div>
                            <div class='landing-page-body-line-1'>
                                Smokers <input type='radio'></input>
                            </div>
                        </div>

                        <div class='landing-page-body-line-bottom-right'>
                            <div class='landing-page-body-line-1'>
                                <Link to={'/listing'}>
                                <div class='landing-page-body-search-btn'>Search</div>
                                </Link>
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
