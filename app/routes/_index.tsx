import type { MetaFunction } from "@remix-run/node";
//import logo from 'ProfilePic.png'; 

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const Header = () => {

  return(

    <div>

      <p>
        Hello this is Mehul's Site.<br/>

        <a href="about"> About Page </a><br/>
        <a href="link"> Links to Socials </a>
      </p>
      <img src = "/ProfilePic.png" alt="logo" style ={{height:100, width: 100}}/>



    </div>
    

  )

};




export default function Index() {
  return (

    <Header/>

  );
}
