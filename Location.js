import React from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Location() {

  function abc() {

    alert("Button Clicked");

    navigator.geolocation.getCurrentPosition(

      async (res) => {

        alert("Location Found");

        const lat = res.coords.latitude;
        const lon = res.coords.longitude;

        console.log("Latitude:", lat);
        console.log("Longitude:", lon);

        try {

          const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
          );

          console.log("API Response:", response.data);

          const add = response.data.address;

          document.getElementById("street").value =
            add.road || add.suburb || "";

          document.getElementById("city").value =
            add.city || add.town || add.village || "";

          document.getElementById("pin").value =
            add.postcode || "";

        } catch (error) {

          console.log("API Error:", error);
          alert("Error fetching address");

        }

      },

      (err) => {

        console.log(err);
        alert("Location Permission Denied");

      }

    );
  }

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <button
          className="btn btn-primary mb-4"
          onClick={abc}
        >
          Add Location
        </button>

        <form>

          <input
            type="text"
            id="street"
            className="form-control"
            placeholder="Enter Street Name"
          />

          <br />

          <input
            type="text"
            id="city"
            className="form-control"
            placeholder="Enter City"
          />

          <br />

          <input
            type="text"
            id="pin"
            className="form-control"
            placeholder="Enter Pincode"
          />

          <br />

          <button
            type="submit"
            className="btn btn-success"
          >
            Save Address
          </button>

        </form>

      </div>
    </>
  );
}

export default Location;