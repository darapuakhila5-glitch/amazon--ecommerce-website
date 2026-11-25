import React, { useState, useEffect } from "react";

function Banner() {
  const images = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/2025/GW/UNREC/PC/78269._CB785061629_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/tdhruvko/GW/BAU/Mar26/WBLB3000X1200.jpg._CB786181535_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/May26/Desktop_tall_Hero_3000x1200_EL_Rec._CB762895918_.jpg"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        overflow: "hidden",
        position: "relative"
      }}
    >
      <img
        src={images[index]}
        alt="banner"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />

      {/* Left Arrow */}
      <button
        onClick={prevImage}
        style={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          fontSize: "40px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: "10"
        }}
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextImage}
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          fontSize: "40px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: "10"
        }}
      >
        ❯
      </button>
    </div>
  );
}

export default Banner;