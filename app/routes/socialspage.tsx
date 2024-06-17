import Navbar from "./navigation";
import LinkedinCard from "./SocialCards/linkedincard";
import GithubCard from "./SocialCards/githubcard";

function LinksPage() {
  return (
    <div>
      <Navbar />
      <div className="grid mb-8 rounded-lg md:mb-12 md:grid-cols-3 gap-7 p-8">
        <LinkedinCard />
        <GithubCard />
      </div>
    </div>
  );
}

export default LinksPage;
