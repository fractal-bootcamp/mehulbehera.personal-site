function Navbar() {

  return (

    <nav className="bg-gray-900 p-4">

      <div className="container mx-auto">

        <div className="flex justify-between items-center">

          <div className="text-gray-300 font-bold text-xl">Mehul Behera's Portfolio</div>

          <div className="hidden md:flex space-x-4">

            <a href="aboutpage" className="text-gray-300 hover:text-gray-600">About Me</a>

            <a href="projectspage" className="text-gray-300 hover:text-gray-600">Project Gallery</a>

            <a href="socialspage" className="text-gray-300 hover:text-gray-600">Socials</a>

          </div>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;

