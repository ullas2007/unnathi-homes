import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const STATUSES = ["New", "Contacted", "Quoted"];

function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    loadEnquiries();
  }, [user]);

  async function loadEnquiries() {
    setLoading(true);
    setError("");
    const { data, error } = await supabase.from("enquiries").select("*");
    setLoading(false);
    if (error) {
      setError("Could not load enquiries: " + error.message);
      return;
    }
    setEnquiries((data || []).slice().reverse());
  }

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    if (error) setError("Login failed: " + error.message);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
  }

  async function setStatus(row, status) {
    setNotice("");
    if (!row.id) {
      setNotice("This enquiry has no ID yet. Run the setup SQL in Supabase (add id and status columns to the enquiries table) to enable status updates.");
      return;
    }
    const { error } = await supabase.from("enquiries").update({ status }).eq("id", row.id);
    if (error) {
      setNotice("Could not update status: " + error.message + ". The enquiries table may still need the id and status columns — run the setup SQL in Supabase.");
      return;
    }
    setEnquiries((list) => list.map((r) => (r.id === row.id ? { ...r, status } : r)));
  }

  if (!user) {
    return (
      <div>
        <h1>Builder Login</h1>
        <p>This page is only for Unnathi Homes. Log in to see enquiries.</p>
        <form onSubmit={handleLogin}>
          <label>
            Email
            <input type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Password
            <input type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit">Log In</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1>Enquiries</h1>
      <p>Logged in as {user.email}</p>
      <p>
        <button type="button" onClick={handleLogout}>Log Out</button>{" "}
        <button type="button" onClick={loadEnquiries}>Refresh</button>
      </p>
      {notice && <p>{notice}</p>}
      {loading && <p>Loading enquiries...</p>}
      {error && <p>{error}</p>}
      {!loading && enquiries.length === 0 && <p>No enquiries yet.</p>}
      {enquiries.map((row, i) => (
        <article key={row.id || i}>
          <h3>{row.name || "No name"}</h3>
          <p>
            <a href={`tel:${row.phone}`}>{row.phone || "No phone"}</a>
            {row.place ? ` - ${row.place}` : ""}
          </p>
          {row.type ? <p>Type: {row.type}</p> : null}
          {row.message ? <p>{row.message}</p> : null}
          <p>
            Status: <strong>{row.status || "New"}</strong>
          </p>
          <p>
            {STATUSES.map((s) => (
              <button key={s} type="button" disabled={(row.status || "New") === s} onClick={() => setStatus(row, s)}>
                {s}
              </button>
            ))}
          </p>
        </article>
      ))}
    </div>
  );
}

export default Admin;
