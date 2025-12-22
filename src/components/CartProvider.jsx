import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

function CartProvider({ children }) {
  const sessionCart = JSON.parse(sessionStorage.getItem("cartItems"));

  const [cartItems, setCartItems] = useState(sessionCart || []);

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

  const removeItem = (event, id) => {
    event.stopPropagation();
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const changeQuantity = (e, quantity, id) => {
    e.stopPropagation();
    setCartItems((prevItems) => {
      const prev = prevItems.find((item) => item.id === id);
      if (prev) {
        return prevItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + quantity,
            };
          } else return item;
        });
      }
      return prevItems;
    });
  };

  const cartPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });

    return total;
  };
  cartPrice();

  useEffect(() => {
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div>
      <div className="sub-total"></div>
      <CartContext.Provider
        value={{
          cartItems,
          setCartItems,
          handleAddToCart,
          updateCartItemQuantity,
          inCart,
          removeItem,
          changeQuantity,
          cartPrice,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
}

export default CartProvider;
