import React, { useState } from "react";
import Container from "../Container/Container";
import Heading from "./reuse/Heading";
import { AuthContext } from "../../AuthContext";
import axios from "axios";
import { BASE_API } from "../../config";
import { toast } from "react-toastify";
import {
  AddressEditForm,
  BankEditForm,
  DoctorEditForm,
  PersonalEditForm,
} from "./reuse/EditProfileForms";
import DeliveryEditForm from "./reuse/EditProfileForms/DeliveryEditForm";
import SellerEditForm from "./reuse/EditProfileForms/SellerEditForm";

function EditProfile() {
  const { token, LoggedUserData, setLoggedUserData } =
    React.useContext(AuthContext);
  const [userData, setUserData] = React.useState(
    JSON.parse(JSON.stringify(LoggedUserData)) || null
  );
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    setUserData(JSON.parse(JSON.stringify(LoggedUserData)));
  }, [LoggedUserData]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_API}/user/user/upload`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        setLoggedUserData(response.data.user);
        toast.success(response.data.message || "Profile updated.");
      }
    } catch (error) {
      console.log("failed to udate the profile:", error);
      toast.error(error?.response?.data?.message || "Something went Wrong");
    }
  };

  return (
    <Container>
      <Heading title="Edit profile" />
      <hr />
      <form onSubmit={handleUpdate}>
        <PersonalEditForm userData={userData} setUserData={setUserData} />
        <AddressEditForm userData={userData} setUserData={setUserData} />
        {!LoggedUserData?.isUser && <BankEditForm userData={userData} setUserData={setUserData} />}
        {LoggedUserData?.isDoctor && <DoctorEditForm userData={userData} setUserData={setUserData} />}
        {LoggedUserData?.isDelivery && <DeliveryEditForm userData={userData} setUserData={setUserData}/>}
        {LoggedUserData?.isSeller && <SellerEditForm userData={userData} setUserData={setUserData}/>}
        <button type="submit" className="btn btn-primary">
          {isLoading ? "Please wait.." : "Update profile"}
        </button>
      </form>
    </Container>
  );
}

export default EditProfile;
