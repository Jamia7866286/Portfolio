import React from "react";

export const Resume = () => {
  return (
    <section id="resume" className="section ">
      <div className="container px-lg-5">
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="text-24  text-uppercase fw-600 w-100 mb-0 text-light opacity-4">
            Summary
          </h2>
          <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 text-dark">
            {" "}
            Resume{" "}
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
          </p>
        </div>
        <div className="row gx-5">
        <div className="col-md-6">
            <h2 className="text-6 fw-600 mb-4 ">My Experience</h2>
            <div className="bg-white  rounded p-4 mb-4 bg-white border">
              <p className="badge bg-primary text-2 fw-400">
                2023 - Working....
              </p>
              <h3 className="text-5 ">UI Developer</h3>
              <p className="text-danger">Quara Digital (AI) Pvt. Ltd</p>
              <p className="mb-0 ">
              Responsible for designing and developing user interfaces for web applications. Utilizing skills in HTML5, CSS3, JavaScript, ReactJs, SASS/SCSS, Redux Toolkit, MUI ReactJs, NextJs, TypeScript, and Bootstrap. Creating visually appealing and responsive UIs to enhance user experience. Collaborating with cross-functional teams to gather requirements and design solutions. Converting Adobe XD, PSD, and Figma UX files to HTML code with pixel-perfect precision. Ensuring code quality and adherence to core web vitals for high-quality.
              </p>
            </div>
            <div className="bg-white  rounded p-4 mb-4 bg-white border">
              <p className="badge bg-primary text-2 fw-400">2021 - 2023</p>
              <h3 className="text-5 ">UI Developer</h3>
              <p className="text-danger">Tykeinvest Pvt. Ltd</p>
              <p className="mb-0 ">
                I was developing user interface for web based products/sites
                using HTML, CSS, SCSS/SASS/LESS, ReactJs, JS, MUI ReactJs, Remix, Typescript,NextJs, Fully Responsive UI and HTML Email Template using MJML.
              </p>
            </div>
            <div className="bg-white  rounded p-4 mb-4 bg-white border">
              <p className="badge bg-primary text-2 fw-400">2019 - 2021</p>
              <h3 className="text-5 ">UI Developer</h3>
              <p className="text-danger">SurveySensum Pvt. Ltd</p>
              <p className="mb-0 ">
                I was working there as a UI Developer and involve in
                creating responsive Layouts for the products, Produce quality
                and efficient code making full use of JQuery, HTML, JavaScript, CSS, SCSS/SASS/LESS, Accessibility, Fully Responsive UI and HTML Email Template.
              </p>
            </div>
            <div className="bg-white  rounded p-4 mb-4 bg-white border">
              <p className="badge bg-primary text-2 fw-400">2017 - 2019</p>
              <h3 className="text-5 ">HTML Developer</h3>
              <p className="text-danger">Enuke Software Pvt. Ltd</p>
              <p className="mb-0 ">
                I was working there as a HTML Developer and involve in
                creating responsive Layouts for the products, Produce quality
                and efficient code making full use of JQuery, HTML, JavaScript, CSS, SCSS/SASS/LESS, Fully Responsive UI, HTML Email Template and Converting Adobe XD, PSD, and Figma UX to HTML code.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="text-6 fw-600 mb-4 ">My Education</h2>
            <div className="bg-white  rounded p-4 mb-4 bg-white border">
              <p className="badge bg-primary text-2 fw-400">2016 - 2018</p>
              <h3 className="text-5 ">Computer Science</h3>
              <p className="text-danger">Online & Offline</p>
              <p className="mb-0 ">
                Certification in developing web-based applications and website
                design!
                <br />
                Also completed some trainings from{" "}
                <a href="https://namastedev.com" target="_blank">namastedev.com</a> in Front end
                Development
              </p>
              <strong>Certifications</strong>
              <ul className="mb-0">
                <li>ReactJs</li>
                <li>Redux Toolkit</li>
                <li>Styled Components</li>
                <li>MUI reactJs</li>
                <li>Storybook</li>
                <li>Typescript</li>
              </ul>
            </div>
            <div className="bg-white  rounded p-4 mb-4 bg-white border">
              <p className="badge bg-primary text-2 fw-400">2017 - 2021</p>
              <h3 className="text-5 ">Bachelor Degree</h3>
              <p className="text-danger mb-0">Jamia Millia Islamia, Central University of Delhi</p>
            </div>
            <div className="bg-white  rounded p-4 mb-4 bg-white border">
              <p className="badge bg-primary text-2 fw-400">2014 - 2017</p>
              <h3 className="text-5 ">Diploma in Computer Science</h3>
              <p className="text-danger">Jamia Millia Islamia, Central University of Delhi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
