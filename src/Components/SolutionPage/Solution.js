import React from 'react'
import './Solution.css'
import SolImg from '../Img/testimonials.png'

function Solution() {
  return (
    <div className='MainSolutionDiv'>
      <div className='SubSolutionDiv'>
        <img src={SolImg} alt='' className='SolImgCtrl' />
        <div className='SolText'>
          Other solutions using Africa’s Talking
        </div>
      </div>
    </div>
  )
}

export default Solution
