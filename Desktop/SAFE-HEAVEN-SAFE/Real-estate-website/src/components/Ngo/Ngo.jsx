import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Ngos from "./Ngo.css";

const ngos = [
  { name: 'Society for Development Activities', Types: 'Non-Governmental Organization', Founded: '2012', Founder: 'Akshai Abraham', mission: 'Civic Responsibility, Child Sexual Abuse', website: 'https://www.projectkhel.org', Address: '5/414, Viraj Khand, Gomti Nagar, Lucknow', Contact: 'contact@projectkhel.org' },
  { name: 'Vidya and Child', Types: 'Non-Governmental Organization', Founded: '1998', Founder: 'Supriya Akhaury', mission: 'Education', website: 'https://www.vidyaandchild.org', Address: 'Ambedkar Vihar, Sector 37, Noida', Contact: 'info@vidyaandchild.org' },
  { name: 'Jyoti Bal Vikas Sanstha', Types: 'Non-Governmental Organization', Founded: '1990', Founder: 'Dr S.N. Dixit', mission: 'Education, Women Empowerment', website: 'https://www.jyotiforchildren.org', Address: '117/M/112A, Kakadeo, Kanpur', Contact: 'bhitoor@jyotiforchildren.org' },
  { name: 'Kutumb Samajothhan', Types: 'Non-Governmental Organization', Founded: '2002', Founder: 'Dr Ashish and Ms Puja', mission: 'Street Children, Women Empowerment', website: 'https://www.kutumbfamily.org', Address: 'Kutumb Shelter House, Varanasi', Contact: 'varanasikutumb@gmail.com' },
  { name: 'Hindustan Latex Family Planning Promotion Trust', Types: 'Non-Governmental Organization', Founded: '1992', Founder: 'H.L.L. Lifecare Ltd', mission: 'Education, Healthcare, Women Empowerment', website: 'https://www.hlfppt.org', Address: 'B-14A, IInd Floor, Sector-62, Noida', Contact: 'info@hlfppt.org' },
  { name: 'Jan Vikas Samiti', Types: 'Non-Governmental Organization', Founded: '1997', Founder: 'Fr. Dilraj IMS', mission: 'Education, Healthcare, Women Empowerment', website: 'https://www.janvikassamiti.org', Address: 'Mrdaha, Varanasi', Contact: 'mail@janvikassamiti.org' },
  { name: 'Food for Life Vrindavan', Types: 'Non-Governmental Organization', Founded: '1991', Founder: 'Pietro Paolinelli', mission: 'Education, Healthcare, Livelihood', website: 'https://www.fflv.org', Address: 'Burja Road, Chaitanya Vihar, Vrindavan', Contact: 'info@fflv.org' },
  { name: 'Drishti Foundation', Types: 'Non-Governmental Organization', Founded: '2003', Founder: 'Dinesh Kr. Gautam', mission: 'Education, Healthcare, Livelihood', website: 'https://www.drishteefoundation.org', Address: 'Sector 63, Noida', Contact: 'info@drishtee.com' },
  { name: 'SOS Children’s Villages', Types: 'Non-Governmental Organization', Founded: '1949', Founder: 'Hermann Gmeiner', mission: 'Family-based child care', website: 'https://www.soschildrensvillages.in', Address: 'Aishbagh, Lucknow', Contact: 'info@soschildrensvillages.in' },
  { name: 'Smile Foundation', Types: 'Non-Governmental Organization', Founded: '2002', Founder: 'Santanu Mishra', mission: 'Education, Healthcare, Livelihood', website: 'https://www.smilefoundationindia.org', Address: 'New Delhi', Contact: 'info@smilefoundationindia.org' },
  { name: 'Make A Difference', Types: 'Non-Governmental Organization', Founded: '2006', Founder: 'Jithin Nedumala', mission: 'Empowering children in orphanages', website: 'https://www.makeadiff.in', Address: 'Pan India', Contact: 'info@makeadiff.in' },
  { name: 'Kutumb Samajothhan', Types: 'Non-Governmental Organization', Founded: '2002', Founder: 'Dr Ashish and Ms Puja', mission: 'Street Children, Women Empowerment', website: 'https://www.kutumbfamily.org', Address: 'Kutumb Shelter House, Varanasi', Contact: 'varanasikutumb@gmail.com' },
  { name: 'Hindustan Latex Family Planning Promotion Trust', Types: 'Non-Governmental Organization', Founded: '1992', Founder: 'H.L.L. Lifecare Ltd', mission: 'Education, Healthcare, Women Empowerment', website: 'https://www.hlfppt.org', Address: 'B-14A, IInd Floor, Sector-62, Noida', Contact: 'info@hlfppt.org' },
  { name: 'Jan Vikas Samiti', Types: 'Non-Governmental Organization', Founded: '1997', Founder: 'Fr. Dilraj IMS', mission: 'Education, Healthcare, Women Empowerment', website: 'https://www.janvikassamiti.org', Address: 'Mrdaha, Varanasi', Contact: 'mail@janvikassamiti.org' },
  { name: 'Food for Life Vrindavan', Types: 'Non-Governmental Organization', Founded: '1991', Founder: 'Pietro Paolinelli', mission: 'Education, Healthcare, Livelihood', website: 'https://www.fflv.org', Address: 'Burja Road, Chaitanya Vihar, Vrindavan', Contact: 'info@fflv.org' },
  { name: 'Drishti Foundation', Types: 'Non-Governmental Organization', Founded: '2003', Founder: 'Dinesh Kr. Gautam', mission: 'Education, Healthcare, Livelihood', website: 'https://www.drishteefoundation.org', Address: 'Sector 63, Noida', Contact: 'info@drishtee.com' },
  { name: 'SOS Children’s Villages', Types: 'Non-Governmental Organization', Founded: '1949', Founder: 'Hermann Gmeiner', mission: 'Family-based child care', website: 'https://www.soschildrensvillages.in', Address: 'Aishbagh, Lucknow', Contact: 'info@soschildrensvillages.in' },
  { name: 'Smile Foundation', Types: 'Non-Governmental Organization', Founded: '2002', Founder: 'Santanu Mishra', mission: 'Education, Healthcare, Livelihood', website: 'https://www.smilefoundationindia.org', Address: 'New Delhi', Contact: 'info@smilefoundationindia.org' },
  { name: 'Make A Difference', Types: 'Non-Governmental Organization', Founded: '2006', Founder: 'Jithin Nedumala', mission: 'Empowering children in orphanages', website: 'https://www.makeadiff.in', Address: 'Pan India', Contact: 'info@makeadiff.in' },
];



const ITEMS_PER_PAGE = 10;

const Ngo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // New state for the search term
  const [filteredNgos, setFilteredNgos] = useState(ngos); // New state for filtered NGOs

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const applyFilter = () => {
    // Filter NGOs based on the search term
    const filtered = ngos.filter((ngo) =>
      ngo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredNgos(filtered);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredNgos.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedNgos = filteredNgos.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="container mt-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item fs-6">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link
              to="/schemes/programs"
              style={{ textDecoration: "none", color: "red" }}
            >
              Ngo's
            </Link>
          </li>
        </ol>
      </nav>

      <p
        style={{
          color: "black",
          letterSpacing: "2px",
          textTransform: "capitalize",
          textAlign: "center",
        }}
      >
        <strong className="fs-2">
          NGO's DETAIL
          <br />
        </strong>
      </p>

      <div className="filter-section mb-3 d-flex justify-content-center">
        <div className="input-group" style={{ width: "50%" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Filter NGOs by name..."
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
          <button
            className="btn"
            type="button"
            onClick={applyFilter}
            style={{ color: "white", backgroundColor: "black" }}
          >
            <i className="fas fa-search"></i>
            <span className="ml-1">Apply</span>
          </button>
        </div>
      </div>

      <table
        className="table table-bordered mt-3"
        style={{ borderCollapse: "collapse", border: "1px solid black" }}
      >
        <thead style={{ backgroundColor: "#2b3d9f73", color: "black" }}>
          <tr>
            <th style={{ fontSize: "1.34rem", border: "1px solid black" }}>S. No.</th>
            <th style={{ fontSize: "1.34rem", border: "1px solid black" }}>Name</th>
            <th style={{ fontSize: "1.34rem", border: "1px solid black" }}>Mission</th>
            <th style={{ fontSize: "1.34rem", border: "1px solid black" }}>Contact</th>
            <th style={{ fontSize: "1.34rem", border: "1px solid black" }}>Website</th>
          </tr>
        </thead>
        <tbody>
          {selectedNgos.map((ngo, index) => (
            <tr key={index}>
              <td style={{ backgroundColor: "#ffffff", border: "1px solid black" }}>
                {startIndex + index + 1}
              </td>
              <td style={{ border: "1px solid black" }}>{ngo.name}</td>
              <td style={{ border: "1px solid black" }}>{ngo.mission}</td>
              <td style={{ border: "1px solid black" }}>{ngo.Contact}</td>
              <td style={{ border: "1px solid black" }}>
                <a href={ngo.website} target="_blank" rel="noopener noreferrer">
                  {ngo.website}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center">
        <nav>
          <ul className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <li
                key={i + 1}
                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
              >
                <button
                  style={{
                    backgroundColor: currentPage === i + 1 ? "#962145" : "#fff", // Background color based on active state
                    color: "black", // Text color should always be black
                  }}
                  className="page-link"
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Ngo;
