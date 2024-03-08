import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { theme } from "../rawdata";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthContext";
import { BASE_API } from "../../config";
import { Icons } from "../../icons";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, isLogged, setIsLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isLogged) {
      navigate("/profile");
    }
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      return toast.info("All fields are required.");
    }
    try {
      const response = await fetch(`${BASE_API}/common/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data?.success) {
        toast.success("Login successful");
        sessionStorage.setItem("token", data?.token);
        setToken(data?.token);
        setIsLogged(true);
      } else {
        toast.error(data?.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error(error?.response?.data?.message || "Something wen wrong");
    }
  };

  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{
          paddingTop: "70px",
          height: "100vh",
        }}
      >
        <div className="col-md-4 ">
          <div
            className=" p-5 text-white rounded"
            style={{ backgroundColor: `${theme}` }}
          >
            <form onSubmit={handleLogin}>
              <h1 className="text-white">Login To Your Account.</h1>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className=" mt-3 btn btn-light text-lg-center"
                >
                  {Icons.SensorOccupiedIcon}
                </button>
              </div>
              <hr />
              <span className="text-center">
                Continue with email & password
              </span>
              <input
                type="email"
                className="form-control mt-3"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type="password"
                className="form-control mt-3"
                placeholder="Password"
                value={password}
                autoComplete="false"
                onChange={handlePasswordChange}
              />
              <input
                type="submit"
                className="form-control mt-3 btn btn-light "
                value="Sign In"
              />
            </form>
          </div>
        </div>
        <div className="col-md-4">
          <h1>New to Dr.Doc?</h1>
          <h5>
            Rx.Me provides access to high-quality conversations with{" "}
            <code>physicians</code> and <code>providers</code> in seconds. We work with your health system to develop
            virtual care solutions and address your company's healthcare
            challenges.
          </h5>
          <Link to="/register" className="btn text-white" style={{backgroundColor:theme}}>GET STARTED</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
