import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthContext";

function Verify() {
  const { token } = useParams();
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate()
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
        setThird(true);
        setFirst(false);
        setIsLogged(true)
        setTimeout(() => {
          navigate("/");
        }, 5000);
      }
    } catch (error) {
      console.log(error);
      setErrorMsg(error.response.data.error);
      setSecond(true);
      setFirst(false);
    }
  };

  return (
    <div className="h-full w-100 d-flex justify-content-center align-items-center">
      {first && (
        <div className="card shadow-lg p-5 text-primary">
          <h1>Please wait verifying</h1>
        </div>
      )}
      {second && (
        <div className="card shadow-lg p-5 text-danger">
          <h2>{errorMsg ? errorMsg : "verification failed"}</h2>
        </div>
      )}
      {third && (
        <div className="card shadow-lg p-5">
          <h1 className="text-success">verification done</h1>
          <p>Redirecting to the profile page</p>
        </div>
      )}
    </div>
  );
}

export default Verify;
