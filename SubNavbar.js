import React from "react";
import { Link } from "react-router-dom";

function SubNavbar() {
  return (
    <div
      className="bg-dark text-white p-2 d-flex"
      style={{
        overflowX: "auto",
        whiteSpace: "nowrap"
      }}
    >
      <Link
        to="/all"
        className="text-white text-decoration-none mx-2"
      >
        ☰ All
      </Link>

      <Link
        to="/fresh"
        className="text-white text-decoration-none mx-5"
      >
        
        Fresh
      </Link>

      <Link
        to="/prime"
        className="text-white text-decoration-none mx-5"
      >
        Prime
      </Link>

      <Link
        to="/deals"
        className="text-white text-decoration-none mx-5"
      >
        Today's Deals
      </Link>

      <Link
        to="/mobiles"
        className="text-white text-decoration-none mx-5"
      >
        Mobiles
      </Link>

      <Link
        to="/electronics"
        className="text-white text-decoration-none mx-5"
      >
        Electronics
      </Link>

      <Link
        to="/fashion"
        className="text-white text-decoration-none mx-5"
      >
        Fashion
      </Link>

      <Link
        to="/toys-games"
        className="text-white text-decoration-none mx-5"
      >
        Toys & Games
      </Link>

      <Link
        to="/home-kitchen"
        className="text-white text-decoration-none mx-5"
      >
        Home & Kitchen
      </Link>

      <Link
        to="/amazonpay"
        className="text-white text-decoration-none mx-4"
      >
        Amazon Pay
      </Link>
    </div>
  );
}

export default SubNavbar;