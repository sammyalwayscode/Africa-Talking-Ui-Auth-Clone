import React from 'react'
import posP from '../Img/posss.jpg'

function Pos() {
  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <img src={posP} alt='' style={{ height: '200px', width: '200px', borderRadius: '50%', border: '3px solid #fc9206', objectFit: 'cover' }} />
        <h2>Point of Sales: It's All About What</h2>
        <div style={{ width: '500px' }}>
          The point of sale (POS) or point of purchase (POP) is the time and place where a retail transaction is completed. At the point of sale, the merchant calculates the amount owed by the customer, indicates that amount, may prepare an invoice for the customer (which may be a cash register printout), and indicates the options for the customer to make payment. It is also the point at which a customer makes a payment to the merchant in exchange for goods or after provision of a service. After receiving payment, the merchant may issue a receipt for the transaction, which is usually printed but can also be dispensed with or sent electronically.[1][2][3]

          To calculate the amount owed by a customer, the merchant may use various devices such as weighing scales, barcode scanners, and cash registers (or the more advanced "POS cash registers", which are sometimes also called "POS systems"[4][5]). To make a payment, payment terminals, touch screens, and other hardware and software options are available.

          The point of sale is often referred to as the point of service because it is not just a point of sale but also a point of return or customer order. POS terminal software may also include features for additional functionality, such as inventory management, CRM, financials, or warehousing.
      </div>
      </div>
    </div>
  )
}

export default Pos
