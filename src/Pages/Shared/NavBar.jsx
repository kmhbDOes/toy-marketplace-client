import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="mx-60">
        {/* Navbar */}
        <div className="flex justify-center gap-x-8 items-center text-green-600 py-8 font-semibold text-xl">
          <div>
            <div className="hidden md:flex justify-around gap-x-5 ">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
              <NavLink
                to="/all-toys"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                All Toys
              </NavLink>
              {user ? (
                <NavLink
                  to="/my-toys"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  My Toys
                </NavLink>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="hidden md:flex justify-around gap-x-3 text-xl">
            <Link to="/" className="text-2xl md:text-4xl font-bold ">
              <img
                className="w-36 h-26"
                src="https://i.ibb.co/M94vpk0/logo-no-background.png"
                alt=""
              />
            </Link>
          </div>
          <div className="hidden md:flex justify-around  gap-x-5 ">
            {user ? (
              <NavLink
                to="/add-toy"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Add Toy
              </NavLink>
            ) : (
              ""
            )}
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
            <div className="hidden md:flex ">
              {user ? (
                <div className="flex justify-center gap-x-4 mx-4 items-center">
                  <div>
                    {user.photoURL ? (
                      <img
                        className="w-10 h-10 rounded-full hover:opacity-30"
                        src={user.photoURL}
                        title={user.displayName}
                        alt="img"
                      />
                    ) : (
                      "photo"
                    )}
                  </div>
                  <div>
                    <button className="btn-rec" onClick={handleLogOut}>
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <Link to="/login">
                  <button className="btn-rec">Login</button>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Nav */}
          <div className="lg:hidden ml-36">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute z-10 top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Toy City"
                        title="Toy City"
                        className="inline-flex items-center"
                      >
                        <img
                          className="rounded-lg w-36"
                          src="https://i.ibb.co/M94vpk0/logo-no-background.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="Home"
                          title="Home"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          onClick={closeMenu}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/all-toys"
                          aria-label="All Toys"
                          title="All Toys"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          onClick={closeMenu}
                        >
                          All Toys
                        </Link>
                      </li>
                      <li>
                        {user ? (
                          <Link
                            to="/my-toys"
                            aria-label="Home"
                            title="Home"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            onClick={closeMenu}
                          >
                            My Toys
                          </Link>
                        ) : (
                          ""
                        )}
                      </li>
                      <li>
                        {user ? (
                          <Link
                            to="/add-toy"
                            aria-label="add a toy"
                            title="Add a toy"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            onClick={closeMenu}
                          >
                            Add a toy
                          </Link>
                        ) : (
                          ""
                        )}
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          aria-label="Blog"
                          title="Blog"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          onClick={closeMenu}
                        >
                          Blog
                        </Link>
                      </li>

                      <li>
                        {user ? (
                          <div className="flex justify-center gap-x-4 mx-4 items-center">
                            <div>
                              {user.photoURL ? (
                                <img
                                  className="w-10 h-10 rounded-full hover:opacity-30"
                                  src={user.photoURL}
                                  title={user.displayName}
                                  alt="img"
                                />
                              ) : (
                                "Image Unavailable"
                              )}
                            </div>
                            <div>
                              <button
                                className="btn-rec"
                                onClick={handleLogOut}
                              >
                                Logout
                              </button>
                            </div>
                          </div>
                        ) : (
                          <Link to="/login">
                            <button className="btn-rec">Login</button>
                          </Link>
                        )}
                      </li>

                      {/* Lists ends here */}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <img
        className="inline-block md:hidden rounded-lg my-4 mx-auto"
        src="https://i.ibb.co/M94vpk0/logo-no-background.png"
        alt=""
      />
    </>
  );
};

export default NavBar;
