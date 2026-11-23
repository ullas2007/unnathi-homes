import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span>UNNATH<span className="logo-accent">i</span></span>
        <span>HOM<span className="logo-accent">ES</span></span>
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <a href="tel:+918197050233" className="nav-call">Call: +91 81970 50233</a>
    </nav>
  );
}

export default Navbar;
