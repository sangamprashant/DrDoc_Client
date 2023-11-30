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
                  <span className="text-second">{HeroData.Heading.second}</span>
                </h1>
                <p className="lead">{HeroData.paragraph}</p>
                <div className="col-md-12">
                  <form>
                    <div className="d-flex gap-3">
                      <input
                        type="text"
                        placeholder="Email"
                        className="form-control p-2"
                      />
                      <button type="submit" className="btn btn-primary p-2">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-md-12 row">
                  {HeroData.count.map((d) => (
                    <div className="w-25 p-2">
                      <div className="card d-flex justify-content-center align-items-center">
                        <h1>{d.data}</h1>
                        <p>{d.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
