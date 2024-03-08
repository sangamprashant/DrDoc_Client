import React, { useEffect } from "react";
import { theme } from "../rawdata";
import "./Contact.css";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_API } from "../../config";
import { AuthContext } from "../../AuthContext";

function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const { setModal2Open, setModelType, setModelMessgae } =
    React.useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleForm = async (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setModelMessgae("All fields are required.");
      setModelType("Warning")
      setModal2Open(true);
      return;
    }
    if (!emailPattern.test(trimmedEmail)) {
       setModelMessgae("Please enter a valid email address.");
       setModelType("Warning")
       setModal2Open(true);
       return
    }

    setLoading(true);
    const reqBody = {
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
    };

    try {
      const response = await axios.post(
        `${BASE_API}/user/contact/send`,
        reqBody
      );
      if (response.data.success) {
        setEmail("");
        setMessage("");
        setName("");
        setModelMessgae(response.data.message || "Contact form submitted successfully");
        setModelType("Success")
        setModal2Open(true);
      }
    } catch (error) {
      console.log("Failed to submit contact form:", error);
      setModelMessgae(error.response.data.message || "Failed to submit contact form");
      setModelType("Error")
      setModal2Open(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-3">
      <div className="container ">
        <form className="row shadow-lg rounded-3 py-5">
          <form className="col-md-12">
            <div className="p-4">
              <h5>Send us a Message</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione ex a facere,
              </p>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="col-md-12 mt-2">
                  <label htmlFor="">Your Message</label>
                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    id=""
                    className="form-control"
                    cols="30"
                    rows="5"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                </div>
                <div className="col-md-12 mt-3 d-flex justify-content-end">
                  <button
                    type="button"
                    className=" btn text-white px-4"
                    style={{ backgroundColor: theme }}
                    onClick={handleForm}
                    disabled={loading}
                  >
                    {loading ? "PLEASE WAIT.." : "SEND MESSAGE"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </form>
      </div>
    </section>
  );
}

export default Contact;
