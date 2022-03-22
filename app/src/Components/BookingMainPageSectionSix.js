import React, {useState} from 'react'
import './BookingMainPageSectionSix.css'
import Calendar from 'react-calendar'
import './Calendar.css';

export default function BookingMainPageSectionOne() {

  const [calendar, setCalendar] = useState(new Date());

  return (
    <div id='booking-main-page-section-six'>
        <div id='booking-main-page-section-six-holder'>
            Section Six<br/>
            Hi stu place your calender here please
            <Calendar onChange={setCalendar} value={calendar}/>
        </div>
    </div>
  )
}
