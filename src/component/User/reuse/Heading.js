import { Tooltip } from "antd";
import React from "react";
import { Icons } from "../../../icons";
import { Link } from "react-router-dom";

function Heading({ title }) {
  return (
    <div className="d-flex gap-4 align-items-center">
      <Tooltip title="Go Back">
        <Link to="/profile" className="btn">{Icons.ArrowBackIcon}</Link>
      </Tooltip>
      <h2>{title}</h2>
    </div>
  );
}

export default Heading;
