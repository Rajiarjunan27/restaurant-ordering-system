import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
  );

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">
        🛒 My Cart
      </h2>

      {cart.length === 0 ? (
        <h4 className="text-center text-muted">
          Your cart is empty.
        </h4>
      ) : (
        <>
          <table className="table table-bordered">

            <thead className="table-dark">
              <tr>
                <th>Image</th>
                <th>Food</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {cart.map((item, index) => (

                <tr key={index}>

                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      width="80"
                    />
                  </td>

                  <td>{item.name}</td>

                  <td>

                       <td>

                              ₹{item.price}

                              <br />

                              ×

                              {item.quantity}

                              =

                              ₹{item.price * item.quantity}

                        </td>

                        <br />

                        Qty : {item.quantity}

                   </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          <h3 className="text-end">
            Total : ₹{total}
          </h3>

          <div className="text-end">
            <button className="btn btn-success">
              Proceed to Checkout
            </button>
          </div>

        </>
      )}

    </div>
  );
}

export default Cart;