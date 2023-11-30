import React, { useEffect } from "react";
import { PageNotFoundData } from "./rawdata";

function PageNotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center w-100"
      style={{ textAlign: "center", height: "100vh" }}
    >
      <div>
        <h1>{PageNotFoundData.heading}</h1>
        <p>{PageNotFoundData.message}</p>
        <button className="btn btn-success">{PageNotFoundData.button}</button>
      </div>
    </div>
  );
}

export default PageNotFound;
