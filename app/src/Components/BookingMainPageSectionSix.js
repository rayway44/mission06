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

            Section Six<br/>
            <Calendar onChange={setCalendar} value={calendar}/
            <FormSection />

        </div>
    </div>
  )
}
