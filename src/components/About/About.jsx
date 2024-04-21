import React from "react";

export const About = ({ScrollRef}) => {
  return (
    <section id="about" className="section " ref={ScrollRef}>
      <div className="container px-lg-5">
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="text-24  text-uppercase fw-600 w-100 mb-0 text-light opacity-4">
            About Me
          </h2>
          <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 text-dark">
            Know Me More{" "}
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
          </p>
        </div>
        <div className="row gy-5">
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2 className="text-7 fw-600 mb-3 ">
              I'm <span className="text-primary">Naseem Ahmad,</span> a Web
              Developer{" "}
            </h2>
            <p>
              <strong>Front End-UI Developer</strong>
            </p>
            <p className="">
              Holding a Bachelor of engineering (B.E) degree with 7 years of extensive experience
              in UI development, my area of expertise includes HTML, CSS, JavaScript/Jquery, ReactJS, Tweeter Bootstrap,
              SCSS/SASS/LESS, Ajax, Json, Web Accessibility, Responsive Design, HTMl email template, NextJs, Redux Toolkit and
              Core Web Vitals(CWV).
              <br />
              <strong> Specialties:</strong> Core Web Vitals, Front end
              development, ReactJS, HTML, CSS, Object-Oriented
              Javascript/Jquery, and Responsive Design.
            </p>
          </div>
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul className="list-style-2 ">
                <li>
                  <span className="fw-600 me-2">Name:</span>Naseem Ahmad
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:naseemahmadjmi96@gmail.com">
                    naseemahmadjmi96@gmail.com
                  </a>
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Uttar Pradesh (U.P), 246725
                </li>
              </ul>
              <a
                href="Naseem_Ahmad_CV.pdf"
                download=""
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
