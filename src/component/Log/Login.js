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
      if (data.success) {
        toast.success("Login successful");
        sessionStorage.setItem("token", data.token);
        setToken(data.token);
        setIsLogged(true);
      } else {
        toast.error(data?.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error(error.response.data.message || "Something wen wrong");
    }
  };

  return (
    <div
      className="container row"
      style={{
        paddingTop: "70px",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="col-md-6">
        <h1>Welcome Back</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
          quibusdam, reiciendis repellat ratione modi tenetur voluptas totam
          consectetur in labore quo alias dicta! Perferendis obcaecati delectus
          dignissimos blanditiis quam molestias.
        </p>
        <p>Welcome Back</p>
      </div>
      <div className="col-md-4">
        <div
          className="card p-5 text-white"
          style={{ backgroundColor: `${theme}` }}
        >
          <form onSubmit={handleLogin}>
            <h1 className="text-white">SignIn</h1>
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
            <hr />
            <p className="text-center">Login with Face</p>
            <button 
              type="button"
              className="form-control mt-3 btn btn-light text-lg-center"
            >
              {Icons.SensorOccupiedIcon}
            </button>
          </form>
          <p>
            Not having an account? <Link to="/register">Click here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
