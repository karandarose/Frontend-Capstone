// When you click add to cart, it needs to call add to cart from the context
// this function will take in an ID and the count from this page. ID might need to be passed through props

import { useState } from "react";
import { useCart } from "./CartProvider";

export default function AddToCart({ product, isCart = "" }) {
  const [count, setCount] = useState(1);

  const { handleAddToCart, inCart, removeItem, changeQuantity } = useCart();
  const quantity = inCart(product.id);

  function plusCount(e) {
    e.stopPropagation();
    setCount((prevCount) => prevCount + 1);
  }

  function minusCount(e) {
    e.stopPropagation();
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <div className="number-buttons">
        <button
          className="plus"
          onClick={(e) =>
            isCart ? changeQuantity(e, 1, product.id) : plusCount(e)
          }
        >
          +
        </button>
        <h3>{isCart ? quantity[0].quantity : count}</h3>
        <button
          className="minus"
          disabled={
            isCart ? quantity[0].quantity == 1 : count == 1 ? true : false
          }
          onClick={(e) =>
            isCart ? changeQuantity(e, -1, product.id) : minusCount(e)
          }
        >
          -
        </button>
      </div>
      <br />
      {isCart ? (
        <button onClick={(e) => removeItem(e, product.id)}>Remove</button>
      ) : (
        <button
          className="add-to-cart"
          onClick={(e) => {
            handleAddToCart(e, product, count);
            setCount(1);
            alert(`${product.title} added to cart!`);
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  );
}
