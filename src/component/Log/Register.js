import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useHistory to redirect after successful login
import { theme } from "../rawdata";
import { toast } from "react-toastify";
// import { Button, Modal } from "antd";
import html2canvas from "html2canvas";
import { AuthContext } from "../../AuthContext";
import Modal from "../Reuse/Modal/Modal";
import axios from "axios";

function Register() {
  const {
    setToken,
    isLogged,
    setIsLogged,
    setModal2Open,
    setModelType,
    setModelMessgae,
  } = useContext(AuthContext);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = useState(false);
  const videoRef = React.useRef(null);
  const [capturedImage, setCapturedImage] = React.useState();
  const [modelRegister, setModelRegister] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged]);

  useEffect(() => {
    if (modelRegister) {
      startWebcam();
    }
  }, [capturedImage, modelRegister]);

  const startWebcam = async () => {
    try {
      // Access the webcam stream
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoRef.current) {
        // Set the stream as the video source
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };
  // for web cam
  const HandleWebCam = () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      setModelType("Warning");
      setModelMessgae("Please enter in all the fields");
      setModal2Open(true);
      return;
    }
    setModelRegister(true);
    // Function to start the webcam
    startWebcam(); // Start the webcam when the component mounts
    // Cleanup function to stop the webcam when the component unmounts
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  };

  const handleScreenshotButtonClick = () => {
    html2canvas(document.getElementById("screenshot-target")).then((canvas) => {
      // Convert canvas to blob
      canvas.toBlob((blob) => {
        if (blob) {
          // Display captured image
          const capturedImageUrl = URL.createObjectURL(blob);
          setCapturedImage(capturedImageUrl);
          // Send image to server
          handleRegister(blob)
        } else {
          console.error("Failed to convert canvas to blob");
        }
      }, "image/jpeg"); // Specify MIME type
    });
  };

  const handleRetake = () => {
    setCapturedImage(null);
  };

  const handleRegister = async (imgeBlob) => {
    setLoading(true);
    setModelRegister(false);
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("name", name);
      formData.append("password", password);
      formData.append("face_photo", imgeBlob, "screenshot.jpg");

      console.log("form send: ", formData);

      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();
      console.log("response:", responseData);

      console.log(responseData);

      if (responseData.success) {
        setModelType("Success");
        setModelMessgae("Registered successfully");
        setModal2Open(true);
        setEmail("");
        setName("");
        setPassword("");
      } else {
        throw new Error(responseData.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Failed to register:", error);
      setModelType("Error");
      setModelMessgae(error.message || "Something went wrong");
      setModal2Open(true);
    } finally {
      setLoading(false);
      setCapturedImage(null);
    }
  };

  return (
    <div className="container">
      <div
        className="row"
        style={{
          paddingTop: "70px",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="col-md-4">
          <div className="card p-5" style={{ backgroundColor: `${theme}` }}>
            <form>
              <h1 className="text-white">Welcome to DrDoc</h1>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control mt-3"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mt-3"
                placeholder="Email"
                required
              />
              <input
                type="password"
                name="password"
                autoComplete="false"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mt-3"
                placeholder="Password"
                required
              />
              <input
                type="button"
                className="form-control mt-3 btn btn-light"
                value={loading ? "Please wait.." : "GET STARTED"}
                disabled={loading}
                onClick={HandleWebCam}
              />
            </form>
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
            Already have an account? <br />{" "}
            <Link
              to="/signin"
              className="btn text-white"
              style={{ backgroundColor: theme }}
            >
              Continue LogIn
            </Link>
          </p>
        </div>
      </div>
      <Modal isOpen={modelRegister} onClose={() => setModelRegister(false)}>
        <>
          <h2>Webcam Scanner</h2>
          {capturedImage ? (
            <img src={capturedImage} alt="" width={400} />
          ) : (
            <video ref={videoRef} autoPlay playsInline id="screenshot-target" width={400}/>
          )}
          <div className="d-flex justify-content-around mt-2">
            <button
              key="3"
              className="btn btn-success m-1"
              onClick={handleScreenshotButtonClick}
            >
              ENROLE
            </button>

            <button
              key="4"
              className="btn btn-danger m-1"
              onClick={() => setModelRegister(false)}
            >
              CANCEL
            </button>
          </div>
        </>
      </Modal>
    </div>
  );
}

export default Register;
