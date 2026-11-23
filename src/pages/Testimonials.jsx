import { Link } from "react-router-dom";

function Testimonials() {
  return (
    <div>
      <h1>Testimonials</h1>
      <p>Reviews from our clients will appear here soon.</p>
      <p>
        If you are building your home with us, you can share your experience
        after your home is complete.
      </p>

      <section>
        <h2>Planning to build your home?</h2>
        <p>Call us and tell us about your plot.</p>
        <a href="tel:+918197050233" className="btn">Call: +91 81970 50233</a>
        <Link to="/contact" className="btn">Enquire Now</Link>
      </section>
    </div>
  );
}

export default Testimonials;
