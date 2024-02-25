import React from "react";

function DoctorEditForm({ userData, setUserData }) {
  const [degreeFile, setDegreeFile] = React.useState(null);
  const [imageFiles, setImageFiles] = React.useState([]);


  const handleDoctorInput = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      hospital: {
        ...prev.hospital,
        [name]: value,
      },
    }));
  };

  const handleDegreeFileChange = (e) => {
    const file = e.target.files[0];
    setDegreeFile(file);
  };

  const handleImageFilesChange = (e) => {
    const files = e.target.files;
    setImageFiles(Array.from(files));
    // You can preview the selected files here if needed
  };

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
            value={userData?.hospital?.hospitalName}
            onChange={handleDoctorInput}
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
            value={userData?.hospital?.specialization}
            onChange={handleDoctorInput}
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
            value={userData?.hospital?.experienceYears}
            onChange={handleDoctorInput}
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
            value={userData?.hospital?.location}
            onChange={handleDoctorInput}
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
            value={userData?.hospital?.department}
            onChange={handleDoctorInput}
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
            value={userData?.hospital?.bedsAvailable}
            onChange={handleDoctorInput}
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
            value={userData?.hospital?.website}
            onChange={handleDoctorInput}
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
            value={userData?.hospital?.perConsultantCharge}
            onChange={handleDoctorInput}
          />
        </div>
        <hr className="mt-4" />
        <div className="col-md-6">
          <label htmlFor="certification">Doctor Degree</label>
          <input
            type="text"
            className="form-control"
            id="doctorDegree"
            name="doctorDegree"
            placeholder="doctorDegree"
            value={userData?.hospital?.doctorDegree}
            onChange={handleDoctorInput}
          />
          <label className="mt-3" htmlFor="certification">
            Doctor Degree File
          </label>
          <input
            type="file"
            className="form-control"
            id="certification"
            name="certification"
            placeholder="certification"
            accept="image/*"
            onChange={handleDegreeFileChange}
          />
        </div>
        <div className="col-md-6">
          <label className="mt-3" htmlFor="certification">
            Doctor Degree Preview
          </label>
          {degreeFile && (
            <div className="d-flex justify-content-center bg-secondary-subtle p-2 rounded">
              <img
                height={200}
                width={200}
                src={URL.createObjectURL(degreeFile)}
                alt=""
                className="object-fit-contain"
              />
            </div>
          )}
        </div>
        <hr className="mt-4" />
        <div className="col-md-6">
          <label htmlFor="images">Hospital Images</label>
          <input
            type="file"
            className="form-control"
            id="images"
            name="images"
            multiple
            accept="image/*"
            onChange={handleImageFilesChange}
          />
        </div>
        
        {/* Preview selected hospital images */}
        <div className="col-md-6">
          <label className="mt-3" htmlFor="imageFiles">
            Hospital Images Preview
          </label>
          {imageFiles.map((file, index) => (
            <div key={index} className="d-flex justify-content-center bg-secondary-subtle p-2 rounded">
              <img
                height={100}
                width={100}
                src={URL.createObjectURL(file)}
                alt=""
                className="object-fit-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DoctorEditForm;
