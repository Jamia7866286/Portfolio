import React from "react";

export const Skills = () => {
  return (
    <section id="skills" className="section MySkills">
      <div className="container px-lg-5">
        <h2 className="text-6 fw-600 mt-4 mb-4 ">My Skills</h2>
        <div className="row gx-5">
          <div className="col-md-6">
            <p className=" fw-500 text-start mb-2 text-dark">
              HTML/CSS <span className="float-end">95%</span>
            </p>
            <div className="progress progress-sm mb-4 ">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className=" fw-500 text-start mb-2 text-dark">
              SCSS/SASS/LESS <span className="float-end">95%</span>
            </p>
            <div className="progress progress-sm mb-4 ">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className=" fw-500 text-start mb-2 text-dark">
              Core Web Vitals <span className="float-end">95%</span>
            </p>
            <div className="progress progress-sm mb-4 ">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className=" fw-500 text-start mb-2 text-dark">
              Page Performance <span className="float-end">95%</span>
            </p>
            <div className="progress progress-sm mb-4 ">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className=" fw-500 text-start mb-2 text-dark">
              Web Design <span className="float-end">95%</span>
            </p>
            <div className="progress progress-sm mb-4 ">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="65"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>
          
          <div className="col-md-6">
            <p className=" fw-500 text-start mb-2 text-dark">
              JavaScript <span className="float-end">80%</span>
            </p>
            <div className="progress progress-sm mb-4 ">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className=" fw-500 text-start mb-2 text-dark">
              React JS <span className="float-end">80%</span>
            </p>
            <div className="progress progress-sm mb-4 ">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className=" fw-500 text-start mb-2 text-dark">
              Bootstrap <span className="float-end">96%</span>
            </p>
            <div className="progress progress-sm mb-4 ">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="99"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "96%" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className=" fw-500 text-start mb-2 text-dark">
              Jquery <span className="float-end">50%</span>
            </p>
            <div className="progress progress-sm mb-4 ">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className=" fw-500 text-start mb-2 text-dark">
              Typescript <span className="float-end">65%</span>
            </p>
            <div className="progress progress-sm mb-4 ">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "65%" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className=" fw-500 text-start mb-2 text-dark">
              NextJs <span className="float-end">70%</span>
            </p>
            <div className="progress progress-sm mb-4 ">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href="Naseem_Ahmad_CV.pdf"
            download=""
          >
            Download CV{" "}
            <span className="ms-1">
              <i className="fas fa-download"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
