import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Donation.css";

const DonationSection = () => {
  return (
    <div className="donation-section" style={{backgroundColor:"black"}}>
      <div className="image-container">
       
      </div>
      <div className="color-overlay"></div>
      <div className="content-overlay">
        <h2 className="mb-4 fw-bold" style={{ fontSize: "2.6rem" }}>
         DONATE FOR CHILD WELFARE
        </h2>
        <p className="mb-4 text-black" style={{ fontSize: "1.1rem" }}>
          Your generous donation will help us provide essential healthcare
          services, support programs, and resources for women and children in
          need.
        </p>
        <a href="/payment" className="btn btn-light fs-3">
          Make a Donation
        </a>
      </div>
    </div>
  );
};

export default DonationSection;
