import React from "react";
import { OurAppData } from "../rawdata";

function OurApp() {
  return (
    <div className="container mt-5">
      <div className="text-center d-grid align-items-center justify-content-center">
        <div>
          <h2 className="">
            <strong className="">Our App</strong>{" "}
            <span className="text-muted">makes your life easy</span>
          </h2>
        </div>
        <div className="d-flex justify-content-center">
          <p className="col-md-6 text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint
            explicabo deserunt quo ea voluptatem rem facilis error. Quae sed
            dolore at voluptatum impedit dolorem amet dolor magni officiis
            expedita!
          </p>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6 p-2">
          <img
            width={"100%"}
            height={"500px"}
            className=" object-fit-contain "
            src={OurAppData.image}
            alt="mobile"
          />
        </div>
        <div className="col-md-6 p-2">
          <div className="row">
            {OurAppData.details.map((data) => (
              <div className="w-50">
                <div
                  className="p-2 rounded-5 shadow d-inline-block"
                  style={{ backgroundColor: data.bg }}
                >
                  {data.icon}
                </div>
                <h5>{data.title}</h5>
                <p>{data.data}</p>
              </div>
            ))}
          </div>
          {/* <div>
            <button className="our-app-download mt-3">
              {OurAppData.download.logo}
            </button>
            {OurAppData.download.content}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default OurApp;
