import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>Company</h3>

        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Blog</a>
          <a href="#">Partnerships</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
        </div>

        <div className="social-links">
          <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
          <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
          <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
          <a href="#"><ion-icon name="logo-google"></ion-icon></a>
          <a href="#"><ion-icon name="logo-skype"></ion-icon></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
