import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setListClass] = useState(false);
  function handleAddCart() {
    setListClass(!inCart);
  }
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onclick={handleAddCart}>
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
