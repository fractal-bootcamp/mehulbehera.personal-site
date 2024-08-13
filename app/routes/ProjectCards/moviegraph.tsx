function MovieGraphCard() {
  return (
    <a href="https://forge-charactergraph.netlify.app/" className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://www.researchgate.net/publication/247691180/figure/fig2/AS:392825876303884@1470668395648/a-Graph-with-n-nodes-where-two-star-coupled-networks-are-connected-by-one-edge-through.png"
          alt="Movie Graph"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Movie Graph</h2>
        <p>
          This is a movie graph project that I built using React and
          TailwindCSS. It uses forge-ml on the backend to generate a graph of
          movie characters and their relationships by prompting ChatGPT.
        </p>

      </div>
    </a>
  );
}

export default MovieGraphCard;
