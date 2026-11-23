import { Link } from "react-router-dom";

const marqueeText =
  "Tiptur \u2022 Tumkur \u2022 Bengaluru \u2022 Hassan \u2022 G+1 Homes \u2022 Turnkey Construction \u2022 ";

function Home() {
  return (
    <div>
      <section className="intro">
        <video className="building-video" autoPlay loop muted playsInline preload="metadata" poster="/building-draw-poster.jpg">
          <source src="/building-draw.mp4" type="video/mp4" />
        </video>
        <a href="#hero" className="intro-arrow" aria-label="Enter homepage">\u2193</a>
      </section>

      <section className="hero-full" id="hero">
        <img src="https://www.nobroker.in/blog/wp-content/uploads/2023/08/Modern-Minimalism.webp" alt="Modern two-storey house in bright daylight" className="hero-full-img" />
        <div className="hero-overlay">
          <div className="hero-logo">
            UNNATH<span className="logo-accent">i</span>
            <br />
            HOM<span className="logo-accent">ES</span>
          </div>
          <h1>We build your dreams.</h1>
          <p className="hero-sub">Turnkey homes in Tiptur, Tumkur district, Bengaluru and Hassan.</p>
          <div>
            <a href="tel:+918197050233" className="btn">Call: +91 81970 50233</a>
            <a href="https://wa.me/918197050233" className="btn">WhatsApp</a>
            <Link to="/contact" className="btn">Enquire Now</Link>
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
            <img src="/home-night.jpg" alt="Modern home at twilight" />
            <figcaption>Modern home</figcaption>
          </figure>
          <figure>
            <img src="/construction1.jpg" alt="Two houses under construction" />
            <figcaption>House under construction</figcaption>
          </figure>
          <figure>
            <img src="/interior1.jpg" alt="Living room with glass staircase" />
            <figcaption>Living room</figcaption>
          </figure>
        </div>
        <p className="note">Sample photos for now \u2014 real photos of Unnathi Homes' work coming soon.</p>
      </section>

      <section className="cta">
        <h2>Planning to build your home?</h2>
        <p>Call us or send an enquiry \u2014 we will get back to you soon.</p>
        <a href="tel:+918197050233" className="btn">Call: +91 81970 50233</a>
        <Link to="/contact" className="btn">Enquire Now</Link>
      </section>
    </div>
  );
}

export default Home;
