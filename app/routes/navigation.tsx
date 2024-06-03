function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Mehul's Portfolio</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="aboutpage">About Me</a>
          </li>
          <li>
            <a href="projectspage">Projects</a>
          </li>
          <li>
            <a href="socialspage">Socials</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}

export default Navbar;
