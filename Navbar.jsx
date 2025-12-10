import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">My Website</h2>

      <div className="menu">
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">SERVICES</a></li>
          <li><a href="#">DESIGN</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
