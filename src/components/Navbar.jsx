import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span>UNNATH<span className="logo-accent">i</span></span>
        <span>HOM<span className="logo-accent">E</span>S</span>
      </Link>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About Us</NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>Services</NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink>
        <NavLink to="/gallery" className={({ isActive }) => (isActive ? "active" : "")}>Gallery</NavLink>
        <NavLink to="/testimonials" className={({ isActive }) => (isActive ? "active" : "")}>Testimonials</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact Us</NavLink>
      </div>
      <a href="tel:+918197050233" className="nav-call">Call: +91 81970 50233</a>
    </nav>
  );
}

export default Navbar;
