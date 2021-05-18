import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='FooterMain'>
      <div className='SubFooterMain'>
        <div className='FootProduct'>
          <h4>PRODUCTS</h4>
          <p>SMS</p>
          <p>USSD</p>
          <p>Voice</p>
          <p>Airtime</p>
          <p>ioT</p>
        </div>

        <div className='FootResources'>
          <h4>RESOURCES</h4>
          <p>Suooprt</p>
          <p>Developers</p>
          <p>Github</p>
          <p>Status</p>
          <p>Designers</p>
        </div>

        <div className='FootCompany'>
          <h4>COMPANY</h4>
          <p>Our Story</p>
          <p>Contact Us</p>
          <p>Career</p>
          <p>Selling Points</p>
          <p>Costermers Says</p>
        </div>

        <div className='FootProduct'>
          <h4>LEGAL</h4>
          <p>Terms Of Service</p>
          <p>Privacy Policy</p>
          <p>Service Level</p>
          <p>Code Of Conduct</p>
          <p>MarketPalce</p>
        </div>

        <div className='FootProduct'>
          <h4>FIND US</h4>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>YouTube</p>
          <p>Slack</p>
          <p>Link in</p>
        </div>


      </div>
      <hr style={{ width: '750px', color: '#ffffff80', backgroundColor: '#0c293a', marginBottom: '20px' }} />
      <p>Olorunda Samuel. All rights Reserved</p>
    </div>
  )
}

export default Footer
