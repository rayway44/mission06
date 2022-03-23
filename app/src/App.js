
import './App.css';
import LandingPage from './LandingPage'
import BookingPage from './BookingPage'
import Hitter from './Hitter'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div class='App'>
          
        <Router>


              <Routes>
                <Route path='/hi' element={<Hitter />} />
                <Route path='/booking' element={<BookingPage />} />
                <Route path='/' element={<LandingPage />} />
              </Routes>

        </Router>


    </div>
  );
}

export default App;
