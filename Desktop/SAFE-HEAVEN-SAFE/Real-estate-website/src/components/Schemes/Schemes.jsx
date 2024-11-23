import React, { useState } from "react";
import { Link } from "react-router-dom";

const SchemesProgram = () => {
  const [documents, setDocuments] = useState([
    {
      title: "Invitation Regarding Development of Inspection",
      date: "17/09/2024",
      size: "555 KB",
    },
    {
      title: "Proforma - Inviting proposals for special schools",
      date: "12/09/2024",
      size: "6 MB",
    },
    {
      title: "Inviting proposals for workshops",
      date: "12/09/2024",
      size: "2 MB",
    },
    {
      title: "Maharashtra State Rights of Persons with Disabilities Rules",
      date: "05/09/2024",
      size: "845 KB",
    },
    {
      title: "Cabinet Decisions Date 10-01-2024",
      date: "10/01/2024",
      size: "119 KB",
    },
    {
      title: "Scheme 6",
      date: "10/01/2024",
      size: "200 KB",
    },
    {
      title: "Scheme 7",
      date: "10/01/2024",
      size: "300 KB",
    },
    {
      title: "Scheme 8",
      date: "10/01/2024",
      size: "400 KB",
    },
    {
      title: "Scheme 9",
      date: "10/01/2024",
      size: "500 KB",
    },
    {
      title: "Scheme 10",
      date: "10/01/2024",
      size: "600 KB",
    },
    {
      title: "Scheme 11",
      date: "10/01/2024",
      size: "700 KB",
    },
    {
      title: "Scheme 12",
      date: "10/01/2024",
      size: "800 KB",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDocs, setFilteredDocs] = useState(documents);

  // Conditional logic for number of rows per page
  const rowsPerPage = currentPage === 1 ? 10 : 2;

  // Total number of pages
  const totalPages = currentPage === 1
    ? Math.ceil(filteredDocs.length / 10)
    : Math.ceil((filteredDocs.length - 10) / 2) + 1;

  const indexOfLastDoc = currentPage === 1
    ? rowsPerPage
    : 10 + (currentPage - 1) * rowsPerPage;

  const indexOfFirstDoc = currentPage === 1
    ? 0
    : 10 + (currentPage - 2) * rowsPerPage;

  const currentDocs = filteredDocs.slice(indexOfFirstDoc, indexOfLastDoc);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const applyFilter = () => {
    const filtered = documents.filter((doc) =>
      doc.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDocs(filtered);
    setCurrentPage(1); // Reset to the first page when applying filters
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-3 mb-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item fs-6">
            <a href="/">Home</a>
          </li>
          {/* <li className="breadcrumb-item fs-6" aria-current="page">
            Schemes
          </li> */}
          <li className="breadcrumb-item active" aria-current="page">
            <Link
              to="/schemes/programs"
              style={{ textDecoration: "none", color: "red" }}
            >
              Schemes Programs
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
          SCHEMES PROGRAMS
          <br />
        </strong>
      </p>

      <div className="filter-section mb-3 d-flex justify-content-center">
        <div className="input-group" style={{ width: "50%" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Filter schemes programs by title..."
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
          <button
            className="btn "
            type="button"
            onClick={applyFilter}
            style={{color:"white" , backgroundColor :"black"}}
          >
            <i className="fas fa-search"></i>
            <span className="ml-1">Apply</span>
          </button>
        </div>
      </div>

      <div className="table-responsive mb-5">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark text-center">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Date</th>
              <th scope="col">View / Download</th>
            </tr>
          </thead>
          <tbody>
            {currentDocs.map((doc, index) => (
              <tr key={index}>
                <td style={{ height: "60px", verticalAlign: "middle" }}>
                  {doc.title}
                </td>
                <td
                  className="text-center"
                  style={{ height: "60px", verticalAlign: "middle" }}
                >
                  {doc.date}
                </td>
                <td style={{ height: "60px", verticalAlign: "middle" }}>
                 
                  <Link to="#" className="text-danger ml-3">
                    View <i className="fas fa-file-pdf ml-1"></i>
                  </Link>{" "}
                  |{" "}
                  <Link to="#" className="text-success ml-3">
                    Download <i className="fas fa-download ml-1"></i>
                  </Link>{" "}
                  ({doc.size})
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <nav>
        <ul className="pagination justify-content-center">
          {[...Array(totalPages)].map((_, i) => (
            <li
              key={i}
              className={`page-item ${i + 1 === currentPage ? "active" : ""}`}
            >
              <button
                style={{
                  backgroundColor: currentPage === i + 1 ? "#962145" : "#fff", // Background color based on active state
                  color: "black" // Text color should always be black
                  , outline: "none", boxShadow: "none"
                }}
                onClick={() => paginate(i + 1)}
                className="page-link"
               
              >
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SchemesProgram;
