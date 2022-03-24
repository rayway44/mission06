
import './App.css';
import BookingPage from './BookingPage'
import ListingPage from './ListingPage';
import LandingPage from './LandingPage'


import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className='App'>

      <Router>
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/listing/:property/:suburb/:rent/:bedroom/:bathroom' element={<ListingPage />} />
            <Route path='/booking/:id' element={<BookingPage />} />
        </Routes>

      </Router>
      
    </div>
  );
}

export default App;
