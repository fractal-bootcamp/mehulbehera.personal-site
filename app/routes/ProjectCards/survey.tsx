function SurveyCard() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://cezannehr.com/wp-content/uploads/2022/05/Pulse-survey.png"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Survey</h2>
        <p>
          This is my survey project. Its built using React, ExpressJS, and
          Prisma
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>
  );
}

export default SurveyCard;
