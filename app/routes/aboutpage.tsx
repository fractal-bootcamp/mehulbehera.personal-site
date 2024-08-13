import Navbar from "./navigation";
import LinkedinCard from "./SocialCards/linkedincard";
import GithubCard from "./SocialCards/githubcard";
import SurveyCard from "./ProjectCards/moviegraph";
import ChatBotCard from "./ProjectCards/artproject";
import TicTacToeCard from "./ProjectCards/tictactoe";
import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import shuffle from "lodash.shuffle";
import { Frame, useMotionValue, useTransform, useAnimation } from "framer";

const cardData = [
  { component: <LinkedinCard />, height: 96 },
  { component: <GithubCard />, height: 96 },
  { component: <SurveyCard />, height: 96 },
  { component: <ChatBotCard />, height: 96 },
  { component: <TicTacToeCard />, height: 96 },
];

// export default function About() {
//   const [rows, setRows] = useState(cardData);

//   useEffect(() => {
//     const interval = setInterval(() => setRows(shuffle), 3000);
//     return () => clearInterval(interval);
//   }, []);

//   let height = 0;
//   const transitions = useTransition(
//     rows.map((data) => ({ ...data, y: (height += data.height) - data.height })),
//     {
//       key: (item) => item.component.type.name,
//       from: { height: 0, opacity: 0 },
//       leave: { height: 0, opacity: 0 },
//       enter: ({ y, height }) => ({ y, height, opacity: 1 }),
//       update: ({ y, height }) => ({ y, height }),
//     }
//   );

//   return (
//     <>
//       <div>
//         <Navbar />
//         <div className="animate-fadeinbouncedown grid mb-8 rounded-lg md:mb-12 md:grid-cols-3 md:grid-rows-2 gap-7 p-8">
//           {transitions((style, item) => (
//             <animated.div className="" style={{ ...style }}>
//               {item.component}
//             </animated.div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

export default function About() {
  //use state to contain rows
  const [rows, setRows] = useState(cardData);

  //use effect to trigger rerender every second
  useEffect(() => {
    const interval = setInterval(() => setRows(shuffle), 1500);
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
        <div className="flex flex-col justify-items-center justify-center items-center">
          <div className="animate-fadeinbouncedown grid mb-8 rounded-lg md:mb-12 md:grid-cols-1 gap-7 p-8">
            {transitions((style, item) => (
              <animated.div className="" style={{ ...style }}>
                {item.component}
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
