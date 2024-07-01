function GrooviverseCard() {
  return (
    <a
      href="https://grooviverse.onrender.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="card w-96 bg-base-100 shadow-xl"
    >
      <figure>
        <img src="https://img.freepik.com/free-photo/glowing-spaceship-orbits-planet-starry-galaxy-generated-by-ai_188544-9655.jpg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Grooviverse</h2>
        <p>
          Generate your own Universe with AI. The Front end is built with Vite+React, the backend with Express, and Universe metrics are generated with Instructor and ChatGPT.
        </p>
      </div>
    </a>
  );
}

export default GrooviverseCard;
