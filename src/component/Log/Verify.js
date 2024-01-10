import React from "react";
import { useParams } from "react-router-dom";

function Verify() {
  const { token } = useParams();

  return (
    <div className="h-full w-100 d-flex justify-content-center align-items-center">
      {<div className="card shadow-lg p-5">Please wait verifying</div>}
      {<div className="card shadow-lg p-5">virifivcation failed</div>}
      {<div className="card shadow-lg p-5">virifivcation dome</div>}
    </div>
  );
}

export default Verify;
