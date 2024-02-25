import React, { useEffect, useState } from "react";
import Container from "../../Container/Container";
import Heading from "../reuse/Heading";
import { BankEditForm, DoctorEditForm } from "../reuse/EditProfileForms";
import DeliveryEditForm from "../reuse/EditProfileForms/DeliveryEditForm";
import SellerEditForm from "../reuse/EditProfileForms/SellerEditForm";
import { AuthContext } from "../../../AuthContext";
import { toast } from "react-toastify";

function AccountSwitch() {
  const { token, LoggedUserData, setLoggedUserData } =
    React.useContext(AuthContext);
  const [query, setQuery] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading ,setLoading] = React.useState(false)

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const queryString = queryParams.get("query");
    setQuery(queryString);
  }, []);

  React.useEffect(() => {
    setUserData(JSON.parse(JSON.stringify(LoggedUserData)));
  }, [LoggedUserData]);

  const handleApply = async (e) => {
    e.preventDefault();
    let isValid = true;
  
    if (query === "doctor") {
      const doctorFields = [
        "bankAccount",
        "accountHolderName",
        "ifcCode",
        "branch",
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
        "images",
      ];
      isValid = doctorFields.every(field => userData.hospital[field] !== undefined && userData.hospital[field] !== null && (typeof userData.hospital[field] !== 'number' || !isNaN(userData.hospital[field])));
    } else if (query === "delivery") {
      const deliveryFields = [
        "bankAccount",
        "accountHolderName",
        "ifcCode",
        "branch",
        "vehicleType",
        "vehicleNumber",
        "experienceYears",
        "deliveryAreas",
        "licenseNumber",
        "licenseExpiryDate",
        "vehicleModel",
        "vehicleCapacity",
      ];
      isValid = deliveryFields.every(field => userData.delivery[field] !== undefined && userData.delivery[field] !== null && (typeof userData.delivery[field] !== 'number' || !isNaN(userData.delivery[field])));
    } else if (query === "seller") {
      const sellerFields = [
        "bankAccount",
        "accountHolderName",
        "ifcCode",
        "branch",
        "storeName",
        "location",
        "ratings",
        "openingHours",
        "closingHours",
        "images",
      ];
      isValid = sellerFields.every(field => userData.store[field] !== undefined && userData.store[field] !== null && (typeof userData.store[field] !== 'number' || !isNaN(userData.store[field])));
    }

    console.log(userData)
  
    if (!isValid) {
      toast.error("Some fields are missing or invalid.");
      return;
    }

    if (query === "doctor") {
      toast.success("Doctor");
    } else if (query === "delivery") {
      toast.success("Delivery");
    } else if (query === "seller") {
      toast.success("Seller");
    }
  };
  

  return (
    <Container>
      <Heading title={`Apply for ${query}`} />
      <hr />
      <BankEditForm userData={userData} setUserData={setUserData} />
      {query === "doctor" ? (
        <DoctorEditForm userData={userData} setUserData={setUserData} />
      ) : query === "delivery" ? (
        <DeliveryEditForm userData={userData} setUserData={setUserData} />
      ) : query === "seller" ? (
        <SellerEditForm userData={userData} setUserData={setUserData} />
      ) : null}
      <div className="d-flex justify-content-end mt-2">
        <button className="btn btn-primary" onClick={handleApply}>Apply</button>
      </div>
    </Container>
  );
}

export default AccountSwitch;
