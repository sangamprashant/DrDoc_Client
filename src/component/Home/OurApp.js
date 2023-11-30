import React from "react";
import { OurAppData } from "../rawdata";

function OurApp() {
  return (
    <div className="container">
      <h2 className="text-center">Our App</h2>
      <div className="row">
        <div className="col md-6 p-2">
          <img
            width={"100%"}
            height={"500px"}
            className=" object-fit-contain"
            src={OurAppData.image}
            alt="mobile"
          />
        </div>
        <div className="col md-6 p-2">
          <h3>{OurAppData.heading}</h3>
          <ul>
            {OurAppData.details.map(data=>(<li>{data.data}</li>))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OurApp;
