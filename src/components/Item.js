import React, { useState } from "react";

function Item({ name, category }) {
  const [itemInCart, setListClass] = useState(false);
  function handleAddToCart() {
    setListClass(!itemInCart);
  }
  return (
    <li className={itemInCart ? "itemIn-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={itemInCart ? "remove" : "add"} onclick={handleAddToCart}>
        {itemInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
