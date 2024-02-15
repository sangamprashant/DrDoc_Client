import React from "react";

function Container({ children }) {
  return (
    <div
      className="container d-flex justify-content-center"
      style={{ marginTop: "100px" }}
    >
      <div className="profile-container shadow-lg p-3">{children}</div>
    </div>
  );
}

export default Container;
