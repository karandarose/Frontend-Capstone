// map through cart and display product card for each item in cart
// add up values for items in cart at checkout

import ProductCard from "../ProductCard";

import { useCart } from "../CartProvider";
import Footer from "../Footer";

export default function Cart() {
  const { cartItems, cartPrice } = useCart();
  return (
    <div>
      <h1>Cart details</h1>
      <div className="products-added">
        {cartItems.length > 0 ? (
          cartItems.map((product) => (
            <ProductCard key={product?.id} product={product} isCart={true} />
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
      <div className="subtotal">
        <h4>Total: ${cartPrice()}</h4>
        <h4>Shipping: $5.00</h4>
        <hr />
        <h4>Subtotal: ${cartPrice() + 5}</h4>
      </div>
      <Footer />
    </div>
  );
}
