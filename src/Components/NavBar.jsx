import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo (2).png";
import useAuth from "../Hooks/useAuth";

const NavBar = () => {
  const{user, logOut}=useAuth()
  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#ff6347]" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#ff6347]" : "")}
          to="/addFood"
        >
          Add Food
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#ff6347]" : "")}
          to="/myFood"
        >
          Manage My Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#ff6347]" : "")}
          to="/availableFood"
        >
          Available Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#ff6347]" : "")}
          to="/request"
        >
          My Food Request
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex relative items-center">
          <img className="lg:w-24 w-16" src={logo} alt="" />
          <a className=" lg:text-3xl text-xl absolute lg:left-20 left-12 font-semibold bg-gradient-to-r from-[#ff6347] via-[#ff6347] to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
            CareKitchen
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-7 menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-44"
            >
              <li>
                <Link to='/profile' className="justify-between">Profile</Link>
              </li>

              <li>
                <button onClick={() => logOut()}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <Link
              to="/register"
              className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-[#ff6347] active:shadow-none shadow-lg bg-gradient-to-tr from-[#ff6347] to-[#ff6347] border-[#ff6347] text-white"
            >
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
              <span className="relative">Register </span>
            </Link>
            <Link
              to="/login"
              className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-[#ff6347] active:shadow-none shadow-lg bg-gradient-to-tr from-[#ff6347] to-[#ff6347] border-[#ff6347] text-white"
            >
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
              <span className="relative">Login</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
