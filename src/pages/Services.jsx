import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      <h1>Services</h1>
      <p>
        We build your home completely \u2014 from the foundation to the final
        coat of paint. One team handles the whole work, so you deal with one
        builder, not many contractors.
      </p>

      <section>
        <h2>Structure and walls</h2>
        <p>
          Your home stands on a strong RCC frame with wirecut red-brick walls
          and TATA Steel 550 grade reinforcement. We build G+1 homes that are
          made to last \u2014 solid structure, straight walls, and a finish
          you can be proud of.
        </p>
      </section>

      <section>
        <h2>Water and plumbing</h2>
        <p>
          Water is planned from the start \u2014 an 8,000-litre sump tank for
          storage, and CPVC plumbing with Jaguar, Cera or Parryware fittings,
          so your taps, bathrooms and kitchen work properly from day one.
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
          Safe wiring with Havells or V-Guard, and painting with Asian Paints
          \u2014 Royal emulsion inside, Apex Ultima outside \u2014 so your
          home is bright, safe, and protected from the weather.
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
