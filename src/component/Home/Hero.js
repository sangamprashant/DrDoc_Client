import React from "react";
import { HeroData } from "../rawdata";

function Hero() {
  return (
    <section>
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
              <img
                className="img-fluid rounded w-100"
                src={HeroData.image}
                alt="hero"
              />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h1 className="mb-4">
                  <strong className="heading">
                    {HeroData.Heading.first}
                    <span className="text-second">
                      {HeroData.Heading.second}
                    </span>
                    <img width="50" src={HeroData.logoSide} alt="" />
                  </strong>
                  <br />
                  <span className="text fst-italic">Sub title</span>
                </h1>
                <p className="fst-italic">{HeroData.paragraph}</p>
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
                        className="btn btn-primary rounded-5 p-3 px-5"
                      >
                        Submit
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
