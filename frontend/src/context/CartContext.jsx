import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  // Add Item
  const addToCart = (food) => {

    const existingItem = cart.find(
      (item) => item.id === food.id
    );

    if (existingItem) {

      setCart(
        cart.map((item) =>
          item.id === food.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...food,
          quantity: 1,
        },
      ]);

    }

  };

  // Increase Quantity

  const increaseQuantity = (id) => {

    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );

  };

  // Decrease Quantity

  const decreaseQuantity = (id) => {

    setCart(

      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)

    );

  };

  // Remove Item

  const removeFromCart = (id) => {

    setCart(
      cart.filter((item) => item.id !== id)
    );

  };

  // Clear Cart

  const clearCart = () => {

    setCart([]);

  };

  // Totals

  const subtotal = cart.reduce(

    (total, item) =>

      total + item.price * item.quantity,

    0

  );

  const deliveryCharge =
    cart.length > 0 ? 30 : 0;

  const grandTotal =
    subtotal + deliveryCharge;

  const cartCount = cart.reduce(

    (count, item) =>

      count + item.quantity,

    0

  );

  return (

    <CartContext.Provider

      value={{

        cart,

        addToCart,

        increaseQuantity,

        decreaseQuantity,

        removeFromCart,

        clearCart,

        subtotal,

        deliveryCharge,

        grandTotal,

        cartCount,

      }}

    >

      {children}

    </CartContext.Provider>

  );

}

export default CartProvider;