import React from "react";
import { HeroData } from "../rawdata";
import AppLink from "./AppLink";

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
                <AppLink />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
