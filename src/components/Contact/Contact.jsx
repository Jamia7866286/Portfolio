import React from "react";
import { Link } from "react-router-dom";
// import emailjs from "@emailjs/browser";   read this library

export const Contact = () => {
  return (
    <section id="contact" className="section bg-light">
      <div className="container">
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="text-24  text-uppercase fw-600 w-100 mb-0 text-light opacity-4">
            Contact
          </h2>
          <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 text-dark">
            {" "}
            Get in Touch{" "}
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
          </p>
        </div>
        <div className="row gy-5">
          <div className="order-1 order-md-0 text-center text-md-start px-lg-5">
            <h2 className="mb-3 text-5 text-uppercase ">Contact Me</h2>
            <p className="text-3 mb-4 ">
              <strong>Naseem Ahmad</strong> <br />
              New Delhi 110025{" "}
            </p>
            <p className="text-3 mb-1 ">
              <span className="text-primary text-4 me-2">
                <i className="fas fa-phone"></i>
              </span>
              {/* (91) 9654775378 */}
              <a href="tel:+919654775378">9654775378</a>
            </p>
            <p className="text-3 mb-1 ">
              <span className="text-primary text-4 me-2">
                <i className="fas fa-envelope"></i>
              </span>{" "}
              <a href="mailto:naseemahmadjmi96@gmail.com">naseemahmadjmi96@gmail.com</a>
            </p>
            <br />
            <br />
            {/* <p className="text-3 mb-1 ">
                <span className="text-primary text-4 me-2">
                  <i className="fas fa-comment"></i>
                </span>
                <a href="https://topmate.io/santosh_kumar14">Available on topmate.io</a>
            </p> */}
                 
            <h2 className="mb-3 text-5 text-uppercase ">Follow Me</h2>
            <ul className="social-icons justify-content-center justify-content-md-start ">
              <li className="social-icons-github">
                <Link
                  to="https://www.linkedin.com/in/naseem-ahmad-34a005139/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </Link>
              </li>
              <li className="social-icons-github">
                <Link
                  to="https://github.com/Jamia7866286"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
