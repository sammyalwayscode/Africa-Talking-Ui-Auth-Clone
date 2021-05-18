import React from 'react'
import './ProductPage.css'
import ProductCard from '../ProductCard/ProductCard'
import prodImg1 from '../Img/sms.svg'
import prodImg2 from '../Img/ussd.svg'
import prodImg3 from '../Img/voice.svg'
import prodImg4 from '../Img/airtime.svg'
import prodImg5 from '../Img/iot.svg'
import MatButton from '../ProductCard/MatButon'
import sms1 from '../Img/ssss.jpg'
import vooi1 from '../Img/vooi.jpg'
import ussd1 from '../Img/ussdd.png'
import { Link } from 'react-router-dom'

function ProductPage() {
  return (
    <div className='ProductPageMainCtrl'>
      <div className='ProductPageSubCtrl'>
        <div className='ProductTextDiv'>
          <div className='PrdBig'>Products</div>
          <div className='PrdSmall'>
            We provide a variety of communication and payments API products that are everything you need to build high impact mobile engagement solutions. Our platform allows to you work on building superior customer engagement experiences without the complexity that comes from working directly with mobile operators.
          </div>
        </div>
        <div className='ProductCarddiv'>
          <ProductCard
            image={prodImg1}
            Title='SMS'
            Content='
        Engage easily and effectively with your customers through text messaging.'
            ModImg={sms1}
            ModTitle='What Is SMS'
            ModContent='SMS (short message service) is a text messaging service component of most telephone, Internet, and mobile device systems. It uses standardized communication protocols that let mobile devices exchange short text messages. An intermediary service can facilitate a text-to-voice conversion to be sent to landlines.'
          />

          <ProductCard
            image={prodImg2}
            Title='USSD'
            Content='
        Build real-time interactive text based solutions that can be accessed on every type of mobile phone.'
            ModImg={ussd1}
            ModTitle='What is USSD'
            ModContent='Unstructured Supplementary Service Data (USSD), sometimes referred to as "quick codes" or "feature codes", is a communications protocol used by GSM cellular telephones to communicate with the mobile network operators computers.'
          />

          <ProductCard
            image={prodImg3}
            Title='Voice'
            Content='
        Enrich your users call experience by adding features that would be inaccessible '
            ModImg={vooi1}
            ModTitle='Why Voice'
            ModContent='Voice is important because it enables us to be understood by others and to
        verbally get our messages across to a communication partner. When a child’s
        voice is damaged it can lead to self esteem issues, fatigue and an inability to
        perform in their work/job.'
          />

          <Link to='/08hUSaDfFbc5glJRjn3e' style={{ textDecoration: 'none' }}>
            <ProductCard
              image={prodImg4}
              Title='Airtime'
              Content='
        Incentivise or make micro payments to your users by instantly sending virtual airtime.'
            /></Link>

          <Link to='/5drup0K9iaglYqNIMs64' style={{ textDecoration: 'none' }} >
            <ProductCard
              image={prodImg5}
              Title='IOT'
              Content='
        Connect, manage and visualize data from your remote devices through'
            /></Link>

          <Link to='/9GnUXxYBRndM36OTN4dG' style={{ textDecoration: 'none' }}>
            <ProductCard
              image={prodImg2}
              Title='POS'
              Content=' experience by adding features that would be inaccessible using normal physical phone lines'
            />
          </Link>



        </div>
      </div>
    </div>
  )
}

export default ProductPage
