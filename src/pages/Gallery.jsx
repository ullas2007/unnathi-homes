function Gallery() {
  return (
    <div>
      <h1>Gallery</h1>
      <p>
        Sample photos for now — real photos of Unnathi Homes' work coming
        soon.
      </p>

      <section>
        <h2>House exteriors</h2>
        <a href="/home-night.jpg" target="_blank" rel="noreferrer">
          <img src="/home-night.jpg" alt="Modern home at twilight" />
        </a>
        <p>Modern home at twilight</p>
      </section>

      <section>
        <h2>Construction work</h2>
        <a href="/construction2.webp" target="_blank" rel="noreferrer">
          <img src="/construction2.webp" alt="House under construction at dusk" />
        </a>
        <p>House under construction</p>
      </section>

      <section>
        <h2>Interiors</h2>
        <a href="/interior1.jpg" target="_blank" rel="noreferrer">
          <img src="/interior1.jpg" alt="Living room with glass staircase" />
        </a>
        <p>Living room with glass staircase</p>
        <a href="/interior2.jpg" target="_blank" rel="noreferrer">
          <img src="/interior2.jpg" alt="Luxury living room" />
        </a>
        <p>Luxury living room</p>
      </section>
    </div>
  );
}

export default Gallery;
