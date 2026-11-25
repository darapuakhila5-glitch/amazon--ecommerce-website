import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let data =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(data);
  }, []);

  function removeItem(id) {
    let updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  }

  let total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h2 className="mb-4">
          Shopping Cart
        </h2>

        {cart.length === 0 ? (
          <h4>Your Cart Is Empty</h4>
        ) : (
          <>
            <div className="row">

              <div className="col-md-8">

                {cart.map((item) => (
                  <div
                    className="card mb-3 p-3"
                    key={item.id}
                  >
                    <div className="row">

                      <div className="col-md-3">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="img-fluid"
                        />
                      </div>

                      <div className="col-md-6">
                        <h5>{item.title}</h5>

                        <p>
                          {item.description}
                        </p>

                        <h6>
                          ₹ {item.price}
                        </h6>
                      </div>

                      <div className="col-md-3">

                        <button
                          className="btn btn-danger"
                          onClick={() =>
                            removeItem(item.id)
                          }
                        >
                          Remove
                        </button>

                      </div>

                    </div>
                  </div>
                ))}

              </div>

              <div className="col-md-4">

                <div className="card p-3">

                  <h4>
                    Subtotal ({cart.length} items)
                  </h4>

                  <h3>
                    ₹ {total}
                  </h3>

                  <button
                    className="btn btn-warning mt-3"
                  >
                    Proceed To Checkout
                  </button>

                </div>

              </div>

            </div>
          </>
        )}

      </div>
    </>
  );
}

export default Cart;