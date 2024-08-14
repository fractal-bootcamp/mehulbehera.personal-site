import Background from "./background";
import Timeline from "../components/timeline";
import LinksPage from "./socialspage";
import ProjectsPage, { Deck } from "./projectspage";

function AboutCard() {
  return (
    <div className=" animate-tada items-center">

      <div className="animate-fadeinbouncedown flex flex-row flex-wrap my-10 rounded-lg bg-clip-border shadow-lg md:max-w-full md:mx-40 items-center justify-items-center ">
        <img
          className="md:object-cover md:h-48 md:w-48 md:m-6"
          src="/bitmojiWave.png"
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
        <div className="animate-fadeinbouncedown flex flex-row flex-wrap mb-10">
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
                src="/bitmojiLaptop.png"
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
        <div className="relative h-[500px] flex flex-col items-center">
          <hr className="w-screen border-black" />
          <h5 className="my-6 text-3xl font-bold tracking-tight align-middle">
            My Projects:
          </h5>
          <hr className="w-screen border-black mb-20" />
          <div className="relative h-[500px] flex flex-col items-center">
            <Deck />
          </div>
        </div>
        <div className="mt-80 flex flex-col items-center">
          <hr className="w-screen border-black" />
          <h5 className="my-6 text-3xl font-bold tracking-tight align-middle">
            My Experiences:
          </h5>
          <hr className="w-screen border-black mb-10" />
          <Timeline />

          <LinksPage />
        </div>
      </div>
    </div>
  );
}

export default AboutCard;

{/* <hr className="w-screen border-black" />
<h5 className="my-6 text-3xl font-bold tracking-tight align-middle">
  Let's Talk About:
</h5>
<hr className="w-screen border-black" /> */}