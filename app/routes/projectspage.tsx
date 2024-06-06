import Navbar from "./navigation";
import LinkedinCard from "./SocialCards/linkedincard";
import GithubCard from "./SocialCards/githubcard";
import { Carousel, Typography, Button } from "@material-tailwind/react";

const projectData = [
  {
    name: "Chess",
    imgsrc: "/chess.png",
    description: "chess",
    site: "link",
    id: "1",
  },
  {
    name: "Connect 4",
    imgsrc: "/connect4.png",
    description: "description2",
    site: "link2",
    id: "2",
  },
  {
    name: "TicTacToe",
    imgsrc: "/tictactoe.png",
    description: "description3",
    site: "link3",
    id: "3",
  },
  {
    name: "FlappyBird",
    imgsrc: "/flappybird.png",
    description: "description4",
    site: "link4",
    id: "4",
  },
  {
    name: "Tetris",
    imgsrc: "/tetris.png",
    description: "description5",
    site: "link5",
    id: "5",
  },
];

///MAKE BUTTON GO To Link

type ProjectProps = {
  name: string;
  imgsrc: string;
  description: string;
  site: string;
  id: string;
};
//"https://images4.alphacoders.com/102/102698.jpg"
const Project = ({ name, imgsrc, description, site, id }: ProjectProps) => {
  return (
    <div className="carousel-item rounded-xl">
      <div className="relative h-full w-full">
        <img src={imgsrc} alt="image" className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <p color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              {name}
            </p>
            <p color="white" className="mb-12 opacity-80">
              {description}
            </p>
            <div className="flex justify-center gap-2">
              <button className="btn">view</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500">
      <Navbar />

      <div className="carousel w-full">
        <div className="carousel-item">
          {projectData.map((project) => (
            <Project
              name={project.name}
              imgsrc={project.imgsrc}
              description={project.description}
              site={project.site}
              id={project.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
