import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      {/* Contact Section */}
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Need Assistance or Have Questions?</h1>
              <p>
                We're here to help. Reach out to ensure the safety and welfare
                of every child.
              </p>
            </div>
            <button className="btn5 text-black">Contact Us Today</button>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer>
        <div className="container">
          <div className="box">
            {/* Logo and Subscription */}
            <div className="logo">
              <img src="./images/Logo/logo1.png" alt="CWC Logo" />
              <p>
                Stay informed with the latest updates, resources, and
                initiatives to protect children, sent straight to your inbox.
              </p>

              <div className="input flex">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="box">
  <h3>Quick Links</h3>
  <ul>
    <li>
      <a href="#about" style={{ color: 'white' }}>About Us</a>
    </li>
    <li>
      <a href="#services" style={{ color: 'white' }}>Our Services</a>
    </li>
    <li>
      <a href="#contact" style={{ color: 'white' }}>Contact Us</a>
    </li>
    <li>
      <a href="#support" style={{ color: 'white' }}>Support</a>
    </li>
  </ul>
</div>


          {/* Social Media Links */}
          <div className="box">
            <h3>Follow Us</h3>
            <ul className="social-links">
              <li>
                <a
                  href="https://www.facebook.com/childwelfare"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <i className="fa-brands fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/childwelfare"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <i className="fa-brands fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/childwelfare"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <i className="fa-brands fa-linkedin"></i> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/childwelfare"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <i className="fa-brands fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Legal Section */}
      <div className="legal">
        <span>© 2024 CWC Initiative. Designed by Pragati.</span>
      </div>
    </>
  );
};

export default Footer;
