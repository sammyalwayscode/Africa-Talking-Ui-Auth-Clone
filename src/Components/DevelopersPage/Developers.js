import React from 'react'
import './Developers.css'
import devapi from '../Img/devapi.png'

function Developers() {
  return (
    <div className='DevelopersMain'>
      <div className='DevHeading'>Where developers learn and build</div>
      <div className='SubDevelopersdiv'>
        <img src={devapi} alt='' />
        <div className='DevText'>
          <div className='DevBigText'>Developer Resources</div>
          <div className='DevSmallText'>
            We have created a set of developers tool that will make it easier for you to learn how to work with our APIs. These resources will help you build faster and test your applications before you deploy them to your users.
            <div><button className='DevButton'>Learn More</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Developers
