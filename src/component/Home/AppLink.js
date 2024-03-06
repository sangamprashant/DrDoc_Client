import React from "react";
import { HeroData } from "../rawdata";

function AppLink() {
  return (
    <div className="col-md-12">
      <form>
        <p className="text-center text-muted">Subscribe to our newsletter</p>
        <div className="d-flex gap-3">
          <input
            type="email"
            placeholder="Email"
            className="form-control rounded-5 p-3"
          />
          <button
            type="submit"
            className="btn btn-primary rounded-5 p-3 px-5 text-nowrap"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}

export default AppLink;
