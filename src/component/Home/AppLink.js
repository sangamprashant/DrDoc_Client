import React from "react";
import { HeroData } from "../rawdata";

function AppLink() {
  return (
    <div>
      <div className="col-md-12">
        <form>
          <div className="d-flex gap-3">
            <input
              type="text"
              placeholder="Email"
              className="form-control rounded-5 p-3"
            />
            <button
              type="submit"
              className="btn btn-primary rounded-5 p-3 px-5 text-nowrap"
            >
              Get App Link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AppLink;
