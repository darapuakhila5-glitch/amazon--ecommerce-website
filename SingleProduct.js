import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});
  const [mainImage, setMainImage] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios(
          `https://dummyjson.com/products/${id}`
        );

        setProduct(res.data);
        setMainImage(res.data.thumbnail);
        setImages(res.data.images);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [id]);

  function addToCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    toast.success("Added to Cart");
  }

  function buyNow() {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(product);
    localStorage.setItem("orders", JSON.stringify(orders));

    toast.success("Order Placed");

    // ✅ THIS IS NAVIGATION (IMPORTANT)
    navigate("/orders");
  }

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <div className="row border p-3">

          {/* IMAGES */}
          <div className="col-md-2">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="img-thumbnail mb-2"
                style={{ cursor: "pointer" }}
                onMouseOver={() => setMainImage(img)}
              />
            ))}
          </div>

          {/* MAIN IMAGE */}
          <div className="col-md-4 text-center">
            <img
              src={mainImage}
              alt={product.title}
              style={{
                width: "100%",
                height: "350px",
                objectFit: "contain"
              }}
            />
          </div>

          {/* DETAILS */}
          <div className="col-md-4">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h5>₹ {product.price}</h5>
          </div>

          {/* BUY BOX */}
          <div className="col-md-2">
            <div className="card p-3">

              <h5>₹ {product.price}</h5>

              <button
                className="btn btn-warning mb-2"
                onClick={addToCart}
              >
                Add to Cart
              </button>

              <button
                className="btn btn-success"
                onClick={buyNow}
              >
                Buy Now
              </button>

            </div>
          </div>

        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default SingleProduct;