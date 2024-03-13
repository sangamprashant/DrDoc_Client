import React from "react";
import { storage } from "../../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { UserImage } from "../../../../assets";

function PersonalEditForm({ userData, setUserData, setIsLoading }) {
  const [selectImage, setSelectedImage] = React.useState(null);
  const [previewImage, setPreviewImage] = React.useState(null);

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0]; // Get the file directly from the event
    setSelectedImage(imageFile);
    console.log(e)
    // Display image preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewImage(e.target.result);
    };
    reader.readAsDataURL(imageFile);
    uploadImage(imageFile); // Pass the file to uploadImage
  };

  const uploadImage = (selectImage) => {
    setIsLoading(true);
    const fileRef = ref(storage, `drdoc/${Date.now() + selectImage.name}`);
    
    // Upload the image to Firebase Storage
    uploadBytes(fileRef, selectImage).then((snapshot) => {
      // Get the download URL of the uploaded image
      getDownloadURL(snapshot.ref).then((url) => {
        // Update user data with the image URL
        setUserData((prev) => ({
          ...prev,
          personal: {
            ...prev.personal,
            image: url, // Set the image URL here
          },
        }));
        setIsLoading(false);
      });
    });
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
          </label> <br />
          <input type="file"  onChange={handleImageChange} accept="image/*"/>
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
                src={userData?.personal?.image || UserImage}
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
