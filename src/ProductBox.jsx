import React from "react";

function ProductBox({product}) {
  return (
    <div className="box">
      <img src={product.image} alt=""  height={150}/>

      <h4>{product.title}</h4>
      <p> {product.price} $</p>
      <button> add to cart</button>
    </div>
  );
}

export default ProductBox;
