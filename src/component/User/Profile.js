import { useNavigate } from "react-router-dom";
import { UserImage } from "../../assets";
import { EditIcon, FileUploadIcon } from "../ReactIcons";
import "./Profile.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext";

function Profile() {
  const navigate = useNavigate();
  const { isLogged, LoggedUserData } = useContext(AuthContext);

  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, [isLogged]);

  return (
    <div
      className="container d-flex justify-content-center"
      style={{ marginTop: "100px" }}
    >
      {LoggedUserData ? (
        <div className="profile-container shadow-lg">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Profile </h2>
            <button className="btn btn-outline-secondary">
              <EditIcon /> Edit
            </button>
          </div>
          <hr />
          <div className="profile-section row">
            <div className="col-md-4 d-flex justify-content-center">
              <img
                src={UserImage}
                alt="Profile Pic"
                width={200}
                height={200}
                className="rounded-circle object-fit-cover"
              />
            </div>
            <div className="col-md-4">
              <div className="profile-details">
                <h4>{LoggedUserData.personal.name}</h4>
                <p>{LoggedUserData.personal.email}</p>
                <p>{LoggedUserData.personal.dateOfBirth}</p>
              </div>
            </div>
            {(LoggedUserData?.address?.address ||
              LoggedUserData?.address?.city ||
              LoggedUserData?.address?.phone ||
              LoggedUserData?.address?.currentAddress ||
              LoggedUserData?.address?.pin ||
              LoggedUserData?.address?.city) && (
              <div className="col-md-4">
                <div className="profile-details">
                  <h4>Address Information</h4>
                  <p>{LoggedUserData.address.address}</p>
                  <p>{LoggedUserData.address.city}</p>
                  <p>{LoggedUserData.address.phone}</p>
                  <p>{LoggedUserData.address.currentAddress}</p>
                  <p>{LoggedUserData.address.pin}</p>
                  <p>{LoggedUserData.address.country}</p>
                </div>
              </div>
            )}
          </div>

          <div className="d-flex justify-content-between align-items-center mt-5">
            <h2>Documents & Reports</h2>
            <button
              className="btn btn-outline-secondary"
              onClick={() => navigate("/upload")}
            >
              <FileUploadIcon /> Upload
            </button>
          </div>
          <hr />
          <div className="document-image-container">
            <div className="document-image">
              <img src={UserImage} alt="Profile Pic" />
            </div>
            <div className="document-image">
              <img
                src="https://github.com/sangamprashant/sangamprashant/raw/main/profile-3d-contrib/profile-green-animate.svg"
                alt="Profile Pic"
              />
            </div>
            <div className="document-image">
              <img
                src="https://camo.githubusercontent.com/59e01572a86734010458d6fb25c2cf8d8dfafab3331af80215e8af07c150192a/68747470733a2f2f63646e2e73616e6974792e696f2f696d616765732f6f726467696b77652f70726f64756374696f6e2f613833306335313832383532653335626364306463303762393031323266303765636431356634382d373030783532352e6769663f773d37303026683d353235266175746f3d666f726d6174"
                alt="Profile Pic"
              />
            </div>
            <div className="document-image">
              <img src={UserImage} alt="Profile Pic" />
            </div>
            <div className="document-image">
              <img src={UserImage} alt="Profile Pic" />
            </div>
          </div>
        </div>
      ) : (
        <div className="spinner-border" role="status">
        </div>
      )}
    </div>
  );
}

export default Profile;
