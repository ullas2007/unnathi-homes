import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Ballpark per-sq-ft rates (Rs). Standard matches Unnathi Homes' current
// agreement rate of about Rs. 2,030 per sq ft. Anna should confirm these
// tiers before the site is handed over.
const RATES = {
  Basic: 1650,
  Standard: 2050,
  Premium: 2550,
};

const FLOORS = { "G (Ground only)": 1, "G+1": 2, "G+2": 3 };

function parsePlot(input) {
  const t = input.trim().toLowerCase().replace(/\s+/g, "");
  if (t === "") return 0;
  if (t.includes("x")) {
    const parts = t.split("x").map(Number);
    if (parts.length === 2 && parts[0] > 0 && parts[1] > 0) return parts[0] * parts[1];
    return 0;
  }
  const n = Number(t);
  return n > 0 ? n : 0;
}

function inr(n) {
  if (n >= 10000000) return "Rs. " + (n / 10000000).toFixed(2) + " crore";
  return "Rs. " + (n / 100000).toFixed(1) + " lakh";
}

function CostEstimator() {
  const [plot, setPlot] = useState("");
  const [floorKey, setFloorKey] = useState("G+1");
  const [tier, setTier] = useState("Standard");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleCalculate(e) {
    e.preventDefault();
    setError("");
    const plotSqft = parsePlot(plot);
    if (plotSqft <= 0) {
      setError("Please enter a plot size, e.g. 1200 or 30x40.");
      setResult(null);
      return;
    }
    const floors = FLOORS[floorKey];
    const builtUp = Math.round(plotSqft * floors * 0.85);
    const rate = RATES[tier];
    const base = builtUp * rate;
    const low = Math.round(base * 0.95);
    const high = Math.round(base * 1.05);
    setResult({ plotSqft, floors, builtUp, rate, low, high });
  }

  function handleQuote() {
    if (!result) return;
    const type = floorKey === "G+1" ? "G+1 home" : "";
    const message =
      `Cost estimate (ballpark): ${inr(result.low)} - ${inr(result.high)}` +
      ` | Plot: ${result.plotSqft} sq.ft | Floors: ${floorKey} | Package: ${tier}` +
      ` | Built-up area: about ${result.builtUp.toLocaleString("en-IN")} sq.ft @ Rs. ${result.rate.toLocaleString("en-IN")} per sq.ft.`;
    navigate("/contact", { state: { plotSize: String(result.plotSqft) + " sq.ft", type, message } });
  }

  return (
    <section>
      <p className="eyebrow">Cost Estimator</p>
      <h2>How much will your home cost?</h2>
      <p>
        Enter your plot size, floors and package to see a ballpark cost. This
        is an indicative range only — the exact quote depends on your plot,
        design and materials.
      </p>
      <form onSubmit={handleCalculate}>
        <label>
          Plot size (sq.ft)
          <input type="text" autoComplete="off" value={plot} onChange={(e) => setPlot(e.target.value)} placeholder="e.g. 1200 or 30x40" />
        </label>
        <label>
          Number of floors
          <select value={floorKey} onChange={(e) => setFloorKey(e.target.value)}>
            {Object.keys(FLOORS).map((k) => (
              <option key={k} value={k}>{k}</option>
            ))}
          </select>
        </label>
        <label>
          Package
          <select value={tier} onChange={(e) => setTier(e.target.value)}>
            {Object.keys(RATES).map((k) => (
              <option key={k} value={k}>{k} — Rs. {RATES[k].toLocaleString("en-IN")} per sq.ft</option>
            ))}
          </select>
        </label>
        <button type="submit">Calculate Cost</button>
        {error && <p>{error}</p>}
      </form>
      {result && (
        <div>
          <p>
            <strong>Ballpark cost: {inr(result.low)} - {inr(result.high)}</strong>
          </p>
          <p>
            Built-up area about {result.builtUp.toLocaleString("en-IN")} sq.ft
            ({result.plotSqft.toLocaleString("en-IN")} sq.ft plot x {result.floors} floor{result.floors > 1 ? "s" : ""} x {tier} package @ Rs. {result.rate.toLocaleString("en-IN")} per sq.ft).
          </p>
          <p>
            <button type="button" className="btn" onClick={handleQuote}>Get Exact Quote</button>
          </p>
        </div>
      )}
    </section>
  );
}

export default CostEstimator;
