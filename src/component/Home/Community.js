import React from "react";
import { CommunityData } from "../rawdata";

function Community() {
  return (
    <div className="container mt-5">
      <div className="text-center d-grid align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <h2 className="col-md-6">
            {CommunityData.heading.map(data=>(<React.Fragment key={data.sp}><span className="text-muted">{data.sp}</span>
            <strong className="">{data.st}</strong></React.Fragment>))}
          </h2>
        </div>
      </div>
      <div className="row align-items-center justify-content-center text-center">
        <div className="col-md-12 px-5 py-2">
          <img
            width={"100%"}
            className="px-2 object-fit-contain"
            src={CommunityData.image}
            alt="mobile"
          />
        </div>
        {CommunityData.card.map((data) => (
          <div className="col-md-3 px-5 text-white" key={data.label}>
            <div className="px-4 py-2 shadow shadow-lg rounded" style={{backgroundColor:data.color}}>
              <h1>
                <strong>{data.count}</strong>
              </h1>
              <p className="small">{data.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Community;
