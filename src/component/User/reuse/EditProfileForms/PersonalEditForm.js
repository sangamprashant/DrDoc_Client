import React from "react";

import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { UserImage } from "../../../../assets";
const { Dragger } = Upload;
const props = {
  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

function PersonalEditForm({ userData, setUserData }) {
  const [selectImage, setSelectedImage] = React.useState(null);
  const [previewImage, setPreviewImage] = React.useState(null);

  // Function to handle image selection
  const handleImageChange = (info) => {
    if (info.file.status === "done") {
      setSelectedImage(info.file.originFileObj);
      // Display image preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(info.file.originFileObj);
    }
  };

  const handlePersonalInput = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [name]: value,
      },
    }));
  };
  return (
    <>
      <h4>Personal Information </h4>
      <div className="row mb-4">
        <div className="col-md-6">
          <label htmlFor="name"  className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
            placeholder="Enter your name"
            value={userData?.personal?.name}
            onChange={handlePersonalInput}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={userData?.personal?.email}
            onChange={handlePersonalInput}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="dateOfBirth" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            id="dateOfBirth"
            name="dateOfBirth"
            value={userData?.personal?.dateOfBirth}
            onChange={handlePersonalInput}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>{" "}
          <br />
          <input
            type="radio"
            value="male"
            name="gender"
            checked={userData?.personal?.gender === "male"}
            onChange={handlePersonalInput}
          />{" "}
          Male{" "}
          <input
            type="radio"
            value="female"
            name="gender"
            checked={userData?.personal?.gender === "female"}
            onChange={handlePersonalInput}
          />{" "}
          Female
        </div>
        <div className="col-md-6">
          <label htmlFor="nationality" className="form-label">
            Nationality
          </label>
          <input
            type="text"
            className="form-control"
            id="nationality"
            name="nationality"
            placeholder="Nationality"
            value={userData?.personal?.nationality}
            onChange={handlePersonalInput}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="contactNumber" className="form-label">
            Contact number
          </label>
          <input
            type="number"
            className="form-control"
            id="contactNumber"
            name="contactNumber"
            placeholder="Contact number"
            value={userData?.personal?.contactNumber}
            onChange={handlePersonalInput}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="bloodGroup" className="form-label">
            Blood group
          </label>
          <select
            className="form-select"
            id="bloodGroup"
            name="bloodGroup"
            value={userData?.personal?.bloodGroup}
            onChange={handlePersonalInput}
          >
            <option value="">Select</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="medicalHistory" className="form-label">
            Medical history
          </label>
          <input
            type="text"
            className="form-control"
            id="medicalHistory"
            name="medicalHistory"
            placeholder="Medical history"
            value={userData?.personal?.medicalHistory}
            onChange={handlePersonalInput}
          />
        </div>
        {/* image selection and preview */}
        <div className="col-md-6">
          <label htmlFor="image" className="form-label">
            Profile picture
          </label>
          <Dragger {...props} onChange={handleImageChange} accept="image/*">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
        </div>
        <div className="col-md-6">
          <label htmlFor="image" className="form-label">
            Profile picture preview
          </label>
          <br />
          {/* Image preview */}
          <div className="d-flex justify-content-center gap-2">
            {previewImage && (
              <div className="d-flex flex-column">
                <span>Selected image</span>
                <img
                  src={previewImage}
                  alt="Profile Preview"
                  style={{ maxWidth: "150px", height: "150px" }}
                  className=" object-fit-cover"
                />
              </div>
            )}
            <div className="d-flex flex-column">
              <span>Previous image</span>
              <img
                src={UserImage}
                alt="Profile Preview"
                style={{ maxWidth: "150px", height: "150px" }}
                className=" object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalEditForm;
