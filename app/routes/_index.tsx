import type { MetaFunction } from "@remix-run/node";
//import logo from 'ProfilePic.png';
import Navbar from "./navigation";
import AboutCard from "./aboutcard";

export const meta: MetaFunction = () => {
  return [
    { title: "Mehul's Portfolio" },
    { name: "description", content: "Welcome to my portfolio!" },
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
