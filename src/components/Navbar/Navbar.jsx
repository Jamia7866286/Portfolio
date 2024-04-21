import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header id="header" className="sticky-top">
      <nav className="primary-menu navbar navbar-expand-lg navbar-dark bg-dark border-bottom-0">
        <div className="container-fluid position-relative h-100 flex-lg-column ps-3 px-lg-3 pt-lg-3 pb-lg-2">
          <Link to="" className="mb-lg-auto mt-lg-4" style={{ cursor: "pointer" }}>
            <span className="bg-dark-2 rounded-pill p-2 mb-lg-1 d-none d-lg-inline-block">
              <picture>
                <source srcSet="profile.jpeg" type="image/avif" />
                <img
                  className="img-fluid rounded-pill d-block"
                  src="profile.jpeg"
                  title="I'm Naseem Ahmad"
                  alt="profile"
                />
              </picture>
            </span>
            <h1 className="text-5 text-white text-center mb-0 d-lg-block my-name">
              Naseem Ahmad
            </h1>
            <h1 className="text-5 text-white text-center mb-0  pixel-perfect-logo">
              Web Tech Coding
            </h1>
          </Link>
          <input type="checkbox" />
          <div
            id="header-nav"
            className="collapse navbar-collapse w-100 my-lg-auto "
          >
            <ul className="navbar-nav text-lg-center my-lg-auto py-lg-3">
              <li className="nav-item">
                <Link
                  to="home"
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  className="nav-link "
                  style={{ cursor: "pointer" }}
                  spy={true}
                  smooth={true}
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="services"
                  className="nav-link "
                  style={{ cursor: "pointer" }}
                  spy={true}
                  smooth={true}
                >
                  What I Do
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="resume"
                  className="nav-link "
                  style={{ cursor: "pointer" }}
                  spy={true}
                  smooth={true}
                >
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="skills"
                  className="nav-link "
                  style={{ cursor: "pointer" }}
                  spy={true}
                  smooth={true}
                >
                  My Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  className="nav-link "
                  style={{ cursor: "pointer" }}
                  spy={true}
                  smooth={true}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <ul className="social-icons social-icons-muted social-icons-sm mt-lg-auto ms-auto ms-lg-0 d-flex">
            <li className="social-icons-dribbble">
              <a
                href="https://www.linkedin.com/in/naseem-ahmad-34a005139/"
                target="_blank"
                rel="noopener noreferrer"
                style={{cursor:'pointer'}}
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className="social-icons-facebook">
              <a
                href="https://github.com/Jamia7866286"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
          <button className="navbar-toggler" id="navbar-toggler" type="button">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
