import { Link } from "react-router-dom";

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <p>Residential homes we are building now.</p>

      <section>
        <img src="/construction1.jpg" alt="Two houses under construction" />
        <p>Sample photo — real Margondanahalli site photo coming soon.</p>
        <h2>Two G+1 Homes at Margondanahalli</h2>
        <p>Locality: Margondanahalli, Tiptur</p>
        <p>Type: G+1 RCC residential homes</p>
        <p>Status: Ongoing</p>
        <p>
          Two G+1 homes on a 21 ft × 42 ft plot, with a total slab area of
          1,850 sq ft.
        </p>
      </section>

      <section>
        <h2>Planning to build your home?</h2>
        <p>Call us and tell us about your plot.</p>
        <a href="tel:+918197050233">Call: +91 81970 50233</a>
        <Link to="/contact">Enquire Now</Link>
      </section>
    </div>
  );
}

export default Projects;
