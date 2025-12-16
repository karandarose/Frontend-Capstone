import React from "react";
import { useState } from "react";

export default function AddToCart() {
  const [count, setCount] = useState(1);

  function plusCount(e) {
    e.stopPropagation();
    setCount((prevCount) => prevCount + 1);
  }

  function minusCount(e) {
    e.stopPropagation();
    setCount((prevCount) => prevCount - 1);
  }

  const addToButtons = (e) => {
    e.stopPropagation();
  };
  return (
    <div>
      <button className="plus" onClick={plusCount}>
        +
      </button>
      <input type="number" onClick={addToButtons} value={count} />
      <button className="minus" onClick={minusCount}>
        -
      </button>
      <br />
      <button className="add-to-cart">Add to cart</button>
    </div>
  );
}
