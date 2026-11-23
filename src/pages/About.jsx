import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <section className="about-card">
        <h1>About Us</h1>
        <p>
          Unnathi Homes is a construction company based in
          Tiptur, building across Tumkur district, Bengaluru and
          Hassan. The builder and architect is Ullas.
        </p>
        <p>
          We do residential construction, villas, renovation, interiors,
          commercial buildings and turnkey projects. Our main work is G+1
          RCC homes — built from foundation to finishing, as one
          complete work.
        </p>
        <p>We build your dreams….</p>
        <Link to="/services" className="btn">Our Services</Link>
        <Link to="/contact" className="btn">Contact Us</Link>
      </section>
    </div>
  );
}

export default About;
