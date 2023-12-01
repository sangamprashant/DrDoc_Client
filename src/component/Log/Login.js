import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { theme } from "../rawdata";

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <form action="">
            <h1 className="text-white">SignIn</h1>
            <input
              type="email"
              className="form-control mt-3"
              placeholder="Email"
            />
            <input
              type="password"
              className="form-control mt-3"
              placeholder="Password"
            />
            <input type="submit" className="form-control mt-3 btn btn-light" />
          </form>
          <p>
            Not having account? <Link to="/register">Click here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
