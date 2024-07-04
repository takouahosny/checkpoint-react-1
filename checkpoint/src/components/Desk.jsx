import React from 'react'
import { product } from '../product'
function Desk() { 
    const {description } = product
  return (
    <div>
      <p id='desc'> {description} </p>
    </div>
  );
}

export default Desk
