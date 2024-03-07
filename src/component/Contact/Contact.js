import React, { useEffect } from "react";
import { ContactInfo, theme } from "../rawdata";
import "./Contact.css";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="mt-3">
      <div className="container">
        <div className="row shadow-lg rounded-3">
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
                <div className="col-md-6 mt-3 d-flex justify-content-end">
                  <button
                    type="submit"
                    className=" btn text-white"
                    style={{ backgroundColor: theme }}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
