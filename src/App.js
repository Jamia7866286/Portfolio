import Navbar from "./components/Navbar/Navbar";
import "./font-family-weight.css";
import "./App.css";
import { useContext, useEffect, useRef, useState } from "react";
import { themeContext } from "./Context";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Services } from "./components/Services/Services";
import { Resume } from "./components/Resume/Resume";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const ScrollRef = useRef(null);
  const [isToggleBottomToTop, setIsToggleBottomToTop] = useState(false)

  const BottomToTopScrollMethod = ()=> {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  window.addEventListener('scroll', function(){
    const offsetTop = ScrollRef?.current?.offsetTop;
    if(this.scrollY >= offsetTop){
      setIsToggleBottomToTop(true)
    }
    else{
      setIsToggleBottomToTop(false)
    }
  })

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <div id="root">
        <div className="side-header">
          <div id="main-wrapper">
            <Navbar />
            <div id="content" role="main">
              <Home />
              <About ScrollRef={ScrollRef} />
              <Services />
              <Resume />
              <Skills />
              <Contact />
              {/* <!-- <section id="portfolio" className="section bg-light">
                <div className="container px-lg-5">
                  <div className="position-relative d-flex text-center mb-5">
                    <h2 className="text-24  text-uppercase fw-600 w-100 mb-0 text-light opacity-4">Portfolio</h2>
                    <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 text-dark"> My Work <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
                    </p>
                  </div> 
                </div>
                </section> --> */}
            </div>
            <Footer />
            {isToggleBottomToTop &&
              <div className="scroll-down-arrow text-white smooth-scroll BottomToTopScroll" onClick={BottomToTopScrollMethod}>
                <span className="animatedBottomToTop">
                  <i className="fa fa-chevron-down"></i>
                </span>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
