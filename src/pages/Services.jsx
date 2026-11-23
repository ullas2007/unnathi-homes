import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      <h1>Services</h1>
      <p>
        We build residential houses, including G+1 RCC homes — from foundation
        to finishing, as one complete work.
      </p>

      <section>
        <h2>Structure and walls</h2>
        <p>G+1 RCC homes, wirecut red-brick masonry, TATA Steel 550 grade.</p>
      </section>

      <section>
        <h2>Water and plumbing</h2>
        <p>8,000-litre sump tank, CPVC plumbing with Jaguar / Cera / Parryware fittings.</p>
      </section>

      <section>
        <h2>Doors, floors and stairs</h2>
        <p>Teak wood doors, vitrified tile flooring, granite staircase with glass railing.</p>
      </section>

      <section>
        <h2>Electrical and painting</h2>
        <p>Havells / V-Guard wiring, Asian Paints Royal emulsion inside, Apex Ultima outside.</p>
      </section>

      <section>
        <h2>Compound and protection</h2>
        <p>Compound wall, MS gate, anti-termite treatment.</p>
      </section>

      <section>
        <h2>Planning to build your home?</h2>
        <p>Call us and tell us about your plot.</p>
        <a href="tel:+918197050233" className="btn">Call: +91 81970 50233</a>
        <a href="https://wa.me/918197050233" className="btn">WhatsApp</a>
        <Link to="/contact" className="btn">Enquire Now</Link>
      </section>
    </div>
  );
}

export default Services;
