import type { MetaFunction } from "@remix-run/node";
//import logo from 'ProfilePic.png';
import Navbar from "./navigation";
import AboutCard from "./aboutcard";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Navbar />
      <AboutCard />
    </div>
  );
}
