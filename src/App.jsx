import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import "./App.css";

const TITLES = {
  "/": "Unnathi Homes — We Build Your Dreams",
  "/about": "About Us — Unnathi Homes",
  "/services": "Services — Unnathi Homes",
  "/projects": "Projects — Unnathi Homes",
  "/gallery": "Gallery — Unnathi Homes",
  "/testimonials": "Testimonials — Unnathi Homes",
  "/contact": "Contact Us — Unnathi Homes",
  "/admin": "Admin — Unnathi Homes",
};

function PageTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = TITLES[pathname] || "Unnathi Homes — We Build Your Dreams";
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <PageTitle />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <footer>
        <div className="footer-logo">
          <span>UNNATH<span className="logo-accent">i</span></span>
          <span>HOM<span className="logo-accent">E</span>S</span>
        </div>
        <p>Unnathi Homes, K R Extension, 4th Main Road, Near Shankar Mutt, Tiptur 572201</p>
        <p>Phone: +91 81970 50233</p>
        <p className="footer-bottom">© 2026 Unnathi Homes. All Rights Reserved.</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
