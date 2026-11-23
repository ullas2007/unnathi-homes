import { Link } from "react-router-dom";
import CostEstimator from "../components/CostEstimator";

function Services() {
  return (
    <div>
      <h1>Services</h1>
      <p>
        We build your home completely — from the foundation to the final
        coat of paint. One team handles the whole work, so you deal with one
        builder, not many contractors. The materials and brands we use depend
        on your budget — tell us the price per square foot you have in
        mind, and we will use the right materials for it.
      </p>

      <section>
        <p className="eyebrow">What We Build</p>
        <h2>Services we offer.</h2>
        <div className="service-grid">
          <article className="service-card">
            <img src="/construction1.jpg" alt="Residential house under construction" loading="lazy" />
            <h3>Residential Construction</h3>
            <p>We build homes for families — G+1 houses, from foundation to finishing, on your own plot.</p>
          </article>
          <article className="service-card">
            <img src="/home-night.jpg" alt="Modern villa at twilight" loading="lazy" />
            <h3>Villas</h3>
            <p>Spacious independent villas with modern design, built for comfortable family living.</p>
          </article>
          <article className="service-card">
            <img src="/interior2.jpg" alt="Renovated home interior" loading="lazy" />
            <h3>Renovation</h3>
            <p>We renovate and upgrade existing homes — new rooms, new flooring, a fresh new look.</p>
          </article>
          <article className="service-card">
            <img src="/interior1.jpg" alt="Living room interior with glass staircase" loading="lazy" />
            <h3>Interiors</h3>
            <p>Interior work that makes your home feel complete — flooring, ceilings, kitchens and more.</p>
          </article>
          <article className="service-card">
            <img src="/construction2.webp" alt="Commercial building under construction" loading="lazy" />
            <h3>Commercial Building</h3>
            <p>We build shops, offices and commercial spaces — built to last and ready for business.</p>
          </article>
          <article className="service-card">
            <img src="/hero.jpg" alt="Completed turnkey home" loading="lazy" />
            <h3>Turnkey Projects</h3>
            <p>One team handles everything — design to handover. You get the keys to a finished home.</p>
          </article>
        </div>
        <p className="note">Sample photos for now — real photos of Unnathi Homes' work coming soon.</p>
      </section>

      <section>
        <p className="eyebrow">Build Quality</p>
        <h2>What goes into every home.</h2>
        <div className="build-grid">
          <article className="build-card">
            <svg className="build-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M8 24 L24 8 L40 24" />
              <path d="M12 22 V40 H36 V22" />
            </svg>
            <h3>Structure and walls</h3>
            <p>A strong RCC frame with wirecut red-brick walls and quality steel reinforcement — solid structure, straight walls, made to last.</p>
          </article>
          <article className="build-card">
            <svg className="build-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M24 6 C24 6 10 22 10 30 A14 14 0 0 0 38 30 C38 22 24 6 24 6 Z" />
            </svg>
            <h3>Water and plumbing</h3>
            <p>An 8,000-litre sump tank for storage, and CPVC plumbing with quality fittings — taps, bathrooms and kitchen working from day one.</p>
          </article>
          <article className="build-card">
            <svg className="build-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="12" y="6" width="24" height="36" rx="2" />
              <circle cx="30" cy="24" r="2" />
            </svg>
            <h3>Doors, floors and stairs</h3>
            <p>Teak wood doors, vitrified tile flooring, and a granite staircase with a glass railing — solid to touch, good to look at.</p>
          </article>
          <article className="build-card">
            <svg className="build-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="24" cy="18" r="10" />
              <path d="M20 32 H28 M22 38 H26" />
            </svg>
            <h3>Electrical and painting</h3>
            <p>Safe wiring, quality emulsion inside and weather-proof paint outside — bright, safe, and protected from the weather.</p>
          </article>
          <article className="build-card">
            <svg className="build-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M24 6 L40 12 V24 C40 34 32 40 24 42 C16 40 8 34 8 24 V12 Z" />
            </svg>
            <h3>Compound and protection</h3>
            <p>A compound wall and MS gate for privacy and safety, plus anti-termite treatment — your home secured, inside and out.</p>
          </article>
        </div>
      </section>

      <CostEstimator />

      <section>
        <h2>Planning to build your home?</h2>
        <p>Call us and tell us about your plot — we will take it from there.</p>
        <a href="tel:+918197050233" className="btn">Call: +91 81970 50233</a>
        <a href="https://wa.me/918197050233" className="btn">WhatsApp</a>
        <Link to="/contact" className="btn">Enquire Now</Link>
      </section>
    </div>
  );
}

export default Services;
