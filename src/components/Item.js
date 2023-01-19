import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setListClass] = useState(false);
  function handleAddToCart() {
    setListClass(!inCart);
  }
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className= {inCart ? "remove" : "add"} onClick={handleAddToCart}> 
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
