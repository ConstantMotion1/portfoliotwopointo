import React from "react";

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("AboutMe")}
          className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
        >
          Profile
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
};
