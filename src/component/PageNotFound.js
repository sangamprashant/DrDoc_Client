import React, { useEffect } from "react";
import { PageNotFoundData } from "./rawdata";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

function PageNotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center w-100"
      style={{ textAlign: "center", height: "100vh" }}
    ><Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Link className="btn btn-primary" to="/">Back Home</Link>}
  />
    </div>
  );
}

export default PageNotFound;
