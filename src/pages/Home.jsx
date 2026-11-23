import { Link } from "react-router-dom";

const marqueeText =
  "Tiptur \u2022 Tumkur \u2022 Bengaluru \u2022 Hassan \u2022 Homes \u2022 Villas \u2022 Renovation \u2022 Interiors \u2022 Commercial \u2022 Turnkey \u2022 ";

function Home() {
  return (
    <div>
      <section className="hero-full">
        <img src="https://img.staticmb.com/mbcontent/images/crop/uploads/ver2/XIwvQlc61t8ZIpanz4mAnTU5mXTv0JniK84Hi2xDB5DKVg/FI-two-storey-house-designs-small-plots_0_1200.jpg" alt="Modern two-storey home with glass balcony at dusk" className="hero-full-img" />
        <div className="hero-overlay">
          <div className="hero-logo">
            UNNATH<span className="logo-accent">i</span>
            <br />
            HOM<span className="logo-accent">ES</span>
          </div>
          <h1>We build your dreams.</h1>
          <p className="hero-sub">Homes, villas, renovation, interiors and commercial buildings — in Tiptur, Tumkur district, Bengaluru and Hassan.</p>
          <div>
            <a href="tel:+918197050233" className="btn">Call: +91 81970 50233</a>
            <a href="https://wa.me/918197050233" className="btn">WhatsApp</a>
            <Link to="/contact" className="btn">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          <span>{marqueeText.repeat(3)}</span>
          <span>{marqueeText.repeat(3)}</span>
        </div>
      </div>

      <section className="photos">
        <p className="eyebrow">Our Work</p>
        <h2>Homes we are building.</h2>
        <div className="photo-row">
          <figure>
            <img src="/home-night.jpg" alt="Modern home at twilight" loading="lazy" />
            <figcaption>Modern home</figcaption>
          </figure>
          <figure>
            <img src="/construction1.jpg" alt="Two houses under construction" loading="lazy" />
            <figcaption>House under construction</figcaption>
          </figure>
          <figure>
            <img src="/interior1.jpg" alt="Living room with glass staircase" loading="lazy" />
            <figcaption>Living room</figcaption>
          </figure>
        </div>
        <p className="note">Sample photos for now — real photos of Unnathi Homes' work coming soon.</p>
      </section>

      <section className="process">
        <p className="eyebrow">Our Process</p>
        <h2>How we build your home.</h2>
        <ol className="process-steps">
          <li>
            <span className="step-num">1</span>
            <h3>Consultation</h3>
            <p>Tell us about your plot, your budget and what you want to build.</p>
          </li>
          <li>
            <span className="step-num">2</span>
            <h3>Design</h3>
            <p>We plan your home — layout, rooms and elevation.</p>
          </li>
          <li>
            <span className="step-num">3</span>
            <h3>Approvals</h3>
            <p>We guide you through plan approval and paperwork.</p>
          </li>
          <li>
            <span className="step-num">4</span>
            <h3>Construction</h3>
            <p>We build it — foundation to finishing, one complete work.</p>
          </li>
          <li>
            <span className="step-num">5</span>
            <h3>Handover</h3>
            <p>We hand over your finished home, ready to move in.</p>
          </li>
        </ol>
      </section>

      <section className="cta">
        <h2>Planning to build your home?</h2>
        <p>Call us or send an enquiry — we will get back to you soon.</p>
        <a href="tel:+918197050233" className="btn">Call: +91 81970 50233</a>
        <Link to="/contact" className="btn">Get a Free Quote</Link>
      </section>
    </div>
  );
}

export default Home;
