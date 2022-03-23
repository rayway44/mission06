import React from 'react'
import './BookingPageFooter.css'


export default function BookingPageMainImg() {
  return (
    <div id='booking-page-footer'>
      <div id='booking-page-footer-holder'>
        <div className='booking-page-footer-line1'>
          <div className='booking-page-footer-line1-left'>
              <img src='images/auckland-property-management.png' alt=' '/>
          </div>
          <div className='booking-page-footer-line1-right'>
              <div className='booking-page-footer-line1-btn1'>
                  Ready to get started ?
              </div>
              <div className='booking-page-footer-line1-btn2'>
                  Sign up
              </div>
          </div>
        </div>
        
        <div className='booking-page-footer-line2-holder'>
          <div className='booking-page-footer-line2-left'>
              <div className='booking-page-footer-line2-subscribe'>
                Subscribe to our<br/>
                newsletter
              </div>
              <div>
                <input type='textarea' placeholder='Email Address'></input>
              </div>
          </div>
            <div className='booking-page-footer-line2-right'>
              <div>
                <div className='booking-page-footer-line2-right-list'>Services</div>
                <div className='booking-page-footer-line2-right-list'>Email Marketing</div>
                <div className='booking-page-footer-line2-right-list'>Campaigns</div>
                <div className='booking-page-footer-line2-right-list'>Branding</div>
                <div className='booking-page-footer-line2-right-list'>Offline</div>
              </div>
              <div>
                <div className='booking-page-footer-line2-right-list'>Services</div>
                <div className='booking-page-footer-line2-right-list'>Email Marketing</div>
                <div className='booking-page-footer-line2-right-list'>Campaigns</div>
                <div className='booking-page-footer-line2-right-list'>Branding</div>
                <div className='booking-page-footer-line2-right-list'>Offline</div>
              </div>
              <div>
                <div className='booking-page-footer-line2-right-list'>Services</div>
                <div className='booking-page-footer-line2-right-list'>Email Marketing</div>
                <div className='booking-page-footer-line2-right-list'>Campaigns</div>
                <div className='booking-page-footer-line2-right-list'>Branding</div>
                <div className='booking-page-footer-line2-right-list'>Offline</div>
              </div>
            </div>
        </div>
        <div class='booking-page-footer-line3-holder'>
          <div class='booking-page-footer-line3-holder-left'>
            <div class='booking-page-footer-line3-holder-box1'>
              Terms & Conditions
            </div>
            <div class='booking-page-footer-line3-holder-box2'>
              Privacy Policy
            </div>
          </div>
          <div class='booking-page-footer-line3-holder-right'>
            <div class='booking-page-footer-line3-holder-icon'>
              icon three
            </div>
            <div class='booking-page-footer-line3-holder-icon'>
              icon two
            </div>
            <div>
            icon one
            </div>
          </div>
        </div>

        </div>
    </div>
  )
}
