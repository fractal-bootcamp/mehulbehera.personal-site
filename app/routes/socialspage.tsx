import Navbar from "./navigation";
import LinkedinCard from "./SocialCards/linkedincard";
import GithubCard from "./SocialCards/githubcard";
import TwitterCard from "./SocialCards/twitter";

function LinksPage() {
  return (
    <div>
      <Navbar />
      <div className="grid mb-8 rounded-lg md:mb-12 md:grid-cols-3 gap-7 p-8">
        <LinkedinCard />
        <GithubCard />
        <TwitterCard />
      </div>
    </div>
  );
}

export default LinksPage;
