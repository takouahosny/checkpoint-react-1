import React from 'react'
import { product } from '../product'
function Name() {
    const {name} = product
  return (
      <h1 className='name'>{name}</h1>
  )
}

export default Name
