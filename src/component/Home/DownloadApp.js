import React from "react";
import { DownloadAppData } from "../rawdata";
import AppLink from "./AppLink";

function DownloadApp() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 p-2">
          <div className="text-muted">
            <h2 className="">
              <strong className="text-black">Download</strong>{" "}
              <span className="">our app now!</span>
            </h2>
            <h5>Get you doctor anytime and anywhere</h5>
          </div>
          <AppLink />
        </div>
        <div className="col-md-6 p-2">
          <img
            width={"100%"}
            height={"500px"}
            className=" object-fit-contain "
            src={DownloadAppData.image}
            alt="mobile"
          />
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;
