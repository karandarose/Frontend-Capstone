import { useHistory } from "react-router-dom";
import AddToCart from "./AddToCart";

export default function ProductCard({ product }) {
  const { push } = useHistory();
  return (
    <div
      className="product-card-container"
      onClick={() => push(`/product/${product.id}`)}
    >
      <img src={product.image} alt="" />
      <h4>{product.title}</h4> <p>${product.price}</p>
      <AddToCart product={product} />
    </div>
  );
}
