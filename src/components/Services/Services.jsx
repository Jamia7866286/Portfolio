import React from "react";

export const Services = () => {
  return (
    <section id="services" className="section bg-light">
      <div className="container px-lg-5">
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="text-24  text-uppercase fw-600 w-100 mb-0 text-light  opacity-4">
            Services
          </h2>
          <p className="text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 text-dark">
            What I Do?{" "}
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-md-6">
                <div className="featured-box style-3 mb-5">
                  <div className="featured-box-icon text-primary  shadow-sm rounded bg-white">
                    <i className="fas fa-mug-saucer"></i>
                  </div>
                  <h3 className="">Front-End Development</h3>
                  <p className="mb-0 ">
                    I am responsible for implementing the website's design and
                    user interface using HTML, CSS, and JavaScript. They ensure
                    that the site is interactive, functional, and accessible to
                    users.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="featured-box style-3 mb-5">
                  <div className="featured-box-icon text-primary  shadow-sm rounded bg-white">
                    <i className="fas fa-person-chalkboard"></i>
                  </div>
                  <h3 className="">Team Management</h3>
                  <p className="mb-0 ">
                    Team management responsibilities involve overseeing and
                    guiding a group of individuals to work together efficiently
                    and effectively to achieve common goals. As a team manager,
                    My primary role is to provide leadership and support to the
                    team members to ensure they can perform at their best and
                    contribute to the success of the organization.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="featured-box style-3 mb-5">
                  <div className="featured-box-icon text-primary  shadow-sm rounded bg-white">
                    <i className="fas fa-chart-area"></i>
                  </div>
                  <h3 className="">Core Web Vitals (CWV)</h3>
                  <p className="mb-0 ">
                    Core Web Vitals are a set of essential user-centric metrics
                    that Google uses to assess and measure the user experience
                    of web pages. They are designed to help website owners and
                    developers understand how well their web pages perform in
                    terms of loading speed (LCP), interactivity(FID), and visual
                    stability(CLS).{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="featured-box style-3 mb-5">
                  <div className="featured-box-icon text-primary  shadow-sm rounded bg-white">
                    <i className="fas fa-globe"></i>
                  </div>
                  <h3 className="">Web Page Optimizations</h3>
                  <p className="mb-0 ">
                    Web page performance optimizations are techniques and best
                    practices used to improve the speed, responsiveness, and
                    overall user experience of a website. Faster loading times
                    and better performance lead to higher user satisfaction,
                    lower bounce rates, and improved search engine rankings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
