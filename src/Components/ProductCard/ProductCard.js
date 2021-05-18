import React from 'react'
import MatButton from './MatButon'
import './ProductCard.css'
// import sms from '../Img/sms.svg'

function ProductCard(props) {
  return (
    <div className='ProductCardMain'>
      <div className='ProductWidthControl'>
        <img src={props.image} alt='' className='SvgIcon' />
        <div className='CadTitle'> {props.Title} </div>
        <div className='CadContent'> {props.Content} </div>
        <div className='LearnMoreDiv'> <MatButton
          MatImg={props.ModImg}
          TriTITLE={props.ModTitle}
          TirCONTENT={props.ModContent}
        /> </div>
      </div>
    </div>
  )
}

export default ProductCard
