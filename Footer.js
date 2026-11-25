import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-secondary text-white text-center p-3">
        Back to top
      </div>

      <div className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">

            <div className="col-md-3">
              <h5>Get to Know Us</h5>
              <p>About Amazon</p>
              <p>Careers</p>
              <p>Press Releases</p>
              <p>Amazon Science</p>
            </div>

            <div className="col-md-3">
              <h5>Connect with Us</h5>
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Instagram</p>
            </div>

            <div className="col-md-3">
              <h5>Make Money with Us</h5>
              <p>Sell on Amazon</p>
              <p>Protect and Build Your Brand</p>
              <p>Become an Affiliate</p>
              <p>Advertise Your Products</p>
            </div>

            <div className="col-md-3">
              <h5>Let Us Help You</h5>
              <p>Your Account</p>
              <p>Returns Centre</p>
              <p>100% Purchase Protection</p>
              <p>Help</p>
            </div>

          </div>

          <hr />

          <div className="text-center">
            <h4>amazon</h4>
            <p>English | India</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;