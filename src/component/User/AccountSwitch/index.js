import React, { useEffect, useState } from "react";
import Container from "../../Container/Container";
import Heading from "../reuse/Heading";
import { BankEditForm, DoctorEditForm } from "../reuse/EditProfileForms";
import DeliveryEditForm from "../reuse/EditProfileForms/DeliveryEditForm";
import SellerEditForm from "../reuse/EditProfileForms/SellerEditForm";
import { AuthContext } from "../../../AuthContext";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_API } from "../../../config";
import { useNavigate } from "react-router-dom";

function AccountSwitch() {
  const { token, LoggedUserData, setLoggedUserData } =
    React.useContext(AuthContext);
  const [query, setQuery] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const queryString = queryParams.get("query");
    setQuery(queryString);
  }, [window.location.search, navigation]);

  React.useEffect(() => {
    setUserData(JSON.parse(JSON.stringify(LoggedUserData)));
  }, [LoggedUserData]);

  const handleApply = async (e) => {
    e.preventDefault();
    let isValid = true;

    if (
      !userData?.bank?.bankAccount ||
      !userData?.bank?.accountHolderName ||
      !userData?.bank?.ifcCode ||
      !userData?.bank?.branch
    ) {
      return toast.warning("Bank details are missing.");
    }

    if (query === "doctor") {
      const doctorFields = [
        "hospitalName",
        "specialization",
        "experienceYears",
        "location",
        "department",
        "bedsAvailable",
        "website",
        "doctorDegree",
        "doctorDegreeFile",
        "perConsultantCharge",
        "images", // Check if it's an array and not empty
      ];
      isValid = doctorFields.every(
        (field) =>
          userData?.hospital[field] !== undefined &&
          userData?.hospital[field] !== null &&
          userData?.hospital[field] !== "" &&
          (typeof userData?.hospital[field] !== "number" ||
            !isNaN(userData?.hospital[field])) &&
          (Array.isArray(userData?.hospital[field])
            ? userData?.hospital[field].length > 0
            : true) // Check if it's an array and not empty
      );
    }

    if (!isValid) {
      toast.error("Some fields are missing or invalid.");
      return;
    }
    try {
      const response = await axios.put(
        `${BASE_API}/user/user/update`,
        {
          userData: userData,
          query: query,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setLoggedUserData(response.data.user);
      }
      console.log(response.data.user)
    } catch (error) {
      console.error("Error updating user data:", error);
      toast.error("Failed to update user data. Please try again later.");
    }
  };

  return (
    <Container>
      <Heading title={`Apply for ${query}`} />
      <hr />
      <BankEditForm
        userData={userData}
        setUserData={setUserData}
        loading={loading}
        setLoading={setLoading}
      />
      {query === "doctor" && (
        <DoctorEditForm
          userData={userData}
          setUserData={setUserData}
          loading={loading}
          setLoading={setLoading}
        />
      )}
      <div className="d-flex justify-content-end mt-2">
        <button
          disabled={loading}
          className="btn btn-primary"
          onClick={handleApply}
        >
          {loading ? "Please wait.." : "Apply"}
        </button>
      </div>
    </Container>
  );
}

export default AccountSwitch;
