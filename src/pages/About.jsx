import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        Unnathi Homes is a residential construction company in Tiptur.
        The builder and architect is Ullas.
      </p>
      <p>
        We build residential houses, including G+1 RCC homes — from
        foundation to finishing, as one complete work.
      </p>
      <p>
        Our current work is two G+1 homes at Margondanahalli, Tiptur —
        each on a 21 ft × 42 ft plot, with 1,850 sq ft total slab area.
      </p>
      <p>We build your dreams….</p>
      <Link to="/contact">Contact Us</Link>
    </div>
  );
}

export default About;
