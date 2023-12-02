import React, { useEffect } from "react";
import { ContactInfo, theme } from "../rawdata";
import "./Contact.css";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="container"
      style={{
        paddingTop: "70px",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="row shadow-lg rounded-3">
        <form className="col-md-7">
          <div className="p-4">
            <h5>Send us a Message</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              ex a facere,
            </p>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
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
                ></textarea>
              </div>
              <div className="col-md-6 mt-3">
                {/* <p className="text-danger">failed to send</p> */}
                {/* <p className="text-success">Message send...</p> */}
              </div>
              <div className="col-md-6 mt-3">
                <input
                  type="submit"
                  className="form-control btn btn-primary"
                  value="Send"
                  style={{ backgroundColor: theme }}
                />
              </div>
            </div>
          </div>
        </form>
        <div className="col-md-5 contact-image p-5">
          {ContactInfo.map((info, index) => (
            <div key={index}>
              <h5 className="">{info.title}</h5>
              <p className={info.className}>{info.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
