import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (scrolled) {
      // Let the links fade out fully first (0.3s), then take them out of
      // the layout so the bar shrinks. No visible text is ever clipped.
      timer.current = setTimeout(() => setHidden(true), 300);
    } else {
      clearTimeout(timer.current);
      setHidden(false);
    }
    return () => clearTimeout(timer.current);
  }, [scrolled]);

  const hideStyle = hidden ? { display: "none" } : undefined;

  return (
    <nav className={"navbar" + (scrolled ? " scrolled" : "")}>
      <Link to="/" className="logo">
        <span>UNNATH<span className="logo-accent">i</span></span>
        <span>HOM<span className="logo-accent">E</span>S</span>
      </Link>
      <div className="nav-links" style={hideStyle}>
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About Us</NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>Services</NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink>
        <NavLink to="/gallery" className={({ isActive }) => (isActive ? "active" : "")}>Gallery</NavLink>
        <NavLink to="/testimonials" className={({ isActive }) => (isActive ? "active" : "")}>Testimonials</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact Us</NavLink>
      </div>
      <a href="tel:+918197050233" className="nav-call" style={hideStyle}>Call: +91 81970 50233</a>
    </nav>
  );
}

export default Navbar;
