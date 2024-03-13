import React, { useState } from "react";
import Container from "../Container/Container";
import Heading from "./reuse/Heading";
import { theme } from "../rawdata";
import Modal from "../Reuse/Modal/Modal";
import html2canvas from "html2canvas";

// Get current date in the format yyyy-mm-dd
const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

function Upload() {
  // form inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  // Scanner Control and inputs
  const [isScannerOpen, setScannerOpen] = React.useState(false);
  const videoRef = React.useRef(null);
  const [loading, setLoading] = useState(false);
  const [capturedImage, setCapturedImage] = React.useState();
  const [imgeBlob, setImageBlob] = React.useState(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    const urls = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      urls.push(URL.createObjectURL(file));
    }
    setSelectedImages(urls);
  };

  const handleRetake = () => {
    setCapturedImage(null);
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
          setImageBlob(blob);
        } else {
          console.error("Failed to convert canvas to blob");
        }
      }, "image/jpeg"); // Specify MIME type
    });
  };

  React.useEffect(() => {
    if (isScannerOpen) {
      startWebcam();
    }
  }, [capturedImage, isScannerOpen]);

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
    setScannerOpen(true);
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

  return (
    <Container className="container" style={{ marginTop: "100px" }}>
      <Heading title="Upload document" />
      <hr />
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="title">
            Title for the Report
            <sup>
              <code>*</code>
            </sup>
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Title for the Report"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="description">
            Description of the report
            <sup>
              <code>*</code>
            </sup>
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Description of the report"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="date">
            Date
            <sup>
              <code>*</code>
            </sup>
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            max={getCurrentDate()} // Set max attribute to current date
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="doctorName">Doctor's Name </label>
          <input
            type="text"
            className="form-control"
            id="doctorName"
            placeholder="Doctor's Name"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="additionalNotes">Additional Notes</label>
          <textarea
            className="form-control"
            id="additionalNotes"
            rows="3"
            placeholder="Additional Notes"
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
          ></textarea>
        </div>
        <div className="col-md-12">
          <label htmlFor="images">
            Select the Reports (Images only)
            <sup>
              <code>*</code>
            </sup>
          </label>
          <input
            type="file"
            className="form-control"
            id="images"
            multiple
            accept="image/*"
            onChange={handleFileUpload}
          />
          <h5 className="text-center">OR</h5>
          <input
            type="button"
            className="form-control btn text-white"
            value={`SCAN`}
            style={{ backgroundColor: theme }}
            onClick={HandleWebCam}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="selectedImages">Selected Reports Preview</label>
          <div className="selected-images-container d-flex flex-wrap gap-2 ">
            {selectedImages.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`selected-image-${index} `}
                width={150}
                height={150}
                className=" object-fit-contain"
              />
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn text-white" style={{ backgroundColor: theme }}>
            UPLOAD
          </button>
        </div>
      </div>
      <Modal isOpen={isScannerOpen}>
        <h1>Document scanner</h1>
        {capturedImage ? (
          <img src={capturedImage} alt="" />
        ) : (
          <video ref={videoRef} autoPlay playsInline id="screenshot-target" />
        )}
        <div className="d-flex justify-content-around mt-2">
          <button
            key="1"
            className="btn btn-primary m-1"
            onClick={handleScreenshotButtonClick}
            disabled={!capturedImage ? false : true}
          >
            CAPTURE
          </button>

          <button
            key="2"
            className="btn btn-warning m-1 text-white"
            disabled={capturedImage ? false : true}
            onClick={handleRetake}
          >
            RETAKE
          </button>
          <button
            key="3"
            className="btn btn-success m-1"
            onClick={{}}
            disabled={capturedImage ? false : true}
          >
            SCAN
          </button>
          <button
            key="4"
            className="btn btn-danger m-1"
            onClick={() => setScannerOpen(false)}
          >
            CANCEL
          </button>
        </div>
      </Modal>
    </Container>
  );
}

export default Upload;
