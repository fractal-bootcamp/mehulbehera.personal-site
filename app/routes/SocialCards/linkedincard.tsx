function LinkedinCard() {
  return (
    <a
      href="https://www.linkedin.com/in/mehul-behera/"
      className="  hover:animate-wiggle flex flex-col items-center  rounded-lg shadow-lg md:flex-row md:max-w-xl "
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="/linkedin.png"
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight ">
          Linkedin Profile
        </h5>
      </div>
    </a>
  );
}

export default LinkedinCard;
