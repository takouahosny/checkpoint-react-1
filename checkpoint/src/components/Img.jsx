import React from 'react'
import { product } from '../product'
function Img() {
    const { img }= product
  return (
      <img className='img' src={img} alt="" />
  )
}

export default Img
