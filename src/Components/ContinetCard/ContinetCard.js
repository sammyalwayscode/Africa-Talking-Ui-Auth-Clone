import React from 'react'
import './ContinetCard.css'

function ContinetCard(props) {
  return (
    <div className='ContinetCardMain'>
      <div className='SubContinetCard'>
        <div className='imgContdiv'>
          <img src={props.contiImg} alt='' className='ContiImgdiv' />
        </div>
        <div className='ConitText'>
          <div className='ContiBig'> {props.contiNumber} </div>
          <div className='Contismall'> {props.ContiText} </div>
        </div>
      </div>
    </div>
  )
}

export default ContinetCard
