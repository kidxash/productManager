import { Link } from "react-router-dom";
import React, { useEffect } from "react";

function Navbar() {
  // Remove body margin when Navbar mounts
  useEffect(() => {
    document.body.style.margin = "0";
  }, [])

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: "1rem",
    width: "100vw",
    boxSizing: "border-box",
    position: "fixed",
    top: 0, 
    left: 0, 
    zIndex: 1000,
 
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    margin: "0 1rem",
    fontWeight: "bold",
    fontFamily: "Montserrat, sans-serif",
  };

  return (
    <nav style={navStyle}>
      <div style={{ flex: 1,}}>
        <Link to="/" style={linkStyle}>Home</Link>
      </div>
      <div style={{ flex: 1,}}>
        <Link to="/Add" style={linkStyle}>Add</Link>
      </div>
      <div style={{ flex: 1,}}>
        <Link to="/View" style={linkStyle}>View</Link>
      </div>
      <style>
        {`
          nav a:hover {
            text-decoration: underline; !important
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;