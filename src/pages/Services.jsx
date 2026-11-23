import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      <h1>Services</h1>
      <p>
        We build your home completely \u2014 from the foundation to the final
        coat of paint. One team handles the whole work, so you deal with one
        builder, not many contractors. The materials and brands we use depend
        on your budget \u2014 tell us the price per square foot you have in
        mind, and we will use the right materials for it.
      </p>

      <section>
        <p className="eyebrow">What We Build</p>
        <h2>Services we offer.</h2>
        <div className="service-grid">
          <article className="service-card">
            <img src="/construction1.jpg" alt="Residential house under construction" loading="lazy" />
            <h3>Residential Construction</h3>
            <p>We build homes for families \u2014 G+1 houses, from foundation to finishing, on your own plot.</p>
          </article>
          <article className="service-card">
            <img src="/home-night.jpg" alt="Modern villa at twilight" loading="lazy" />
            <h3>Villas</h3>
            <p>Spacious independent villas with modern design, built for comfortable family living.</p>
          </article>
          <article className="service-card">
            <img src="/interior2.jpg" alt="Renovated home interior" loading="lazy" />
            <h3>Renovation</h3>
            <p>We renovate and upgrade existing homes \u2014 new rooms, new flooring, a fresh new look.</p>
          </article>
          <article className="service-card">
            <img src="/interior1.jpg" alt="Living room interior with glass staircase" loading="lazy" />
            <h3>Interiors</h3>
            <p>Interior work that makes your home feel complete \u2014 flooring, ceilings, kitchens and more.</p>
          </article>
          <article className="service-card">
            <img src="/construction2.webp" alt="Commercial building under construction" loading="lazy" />
            <h3>Commercial Building</h3>
            <p>We build shops, offices and commercial spaces \u2014 built to last and ready for business.</p>
          </article>
          <article className="service-card">
            <img src="/hero.jpg" alt="Completed turnkey home" loading="lazy" />
            <h3>Turnkey Projects</h3>
            <p>One team handles everything \u2014 design to handover. You get the keys to a finished home.</p>
          </article>
        </div>
        <p className="note">Sample photos for now \u2014 real photos of Unnathi Homes' work coming soon.</p>
      </section>

      <section>
        <h2>Structure and walls</h2>
        <p>
          Your home stands on a strong RCC frame with wirecut red-brick walls
          and quality steel reinforcement. We build G+1 homes that are made to
          last \u2014 solid structure, straight walls, and a finish you can
          be proud of.
        </p>
      </section>

      <section>
        <h2>Water and plumbing</h2>
        <p>
          Water is planned from the start \u2014 an 8,000-litre sump tank for
          storage, and CPVC plumbing with quality fittings, so your taps,
          bathrooms and kitchen work properly from day one.
        </p>
      </section>

      <section>
        <h2>Doors, floors and stairs</h2>
        <p>
          Teak wood doors, vitrified tile flooring, and a granite staircase
          with a glass railing. The parts of your home you touch every day are
          built to feel solid and look good.
        </p>
      </section>

      <section>
        <h2>Electrical and painting</h2>
        <p>
          Safe wiring and painting \u2014 quality emulsion inside and
          weather-proof paint outside \u2014 so your home is bright, safe,
          and protected from the weather.
        </p>
      </section>

      <section>
        <h2>Compound and protection</h2>
        <p>
          A compound wall and MS gate for privacy and safety, plus anti-termite
          treatment to protect the structure. Your home is secured, inside
          and out.
        </p>
      </section>

      <section>
        <h2>Planning to build your home?</h2>
        <p>Call us and tell us about your plot \u2014 we will take it from there.</p>
        <a href="tel:+918197050233" className="btn">Call: +91 81970 50233</a>
        <a href="https://wa.me/918197050233" className="btn">WhatsApp</a>
        <Link to="/contact" className="btn">Enquire Now</Link>
      </section>
    </div>
  );
}

export default Services;
