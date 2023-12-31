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
      <div className="row d-flex justify-content-center gap-3 mt-4 text-muted">
        <span className="w-50 text-center">
          {HeroData.icon}Experience the DrDoc mobile app
        </span>
      </div>
      <div className="row d-flex justify-content-center gap-3 mt-1">
        {HeroData.mobile.map((data) => (
          <div className="w-25 py-2 bg-black rounded-5">
            <img
              className="object-fit-contain"
              src={data.logo}
              width={"100%"}
              alt="mobile"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppLink;
