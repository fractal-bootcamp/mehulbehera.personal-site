function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 bg-clip-border shadow-lg">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Mehul's Portfolio</a>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">About Me</a>
            </li>
            <li>
              <a href="projectspage">Projects</a>
            </li>
            <li>
              <a href="socialspage">Socials</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
// <hr className="md:w-screen border-black" />
