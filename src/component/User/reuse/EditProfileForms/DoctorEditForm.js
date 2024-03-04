import React from "react";
import { storage } from "../../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function DoctorEditForm({ userData, setUserData, loading, setLoading }) {
  const [degreeFile, setDegreeFile] = React.useState(null);

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

  const handleDegreeFileChange = async (e) => {
    const file = e.target.files[0];
    let link;
    setDegreeFile(file);
    setLoading(true);
    link = await handleUploadToFireBase(file);
    setLoading(false);
    setUserData((prev) => ({
      ...prev,
      hospital: {
        ...prev.hospital,
        doctorDegreeFile: link,
      },
    }));
    console.log("link is:", link);
  };

  const handleImageFilesChange = async (e) => {
    const files = e.target.files;
    const urls = [];
    setLoading(true);
    for (let file of files) {
      const url = await handleUploadToFireBase(file);
      if (url) {
        urls.push(url);
      }
    }
    setUserData((prev) => ({
      ...prev,
      hospital: {
        ...prev.hospital,
        images: [...prev.hospital.images, ...urls],
      },
    }));
    console.log("images links", urls);
    setLoading(false);
  };

  const handleUploadToFireBase = async (selectImage) => {
    try {
      const fileRef = ref(storage, `DrDoc/${Date.now() + selectImage.name}`);
      await uploadBytes(fileRef, selectImage);
      const downloadURL = await getDownloadURL(fileRef);
      console.log(downloadURL);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading file: ", error);
      return null;
    }
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
                src={userData?.hospital?.doctorDegreeFile}
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
        <div className="col-md-6">
          <label className="mt-3" htmlFor="imageFiles">
            Hospital Images Preview
          </label>
          <div className=" d-flex gap-3 flex-wrap  bg-secondary-subtle p-2 rounded">
            {userData?.hospital?.images?.map((file, index) => (
              <div key={index}>
                <img
                  height={100}
                  width="100px"
                  src={file}
                  alt=""
                  className="object-fit-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorEditForm;
