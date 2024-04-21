import React from "react";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <section id="home">
      <div className="hero-wrap">
        <div className="hero-mask opacity-8 bg-dark"></div>
        <div className="hero-bg parallax"></div>
        <div className="hero-content section d-flex min-vh-100">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="text-16 fw-600 text-white mb-2 mb-md-3">
                  <div className="Typewriter" data-testid="typewriter-wrapper">
                    <span className="Typewriter__wrapper">
                      Welcome to <br />
                      Web Tech Coding!
                    </span>
                    <span className="Typewriter__cursor">|</span>
                  </div>
                </h2>
                <Link
                  spy={true}
                  smooth={true}
                  to="contact"
                  className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
          <Link
            to="about"
            spy={true}
            smooth={true}
            className="scroll-down-arrow text-white smooth-scroll"
          >
            <span className="animated">
              <i className="fa fa-chevron-down"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
