import React from "react";
import { OfferData } from "../rawdata";

function Offer() {
  return (
    <div className="container">
      <div className="row">
        {OfferData.map((data, index) => (
          <div className="p-4 " style={{ width: "50%" }} key={index}>
            <div className="warning-card rounded-4 text-white  p-5 d-flex align-items-center shadow-lg">
              <div
                className="hide-in-mobile"
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#ccc",
                  borderRadius: "50%",
                  marginRight: "15px",
                  padding: "",
                }}
              >
                {data.logo}
              </div>
              <div>
                <h5 className="mb-3">{data.label}</h5>
                <p className=" hide-in-mobile mb-0">{data.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offer;
