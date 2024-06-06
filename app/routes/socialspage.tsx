import Navbar from "./navigation";
import LinkedinCard from "./SocialCards/linkedincard";
import GithubCard from "./SocialCards/githubcard";

function LinksPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col  justify-content:center ">
        <LinkedinCard />
        <GithubCard />
      </div>
    </div>
  );
}

export default LinksPage;
