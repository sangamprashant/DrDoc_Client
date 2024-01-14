import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import Spinner from "./Spinner"; // Import a loading spinner component if available

function Verify() {
  const { token } = useParams();
  const [verificationPhase, setVerificationPhase] = useState("pending"); // 'pending', 'success', 'error'
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const { setIsLogged } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      VerifyToken();
    }
  }, [token]);

  const VerifyToken = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DATABASE_API}/verify/${token}`
      );

      if (response.status === 200) {
        sessionStorage.setItem("token", response.data.token);
        setIsLogged(true);
        setVerificationPhase("success");

        // Redirect after a short delay
        setTimeout(() => {
          navigate("/");
        }, 5000);
      }
    } catch (error) {
      console.log(error);
      setErrorMsg(error.response?.data?.error || "Unexpected error");
      setVerificationPhase("error");
    }
  };

  return (
    <div className="h-full w-100 d-flex justify-content-center align-items-center">
      {verificationPhase === "pending" && (
        <div className="card shadow-lg p-5 text-primary">
          <Spinner /> {/* Use a loading spinner or animation here */}
          <h1>Please wait verifying</h1>
        </div>
      )}
      {verificationPhase === "error" && (
        <div className="card shadow-lg p-5 text-danger">
          <h2>{errorMsg ? errorMsg : "Verification failed"}</h2>
        </div>
      )}
      {verificationPhase === "success" && (
        <div className="card shadow-lg p-5">
          <h1 className="text-success">Verification done</h1>
          <p>Redirecting to the profile page</p>
        </div>
      )}
    </div>
  );
}

export default Verify;
