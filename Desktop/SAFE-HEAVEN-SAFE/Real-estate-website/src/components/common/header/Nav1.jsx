import React from "react";
import "./Nav1.css";
import { Link } from "react-router-dom";

const Nav1 = () => {
  return (
    <div className="div1">
      <header className="header-container1">
        <div className="left-section1">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <div className="marathi-text1">GOVERNMENT OF INDIA</div>
          </Link>
          <div className="vertical-line1"></div>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <div className="english-text1">बाल कल्याण समिति</div>
          </Link>
        </div>

        <div className="separator1"></div>
        <div className="right-section1">
          <div className="vertical-line1"></div>
          <a href="#home" className="nav-link text-white" title="Skip to main content " >
            SKIP TO MAIN CONTENT
          </a>
          <div className="vertical-line1"></div>
          <i className="fas fa-search" title="Search Icon"></i>
          <div className="vertical-line1"></div>
        
         
          <div className="dropdown text-white">
            <a href="/" className="nav-link" title="English - Selected">
              ENGLISH
            </a>
            <div className="dropdown-content">
              <a href="/marathi" className="nav-link">
                मराठी
              </a>
            </div>
          </div>
          <div className="vertical-line1"></div>
          <div className="d-flex align-items-center">
            <button className="btn text-white">
              <i className="fa fa-sign-out"></i> Sign In
            </button>
          </div>
         
          <div className="vertical-line1"></div>
        </div>
      </header>
    </div>
  );
};

export default Nav1;
