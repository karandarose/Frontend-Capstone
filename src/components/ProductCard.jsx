import { useHistory } from "react-router-dom";
import AddToCart from "./AddToCart";

export default function ProductCard({ product, isCart = "" }) {
  const { push } = useHistory();
  return (
    <div
      className="product-card-container"
      onClick={() => push(`/product/${product.id}`)}
    >
      <img src={product.image} alt="" />
      <h4>{product.title}</h4> <p>${product.price}</p>
      <AddToCart product={product} isCart={isCart} />
    </div>
  );
}

// if productcard is on the cart page, addtocart should display total quanity and either productcard and or addtocart should have delete button.
// can use props to pass in variable that is true or false
// {!isCart &&
