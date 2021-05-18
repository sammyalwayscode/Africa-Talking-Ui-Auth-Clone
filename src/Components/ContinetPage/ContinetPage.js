import React from 'react'
import ContinetCard from '../ContinetCard/ContinetCard'
import './ContinetPage.css'
import contiImg1 from '../Img/telcos.svg'
import contiImg2 from '../Img/businesses.svg'
import contiImg3 from '../Img/no_of_countries.svg'
import map from '../Img/map.svg'

function ContinetPage() {
  return (
    <div className='mainContinetPage'>
      <div className='SubContinetDiv'>
        <img src={map} alt='' className='MapImgHold' />
        <div className='MapCardHold'>
          <ContinetCard
            contiImg={contiImg1}
            contiNumber='20+'
            ContiText='Telco Connections'
          />
          <ContinetCard
            contiImg={contiImg2}
            contiNumber='40, 000+'
            ContiText='Developers Raised'
          />
          <ContinetCard
            contiImg={contiImg3}
            contiNumber='10+'
            ContiText='Countries served'
          />
        </div>
      </div>
    </div>
  )
}

export default ContinetPage
