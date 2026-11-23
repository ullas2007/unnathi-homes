import { useState } from "react";
import { supabase } from "../supabaseClient";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [saveFailed, setSaveFailed] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSaveFailed(false);
    if (name.trim() === "" || phone.trim() === "") {
      setError("Please enter your name and phone number.");
      return;
    }
    if (!/^[0-9]{10}$/.test(phone.trim())) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    const { error } = await supabase.from("enquiries").insert([
      {
        name: name.trim(),
        phone: phone.trim(),
        place: place.trim(),
        type: type.trim(),
        message: message.trim(),
      },
    ]);
    if (error) {
      setError("Could not send your enquiry.");
      setSaveFailed(true);
      return;
    }
    setSent(true);
  }

  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        Call us, message us on WhatsApp, or send an enquiry using the form
        below.
      </p>

      <section>
        <h2>Reach us</h2>
        <p>Phone: <a href="tel:+918197050233">+91 81970 50233</a></p>
        <p>WhatsApp: <a href="https://wa.me/918197050233">Chat on WhatsApp</a></p>
        <p>
          Address: K R Extension, 4th Main Road, Near Shankar Mutt,
          Tiptur 572201
        </p>
      </section>

      <section>
        <h2>Send an enquiry</h2>
        {sent ? (
          <p>
            Thank you. Your enquiry has been received. We will contact you
            soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Name *
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Phone *
              <input type="text" inputMode="numeric" maxLength={10} value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <label>
              Place / Location of plot
              <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} />
            </label>
            <label>
              Type of requirement
              <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
            </label>
            <label>
              Message
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            </label>
            <button type="submit">Send Enquiry</button>
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
