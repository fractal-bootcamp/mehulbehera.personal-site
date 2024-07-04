function ArtProjectCard() {
  return (
    <a
      href="https://aiartgen.onrender.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="card w-96 bg-base-100 shadow-xl"
    >
      <figure>
        <img src="https://bigthink.com/wp-content/uploads/2022/09/rosenberg2.jpg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Generative AI Art Project</h2>
        <p>
          This is my generative AI art project. It is built using the OpenAI
          GPT-4o model and the Dalle-E 3 model. You can generate images and
          art using the models.
        </p>
      </div>
    </a>
  );
}

export default ArtProjectCard;
