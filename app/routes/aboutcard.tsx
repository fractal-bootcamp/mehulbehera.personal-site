function AboutCard() {
  return (
    <div className="items-center">
      <div className="relative max-w-xl mx-auto mt-20 items-center">
        <img
          className="h-96 md:w-full md:max-w-full md:object-fill md:rounded-lg"
          src="https://wallpapergod.com/images/hd/widescreen-1920X1080-wallpaper-qa91zekh1cl86k1k.jpeg"
          alt="Random image"
        />

        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">Welcome</h2>
        </div>
      </div>
      <div className="flex flex-row flex-wrap my-10 rounded-lg bg-clip-border shadow-lg max-w-full mx-40 items-center justify-items-center ">
        <img
          className="md:object-cover md:h-48 md:w-48 md:rounded-full md:m-6"
          src="/ProfilePic.png"
          alt=""
        />
        <div className="flex class flex-col p-4 leading-normal">
          <br />
          <h5 className="mb-2 text-3xl font-bold tracking-tight">
            Hi, I'm Mehul!
          </h5>
          <div className="flex justify-start justify-items-start">
            <p className="mb-3 font-normal text-lg">
              Welcome to my portfolio. Here you'll find my projects, info about
              me, and links to connect with me.
            </p>
          </div>
          <br />
        </div>
      </div>
      <div className="h-screen flex flex-col items-center ">
        <hr className="w-screen border-black" />
        <h5 className="my-6 text-3xl font-bold tracking-tight align-middle">
          My Journey:
        </h5>
        <hr className="w-screen border-black" />
        <div className="flex flex-row flex-wrap">
          <div className="relative flex mx-6 flex-col my-6  shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative mx-4 mt-4  rounded-xl h-100">
              <img
                src="https://vectorflags.s3.amazonaws.com/flags/us-md-circle-01.png"
                alt="profile-picture"
                className="rounded-full"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className=" mb-2 font-sans text-2xl font-semibold ">
                Growing Up
              </h4>
              <p className="  font-sans">I grew up in Maryland</p>
            </div>
          </div>
          <div className="relative mx-6 flex flex-col my-6   bg-clip-border shadow-lg rounded-xl w-96">
            <div className="relative mx-4 mt-4 rounded-xl h-100">
              <img
                src="https://thermtide.com/wp-content/uploads/2023/03/Untitled103_20230316184820.png"
                alt="profile-picture"
                className="rounded-full"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className=" mb-2 font-sans text-2xl font-semibold ">
                Education
              </h4>
              <p className=" font-sans">
                Completed my Computer Science Undegrad at UMD
              </p>
            </div>
          </div>
          <div className="relative mx-6 flex flex-col my-6  shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative mx-4 mt-4  rounded-xl h-100">
              <img
                src="https://img.freepik.com/free-photo/view-3d-man-using-laptop_23-2150709796.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718236800&semt=ais_user"
                alt="profile-picture"
                className="rounded-full"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className=" mb-2 font-sans text-2xl font-semibold ">
                Software Engineer
              </h4>
              <p className="font-sans">Now I build software.</p>
            </div>
          </div>
        </div>

        <hr className="w-screen border-black" />
        <h5 className="my-6 text-3xl font-bold tracking-tight align-middle">
          Let's Talk About:
        </h5>
        <hr className="w-screen border-black" />

        <div className="grid mb-8    rounded-lg   md:mb-12 md:grid-cols-2 gap-7 p-8">
          <figure className="flex flex-col items-center justify-center p-8 text-center shadow-md bg-clip-border rounded-lg  ">
            <blockquote className="max-w-2xl mx-auto mb-4  lg:mb-8 ">
              <h3 className="text-lg font-semibold ">Travelling</h3>
              <p className="my-4">Traveling Desc/Img</p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center shadow-md bg-clip-border  md:rounded-lg">
            <blockquote className="max-w-2xl mx-auto mb-4  lg:mb-8 ">
              <h3 className="text-lg font-semibold ">Emerging Tech</h3>
              <p className="my-4">I like cool new tech like AI</p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center  shadow-md bg-clip-border  md:rounded-lg ">
            <blockquote className="max-w-2xl mx-auto mb-4  lg:mb-8 ">
              <h3 className="text-lg font-semibold ">Sports</h3>
              <p className="my-4">Sports desc and img</p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center   shadow-md bg-clip-border md:rounded-lg">
            <blockquote className="max-w-2xl mx-auto mb-4  lg:mb-8 ">
              <h3 className="text-lg font-semibold  ">Video games</h3>
              <p className="my-4">Video games</p>
            </blockquote>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
