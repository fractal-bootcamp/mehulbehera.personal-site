function GithubCard() {
  return (
    <a
      href="https://github.com/mbehera32"
      className="hover:animate-wiggle flex flex-row items-center rounded-lg shadow-lg w-96 h-32"
    >
      <img
        className="object-cover h-full w-32 rounded-s-lg"
        src="/github.png"
        alt=""
      />
      <div className="flex flex-col justify-center p-4 leading-normal h-full">
        <h5 className="text-xl font-bold tracking-tight">
          Github Profile
        </h5>
      </div>
    </a>
  );
}

export default GithubCard;