import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="hero-full">
        <img src="/hero.jpg" alt="Modern two-storey house" className="hero-full-img" />
        <div className="hero-overlay">
          <h1>Unnathi Homes</h1>
          <p>We build your dreams….</p>
          <div>
            <a href="tel:+918197050233" className="btn">Call: +91 81970 50233</a>
            <a href="https://wa.me/918197050233" className="btn">WhatsApp</a>
            <Link to="/contact" className="btn">Enquire Now</Link>
          </div>
        </div>
      </section>

      <section className="photos">
        <h2>Our Work</h2>
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
        <p className="note">Sample photos for now — real photos of Unnathi Homes' work coming soon.</p>
      </section>

      <section className="cta">
        <h2>Planning to build your home?</h2>
        <p>Call us or send an enquiry — we will get back to you soon.</p>
        <a href="tel:+918197050233" className="btn">Call: +91 81970 50233</a>
        <Link to="/contact" className="btn">Enquire Now</Link>
      </section>
    </div>
  );
}

export default Home;
