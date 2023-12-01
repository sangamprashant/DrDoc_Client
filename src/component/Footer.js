import React from "react";
import { Link } from "react-router-dom";
import { FooterData, theme } from "./rawdata";

function Footer() {
  return (
    <footer className={`text-white py-5 mt-5`} style={{backgroundColor:theme}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5>{FooterData.About.title}</h5>
            <p>{FooterData.About.description}</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5>{FooterData.QuickLink.title}</h5>
            <ul className="list-unstyled">
              {FooterData.QuickLink.links.map((links) => (
                <li>
                  <Link className="btn btn-dark" to={links.link}>
                    {links.lable}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>{FooterData.Contact.title}</h5>
            <address>
              {FooterData.Contact.data.map((contact) => (
                <p>{contact.label}</p>
              ))}
            </address>
          </div>
        </div>
      </div>
      <hr className="bg-light" />
      <p className="text-center mb-0">&copy; DrDoc. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
