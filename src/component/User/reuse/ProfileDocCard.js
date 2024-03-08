import React from "react";

const PrescriptionCard = () => {
  return (
    <div className="document-image">
      <div className="card-2">
        <div className="card-content2">
          <h3 className="card-title-profile">Title of the prescription</h3>
          <p className="card-subtitle-profile">
            Date: 21/12/4533 Time: 12:34 PM
          </p>
          <div className="card-description-profile">
            <p>Details of the medical prescription</p>
            <div className="d-flex justify-content-end">
              <button className="btn btn-outline-secondary">
                View in detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionCard;
