import React from "react";
import { HeroData } from "../rawdata";

function Hero() {
  return (
    <section>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h1 className="mb-4">
                  {HeroData.Heading.first}
                  <span className="text-second">
                    {HeroData.Heading.second}
                  </span>
                </h1>
                <p className="lead">{HeroData.paragraph}</p>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img
                className="img-fluid rounded w-75"
                src={HeroData.image}
                alt="hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
