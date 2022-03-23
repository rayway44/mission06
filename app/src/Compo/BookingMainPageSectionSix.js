import React, {useState} from 'react'
import './BookingMainPageSectionSix.css'
import Calendar from 'react-calendar'
import './Calendar.css';
import FormSection from './FormSection/FormSection'



export default function BookingMainPageSectionOne() {

  const [calendar, setCalendar] = useState(new Date());


  return (
    <div id='booking-main-page-section-six'>
        <div id='booking-main-page-section-six-holder'>
          <div>
            <Calendar onChange={setCalendar} value={calendar}/>
            <div id='calendar-button-holder'>
            <button id='times-calendar' >12:00 PM</button>
            <button id='times-calendar'>2:30 PM</button>
            <button id='times-calendar'>3:00 PM</button>
            </div>
          </div>

            <FormSection />
        </div>
    </div>
  )
}
