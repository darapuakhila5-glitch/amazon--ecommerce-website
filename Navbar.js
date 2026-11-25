import React from "react";
import { Link } from "react-router-dom";
import InputSearch from "./InputSearch";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
      <div className="container-fluid">

        {/* AMAZON LOGO */}
        <Link className="navbar-brand me-2" to="/">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.YdkQGmhB9c2Sr84FeDD9egHaEK?pid=Api"
            alt="Amazon Logo"
            style={{ height: "35px" }}
          />
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navBar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV CONTENT */}
        <div className="collapse navbar-collapse" id="navBar">

          <div className="d-flex align-items-center w-100 gap-2 flex-wrap">

            {/* LOCATION */}
            <Link to="/location" className="text-white text-decoration-none px-2">
              <div style={{ fontSize: "11px", color: "#ccc" }}>
                Deliver to
              </div>
              <div style={{ fontWeight: "bold" }}>
                📍 Update Location
              </div>
            </Link>

            {/* ALL CATEGORY */}
            <div className="dropdown">
              <button
                className="btn btn-light btn-sm dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                All
              </button>

              <ul className="dropdown-menu" style={{ height: "300px", overflowY: "scroll" }}>
                <li><Link className="dropdown-item" to="/s?k=Alexa Skills">Alexa Skills</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Amazon Devices">Amazon Devices</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Fashion">Amazon Fashion</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Fresh">Amazon Fresh</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Prime">Amazon Prime</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Apps">Apps & Games</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Books">Books</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Electronics">Electronics</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Computers">Computers & Accessories</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Baby">Baby Products</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Beauty">Beauty</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Furniture">Furniture</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Grocery">Grocery</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Jewellery">Jewellery</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Alexa Skills">Alexa Skills</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Amazon Devices">Amazon Devices</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Fashion">Amazon Fashion</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Fresh">Amazon Fresh</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Prime">Amazon Prime</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Apps">Apps & Games</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Books">Books</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Electronics">Electronics</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Computers">Computers & Accessories</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Baby">Baby Products</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Beauty">Beauty</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Furniture">Furniture</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Grocery">Grocery</Link></li>
                <li><Link className="dropdown-item" to="/s?k=Jewellery">Jewellery</Link></li>
              </ul>
            </div>

            {/* SEARCH */}
            <div className="flex-grow-1 d-flex">
              <InputSearch />
              <button className="btn btn-warning">🔍</button>
            </div>

            {/* LANGUAGE WITH FLAG */}
            <div className="dropdown text-white px-2">

              <button
                className="btn btn-dark btn-sm dropdown-toggle d-flex align-items-center gap-1"
                data-bs-toggle="dropdown"
                style={{ border: "none" }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                  alt="India"
                  style={{
                    width: "18px",
                    height: "12px",
                    objectFit: "cover"
                  }}
                />
                <span>EN</span>
              </button>

              <ul className="dropdown-menu">
                <li><button className="dropdown-item">English</button></li>
                <li><button className="dropdown-item">తెలుగు</button></li>
                <li><button className="dropdown-item">हिन्दी</button></li>
                <li><button className="dropdown-item">தமிழ்</button></li>
              </ul>
            </div>

            {/* SIGN IN */}
            <Link to="/signup" className="text-white text-decoration-none px-2">
              <div style={{ fontSize: "12px" }}>Hello, Sign in</div>
              <div style={{ fontWeight: "bold" }}>Accounts</div>
            </Link>

            {/* ORDERS */}
            <Link to="/orders" className="text-white text-decoration-none px-2">
              <div style={{ fontSize: "12px" }}>Returns</div>
              <div style={{ fontWeight: "bold" }}>& Orders</div>
            </Link>

            {/* CART */}
            <Link to="/cart" className="text-white text-decoration-none px-2">
              🛒 Cart
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;