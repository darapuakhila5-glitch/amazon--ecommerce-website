import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductRow({ title, category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div className="container-fluid bg-white my-3 p-3">
      <h4>{title}</h4>

      <div className="d-flex overflow-auto gap-3">
        {products.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <div
              className="card"
              style={{
                minWidth: "220px",
                height: "320px",
              }}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{
                  height: "180px",
                  objectFit: "contain",
                }}
              />

              <div className="card-body">
                <h6>{item.title}</h6>

                <p className="fw-bold text-success">
                  ₹ {item.price}
                </p>

                <button className="btn btn-warning btn-sm">
                  View Product
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductRow;