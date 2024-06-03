import Navbar from "./navigation";
import LinkedinCard from "./SocialCards/linkedincard";
import GithubCard from "./SocialCards/githubcard";
import { Carousel } from "@material-tailwind/react";

const projectData = [
  {
    name: "Chess",
    imgsrc: "/chess.png",
    description: "chess",
    site: "link",
  },
  {
    name: "Connect 4",
    imgsrc: "/connect4.png",
    description: "description2",
    site: "link2",
  },
  {
    name: "TicTacToe",
    imgsrc: "/tictactoe.png",
    description: "description3",
    site: "link3",
  },
  {
    name: "FlappyBird",
    imgsrc: "/flappybird.png",
    description: "description4",
    site: "link4",
  },
  {
    name: "Tetris",
    imgsrc: "/tetris.png",
    description: "description5",
    site: "link5",
  },
];

///MAKE BUTTON GO To Link

type ProjectProps = {
  name: string;
  imgsrc: string;
  description: string;
  site: string;
};

const Project = ({ name, imgsrc, description, site }: ProjectProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={imgsrc} alt="img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <a href={site}>
            <button className="btn btn-primary">View</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div>
      <Navbar />

      <div className="carousel carousel-center max-w-7xl p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item">
          {projectData.map((project) => (
            <Project
              name={project.name}
              imgsrc={project.imgsrc}
              description={project.description}
              site={project.site}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
