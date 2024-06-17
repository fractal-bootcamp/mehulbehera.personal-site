function ChatBotCard() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://nordvpn.com/wp-content/uploads/blog-featured-what-is-chatbot.svg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Chatbot Project</h2>
        <p>This is my chatbutton project</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>
  );
}

export default ChatBotCard;
