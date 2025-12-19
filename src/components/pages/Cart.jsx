// map through cart and display product card for each item in cart
// add up values for items in cart at checkout
import CartProvider from "../CartProvider";
import ProductCard from "../ProductCard";
import AddToCart from "../AddToCart";
import { useCart } from "../CartProvider";

export default function Cart() {
  const { cartItems } = useCart();
  return (
    <div>
      <h1>Cart details</h1>
      {cartItems.map((product) => (
        <ProductCard key={product.id} product={product} isCart={true} />
      ))}
    </div>
  );
}
