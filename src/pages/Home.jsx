import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="hero">
        <img src="/hero.jpg" alt="Modern two-storey house" className="hero-img" />
        <h1>Unnathi Homes</h1>
        <p>We build your dreams….</p>
        <p>
          Residential construction in Tiptur. We build individual houses,
          including G+1 RCC homes, from foundation to finishing.
        </p>
        <a href="tel:+918197050233" className="btn">Call: +91 81970 50233</a>
        <a href="https://wa.me/918197050233" className="btn">WhatsApp</a>
        <Link to="/contact" className="btn">Enquire Now</Link>
      </section>

      <section>
        <h2>What we build</h2>
        <ul>
          <li>Structure and walls — G+1 RCC homes, wirecut red-brick masonry, TATA Steel 550 grade</li>
          <li>Water and plumbing — 8,000-litre sump tank, CPVC plumbing with Jaguar / Cera / Parryware fittings</li>
          <li>Doors, floors and stairs — Teak wood doors, vitrified tile flooring, granite staircase with glass railing</li>
          <li>Electrical and painting — Havells / V-Guard wiring, Asian Paints Royal emulsion inside, Apex Ultima outside</li>
          <li>Compound and protection — Compound wall, MS gate, anti-termite treatment</li>
        </ul>
        <Link to="/services">See all services</Link>
      </section>

      <section>
        <h2>Ongoing work</h2>
        <p>
          Two G+1 homes at Margondanahalli, Tiptur — 21 ft × 42 ft plot,
          1,850 sq ft total slab area. Status: Ongoing.
        </p>
        <Link to="/projects">See projects</Link>
      </section>

      <section>
        <h2>Planning to build your home?</h2>
        <p>Call us and tell us about your plot.</p>
        <a href="tel:+918197050233" className="btn">Call: +91 81970 50233</a>
      </section>
    </div>
  );
}

export default Home;
