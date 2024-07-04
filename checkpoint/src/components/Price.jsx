import React from "react";
import { product } from "../product";
function Price() {
  const { price } = product;
  return <h3 className="price">{price}</h3>;
}

export default Price;
