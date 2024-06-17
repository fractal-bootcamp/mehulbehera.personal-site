function TicTacToeCard() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="https://media.istockphoto.com/id/1365567894/vector/hand-drawn-vector-tic-tac-toe-game-noughts-and-crosses-doodle-sketch.jpg?s=612x612&w=0&k=20&c=pSs72urXBp6V8pnXvuJIfX3krtUoFhHaX6fG2g1PxUQ=" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">TicTacToe</h2>
        <p>
          This is my TicTacToe Project. Its built using react, tailwind, and
          expressJS. You can against other users or against an AI made using the
          minimax algorithm
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>
  );
}

export default TicTacToeCard;
