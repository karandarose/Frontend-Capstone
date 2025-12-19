// wrap around app
// hold cart state and add to cart functionality

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (e, product, count) => {
    e.stopPropagation();
    setCartItems((prevItems) => {
      const prev = prevItems.find((item) => item.id === product.id);
      if (prev) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...prev, quantity: prev.quantity + count }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: count }];
    });
  };

  const updateCartItemQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + Number(newQuantity) }
          : item
      )
    );
  };
  const inCart = (id) => {
    if (cartItems) {
      return cartItems.filter((item) => item.id === id);
    }
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        handleAddToCart,
        updateCartItemQuantity,
        inCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
