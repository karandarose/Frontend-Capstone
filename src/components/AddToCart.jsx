// When you click add to cart, it needs to call add to cart from the context
// this function will take in an ID and the count from this page. ID might need to be passed through props

import { useState } from "react";
import { useCart } from "./CartProvider";

export default function AddToCart({ product, isCart = "" }) {
  const [count, setCount] = useState(1);

  const { handleAddToCart, inCart } = useCart();
  const quantity = inCart(product.id);

  function plusCount(e) {
    e.stopPropagation();
    setCount((prevCount) => prevCount + 1);
  }

  function minusCount(e) {
    e.stopPropagation();
    setCount((prevCount) => prevCount - 1);
  }
  console.log(quantity);
  const addToButtons = (e) => {
    e.stopPropagation();
  };
  return (
    <div>
      <div className="number-buttons">
        <button className="plus" onClick={plusCount}>
          +
        </button>
        <h3>{isCart ? quantity[0].quantity : count}</h3>
        <button className="minus" onClick={minusCount}>
          -
        </button>
      </div>
      <br />
      <button
        className="add-to-cart"
        onClick={(e) => {
          handleAddToCart(e, product, count);
          setCount(1);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
