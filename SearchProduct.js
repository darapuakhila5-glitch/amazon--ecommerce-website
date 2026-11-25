import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function SearchProduct() {
  const [p, setP] = useState([]);
  const navigate = useNavigate();

  let s = new URLSearchParams(window.location.search);
  let keyword = s.get("k");

  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let exist = cart.find((p) => p.id === item.id);

    if (!exist) {
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Added to Cart 🛒");
    } else {
      alert("Already in Cart");
    }
  };

  const buyNow = (item) => {
    localStorage.setItem("buyNowItem", JSON.stringify(item));
    alert("Buy Now");
  };

  const openProduct = (id) => {
    navigate(`/single/${id}`);
  };

  useEffect(() => {
    async function ui() {
      try {
        let res;

        if (keyword) {
          res = await axios(
            `https://dummyjson.com/products/search?q=${keyword}`
          );
        } else {
          res = await axios(
            "https://dummyjson.com/products/category/smartphones"
          );
        }

        setP(res.data.products);
      } catch (err) {
        console.log(err);
      }
    }

    ui();
  }, [keyword]);

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h3 className="mb-4">
          {keyword ? `Search: ${keyword}` : "Smartphones"}
        </h3>

        <div className="row">

          {p.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>

              <div className="card h-100 shadow border-0">

                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "contain",
                    cursor: "pointer"
                  }}
                  onClick={() => openProduct(item.id)}
                />

                <div className="card-body">

                  <h5
                    className="card-title"
                    style={{ cursor: "pointer" }}
                    onClick={() => openProduct(item.id)}
                  >
                    {item.title}
                  </h5>

                  <p className="card-text">
                    {item.description.slice(0, 60)}...
                  </p>

                  <h6 className="text-success">
                    ₹ {item.price}
                  </h6>

                  <small className="text-muted">
                    Brand: {item.brand}
                  </small>

                  <div className="mt-3 d-flex gap-2">

                    <button
                      className="btn btn-warning btn-sm w-50"
                      onClick={() => addToCart(item)}
                    >
                      🛒 Cart
                    </button>

                    <button
                      className="btn btn-success btn-sm w-50"
                      onClick={() => buyNow(item)}
                    >
                      Buy
                    </button>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </>
  );
}

export default SearchProduct;