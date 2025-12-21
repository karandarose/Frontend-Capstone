// map through cart and display product card for each item in cart
// add up values for items in cart at checkout

import ProductCard from "../ProductCard";

import { useCart } from "../CartProvider";

export default function Cart() {
  const { cartItems, cartPrice } = useCart();
  return (
    <div>
      <h1>Cart details</h1>
      {cartItems.length > 0 ? (
        cartItems.map((product) => (
          <ProductCard key={product?.id} product={product} isCart={true} />
        ))
      ) : (
        <div>No products found</div>
      )}
      {cartPrice()}
    </div>
  );
}
