import React from "react";

function HomeCards() {
  return (
    <div
      className="container-fluid"
      style={{
        marginTop: "-120px",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div className="row px-3">

        <div className="col-md-3 mb-3">
          <div className="card p-3 h-100 shadow-sm">
            <h5>Home Appliances</h5>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
              alt="Home Appliances"
              className="img-fluid"
              style={{ height: "250px", objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card p-3 h-100 shadow-sm">
            <h5>Electronics</h5>
            <img
        
  src="https://m.media-amazon.com/images/I/61xM8fFpoFL._AC_SY175_.jpg"
  alt="Electronics"
  className="img-fluid"
  style={{ height: "200px", objectFit: "cover" }}
/>
            
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card p-3 h-100 shadow-sm">
            <h5>Fashion</h5>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg"
              alt="Fashion"
              className="img-fluid"
              style={{ height: "250px", objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card p-3 h-100 shadow-sm">
            <h5>Kitchen</h5>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_2._SY116_CB567468236_.jpg"
              alt="Kitchen"
              className="img-fluid"
              style={{ height: "250px", objectFit: "cover" }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default HomeCards;