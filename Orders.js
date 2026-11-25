import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("orders")) || [];

    // ✅ REMOVE DUPLICATES (based on product id)
    let uniqueOrders = [];
    let seen = new Set();

    data.forEach((item) => {
      if (!seen.has(item.id)) {
        seen.add(item.id);
        uniqueOrders.push(item);
      }
    });

    setOrders(uniqueOrders);
  }, []);

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h2>Your Orders</h2>

        {/* IF NO ORDERS */}
        {orders.length === 0 ? (
          <div className="card p-4 text-center mt-4">

            <h5>No Orders Yet</h5>
            <p className="text-muted">
              You have not placed any orders.
            </p>

            {/* GO TO SHOPPING */}
            <Link to="/" className="btn btn-warning mt-3">
              🛍 Go to Shopping
            </Link>

          </div>
        ) : (
          <>
            {/* ORDER LIST */}
            <div className="row mt-4">

              {orders.map((item) => (
                <div className="col-md-4 mb-3" key={item.id}>
                  <div className="card p-3 shadow-sm">

                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      style={{
                        height: "150px",
                        objectFit: "contain"
                      }}
                    />

                    <h6 className="mt-2">{item.title}</h6>
                    <p className="text-success">₹ {item.price}</p>

                    <button className="btn btn-sm btn-success">
                      Ordered ✔
                    </button>

                  </div>
                </div>
              ))}

            </div>

            {/* GO BACK SHOPPING BUTTON */}
            <div className="text-center mt-4">
              <Link to="/" className="btn btn-primary">
                Continue Shopping
              </Link>
            </div>
          </>
        )}

      </div>
    </>
  );
}

export default Orders;