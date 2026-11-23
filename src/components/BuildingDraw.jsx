// Animated navy line drawing of apartment buildings (DivyaSree-style).
// Each stroke draws itself in turn, using stroke-dashoffset animation.
const paths = [
  // Ground line
  { d: "M 60 470 H 840", delay: "0s" },
  // Left building (shorter)
  { d: "M 120 470 V 280 H 260 V 470", delay: "0.2s" },
  { d: "M 120 370 H 260", delay: "0.6s" },
  { d: "M 150 310 H 180 V 340 H 150 Z", delay: "1s" },
  { d: "M 200 310 H 230 V 340 H 200 Z", delay: "1.1s" },
  { d: "M 150 400 H 180 V 430 H 150 Z", delay: "1.2s" },
  { d: "M 200 400 H 230 V 430 H 200 Z", delay: "1.3s" },
  // Centre building (tall, main)
  { d: "M 350 470 V 160 H 550 V 470", delay: "0.4s" },
  { d: "M 430 160 V 120 H 470 V 160", delay: "0.8s" },
  { d: "M 350 270 H 550", delay: "1s" },
  { d: "M 350 370 H 550", delay: "1.2s" },
  { d: "M 380 190 H 420 V 230 H 380 Z", delay: "1.4s" },
  { d: "M 480 190 H 520 V 230 H 480 Z", delay: "1.5s" },
  { d: "M 380 300 H 420 V 340 H 380 Z", delay: "1.6s" },
  { d: "M 480 300 H 520 V 340 H 480 Z", delay: "1.7s" },
  { d: "M 380 400 H 420 V 440 H 380 Z", delay: "1.8s" },
  { d: "M 480 400 H 520 V 440 H 480 Z", delay: "1.9s" },
  { d: "M 445 470 V 415 H 475 V 470", delay: "2s" },
  // Right building (medium)
  { d: "M 620 470 V 230 H 780 V 470", delay: "0.6s" },
  { d: "M 620 320 H 780", delay: "1.2s" },
  { d: "M 620 400 H 780", delay: "1.4s" },
  { d: "M 650 260 H 680 V 290 H 650 Z", delay: "1.6s" },
  { d: "M 720 260 H 750 V 290 H 720 Z", delay: "1.7s" },
  { d: "M 650 350 H 680 V 380 H 650 Z", delay: "1.8s" },
  { d: "M 720 350 H 750 V 380 H 720 Z", delay: "1.9s" },
];

function BuildingDraw() {
  return (
    <svg
      viewBox="0 0 900 500"
      className="building-draw"
      role="img"
      aria-label="Line drawing of apartment buildings being drawn"
    >
      {paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          pathLength="1"
          className="draw"
          style={{ animationDelay: p.delay }}
        />
      ))}
    </svg>
  );
}

export default BuildingDraw;
