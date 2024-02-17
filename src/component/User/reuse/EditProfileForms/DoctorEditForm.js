import React from "react";

function DoctorEditForm() {
  return (
    <>
      <h4>Doctor Form</h4>
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="hospitalName">HospialName</label>
          <input
            type="text"
            className="form-control"
            id="hospitalName"
            name="hospitalName"
            placeholder="Hospital name"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="specialization">specialization</label>
          <input
            type="text"
            className="form-control"
            id="specialization"
            name="specialization"
            placeholder="Specialization"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="experienceYears">experienceYears</label>
          <input
            type="number"
            className="form-control"
            id="experienceYears"
            name="experienceYears"
            placeholder="experienceYears"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="location">location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            placeholder="location"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="department">department</label>
          <input
            type="text"
            className="form-control"
            id="department"
            name="department"
            placeholder="department"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="bedsAvailable">bedsAvailable</label>
          <input
            type="number"
            className="form-control"
            id="bedsAvailable"
            name="bedsAvailable"
            placeholder="bedsAvailable"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="website">website</label>
          <input
            type="text"
            className="form-control"
            id="website"
            name="website"
            placeholder="website"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="perConsultantCharge">perConsultantCharge</label>
          <input
            type="number"
            className="form-control"
            id="perConsultantCharge"
            name="perConsultantCharge"
            placeholder="perConsultantCharge"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="certification">Doctor Degree</label>
          <input
            type="text"
            className="form-control"
            id="certification"
            name="certification"
            placeholder="certification"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="certification">Doctor Degree File</label>
          <input
            type="file"
            className="form-control"
            id="certification"
            name="certification"
            placeholder="certification"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="certification"> Hospital certification</label>
          <input
            type="file"
            className="form-control"
            id="certification"
            name="certification"
            placeholder="certification"
          />
        </div>
      </div>
    </>
  );
}

export default DoctorEditForm;
