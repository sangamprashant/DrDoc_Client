import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useHistory to redirect after successful login
import { theme } from "../rawdata";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { AuthContext } from "../../AuthContext";

function Register() {
  const { setToken, isLogged, setIsLogged } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.password.trim()
    ) {
      return toast.info("All fields are required.");
    }
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_DATABASE_API}/common/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (data.success) {
        toast.success(data?.message);
        setIsModalOpen(true);
        sessionStorage.setItem("token", data.token);
        setToken(data.token);
        setIsLogged(true);
        setFormData({
          name: "",
          email: "",
          password: "",
        });
      } else {
        setError(data?.message || "Registration failed");
        toast.error(data?.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError("Internal server error");
      toast.error(error?.response?.data?.message || "Somethimg weng wrong");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="container"

    >
      <div className="row"       style={{
        paddingTop: "70px",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <div className="col-md-4">
          <div className="card p-5" style={{ backgroundColor: `${theme}` }}>
            <form onSubmit={handleRegister}>
              <h1 className="text-white">Welcome to DrDoc</h1>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-control mt-3"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-control mt-3"
                placeholder="Email"
                required
              />
              <input
                type="password"
                name="password"
                autoComplete="false"
                value={formData.password}
                onChange={handleInputChange}
                className="form-control mt-3"
                placeholder="Password"
                required
              />
              <input
                type="submit"
                className="form-control mt-3 btn btn-light"
                value={loading ? "Please wait.." : "GET STARTED"}
                disabled={loading}
              />
            </form>
            {error && <p className="text-white">{error}</p>}
          
          </div>
        </div>
        <div className="col-md-4">
          <h1>24/7 Access to Care</h1>
          <h5>
            We need just a few piece of information to confirm your benefits.
            Please make sure that the personal information you enter is the same
            as that on record with your health plan.
          </h5>
          <hr />
          <p className="text-muted">
              Already have an account? <br /> <Link to="/signin" className="btn text-white" style={{backgroundColor:theme}}>Continue LogIn</Link>
            </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
