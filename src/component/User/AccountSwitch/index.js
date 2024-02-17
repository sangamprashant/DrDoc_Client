import React, { useEffect, useState } from "react";
import Container from "../../Container/Container";
import Heading from "../reuse/Heading";
import { BankEditForm, DoctorEditForm } from "../reuse/EditProfileForms";
import DeliveryEditForm from "../reuse/EditProfileForms/DeliveryEditForm";
import SellerEditForm from "../reuse/EditProfileForms/SellerEditForm";
import { AuthContext } from "../../../AuthContext";

function AccountSwitch() {
  const { token, LoggedUserData, setLoggedUserData } =
    React.useContext(AuthContext);
  const [query, setQuery] = useState("");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const queryString = queryParams.get("query");
    setQuery(queryString);
  }, []);

  React.useEffect(() => {
    setUserData(JSON.parse(JSON.stringify(LoggedUserData)));
  }, [LoggedUserData]);

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
    </Container>
  );
}

export default AccountSwitch;
