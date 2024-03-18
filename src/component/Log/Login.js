import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { theme } from "../rawdata";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthContext";
import { BASE_API } from "../../config";
import { Icons } from "../../icons";
import html2canvas from "html2canvas";
import Modal from "../Reuse/Modal/Modal";

function Login() {
  //login with credials
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    setToken,
    isLogged,
    setIsLogged,
    setModal2Open,
    setModelType,
    setModelMessgae,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  // login with face
  const videoRef = React.useRef(null);
  const [loading, setLoading] = useState(false);
  const [capturedImage, setCapturedImage] = React.useState();
  const [modelRegister, setModelRegister] = useState(false);

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

  const handleScreenshotButtonClick = () => {
    html2canvas(document.getElementById("screenshot-target")).then((canvas) => {
      canvas.toBlob((blob) => {
        if (blob) {
          const capturedImageUrl = URL.createObjectURL(blob);
          setCapturedImage(capturedImageUrl);
          handleRegister(blob);
        } else {
          console.error("Failed to convert canvas to blob");
        }
      }, "image/jpeg"); // Specify MIME type
    });
  };

  useEffect(() => {
    if (modelRegister) {
      startWebcam();
    }
  }, [capturedImage, modelRegister]);

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };
  // for web cam
  const HandleWebCam = () => {
    setModelRegister(true);
    startWebcam();
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  };

  const handleRegister = async (imgeBlob) => {
    setLoading(true);
    setModelRegister(false);
    try {
      const formData = new FormData();
      formData.append("face_photo", imgeBlob, "screenshot.jpg");

      console.log("form send: ", formData);

      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();
      if (responseData.success) {
        setModelType("Success");
        setModelMessgae(responseData.message);
        setModal2Open(true);
        sessionStorage.setItem("token", responseData?.token);
        setToken(responseData?.token);
        setIsLogged(true);
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
                  onClick={HandleWebCam}
                  disabled={loading}
                >
                  {Icons.SensorOccupiedIcon}
                </button>
              </div>
              <details className="mt-3">
                <summary>Continue with email & password</summary>
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
              </details>
            </form>
          </div>
        </div>
        <div className="col-md-4">
          <h1>New to Dr.Doc?</h1>
          <h5>
            Rx.Me provides access to high-quality conversations with{" "}
            <code>physicians</code> and <code>providers</code> in seconds. We
            work with your health system to develop virtual care solutions and
            address your company's healthcare challenges.
          </h5>
          <Link
            to="/register"
            className="btn text-white"
            style={{ backgroundColor: theme }}
          >
            GET STARTED
          </Link>
        </div>
      </div>
      <Modal isOpen={modelRegister} onClose={() => setModelRegister(false)}>
        <>
          <h2>Webcam Scanner</h2>
          {capturedImage ? (
            <img src={capturedImage} alt="" width={400} />
          ) : (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              id="screenshot-target"
              width={400}
            />
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

export default Login;
