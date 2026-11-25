import Navbar from "./Navbar";
import SubNavbar from "./SubNavbar";
import Banner from "./Banner";
import HomeCards from "./HomeCards";
import ProductRow from "./ProductRow";
import Footer from "./Footer";
import SingleProduct from "./SingleProduct";
import CategoryPage from "./CategoryPage";

import SearchProduct from "./SearchProduct";
import Cart from "./Cart";
import Location from "./Location";
import Signup from "./Signup";
import Orders from "./Orders";

import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <Banner />
      <HomeCards />

      <ProductRow
        title="🔥 Today's Deals"
        category="smartphones"
      />

      <ProductRow
        title="⭐ Best Sellers"
        category="laptops"
      />

      <ProductRow
        title="🎧 Electronics"
        category="mobile-accessories"
      />

      <ProductRow
        title="👗 Fashion"
        category="mens-shirts"
      />

      <ProductRow
        title="💍 Jewelry"
        category="womens-jewellery"
      />

      <ProductRow
        title="💄 Beauty Products"
        category="beauty"
      />

      <ProductRow
        title="🕶️ Sunglasses"
        category="sunglasses"
      />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <SubNavbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/fresh"
          element={<h1 className="m-4">Fresh Products</h1>}
        />

        <Route
          path="/prime"
          element={<h1 className="m-4">Prime Membership</h1>}
        />

        <Route
          path="/mobiles"
          element={
            <CategoryPage
              title="Mobiles"
              category="smartphones"
            />
          }
        />

        <Route
          path="/electronics"
          element={
            <CategoryPage
              title="Electronics"
              category="mobile-accessories"
            />
          }
        />

        <Route
          path="/fashion"
          element={
            <CategoryPage
              title="Fashion"
              category="mens-shirts"
            />
          }
        />

        <Route
          path="/toys-games"
          element={
            <CategoryPage
              title="Toys & Games"
              category="tops"
            />
          }
        />

        <Route
          path="/home-kitchen"
          element={
            <CategoryPage
              title="Home & Kitchen"
              category="furniture"
            />
          }
        />

        <Route
          path="/amazonpay"
          element={
            <div className="container text-center mt-4">
              <h2>Amazon Pay</h2>

              <img
                src="https://tse3.mm.bing.net/th/id/OIP._mUt9wdobn9Mo4LOk-kQswHaEJ?pid=Api&P=0&h=180"
                alt="Amazon Pay"
                width="300"
              />
            </div>
          }
        />

        <Route
          path="/s"
          element={<SearchProduct />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/location"
          element={<Location />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/orders"
          element={<Orders />}
        />

        <Route
          path="/product/:id"
          element={<SingleProduct />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;