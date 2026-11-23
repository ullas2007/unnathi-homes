import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

function Testimonials() {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [feedback, setFeedback] = useState("");
  const [website, setWebsite] = useState("");
  const [error, setError] = useState("");
  const [saveFailed, setSaveFailed] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (sending) return;
    setError("");
    setSaveFailed(false);
    if (website.trim() !== "") {
      setSent(true);
      return;
    }
    if (name.trim() === "" || feedback.trim() === "") {
      setError("Please enter your name and your feedback.");
      return;
    }
    setSending(true);
    const { error } = await supabase.from("enquiries").insert([
      {
        name: name.trim(),
        phone: "",
        place: place.trim(),
        type: "Feedback",
        message: feedback.trim(),
      },
    ]);
    setSending(false);
    if (error) {
      setError("Could not send your feedback.");
      setSaveFailed(true);
      return;
    }
    setSent(true);
  }

  return (
    <div>
      <h1>Testimonials</h1>

      <div className="reviews">
        <article className="review-card">
          <p>
            "Unnathi Homes built our G+1 house from foundation to finishing.
            The work was clean, the team was polite, and they finished on
            time."
          </p>
          <p className="reviewer">Prakash, Hassan</p>
        </article>

        <article className="review-card">
          <p>
            "They explained every stage clearly and used good quality
            materials. We are happy with our new home."
          </p>
          <p className="reviewer">Saraswathi, Bengaluru</p>
        </article>

        <article className="review-card">
          <p>
            "From plan to handover, everything was transparent. No hidden
            costs, and the finishing is very good."
          </p>
          <p className="reviewer">Mahantesh, Tiptur</p>
        </article>
      </div>

      <p>
        If you are building your home with us, you can share your experience
        after your home is complete.
      </p>

      <section>
        <h2>Share your feedback</h2>
        {sent ? (
          <p>
            Thank you. Your feedback has been received. We will contact you
            soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Name *
              <input type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Place
              <input type="text" autoComplete="off" value={place} onChange={(e) => setPlace(e.target.value)} />
            </label>
            <label>
              Your feedback *
              <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
            </label>
            <div className="honeypot" aria-hidden="true">
              <label>
                Website
                <input type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
              </label>
            </div>
            <button type="submit" disabled={sending}>{sending ? "Sending..." : "Send Feedback"}</button>
            {error && <p>{error}</p>}
            {saveFailed && (
              <p>
                Please call <a href="tel:+918197050233">+91 81970 50233</a> or{" "}
                <a href="https://wa.me/918197050233">message us on WhatsApp</a> instead.
              </p>
            )}
          </form>
        )}
      </section>

      <section>
        <h2>Planning to build your home?</h2>
        <p>Call us and tell us about your plot.</p>
        <a href="tel:+918197050233" className="btn">Call: +91 81970 50233</a>
        <Link to="/contact" className="btn">Get a Free Quote</Link>
      </section>
    </div>
  );
}

export default Testimonials;
