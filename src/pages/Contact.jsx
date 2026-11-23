import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "../supabaseClient";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("");
  const [type, setType] = useState("");
  const [plotSize, setPlotSize] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [error, setError] = useState("");
  const [saveFailed, setSaveFailed] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const location = useLocation();

  // Pre-fill from the Cost Estimator (Services page) via navigation state.
  useEffect(() => {
    const s = location.state;
    if (!s) return;
    if (s.plotSize) setPlotSize(s.plotSize);
    if (s.type) setType(s.type);
    if (s.message) setMessage(s.message);
  }, [location.state]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (sending) return;
    setError("");
    setSaveFailed(false);
    if (website.trim() !== "") {
      setSent(true);
      return;
    }
    if (name.trim() === "" || phone.trim() === "") {
      setError("Please enter your name and phone number.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(phone.trim())) {
      setError("Please enter a valid 10-digit Indian mobile number (starting with 6, 7, 8 or 9).");
      return;
    }
    setSending(true);
    const details = [];
    if (plotSize.trim() !== "") details.push("Plot size: " + plotSize.trim());
    if (budget.trim() !== "") details.push("Budget: " + budget.trim());
    const fullMessage = [...details, message.trim()].filter(Boolean).join(" | ");
    const { error } = await supabase.from("enquiries").insert([
      {
        name: name.trim(),
        phone: phone.trim(),
        place: place.trim(),
        type: type.trim(),
        message: fullMessage,
      },
    ]);
    setSending(false);
    if (error) {
      setError("Could not send your enquiry.");
      setSaveFailed(true);
      return;
    }
    setSent(true);
  }

  const waMessage = encodeURIComponent(
    `Hello Unnathi Homes, I just sent an enquiry on your website.\nName: ${name.trim()}\nPlace: ${place.trim() || "-"}\nHouse type: ${type.trim() || "-"}` +
      (plotSize.trim() ? `\nPlot size: ${plotSize.trim()}` : "")
  );
  const waLink = `https://wa.me/918197050233?text=${waMessage}`;

  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        Planning to build? Call us, message us on WhatsApp, or send an
        enquiry using the form below — we will get back to you soon.
      </p>

      <section>
        <h2>Reach us</h2>
        <p>
          <a href="tel:+918197050233" className="btn">Call: +91 81970 50233</a>{" "}
          <a href="https://wa.me/918197050233" className="btn btn-whatsapp">Chat on WhatsApp</a>
        </p>
        <p>
          <strong>Visit us:</strong> Unnathi Homes Architect, K R Extension,
          4th Main Road, Near Shankar Mutt, Tiptur 572201 (Plus Code: 7F7C+57)
        </p>
        <iframe
          title="Unnathi Homes location map"
          src="https://www.google.com/maps?q=Unnathi+Homes+Architect%2C+7F7C%2B57+Tiptur%2C+Karnataka%2C+India&output=embed"
          className="map-frame"
          loading="lazy"
        />
        <p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Unnathi+Homes+Architect%2C+7F7C%2B57+Tiptur%2C+Karnataka"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Get Directions
          </a>
        </p>
      </section>

      <section>
        <h2>Send an enquiry</h2>
        {sent ? (
          <div>
            <p>
              Thank you. Your enquiry has been received. We will contact you
              soon.
            </p>
            <p>
              <a href={waLink} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                Send Details on WhatsApp Now
              </a>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Name *
              <input type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Phone *
              <input type="tel" autoComplete="tel" inputMode="numeric" maxLength={10} value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <label>
              Place / Location of plot
              <input type="text" autoComplete="off" value={place} onChange={(e) => setPlace(e.target.value)} />
            </label>
            <label>
              Type of requirement
              <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="">Select a type</option>
                <option value="G+1 home">G+1 home</option>
                <option value="Villa">Villa</option>
                <option value="Renovation">Renovation</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label>
              Plot size
              <input type="text" autoComplete="off" value={plotSize} onChange={(e) => setPlotSize(e.target.value)} placeholder="e.g. 30x40" />
            </label>
            <label>
              Budget range
              <input type="text" autoComplete="off" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="e.g. Rs. 30-40 lakh" />
            </label>
            <label>
              Message
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            </label>
            <div className="honeypot" aria-hidden="true">
              <label>
                Website
                <input type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
              </label>
            </div>
            <button type="submit" disabled={sending}>{sending ? "Sending..." : "Send Enquiry"}</button>
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
    </div>
  );
}

export default Contact;
