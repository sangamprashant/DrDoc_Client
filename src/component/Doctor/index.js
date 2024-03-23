import React from "react";
import Container from "../Container/Container";
import { useParams } from "react-router-dom";
import { UserImage } from "../../assets";
import { Image } from "antd";
import "./DoctorProfile.css";
import axios from "axios";
import { BASE_API } from "../../config";
import { AuthContext } from "../../AuthContext";

function DoctorProfile() {
  const { id } = useParams();
  const [userSearched, setUserSearched] = React.useState(null);
  const [isAlready, setIsAlready] = React.useState(false);
  const {
    token,
    setModal2Open,
    setModelType,
    setModelMessgae,
    LoggedUserData,
    setLoggedUserData,
  } = React.useContext(AuthContext);

  React.useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  React.useEffect(() => {
    if (LoggedUserData && userSearched) {
      const doctorId = String(userSearched._id);
      const clientId = String(LoggedUserData._id);
      console.log("doctorId", doctorId);
      console.log("clientId", clientId);
      const isDoctorAdded = LoggedUserData.my_doctors.includes(doctorId);
      console.log("isDoctorAdded", isDoctorAdded);
      const isClientAdded = userSearched.my_clients.includes(clientId);
      console.log("isClientAdded", isClientAdded);

      console.log(isDoctorAdded && isClientAdded);
      setIsAlready(isDoctorAdded && isClientAdded);
    }
  }, [LoggedUserData, userSearched]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_API}/common/profile/${id}`);
      if (response.data.success) {
        setUserSearched(response.data.user);
      }
    } catch (error) {
      console.log("failed to fetch the doctor:", error);
    } finally {
    }
  };

  const addAsMyDoctor = async () => {
    try {
      const response = await axios.get(`${BASE_API}/common/add-doctor/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.success) {
        setModelMessgae(response.data.message || "Doctor addes successfully");
        setModelType("Success");
        setModal2Open(true);
        setLoggedUserData(response.data.client);
        setUserSearched(response.data.doctor);
      }
    } catch (error) {
      console.log("failed to add doctor:", error);
      setModelMessgae(error.response.data.message || "Something went wrong");
      setModelType("Error");
      setModal2Open(true);
    } finally {
    }
  };
  const removeAsMyDoctor = async () => {
    try {
      const response = await axios.get(`${BASE_API}/common/remove-doctor/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.success) {
        setModelMessgae(response.data.message || "Doctor removed successfully");
        setModelType("Success");
        setModal2Open(true);
        setLoggedUserData(response.data.client);
        setUserSearched(response.data.doctor);
      }
    } catch (error) {
      console.log("failed to remove doctor:", error);
      setModelMessgae(error.response.data.message || "Something went wrong");
      setModelType("Error");
      setModal2Open(true);
    } finally {
    }
  };

  return (
    <Container>
      {userSearched && (
        <div className="" style={{ paddingTop: "100px" }}>
          <div className="profile-card js-profile-card shadow-lg">
            <div className="profile-card__img">
              <img
                src={userSearched?.personal?.image || UserImage}
                alt="profile card"
              />
            </div>

            <div className="profile-card__cnt js-profile-cnt">
              <div className="profile-card__name">{userSearched.name}</div>
              <div className="profile-card__txt">
                Specialization in{" "}
                <strong>{userSearched?.hospital?.specialization}</strong>
              </div>
              <div className="profile-card-loc">
                <span className="profile-card-loc__icon">
                  {/* <LocationOnIcon /> */}
                </span>

                <span className="profile-card-loc__txt">
                  {userSearched?.hospital?.hospitalName},{" "}
                  {userSearched?.hospital?.location}
                </span>
              </div>

              <div className="profile-card-inf">
                <div className="profile-card-inf__item">
                  <div className="profile-card-inf__title">
                    {userSearched?.hospital?.experienceYears}
                  </div>
                  <div className="profile-card-inf__txt">Experience Years</div>
                </div>

                <div className="profile-card-inf__item">
                  <div className="profile-card-inf__title">
                    {userSearched?.hospital?.bedsAvailable}
                  </div>
                  <div className="profile-card-inf__txt">Beds Available</div>
                </div>

                <div className="profile-card-inf__item">
                  <div className="profile-card-inf__title">
                    {userSearched?.hospital?.perConsultantCharge}
                  </div>
                  <div className="profile-card-inf__txt">
                    Per Consultant Charge
                  </div>
                </div>

                <div className="profile-card-inf__item">
                  <div className="profile-card-inf__title">
                    {userSearched?.hospital?.doctorDegree}
                  </div>
                  <div className="profile-card-inf__txt">Degree</div>
                </div>
              </div>

              <div className="profile-card-social">
                <a
                  href={`mailto:${userSearched?.email}`}
                  className="profile-card-social__item facebook"
                  target="_blank"
                >
                  <span className="icon-font">{/* <EmailIcon /> */}</span>
                </a>

                <a
                  href={userSearched?.hospital?.website}
                  className="profile-card-social__item instagram"
                  target="_blank"
                >
                  <span className="icon-font">{/* <PublicIcon /> */}</span>
                </a>
                <a
                  href={userSearched?.personal?.contactNumber}
                  className="profile-card-social__item link"
                  target="_blank"
                >
                  <span className="icon-font">{/* <LocalPhoneIcon /> */}</span>
                </a>
              </div>

              <div className="profile-card-ctr">
                <button className="profile-card__button button--blue js-message-btn">
                  Message
                </button>
                {isAlready ? (
                  <button
                    className="profile-card__button button--orange"
                    onClick={removeAsMyDoctor}
                  >
                    Remove My Doctor
                  </button>
                ) : (
                  <button
                    className="profile-card__button button--orange"
                    onClick={addAsMyDoctor}
                  >
                    Add My Doctor
                  </button>
                )}
              </div>

              {/* other details */}
              <hr />
              <div className=" text-start">
                <details className="mt-3">
                  <summary>Hospital's images</summary>
                  <div className="d-flex flex-wrap gap-2">
                    {userSearched?.hospital?.images?.map((data, index) => (
                      <Image
                        key={index}
                        src={data}
                        alt=""
                        height={100}
                        width={100}
                      />
                    ))}
                  </div>
                </details>
                <details className="mt-3">
                  <summary>Doctor's degree</summary>
                  <div className="d-flex flex-wrap gap-2">
                    <Image
                      src={userSearched?.hospital?.doctorDegreeFile}
                      alt=""
                      height={100}
                      width={100}
                    />
                  </div>
                </details>
                <details className="mt-3">
                  <summary>Address</summary>
                  <p>{userSearched?.address?.address}</p>
                  <p>
                    {userSearched?.address?.city} {userSearched?.address?.state}{" "}
                    {userSearched?.address?.country}
                  </p>
                  <p>
                    {userSearched?.address?.latitude
                      ? `"Latitude:"${userSearched?.address?.latitude}`
                      : ""}
                    {userSearched?.address?.longitude
                      ? `"Longitude:"${userSearched?.address?.longitude}`
                      : ""}
                  </p>
                </details>
              </div>

              {/* <form className="profile-card-form">
                <div className="profile-card-form__container">
                  <textarea placeholder="Say something..."></textarea>
                </div>

                <div className="profile-card-form__bottom">
                  <button className="profile-card__button button--blue js-message-close">
                    Send
                  </button>

                  <button className="profile-card__button button--gray js-message-close">
                    Cancel
                  </button>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

export default DoctorProfile;
