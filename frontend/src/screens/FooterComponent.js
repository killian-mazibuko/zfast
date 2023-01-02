import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
              89 Marydown
              <br />
              Hogerty Hill
              <br />
              Harare
              <br />
              Zimbabwe
              <br />
              <i className="fa fa-phone fa-lg"></i>: +263782476716
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:info@zifast.co.zw">info@zifast.co.zw</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-facebook"
                href="https://www.facebook.com/ZiFast-103785691691149"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="https://www.linkedin.com/company/zifast/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube"></i>
              </a>
              <a className="btn btn-social-icon" href="mailto:">
                <i className="fa fa-envelope-o"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2021 ZiFast Software</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
