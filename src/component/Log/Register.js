import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useHistory to redirect after successful login
import { theme } from "../rawdata";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { AuthContext } from "../../AuthContext";

function Register() {
  const {setToken, isLogged , setIsLogged } = useContext(AuthContext);
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
        sessionStorage.setItem("token", data.token)
        setToken(data.token)
        setIsLogged(true)
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
        <h1>Welcome to DrDoc</h1>
        <h3>
          An integrated platform to save your medical records and easily access
          whenever you want.
        </h3>
      </div>
      <div className="col-md-4">
        <div className="card p-5" style={{ backgroundColor: `${theme}` }}>
          <form onSubmit={handleRegister}>
            <h1 className="text-white">Register</h1>
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
              value={loading ? "Please wait.." : "Register"}
              disabled={loading}
            />
          </form>
          {error && <p className="text-white">{error}</p>}
          <p className="text-white">
            Already have an account? <Link to="/signin">Click here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
