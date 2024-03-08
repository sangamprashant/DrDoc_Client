import { Link, useNavigate } from "react-router-dom";
import { UploadImage, UserImage } from "../../assets";
import { EditIcon, FileUploadIcon } from "../ReactIcons";
import "./Profile.css";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthContext";
import Container from "../Container/Container";
import { Menu, Rate, Tabs } from "antd";
import { TableRow } from "./ProfileData";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import ProfileDocCard from "./reuse/ProfileDocCard";

function Profile() {
  const navigate = useNavigate();
  const { isLogged, LoggedUserData } = useContext(AuthContext);
  let userRole = "user";

  const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };

  useEffect(() => {
    window.scroll(0, 0);
    if (!isLogged) {
      navigate("/");
    }
  }, [isLogged, navigate]);

  useEffect(() => {
    if (LoggedUserData) {
      userRole = LoggedUserData.isDoctor
        ? "doctor"
        : LoggedUserData.isSeller
        ? "seller"
        : LoggedUserData.isDelivery
        ? "delivery"
        : "user";
    }
  }, [LoggedUserData]);

  // Function to count non-empty content values
  const countContentValues = () => {
    let count = 0;
    for (const key in LoggedUserData?.personal) {
      if (LoggedUserData?.personal[key]) {
        count++;
      }
    }
    return count;
  };

  useEffect(() => {
    console.log("Number of content values:", countContentValues());
  }, [LoggedUserData]);

  const items = [
    {
      key: "1",
      label: "Documents & Reports",
      children: (
        <div>
          <div className="document-image-container">
            <ProfileDocCard />
            <ProfileDocCard />
            <ProfileDocCard />
            <ProfileDocCard />
            <ProfileDocCard />
            <ProfileDocCard />
            <ProfileDocCard />
            <ProfileDocCard />
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Personal details",
      children: (
        <div className="">
          <h4>Personal details</h4>
          <table className="profile-details table">
            <tbody>
              <TableRow title="Name" content={LoggedUserData?.personal?.name} />
              <TableRow
                title="Email"
                content={LoggedUserData?.personal?.email}
              />
              <TableRow
                title="Date of Birth"
                content={LoggedUserData?.personal?.dateOfBirth}
              />
              <TableRow
                title="Gender"
                content={LoggedUserData?.personal?.gender}
              />
              <TableRow
                title="Nationality"
                content={LoggedUserData?.personal?.nationality}
              />
              <TableRow
                title="Contact Number"
                content={LoggedUserData?.personal?.contactNumber}
              />
              <TableRow
                title="Blood Group"
                content={LoggedUserData?.personal?.bloodGroup}
              />
              <TableRow
                title="Medical History"
                content={LoggedUserData?.personal?.medicalHistory}
              />
            </tbody>
          </table>
        </div>
      ),
    },
    {
      key: "3",
      label: "Address Information",
      children: (
        <div className="">
          <div className="profile-details">
            <h4>Address Information</h4>
            <table className="table">
              <tbody>
                <TableRow
                  title="Address"
                  content={LoggedUserData?.address?.address}
                />
                <TableRow
                  title="City"
                  content={LoggedUserData?.address?.city}
                />
                <TableRow
                  title="Current Address"
                  content={LoggedUserData?.address?.currentAddress}
                />
                <TableRow title="Pin" content={LoggedUserData?.address?.pin} />
                <TableRow
                  title="Country"
                  content={LoggedUserData?.address?.country}
                />
                <TableRow
                  title="Landmark"
                  content={LoggedUserData?.address?.landmark}
                />
                <TableRow
                  title="State"
                  content={LoggedUserData?.address?.state}
                />
                <TableRow
                  title="Latitude"
                  content={LoggedUserData?.address?.latitude}
                />
                <TableRow
                  title="Longitude"
                  content={LoggedUserData?.address?.longitude}
                />
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {LoggedUserData ? (
        <Container className="profile-container ">
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
            <div className="col-md-8">
              <h4>{LoggedUserData?.personal?.name}</h4>
              <h5>{LoggedUserData?.personal?.email}</h5>
              <h5>{LoggedUserData?.personal?.gender}</h5>
              <h5>{LoggedUserData?.personal?.nationality}</h5>
              <h5>{LoggedUserData?.personal?.bloodGroup}</h5>
              <Rate allowHalf defaultValue={2.5} />
              <Rate
                defaultValue={3}
                character={({ index = 0 }) => customIcons[index + 1]}
              />
              <div className="d-flex flex-wrap gap-2"></div>
            </div>
          </div>
          <Tabs centered defaultActiveKey="1" items={items} />
        </Container>
      ) : (
        <div className="spinner-border" role="status"></div>
      )}
    </>
  );
}

export default Profile;
