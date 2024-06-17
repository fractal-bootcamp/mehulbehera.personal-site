import Navbar from "./navigation";
import LinkedinCard from "./SocialCards/linkedincard";
import GithubCard from "./SocialCards/githubcard";
import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import shuffle from "lodash.shuffle";

const cardData = [
  { component: <LinkedinCard />, height: 96 },
  { component: <GithubCard />, height: 96 },
];

export default function About() {
  const [rows, setRows] = useState(cardData);

  useEffect(() => {
    const interval = setInterval(() => setRows(shuffle), 800);
    return () => clearInterval(interval);
  }, []);

  let height = 0;
  const transitions = useTransition(
    rows.map((data) => ({ ...data, y: (height += data.height) - data.height })),
    {
      key: (item) => item.component.type.name,
      from: { height: 0, opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y, height }) => ({ y, height, opacity: 1 }),
      update: ({ y, height }) => ({ y, height }),
    }
  );

  return (
    <>
      <div>
        <Navbar />
        <div className="animate-fadeinbouncedown grid mb-8 rounded-lg md:mb-12 md:grid-cols-1 gap-7 p-8">
          {transitions((style, item) => (
            <animated.div className="" style={{ ...style }}>
              {item.component}
            </animated.div>
          ))}
        </div>
      </div>
    </>
  );
}
