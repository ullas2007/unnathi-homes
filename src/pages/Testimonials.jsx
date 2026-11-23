import { Link } from "react-router-dom";

function Testimonials() {
  return (
    <div>
      <h1>Testimonials</h1>

      <div className="reviews">
        <article className="review-card">
          <p className="stars">\u2605\u2605\u2605\u2605\u2605</p>
          <p>
            "Unnathi Homes built our G+1 house from foundation to finishing.
            The work was clean, the team was polite, and they finished on
            time."
          </p>
          <p className="reviewer">\u2014 Prakash, Hassan</p>
        </article>

        <article className="review-card">
          <p className="stars">\u2605\u2605\u2605\u2605\u2605</p>
          <p>
            "They explained every stage clearly and used good quality
            materials. We are happy with our new home."
          </p>
          <p className="reviewer">\u2014 Saraswathi, Bengaluru</p>
        </article>

        <article className="review-card">
          <p className="stars">\u2605\u2605\u2605\u2605\u2605</p>
          <p>
            "From plan to handover, everything was transparent. No hidden
            costs, and the finishing is very good."
          </p>
          <p className="reviewer">\u2014 Mahantesh, Tiptur</p>
        </article>
      </div>

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
