import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Search.css";

function InputSearch() {
  const [products, setP] = useState([]);
  const [sproducts, setSp] = useState([]);

  useEffect(() => {
    async function ui() {
      try {
        const res = await axios.get(
          "https://dummyjson.com/products"
        );

        setP(res.data.products);
      } catch (err) {
        console.log(err);
      }
    }

    ui();
  }, []);

  function search(e) {
    const keyword = e.target.value;

    if (keyword.length > 0) {
      const filtered = products.filter((item) =>
        item.title.toLowerCase().includes(
          keyword.toLowerCase()
        )
      );

      setSp(filtered);
    } else {
      setSp([]);
    }
  }

  function openProduct(id) {
    window.location.href = `/single/${id}`;
  }

  return (
    <div className="position-relative w-100">
      <input
        type="text"
        className="form-control"
        placeholder="Search Products..."
        onChange={search}
      />

      <ul
        className="list-group position-absolute w-100"
        style={{
          zIndex: 1000,
          top: "40px"
        }}
      >
        {sproducts.map((item) => (
          <li
            key={item.id}
            className="list-group-item"
            style={{ cursor: "pointer" }}
            onClick={() => openProduct(item.id)}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              width="40"
              height="40"
              className="me-2"
            />

            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InputSearch;