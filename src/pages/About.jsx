import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <section className="about-card">
        <h1>About Us</h1>
        <p>
          Unnathi Homes is a residential construction company based in
          Tiptur, building homes across Tumkur district, Bengaluru and
          Hassan. The builder and architect is Ullas.
        </p>
        <p>
          We build residential houses, including G+1 RCC homes — from
          foundation to finishing, as one complete work.
        </p>
        <p>We build your dreams….</p>
        <Link to="/contact" className="btn">Contact Us</Link>
      </section>
    </div>
  );
}

export default About;
