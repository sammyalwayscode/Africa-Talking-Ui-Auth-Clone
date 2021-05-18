import React from 'react'
import airtP from '../Img/airrr.png'

function Airtime() {
  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <img src={airtP} alt='' style={{ height: '200px', width: '200px', borderRadius: '50%', border: '3px solid #fc9206', objectFit: 'cover' }} />
        <h2>Airtime: It's All About What</h2>
        <div style={{ width: '500px' }}>
          An airtime top-up is a payment made by you, via WorldRemit, to send credit to a recipient’s pre-paid mobile phone plan. This enables them to use the telecom network to send text messages, make phone calls and use mobile data.

          The amount of airtime a top-up will give will vary as it is dependent on the local network provider. To obtain this information, you’ll need to get in touch with them.
        </div>
      </div>
    </div>
  )
}

export default Airtime
